<template>
  <div class="guestbook-wrapper">
    <!-- Left Image -->
    <img v-if="leftImage" :src="leftImage" alt="Left Image" class="side-image left-image" />

    <div class="guestbook-container">
      <h2>Guestbook</h2>
      <p>Leave a message before you scroll!</p>

      <br>

      <!-- Notification -->
      <transition name="fade">
        <div v-if="showNotification" class="notification">
          <p>Comment added!</p>
          <div class="image-container">
            <img :src="successGif" alt="Success Image" class="success-gif" />
          </div>
        </div>
      </transition>

      <br>

      <!-- Input Form -->
      <form @submit.prevent="submitComment" class="guestbook-form">
        <input v-model="name" placeholder="Name ..." required />
        <textarea v-model="message" placeholder="Message ..." required></textarea>
        <button type="submit" :disabled="loading">
          {{ loading ? "Submitting..." : "Post" }}
        </button>
      </form>

      <br>

      <!-- Comment List -->
      <div class="comments">
        <div v-for="comment in comments" :key="comment.id" class="comment">
          <img :src="comment.icon" class="icon" />
          <div class="comment-content">
            <strong>{{ comment.name }}</strong>
            <p>{{ comment.message }}</p>
            <span class="timestamp">{{ new Date(comment.timestamp).toLocaleString() }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Image -->
    <img v-if="rightImage" :src="rightImage" alt="Right Image" class="side-image right-image" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/js/supabase.js";

const name = ref("");
const message = ref("");
const comments = ref([]);
const loading = ref(false);
const showNotification = ref(false);

const leftImage = ref("https://res.cloudinary.com/dttx2z5da/image/upload/v1739102719/1_ufags7.png"); // Change this URL for the left image
const rightImage = ref("https://res.cloudinary.com/dttx2z5da/image/upload/v1739102719/2_smjelt.png"); // Change this URL for the right image

// Array of GIF URLs for cycling images
const successGifs = [
  "https://i.pinimg.com/736x/76/a7/d0/76a7d0487e69b63004a87e159de5460a.jpg",
  "https://i.pinimg.com/736x/77/27/1c/77271ccd4995a1d46c2aa6949f1b859e.jpg",
  "https://i.pinimg.com/736x/30/b7/83/30b7837f7d81b45a6a14cb401c866f13.jpg",
  "https://i.pinimg.com/736x/5a/2f/cc/5a2fcc2534b2be639ef81aba85feaffb.jpg",
  "https://i.pinimg.com/736x/5d/50/cc/5d50cc026c46f3c3789873d1e45c5be4.jpg"
];

const successGif = ref(successGifs[0]);

// Fetch comments on page load
onMounted(async () => {
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .order("timestamp", { ascending: false });

  if (error) {
    console.error("Fetch Error:", error);
  } else {
    comments.value = data?.map(comment => ({
      ...comment,
      icon: generateRandomIcon(comment.id)
    })) || [];
  }
});

async function submitComment() {
  if (!name.value || !message.value) return;
  loading.value = true;

  const { data, error } = await supabase
    .from("comments")
    .insert([{ name: name.value, message: message.value }])
    .select("*");

  if (error) {
    alert("Error adding comment: " + error.message);
  } else if (data.length > 0) {
    comments.value.unshift({
      id: data[0].id,
      name: data[0].name,
      message: data[0].message,
      timestamp: data[0].timestamp,
      icon: generateRandomIcon(data[0].id)
    });

    // Cycle through GIFs
    successGif.value = successGifs[Math.floor(Math.random() * successGifs.length)];

    // Show notification
    showNotification.value = true;
    setTimeout(() => (showNotification.value = false), 2000);

    name.value = "";
    message.value = "";
  }

  loading.value = false;
}

// Random Icon Generator
function generateRandomIcon(seed) {
  const baseUrl = "https://api.dicebear.com/7.x/notionists/svg?seed=";
  return `${baseUrl}${seed}`;
}
</script>

<style scoped>
/* Guestbook Wrapper */
.guestbook-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px; /* Adjust spacing between images and guestbook */
}

/* Guestbook Container */
.guestbook-container {
  max-width: 600px;
  text-align: center;
  padding: 50px 0;
  border-radius: 10px;
  background: #ffffff;
}

/* Side Images */
.side-image {
  width: 150px; /* Adjust size */
  height: auto;
  border-radius: 10px;
}
@media (max-width: 768px) {
  .side-image {
    display: none;
  }
}

.left-image {
  margin-right: 10px; /* Space between left image and guestbook */
}

.right-image {
  margin-left: 10px; /* Space between right image and guestbook */
}

/* Notification Animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.notification {
  background: none;
  color: rgb(0, 0, 0);
  padding: 10px;
  border-radius: 5px;
  width: 220px;
  margin: 10px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Form Styling */
.guestbook-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 15px;
  font-size: 1em;
}

textarea {
  height: 80px;
  resize: none;
}

button {
  padding: 10px 20px;
  width: fit-content;
  min-width: 100px;
  align-self: center;
  border-radius: 20px;
  border: 1px solid black;
  cursor: pointer;
  background: white;
  transition: background 0.3s;
}

button:hover {
  background: rgb(236, 236, 236);
}

button:disabled {
  background: rgb(209, 209, 209);
  cursor: not-allowed;
}

/* Comments Section */
.comments {
  margin-top: 20px;
  text-align: left;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
}

/* Comment Styling */
.comment {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  background: white;
  margin-bottom: 10px;
}

.icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.comment-content {
  flex-grow: 1;
}

.timestamp {
  font-size: 0.8em;
  color: gray;
}

/* Centering the image */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Adjusting GIF size */
.success-gif {
  width: 250px;
  height: auto;
  display: block;
  margin: 10px auto;
}

.guestbook-form input,
.guestbook-form textarea {
  font-family: 'HelveticaNeueRoman'; /* Change to your desired font */
  font-size: 16px; /* Adjust size */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
}

.guestbook-form button {
  font-family: 'HelveticaNeueRoman'; /* Ensure button matches */
}
</style>
