<template>
    <div class="video-wrapper" :class="{ animate: isVisible }">
      <div class="video-container">
        <h2 class="credits">Special Credits</h2>
        <video 
          ref="videoPlayer"
          class="video"
          @mouseover="playVideo"
          @mouseleave="pauseVideo"
          muted
        >
          <source src="https://res.cloudinary.com/dttx2z5da/video/upload/v1741184472/3663648637773553358_f4wge0.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: "VideoSection",
    setup() {
      const isVisible = ref(false);
  
      const handleScroll = () => {
        const section = document.querySelector('.video-wrapper');
        if (section) {
          const top = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (top < windowHeight * 0.75) {
            isVisible.value = true;
          }
        }
      };
  
      const playVideo = () => {
        const video = document.querySelector('.video');
        if (video) {
          video.play();
          video.muted = false;
        }
      };
  
      const pauseVideo = () => {
        const video = document.querySelector('.video');
        if (video) {
          video.pause();
          video.muted = true;
        }
      };
  
      onMounted(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
      });
  
      return { isVisible, playVideo, pauseVideo };
    }
  };
  </script>
  
  <style scoped>
  .video-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .video-wrapper.animate {
    opacity: 1;
    transform: translateY(0);
  }
  
  .video-container {
    text-align: center;
  }
  
  .credits {
    font-family: 'Recoleta Alt SemiBold';
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #000000;
  }
  
  .video {
    width: 100%;
    max-width: 300px; /* Adjust this for resizing */
    height: auto;
    border-radius: 10px;
    /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); */
    transition: transform 0.3s ease-in-out;
  }
  
  .video:hover {
    transform: scale(1.05);
  }
  </style>
  