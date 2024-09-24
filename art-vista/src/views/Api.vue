<!-- src/views/Api.vue -->
<template>
  <div class="api-page">
    <Header />
    <main>
      <h1>API Page</h1>
      <p>Welcome to the API page!</p>
      <!-- Add your API page content here -->
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Api',
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.api-page {
  padding-top: 80px; /* Adjust based on your header height */
  /* Add your styles here */
}
</style>
