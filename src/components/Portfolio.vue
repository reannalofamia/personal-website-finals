<template>
    <div class="feature">
      <h2>Portfolio</h2>
      <div class="line">
        <div class="highlight" :class="{ animate: isVisible }"></div>
      </div>
    </div>
  
    <!-- Image Slider and Text Section -->
    <div class="slider-section">
      <!-- Image Slider Section -->
      <div class="slider-container">
        <!-- Thumbnail Previews on the Bottom -->
        <div class="thumbnail-container">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            alt="Thumbnail"
            class="thumbnail"
            @click="goToSlide(index)"
            :class="{ active: index === currentSlide }"
          />
        </div>
  
        <div class="slider-box">
          <!-- Transition wrapper for animation -->
          <transition name="slide-fade">
            <img :key="currentSlide" :src="images[currentSlide]" alt="Portfolio image" class="slider-image" />
          </transition>
        </div>
  
        <!-- Small Arrows below the slider -->
        <div class="arrow-container">
          <button @click="prevSlide" class="arrow-btn prev">←</button>
          <button @click="nextSlide" class="arrow-btn next">→</button>
        </div>
      </div>
  
      <!-- Text Section on the Right -->
      <div class="text-container">
        <!-- <h2>My Creative Journey</h2> -->
        <!-- <p>
Creativity has always been my passion. From 2019 to 2024, I worked as a graphic designer for Sinag Esports (2019) and Cafe Homey Flan (2021), bringing ideas to design. Though I haven’t created much art lately, my love for it never faded—it just evolved.<br>
<br>
Now, I’m exploring programming and teamwork in development. I’m currently working on the backend for my DATAMA2 finals project as part of a team. Also, I’ve designed the UI/UX for the Rams Pawtner Website in Figma, collaborating with my team to create a platform for adopting animals in Makati APC and nearby areas.<br>
<br>
Every day, I’m learning and growing—improving my skills in design, development, and problem-solving. You can connect with me on GitHub to see the projects I’ve been working on lately!<br>
<br>
This is just the beginning—more projects coming soon! 
</p> -->
<br>

<h3>
    <img src="https://res.cloudinary.com/dttx2z5da/image/upload/v1740968857/briefcase_hldfe6.png" alt="Work Icon" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 5px;">
    Work Experience
</h3>
<p>Creativity has always been my passion. From 2020 to 2023, I worked as a graphic designer for <span class="sinag">Sinag Esports (2020)</span> and <span class="cafe">Cafe Homey Flan (2023)</span>, bringing ideas to design. Though I haven’t created much art lately, my love for it never faded—it just evolved.</p>

<br><br><br>

<h3>
    <img src="https://res.cloudinary.com/dttx2z5da/image/upload/v1740968859/technology_viv2gn.png" alt="Tech Icon" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 5px;">
    Tech Projects
</h3>
<p>I'm currently exploring programming and teamwork in development. For my DATAMA2 finals project, I'm working on the backend as part of a team. Additionally, for my USERDES subject, I designed the UI/UX of the Rams Pawtner website in Figma, collaborating with my team to create a platform for adopting animals in Makati APC and nearby areas.</p>


<h3></h3>
      </div>

      
    </div>
  </template>

  <script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

// Scroll event handler to check the visibility of the section
const handleScroll = () => {
  const section = document.querySelector('.feature');
  if (section) {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight * 0.75) { // Trigger animation when section is 75% visible
      isVisible.value = true;
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger on initial load
});

  
  // Image slider data and methods
 // Image slider data and methods
const images = [
  'https://res.cloudinary.com/dttx2z5da/image/upload/v1741173022/2_ephswf.png',
  'https://res.cloudinary.com/dttx2z5da/image/upload/v1741173056/4_ndym7b.png',
  'https://res.cloudinary.com/dttx2z5da/image/upload/v1741172996/3_uzirp6.png',
  'https://res.cloudinary.com/dttx2z5da/image/upload/v1741173043/1_wklbjl.png',  // Add new images here
  'https://res.cloudinary.com/dttx2z5da/image/upload/v1741173061/5_povqv6.png',
  'https://res.cloudinary.com/dttx2z5da/image/upload/v1741173066/6_ewpjlm.png'
];

  
  const currentSlide = ref(0);
  
  const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + images.length) % images.length;
  };
  
  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % images.length;
  };
  
  const goToSlide = (index) => {
    currentSlide.value = index;
  };
  </script>
  
  <style scoped>
.feature {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 5vh; /* Ensure the section is tall enough for scrolling */
}

h2 {
  color: #000000;
  font-family: 'Recoleta Alt SemiBold';
}

.line {
  flex: 1;
  height: 1px;
  background-color: #000000;
  position: relative;
}

.highlight {
  width: 10px; /* Increased size for better visibility */
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
  transform: translateY(-50%) scale(1.2); /* Bounce effect */
}
  

  
  /* Image Slider and Text Section Layout */
  .slider-section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 2rem;
  }
  
  .slider-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .thumbnail-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .thumbnail {
  width: 60px;
  height: 60px;
  margin: 0 5px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 12px; /* Rounded corners */
  transition: opacity 0.4s ease-in-out;
}
  
  .thumbnail.active {
    border: 3px solid #009688;
    opacity: 1;
  }
  
  .thumbnail:hover {
    opacity: 0.7;
  }
  
  .slider-box {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .slider-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  opacity: 0;
  animation: fadeIn 0.7s forwards; /* Smooth fade-in */
  border-radius: 12px; /* Rounded corners */
}
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  /* Arrows styling below the slider */
  .arrow-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    margin-top: 10px; /* Space between image and arrows */
  }
  
  .arrow-btn {
  background-color: transparent; /* Ensure no background color */
  color: rgb(0, 0, 0); /* Keep text color black */
  padding: 10px;
  border: none;
  cursor: pointer;
  outline: none; /* Remove focus outline if any */
  transition: transform 0.3s ease-in-out; /* Smooth scaling effect */
}

.arrow-btn:hover {
  transform: scale(1.2); /* Increase size on hover */
}

  
  .text-container {
    margin-top: 100px;
    width: 45%;
    padding-left: 2rem;
    transition: transform 0.3s ease-in-out;
    text-align: left;
  }

  .text-container:hover {
  transform: scale(1.02);
}

  .text-container h2 {
    margin-bottom: 20px;    
    width: 45%;
    text-align: left;
  }

  .text-container h3 {
  font-family: 'HelveticaNeueMedium';
  margin-bottom: 10px;
}

  .text-container p {
    font-family: 'HelveticaNeueRoman'; /* Regular text font */
    text-align: justify; /* Justifies the text */
    line-height: 1.6; /* Optional: Adjust line spacing */

  }
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: opacity 0.5s ease-in-out;
  }
  
  .slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }

  .cafe {
    font-family: HelveticaNeueBold;
  }

  .sinag {
    font-family: HelveticaNeueBold;
  }
  </style>
  