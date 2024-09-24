<template>
  <div class="hero-container">
    <!-- Left Section: Titles and Buttons -->
    <div class="hero-titles">
      <h1>
        <!-- Highlighted Part: "Art Companion" with gradient style -->
        The <span class="highlight">Art Companion</span> You Are Looking For
      </h1>
      <ul>
        <li>
          🖼️ Understand <span class="highlight-small">Art</span> Better
          <!-- Description for the first list item -->
          <p class="description">Get quick answers for your art-related questions</p>
        </li>
        <li>
          🤳 Scan and Discover
          <!-- Description for the second list item -->
          <p class="description">Instantly identify artworks with just a scan</p>
        </li>
        <li>
          👩‍🎨 Connect with Artists
          <!-- Description for the third list item -->
          <p class="description">Bridge the gap between art lovers and creators</p>
        </li>
      </ul>
      <!-- Action Buttons for the App -->
      <div class="buttons">
        <button class="get-app-btn">Get the app</button>
        <button class="partner-btn">Become a partner</button>
      </div>
    </div>

    <!-- Right Section: Promo Video Component -->
    <PromoVideo />
  </div>
</template>

<script>
// Importing the PromoVideo component to be used within the Hero component
import PromoVideo from '@/components/PromoVideo.vue'

export default {
  name: "Hero",
  components: {
    PromoVideo
  }
}
</script>

<style scoped>
/* Container styling for the hero section, using flexbox for layout */
.hero-container {
  display: flex;
  justify-content: space-between; /* Space between the two main sections */
  align-items: center; /* Center align the items vertically */
  padding: 40px 0; /* Top and bottom padding */
  margin-top: 80px; /* Added margin to prevent overlap with the fixed header */
  width: 100%;
  max-width: 1200px; /* Maximum width of the container */
  margin-left: auto; /* Center the container horizontally */
  margin-right: auto; /* Center the container horizontally */
}

/* Left section styling */
.hero-titles {
  flex: 1; /* Allows the left section to take up available space */
  padding-right: 100px; /* Spacing between the titles and the video section */
  max-width: 500px; /* Maximum width for the left section */
}

/* Main title styling */
.hero-titles h1 {
  font-size: 2.5rem; /* Large font size for the main title */
  margin-bottom: 20px; /* Space below the title */
  color: white; /* White color for the entire title */
  font-weight: 400; /* Medium weight for the title */
}

/* Styling for the gradient text part of the title */
.highlight {
  background: linear-gradient(45deg, #03C1FD, #B902A7, #03C1FD); /* Loop the gradient colors */
  background-size: 200% 200%;
  -webkit-background-clip: text; /* Clipping the gradient to text */
  background-clip: text; /* Standard property for compatibility */
  -webkit-text-fill-color: transparent; /* Filling the text with transparent to show the gradient */
  animation: gradientAnimation 5s linear infinite; /* Animation applied */
  font-weight: 900; /* Bold weight for the highlighted text */
}

/* Keyframes for the gradient animation */
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

/* Styling for the small highlight */
.highlight-small {
  background: linear-gradient(45deg, #03C1FD, #2dc906, #03C1FD);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientAnimation 5s linear infinite;
  font-weight: 900;
}

/* List container styling */
.hero-titles ul {
  list-style: none; /* Remove default list styles */
  padding: 0; /* No padding */
}

/* List item styling */
.hero-titles ul li {
  margin-bottom: 10px; /* Space between list items */
  font-size: 1.2rem; /* Font size for list items */
  position: relative; /* Required for additional styling */
  margin-bottom: 20px; /* Additional spacing below items */
  font-weight: 300; /* Light font weight for list items */
}

/* Description text under each list item */
.hero-titles ul li .description {
  font-size: 0.9rem; /* Smaller font size for descriptions */
  color: #aaa; /* Light grey color */
  margin-top: 5px; /* Space above the description */
  font-weight: 300; /* Light font weight for descriptions */
}

/* Button container styling */
.buttons {
  margin-top: 20px; /* Space above the buttons */
}

/* Styling for both buttons */
.get-app-btn, .partner-btn {
  background-color: #6A1D85; /* Primary button color */
  color: white; /* White text color */
  padding: 10px 20px; /* Padding for the buttons */
  border: none; /* No border */
  border-radius: 10px; /* Rounded corners */
  margin-right: 10px; /* Space between the buttons */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
  font-weight: 500; /* Medium weight for button text */
}

/* Hover effect for buttons */
.get-app-btn:hover, .partner-btn:hover {
  background-color: #5a32ff; /* Darker color on hover */
}

/* Container styling for the promo video section */
.promo-video-container {
  flex: 1; /* Allows the promo video section to take up available space */
  display: flex;
  justify-content: center; /* Center align horizontally */
  align-items: center; /* Center align vertically */
}
</style>
