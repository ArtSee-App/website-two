<!-- src/views/About.vue -->
<template>
  <div class="about-page">
    <Header />
    <main>
      <h1>About Us</h1>
      <p>Welcome to the About Us page!</p>
      <!-- Add your About Us content here -->
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'About',
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.about-page {
  padding-top: 80px; /* Adjust based on your header height */
  /* Add your styles here */
}

</style>
