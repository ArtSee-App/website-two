<template>
    <footer>
      <p>&copy; 2024 ArtVista</p>
      <ul>
        <li><a href="#contact">Contact us</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="https://www.linkedin.com/company/artvista-app/">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/artvista.app/">Instagram</a></li>
      </ul>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  footer {
    margin-top: 50px;
    padding: 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
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