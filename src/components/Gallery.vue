<template>
  <div class="feature">
    <h2>Gallery</h2>
    <div class="line">
      <div class="highlight" :class="{ animate: isVisible }"></div>
    </div>
  </div>

  <!-- Collage Gallery Grid -->
  <div class="gallery-grid">
    <div 
      v-for="(image, index) in images" 
      :key="index" 
      class="gallery-item"
    >
      <img :src="image" alt="Gallery Image" class="gallery-image" />
    </div>
  </div>

  <!-- Roaming Pet -->
  <div class="pet-container">
    <img src="https://res.cloudinary.com/dttx2z5da/image/upload/v1740930520/giphy_d0unxr.gif" alt="Roaming Pet" class="pet" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);
const images = ref([
  'https://res.cloudinary.com/dttx2z5da/image/upload/v1741187283/483187722_1195511245529753_3494034333011486218_n_si4a89.png',
  'https://res.cloudinary.com/dttx2z5da/image/upload/v1741187067/482722857_525041506868979_2243923924956549639_n_hmtydo.jpg',
  'https://res.cloudinary.com/dttx2z5da/image/upload/v1740916834/71865489-728f-43d0-9fcd-384e3d1b1f87_nm6tfu.jpg',
  'https://res.cloudinary.com/dttx2z5da/image/upload/v1740916833/39980c1a-8097-47a8-a3fc-52fcb543ebf9_crnh60.jpg',
  'https://res.cloudinary.com/dttx2z5da/image/upload/v1741187522/Snapinst.app_411733863_636288111892779_1336854786700826629_n_1080_vblz0y.jpg'
]);

const handleScroll = () => {
  const section = document.querySelector('.feature');
  if (section) {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight * 0.75) isVisible.value = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});
</script>

<style scoped>
/* Header Section */
.feature {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 5vh;
}

h2 {
  color: #000;
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

/* Collage Gallery */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  padding: 20px;
}

.gallery-item {
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Ensuring images look proportional and fit well */
.gallery-image {
  width: 100%;
  aspect-ratio: 4 / 3; /* Keeps images proportional */
  object-fit: cover; /* Prevents stretching */
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

/* Roaming Pet */
.pet-container {
  position: relative;
  width: 100%;
  height: 100px; /* Increased height to accommodate larger pet */
  overflow: hidden;
  margin-top: 20px;
}

.pet {
  position: absolute;
  bottom: 0;
  right: -100px; /* Adjusted for larger pet */
  width: 100px; /* Increased pet size */
  height: auto;
  animation: roam 5s linear infinite;
}

@keyframes roam {
  0% {
    right: -100px;
  }
  100% {
    right: 100%;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}
</style>
