<template>
    <section class="artwork-gallery">
      <div class="artwork" v-for="artwork in artworks" :key="artwork.id">
        <img :src="artwork.imageUrl" :alt="artwork.title" />
        <p>{{ artwork.title }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ArtworkGallery',
    data() {
      return {
        artworks: [
          { id: 1, title: 'Woman with a Parasol', imageUrl: 'https://placeholder.com/150' },
          { id: 2, title: 'Sunflowers', imageUrl: 'https://placeholder.com/150' },
          { id: 3, title: 'The Starry Night', imageUrl: 'https://placeholder.com/150' },
          { id: 4, title: 'The Persistence of Memory', imageUrl: 'https://placeholder.com/150' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .artwork-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin: 50px 0;
  }
  
  .artwork img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .artwork p {
    margin-top: 10px;
    text-align: center;
  }
  </style>