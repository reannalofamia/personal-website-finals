<template>
    <div class="scroll-container">
      <div class="scroll-animation"></div>
      <p class="scroll-text">SCROLL</p>
    </div>
  </template>
  
  <style scoped>
  .scroll-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
  }
  
  .scroll-animation {
    width: 2px;
    height: 30px;
    background-color: rgb(0, 0, 0);
    animation: scrollAnimation 1.5s infinite ease-in-out;
  }
  
  .scroll-text {
    margin-top: 20px;
    font-size: 0.8rem;
    color: gray;
    font-family: 'HelveticaNeueLight';

  }
  
  @keyframes scrollAnimation {
    0% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(10px); opacity: 0.5; }
    100% { transform: translateY(20px); opacity: 0; }
  }
  </style>
  
  <!-- other component is in app.vue named as hero.section -->