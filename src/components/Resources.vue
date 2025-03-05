<template>
  <div class="container">
    <div class="image-container">
      <img src="https://res.cloudinary.com/dttx2z5da/image/upload/v1740965971/filler2_qqcjxq.svg" alt="Resources Image" class="resource-image" />
    </div>
    <div class="text-container">
      <div class="feature">
        <h2>Resources</h2>
        <div class="line">
          <div class="highlight" :class="{ animate: isVisible }"></div>
        </div>
      </div>
      
      <div class="resources">
        <div class="resources-grid">
          <ul class="left-column">
            <li><a href="https://vuejs.org/" target="_blank">Vue.js</a> <span>- Framework used for frontend development</span></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML</a> <span>- Markup language for structuring web content</span></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a> <span>- Stylesheet language for web design</span></li>
            <li><a href="https://vercel.com/" target="_blank">Vercel</a> <span>- Deployment platform for frontend applications</span></li>
            <li><a href="https://github.com/" target="_blank">GitHub</a> <span>- Code hosting platform for version control</span></li>
            <li><a href="https://www.openpeeps.com/?ref=lapaninja" target="_blank">Open Peeps</a> <span>- Hand-drawn avatar illustrations</span></li>
          </ul>
          <ul class="right-column">
            <li><a href="https://www.flaticon.com/" target="_blank">Flaticons</a> <span>- Free icons for UI design</span></li>
            <li><a href="https://cloudinary.com/" target="_blank">Cloudinary</a> <span>- Image and video management service</span></li>
            <li>My girlfriend’s hand drawings <span>- Custom illustrations used in the project</span></li>
            <li><a href="https://www.dicebear.com/" target="_blank">Dicebear</a> <span>- Random icon generator</span></li>
            <li><a href="https://gemini.google.com/" target="_blank">Gemini</a> <span>- AI model used for assistance</span></li>
            <li><a href="https://openai.com/chatgpt" target="_blank">ChatGPT</a> <span>- AI model used for content generation</span></li>
            <li><a href="https://vercel.com/v0" target="_blank">Vercel v0</a> <span>- AI-powered UI generator</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
  const section = document.querySelector('.feature');
  if (section) {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight * 0.75) {
      isVisible.value = true;
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

// Video Controls
// const videoPlayer = ref(null);

// const playVideo = () => {
//   if (videoPlayer.value) {
//     videoPlayer.value.play();
//     videoPlayer.value.muted = false;
//   }
// };

// const pauseVideo = () => {
//   if (videoPlayer.value) {
//     videoPlayer.value.pause();
//     videoPlayer.value.muted = true;
//   }
// };
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.image-container {
  flex: 1;
  margin-left: 1px; /* Slightly move left without affecting height */
  margin-right: 50px;
}

.resource-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.text-container {
  flex: 2;
}

.feature {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 5vh;
}

h2 {
  color: #000000;
  font-family: 'Recoleta Alt SemiBold';
}

.line {
  flex: 1;
  height: 1px;
  background-color: #000;
  position: relative;
}

.highlight {
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.5s ease-in-out, transform 1s ease-in-out;
}

.highlight.animate {
  opacity: 1;
  transform: translateY(-50%) scale(1.2);
}

.resources {
  margin-top: 2rem;
}

.resources-grid {
  display: flex;
  justify-content: space-between;
  gap: 1rem; /* Adjusted to make columns closer */
}

ul {
  list-style-type: none;
  padding: 0;
}

.left-column, .right-column {
  flex: 1;
}

li {
  margin-bottom: 1rem;
}

li a {
  font-family: 'HelveticaNeueMedium'; /* Titles */
}

li span {
  font-family: 'HelveticaNeueLight';
}

a {
  color: #000;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
