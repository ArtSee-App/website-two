<template>
  <div class="promo-video-container">
    <div class="promo-content">
      <p>GIF VERSION OF A PROMO VIDEO HERE</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromoVideo"
}
</script>

<style scoped>
/* Container for the promo video with animated stroke (border) */
.promo-video-container {
  display: flex;
  justify-content: center;
  align-items: center;

  /* Adjust the padding to change the stroke (border) thickness */
  padding: 3px; /* Stroke thickness */

  border-radius: 12px;

  /* Gradient border with animated colors */
  background: linear-gradient(
    45deg,
    #03C1FD,
    #B902A7,
    #00fff2,
    #b90239
  );
  background-size: 400% 400%;
  animation: gradientAnimation 10s linear infinite; /* Adjust duration for speed */

  /* Set the fixed size of the container to match the content size plus padding */
  width: 456px; /* Content width + (padding * 2) */
  height: 456px; /* Content height + (padding * 2) */
  box-sizing: border-box; /* Include padding in the total dimensions */
}

/* Content box for the promo video */
.promo-content {
  display: flex;
  justify-content: center;
  align-items: center;

  /* Adjust the background color of the content box */
  background-color: #1e1e1e; /* Content background color */

  /* Set the content size */
  width: 800px; /* Content width */
  height: 450px; /* Content height */

  border-radius: 10px;

  /* Text color inside the content (if any) */
  color: #888;

  /* Remove padding to maintain exact dimensions */
  padding: 0;

  /* Shadow effect around the content */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

/* Styling for the promo GIF or video */
.promo-gif {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the GIF covers the container without distortion */
  border-radius: inherit; /* Matches the border radius of the parent */
}

/* Keyframes for the animated gradient border */
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

/* *** New Media Query for Phone Screens *** */
@media screen and (max-width: 480px) {
  .promo-video-container {
    border-radius: 0; /* Remove border radius for straight stroke */
    width: 100%; /* Make the container full width */
    height: auto; /* Allow height to adjust based on content */
    padding: 0; /* Remove padding if necessary */
    background: linear-gradient(
      45deg,
      #03C1FD,
      #B902A7,
      #00fff2,
      #b90239
    ); /* Retain gradient background */
  }

  .promo-content {
    width: 100%; /* Make content full width */
    height: auto; /* Allow height to adjust */
    border-radius: 0; /* Remove border radius from content */
    box-shadow: none; /* Remove shadow for a cleaner look */
  }

  /* Optional: Adjust text size for better readability on small screens */
  .promo-content p {
    font-size: 1rem; /* Smaller font size */
    text-align: center; /* Center align text */
    padding: 10px; /* Add padding for better spacing */
  }
}
</style>
