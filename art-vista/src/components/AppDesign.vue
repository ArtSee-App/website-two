<template>
    <section class="app-design">
      <!-- Background Images -->
      <div class="background-images">
        <img
          v-for="(image, index) in backgroundImages"
          :key="index"
          :src="image.src"
          class="background-image"
          :style="{
            top: image.top,
            left: image.left,
            width: image.width,
            transform: 'rotate(' + image.rotation + 'deg)',
            filter: 'blur(' + image.blur + 'px)',
            opacity: image.opacity,
            borderRadius: image.borderRadius,
          }"
          alt="Background Art"
        />
      </div>
  
      <!-- App Description Text -->
      <div class="app-description">
        <p>
          ArtVista is the most advanced art app, dedicated to bringing art to your fingertips -
          while keeping the world of art interesting and fun for you :)
        </p>
      </div>
  
      <!-- iPhone Wrapper -->
      <div class="iphone-wrapper">
        <div class="iphone">
          <!-- iPhone Image -->
          <img src="@/assets/iphone.png" alt="iPhone Design" class="iphone-image" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AppDesign',
    data() {
      return {
        backgroundImages: [
          {
            src: require('@/assets/background_paintings/almond_blossom.jpg'),
            top: '10%',
            left: '75%',
            width: '300px',
            rotation: 15,
            blur: 2,
            opacity: 1,
            borderRadius: '10px',
          },
          {
            src: require('@/assets/background_paintings/gun_salesman.jpg'),
            top: '60%',
            left: '80%',
            width: '250px',
            rotation: 10,
            blur: 2,
            opacity: 1,
            borderRadius: '15px',
          },
          /*{
            src: require('@/assets/background_paintings/van_gogh_sp.jpg'),
            top: '50%',
            left: '95%',
            width: '150px',
            rotation: -5,
            blur: 1.5,
            opacity: 1,
            borderRadius: '20px',
          },*/
          {
            src: require('@/assets/background_paintings/wanderer.jpg'),
            top: '30%',
            left: '0%',
            width: '150px',
            rotation: 10,
            blur: 2.5,
            opacity: 1,
            borderRadius: '25px',
          },
          {
            src: require('@/assets/background_paintings/two_crabs.jpg'),
            top: '0%',
            left: '20%',
            width: '300px',
            rotation: -10,
            blur: 2,
            opacity: 1,
            borderRadius: '10px',
          },
          {
            src: require('@/assets/background_paintings/two_cut_sunflowers.jpg'),
            top: '70%',
            left: '15%',
            width: '350px',
            rotation: -15,
            blur: 2,
            opacity: 1,
            borderRadius: '35px',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* App Design Section */
  .app-design {
    position: relative; /* Establish positioning context for absolute elements */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
    text-align: left;
  }
  
  /* Background Images Container */
  .background-images {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0; /* Place behind other content */
  }
  
  /* Background Image Styles */
  .background-image {
    position: absolute;
    /* Opacity and border-radius are now set inline via :style binding */
  }
  
  /* App Description Text */
  .app-description {
    max-width: 300px;
    margin-right: 100px;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
    text-align: left;
    z-index: 1; /* Place above background images */
  }
  
  /* iPhone Wrapper with Animated Gradient Border */
  .iphone-wrapper {
    position: relative;
    width: 300px;
    height: 650px;
    border-radius: 40px;
    padding: 3px;
    background: linear-gradient(90deg, #1D88F0, #BF03B0, #e45f06, #36eb08);
    background-size: 600% 600%;
    animation: gradientAnimation 10s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1; /* Place above background images */
  }
  
  /* Pseudo-element for Animated Shadow */
  .iphone-wrapper::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 55px;
    background: inherit;
    background-size: inherit;
    animation: inherit;
    filter: blur(30px);
    z-index: -1;
  }
  
  /* iPhone Container */
  .iphone {
    width: 100%;
    height: 100%;
    border-radius: calc(40px - 5px);
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
  
  /* iPhone Image */
  .iphone-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
  
  /* Keyframes for Gradient Animation */
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  </style>
  