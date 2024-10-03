<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-left">
        <div class="hero-content">
          <h1 class="hero-title">
            The Eye of ArtVista
            <span class="emoji">👁️</span>
            <span class="emoji">🖼️</span>
          </h1>
          <h2 class="hero-subtitle">
            Image Search API
          </h2>
          <div class="hero-bullets">
            <div class="hero-bullet">
              <span class="emoji">🤖</span> At ArtVista, we bring advanced computer vision models to our users in the simplest way possible.
            </div>
            <div class="hero-bullet">
              <span class="emoji">💻</span> The Image Search API is a perfect example of our commitment to accessibility and functionality.
            </div>
            <div class="hero-bullet">
              <span class="emoji">🎨</span> Even though our focus is on art, our models go beyond just art, catering to diverse applications.
            </div>
            <div class="hero-bullet">
              <span class="emoji">🚀</span> Interested in integrating computer vision into your business? Reach out, and let's explore what we can achieve together!
            </div>
          </div>
        </div>
      </div>
      <div class="hero-right">
        <ApiSearch />
      </div>
    </div>
  </section>
</template>

<script>
import ApiSearch from './ApiSearch.vue';

export default {
  name: "HeroApi",
  components: {
    ApiSearch,
  },
};
</script>

<style scoped>
/* Hero Section */
.hero-section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 30vh;
  background: transparent;
  color: #fff;
  text-align: left; /* Changed from center to left */
  position: relative;
  overflow: hidden;
  padding-top: 20px;
  padding-bottom: 50px;
}

.hero-container {
  display: flex;
  flex-direction: row; /* Keep row direction */
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

.hero-left {
  flex: 1;
  padding-right: 20px;
}

.hero-right {
  flex: 1;
  padding-left: 20px;
}

.hero-content {
  max-width: 800px;
  padding: 20px;
}

.hero-title {
  font-size: 1.7rem;
  font-weight: 400;
  margin: 0;
  color: #ffffff;
}

.hero-subtitle {
  font-size: 3rem;
  font-weight: 600;
  margin: 10px 0;
  color: #ffffff;
  position: relative;
  text-shadow:
    0 0 20px rgba(29, 136, 240, 0.7),
    0 0 50px rgba(29, 136, 240, 0.5),
    0 0 80px rgba(29, 136, 240, 0.3);
  animation: shadowColorChange 5s infinite alternate ease-in-out;
}

@keyframes shadowColorChange {
  0% {
    text-shadow:
      0 0 20px rgba(29, 136, 240, 0.7),
      0 0 50px rgba(29, 136, 240, 0.5),
      0 0 80px rgba(29, 136, 240, 0.3);
  }
  100% {
    text-shadow:
      0 0 20px rgba(191, 3, 176, 0.7),
      0 0 50px rgba(191, 3, 176, 0.5),
      0 0 80px rgba(191, 3, 176, 0.3);
  }
}

.hero-description {
  font-size: 1rem;
  font-weight: 400;
  color: #ffffff;
  margin-top: 50px;
  font-style: italic;
}

/* New Styles for Bullet Points */
.hero-bullets {
  padding-left: 0;
  margin-top: 20px;
}

.hero-bullet {
  font-size: 1rem;
  font-weight: 300;
  color: #dddddd;
  margin-bottom: 10px;
  position: relative;
  padding-left: 10px;
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

  .hero-bullet {
    font-size: 1.1rem;
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

  .hero-container {
    flex-direction: column;
  }

  .hero-left,
  .hero-right {
    padding: 0;
  }

  .hero-bullets {
    padding-left: 30px;
  }

  .hero-bullet {
    font-size: 1rem;
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

  .hero-bullets {
    padding-left: 20px;
  }

  .hero-bullet {
    font-size: 0.9rem;
  }
}
</style>
