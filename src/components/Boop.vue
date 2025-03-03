<template>
    <div class="gallery-container">
      <div class="image-wrapper">
        <div class="image-container" :style="{ transform: `perspective(1000px) rotateY(${angle}deg)` }">
          <span v-for="(image, index) in images" :key="index" :style="{ '--i': index + 1 }">
            <img :src="image" alt="Gallery Image" />
          </span>
        </div>
      </div>
      <div class="btn-wrapper">
        <button class="btn" @click="rotateGallery(45)">Prev</button>
        <button class="btn" @click="rotateGallery(-45)">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        angle: 0,
        images: [
          "https://picsum.photos/id/478/300/200",
          "https://picsum.photos/id/370/300/200",
          "https://picsum.photos/id/239/300/200",
          "https://picsum.photos/id/59/300/200",
          "https://picsum.photos/id/163/300/200",
          "https://picsum.photos/id/69/300/200",
          "https://picsum.photos/id/153/300/200",
          "https://picsum.photos/id/20/300/200",
        ],
      };
    },
    methods: {
      rotateGallery(deg) {
        this.angle += deg;
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  .gallery-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    /* background: #333; */
    text-align: center;
    overflow: hidden;
  }
  
  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
  }
  
  .image-container {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    transition: transform 0.7s;
  }
  
  .image-container span {
    position: absolute;
    width: 100%;
    transform: rotateY(calc(var(--i) * 45deg)) translateZ(400px);
  }
  
  .image-container span img {
    width: 100%;
  }
  
  .btn-wrapper {
    display: flex;
    justify-content: center;
    gap: 40px; /* Increased spacing between buttons */
    width: 80%;
    /* margin-top: px; */
    margin-bottom: 100px;
  }
  
  .btn {
    padding: 10px 20px; /* Adjust padding for better fit */
  width: fit-content; /* Ensures the button fits the text inside */
  min-width: 100px; /* Prevents it from being too small */
  align-self: center; /* Centers the button */
  border-radius: 20px;
  border: 1px solid black;
  font-family: 'HelveticaNeueMedium'; /* Regular font */
  cursor: pointer;
  background: white;
  transition: background 0.3s, font-family 0.3s;
  }
  
  .btn:hover {
    background: rgb(236, 236, 236);
  font-family: 'HelveticaNeueBold'; /* Hover font */
}


.btn:disabled {
  background: rgb(209, 209, 209);
  cursor: not-allowed;
}

  </style>
  