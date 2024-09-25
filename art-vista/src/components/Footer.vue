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
/* Footer Container */
footer {
  margin-top: 50px;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00000000; /* Optional: Add a background color for better contrast */
}

/* Navigation Links Container */
ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* Individual Navigation Links */
li {
  margin-left: 20px;
}

/* Navigation Links Styling */
a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

a:hover {
  color: #1D88F0; /* Example hover color */
}

/* Media Queries for Responsive Design */

/* Mobile View: 768px and below */
@media screen and (max-width: 768px) {
  footer {
    flex-direction: column; /* Stack elements vertically */
    align-items: center;    /* Center-align items */
    text-align: center;     /* Center-align text */
  }

  ul {
    flex-direction: column; /* Stack navigation links vertically */
    align-items: center;    /* Center-align navigation links */
    margin-top: 15px;       /* Add space between text and links */
  }

  li {
    margin: 10px 0; /* Adjust margins for vertical stacking */
  }

  a {
    font-size: 18px; /* Increase font size for better readability on mobile */
  }
}
</style>
