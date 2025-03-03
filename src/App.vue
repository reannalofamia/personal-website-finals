<script setup>
import Guestbook from './components/Guestbook.vue';
import Scroll from './components/Scroll.vue';
import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue';
import Gallery from './components/Gallery.vue';
// import sitepet from './components/sitepet.vue';
import Boop from './components/Boop.vue';
import Resources from './components/Resources.vue';

// Import global CSS
import './assets/styles.css';
import '@/assets/css/fonts.css';


// import './assets/style.css';

// Import JavaScript files (Make sure these exist in src/js/)
import './js/navigation.js';
import './js/sticky.js';
// import './js/site-pet.js';
import { supabase } from './js/supabase.js';
</script>

<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar">
      <ul class="nav-left">
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>

      <h1>Reanna Lofamia</h1>

      <ul class="nav-right">
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#resources">Resources</a></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button class="menu-button" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>

      <!-- Mobile Menu -->
      <ul class="mobile-menu" :class="{ 'show': isMenuVisible }">
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#resources">Resources</a></li>
      </ul>
    </nav>

    <!-- Intro Section -->
    <section class="intro-section">
      <div class="columns-content">
        <div class="column-right-illustration">
          <img src="https://res.cloudinary.com/dttx2z5da/image/upload/v1740656114/reign-mustache_j7zrkq.svg" alt="An illustration of Reign" class="reign-image"/>
        </div>

        <div class="column-left-text">
          <h1>Hello! I'm <span class="highlight">Reign</span>, and I am a Computer Science student.</h1>
          <p>
            Check out <a href="https://open.spotify.com/user/31asms4rd73zpp4cdqbpbq4r624a?si=e7e4b15495ac4a06" target="_blank">songs I'm listening to</a>,
            find me on <a href="https://instagram.com/reignlofamia" target="_blank">Instagram</a> /
            <a href="https://github.com/reannalofamia" target="_blank">GitHub</a> /
            <a href="https://www.linkedin.com/in/reannalofamia/" target="_blank">LinkedIn</a>,
            or just <a href="mailto:rplofamia@student.apc.edu.ph">send me an email</a> saying hi.
          </p>
        </div>
      </div>
    </section>

    <div class="hero-section">
      <div class="icon">
        <img src="https://res.cloudinary.com/dttx2z5da/image/upload/v1740494833/flower_qbjovm.png" alt="Flower Icon" width="80" height="80" />
      </div>

      <br>
      <br>
      <p class="intro-text">
        I'm Reanna Lofamia — a computer science student passionately exploring technology and creating digital experiences with innovation.
      </p>
      <!-- Scroll Component -->
      <Scroll />
    </div>  

    <!-- Guestbook Component -->
    <Guestbook id="guestbook" />

    <!-- About Section -->
    <div id="about">
      <About />
    </div>

    <!-- Portfolio Section -->
    <div id="portfolio">
      <Portfolio />
    </div>

    <div style="display: flex; justify-content: center; align-items: center; height: 80vh;">
      <img src="https://res.cloudinary.com/dttx2z5da/image/upload/v1740965972/4-weirdo_snyzjq.svg" alt="SVG Image" style="max-width: 75%; height: auto;">
    </div>

    <!-- Boop Component -->
    <Boop />

    <!-- Pet Component -->
    <!-- <sitepet /> -->

    <!-- Gallery Section -->
    <div id="gallery">
      <Gallery />
    </div>

    <!-- Resources Section -->
    <div id="resources">
      <Resources />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
  },
};
</script>

<style scoped>
/* Mobile Menu styles */
.mobile-menu {
  display: none;
  list-style: none;
  background-color: #000000; /* Or any other background color */
  position: absolute;
  top: 60px; /* Adjust as necessary */
  right: 0;
  width: 100%;
}

.mobile-menu.show {
  display: block;
}

.mobile-menu li {
  padding: 10px;
}

.mobile-menu a {
  color: white;
  text-decoration: none;
  display: block;
}

.menu-button {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) { /* Show when screen width is 768px or smaller */
  .menu-button {
    display: flex;
  }
}

.bar {
  height: 3px; /* Smaller height */
  width: 25px; /* Smaller width */
  background-color: #000000;
  border-radius: 10px; /* Round the edges */
  margin-left: 5px; /* Move it a bit to the right */
}


.menu-button:focus {
  outline: none;
}
</style>
