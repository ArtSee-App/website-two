<template>
    <header>
      <nav>
        <img src="@/assets/logo.png" alt="ArtVista Logo" class="logo" />
        <ul>
          <li><a href="#app">App</a></li>
          <li><a href="#api">API</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  header {
    padding: 20px 0;
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    height: 40px;
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
  }
  </style>