<template>
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          The eye of ArtVista
          <span class="emoji">👁️</span>
          <span class="emoji">🖼️</span>
        </h1>
        <h2 class="hero-subtitle">
          Image Search API
        </h2>
        <p class="hero-description">Scroll down for more info</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HeroApi",
  };
  </script>
  
  <style scoped>
  /* Hero Section */
  .hero-section {
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Aligns content to the top vertically */
    min-height: 30vh; /* Changed from height */
    background: transparent; /* Ensures transparent background */
    color: #fff; /* Sets default text color to white */
    text-align: center;
    position: relative;
    overflow: hidden;
    padding-top: 20px; /* Increased padding-top */
    padding-bottom: 50px; /* Maintains padding-bottom */
  }
  
  .hero-content {
    max-width: 800px;
    padding: 20px;
  }
  
  .hero-title {
    font-size: 1.7rem;
    font-weight: 400;
    margin: 0;
    color: #ffffff; /* Ensures title text is white */
  }
  
  .hero-subtitle {
    font-size: 3rem;
    font-weight: 600;
    margin: 10px 0;
    color: #ffffff; /* Ensures subtitle text is white */
    position: relative;
    
    /* Define text-shadow with larger blur radii for a more pronounced glow */
    text-shadow: 
      0 0 20px rgba(29, 136, 240, 0.7), /* Blue glow */
      0 0 50px rgba(29, 136, 240, 0.5), /* More blurred blue glow */
      0 0 80px rgba(29, 136, 240, 0.3); /* Even more blurred blue glow */
    
    /* Apply the animation to text-shadow */
    animation: shadowColorChange 5s infinite alternate ease-in-out;
  }
  
  @keyframes shadowColorChange {
    0% {
      text-shadow:
        0 0 20px rgba(29, 136, 240, 0.7), /* #1D88F0 */
        0 0 50px rgba(29, 136, 240, 0.5),
        0 0 80px rgba(29, 136, 240, 0.3);
    }
    100% {
      text-shadow:
        0 0 20px rgba(191, 3, 176, 0.7), /* #BF03B0 */
        0 0 50px rgba(191, 3, 176, 0.5),
        0 0 80px rgba(191, 3, 176, 0.3);
    }
  }
  
  .hero-description {
    font-size: 1rem;
    font-weight: 400;
    color: #ffffff; /* Ensures description text is white */
    margin-top: 50px;
    font-style: italic;
  }
  
  .emoji {
    font-size: 2rem; 
    margin: 0 5px;
  }
  
  /* Responsive Adjustments */
  
  /* Laptop Screens */
  @media (min-width: 1024px) and (max-width: 1440px) {
    .hero-title {
      font-size: 2rem;
    }
  
    .hero-subtitle {
      font-size: 3.5rem;
    }
  }
  
  /* Tablets and Smaller Laptops */
  @media (max-width: 1024px) {
    .hero-section {
      padding-top: 15px;
      padding-bottom: 40px;
    }
  
    .hero-content {
      padding: 15px;
    }
  
    .hero-title {
      font-size: 1.8rem;
    }
  
    .hero-subtitle {
      font-size: 3rem;
    }
  }
  
  /* Mobile Devices */
  @media (max-width: 768px) {
    .hero-section {
      padding-top: 10px;
      padding-bottom: 30px;
    }
  
    .hero-content {
      padding: 10px;
    }
  
    .hero-title {
      font-size: 1.5rem;
    }
  
    .hero-subtitle {
      font-size: 2.5rem;
    }
  
    .hero-description {
      font-size: 0.9rem;
    }
  }
  </style>
  