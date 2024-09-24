<template>
  <header :class="{ scrolled }">
    <nav>
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="ArtVista Logo" class="logo" />
        <span class="logo-text">ArtVista</span>
      </div>
      <ul>
        <li><router-link to="/">App</router-link></li>
        <li><router-link to="/api">API</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      scrolled: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    }
  }
};
</script>

<style scoped>
/* Import the Judson font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Judson&display=swap');

/* Header styling */
header {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  padding: 5px 10px;
  background: transparent;
  border-radius: 20px;
  z-index: 1000;
  transition: all 0.3s ease;
  overflow: hidden; /* Ensure pseudo-element is contained */
}

header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(185, 2, 167, 0.7), rgba(3, 193, 253, 0.7));
  background-size: 400% 400%;
  animation: gradientAnimation 10s linear infinite;
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease, backdrop-filter 0.3s ease;
  backdrop-filter: blur(0px);
}

header.scrolled::before {
  opacity: 1;
  backdrop-filter: blur(20px);
}


nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  margin-right: 10px;
}

.logo-text {
  color: white;
  font-size: 30px;
  font-weight: 350;
  font-family: 'Judson', serif; /* Apply the Judson font here */
}

ul {
  display: flex;
  list-style-type: none;
}

li {
  margin-left: 20px;
}

a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

/* Header styling when scrolled */
header.scrolled {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

header.scrolled::before {
  background: linear-gradient(45deg, rgba(185, 2, 167, 0.7), rgba(3, 193, 253, 0.7));
  background-size: 400% 400%;
  animation: gradientAnimation 10s linear infinite;
  opacity: 1;
  backdrop-filter: blur(20px);
}

/* Gradient animation keyframes */
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

/* Responsive design */
@media screen and (max-width: 768px) {
  nav {
    flex-direction: column;
  }

  ul {
    flex-direction: column;
    align-items: center;
  }

  li {
    margin: 10px 0;
  }
}
</style>
