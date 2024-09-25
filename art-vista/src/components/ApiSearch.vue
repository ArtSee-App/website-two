<template>
    <section class="api-search-section">
      <div class="playground-container">
        <!-- Secondary rectangle (title holder) -->
        <div class="title-holder">
          <h1 class="playground-title">Demo Playground</h1>
        </div>
        <div class="playground-content">
          <div class="left-content">
            <!-- Left content (e.g., additional instructions or information) -->
            <p class="demo-instructions">How to use this demo?</p>
          </div>
          <div class="right-content">
            <ol>
              <li><span>1.</span> Upload a photo of a painting.</li>
              <li><span>2.</span> The API will try to crop the image.</li>
              <li><span>3.</span> Select one of the detected paintings.</li>
              <li><span>4.</span> The most similar paintings to the selected crop will be retrieved.</li>
            </ol>
          </div>
        </div>
  
        <!-- Image processing container -->
        <div class="image-processing-container">
          <!-- Demo image container -->
          <div class="demo-image-container">
            <div class="demo-image">
              <!-- Bind src to imageSrc data property -->
              <!-- Added :alt for accessibility -->
              <img ref="demoImage" :src="imageSrc" alt="Demo Image" />
            </div>
            <div class="demo-buttons">
              <button class="demo-button" @click="triggerFileUpload">
                → Use your photo
              </button>
              <button class="demo-button" @click="fetchTokenAndSendImage">
                → Try a random Photo
              </button>
              <!-- Hidden file input -->
              <input
                type="file"
                ref="fileInput"
                accept="image/*"
                @change="handleImageUpload"
                style="display: none;"
              />
            </div>
          </div>
  
          <!-- Cropped images container -->
          <div class="cropped-images-container">
            <div v-if="croppedImages.length > 0">
              <div
                v-for="(croppedImage, index) in croppedImages"
                :key="index"
                class="cropped-image"
              >
                <img :src="croppedImage" :alt="'Cropped Image ' + index" />
              </div>
            </div>
            <div v-else>
              <p>No cropped images to display.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ApiSearch",
    data() {
      return {
        // Initial image source using require to load the image
        imageSrc: require('@/assets/api_images/demo-image.jpg'),
        token: null, // To store the fetched token
        croppedImages: [], // To store the cropped images
      };
    },
    methods: {
      // Method to trigger the hidden file input
      triggerFileUpload() {
        this.$refs.fileInput.click();
      },
  
      // Handle image upload
      handleImageUpload(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imageSrc = e.target.result; // Update the imageSrc with the new image
            this.fetchTokenAndSendImage(); // Automatically send the new image to the API
            // Reset the file input to allow uploading the same file again if needed
            this.$refs.fileInput.value = null;
          };
          reader.readAsDataURL(file);
        } else {
          alert('Please upload a valid image file.');
          // Reset the file input if the file is invalid
          this.$refs.fileInput.value = null;
        }
      },
  
      // Fetch token from API
      async fetchToken() {
        try {
          const response = await fetch('https://api.artvista.app/get_custom_token/?token=art%21vista', {
            method: 'GET',
            headers: {
              'accept': 'application/json'
            }
          });
          if (!response.ok) {
            throw new Error(`Token fetch failed with status ${response.status}`);
          }
          const data = await response.json();
          return data.id_token; // Return the custom token
        } catch (error) {
          console.error("Failed to fetch token: ", error);
          return null;
        }
      },
  
      // Fetch token and send image to API
      async fetchTokenAndSendImage() {
        try {
          // Fetch token if not already fetched
          if (!this.token) {
            this.token = await this.fetchToken();
            if (!this.token) {
              console.error("Failed to retrieve token.");
              return;
            }
          }
  
          await this.sendImageToAPI(this.token);
        } catch (error) {
          console.error("Error in fetchTokenAndSendImage: ", error);
        }
      },
  
      // Send image to API
      async sendImageToAPI(token) {
        try {
          const imgElement = this.$refs.demoImage; // Get reference to the image element
  
          if (!imgElement) {
            throw new Error("Image element not found. Ensure the ref is correctly set.");
          }
  
          console.log("Image Element: ", imgElement);
  
          // Convert image to Blob
          const response = await fetch(this.imageSrc);
          if (!response.ok) {
            throw new Error(`Failed to fetch image from src: ${this.imageSrc}`);
          }
          const imageBlob = await response.blob();
          const file = new File([imageBlob], "demo-image.jpg", { type: imageBlob.type });
  
          console.log("Image File: ", file);
  
          // Prepare FormData for the API request
          const formData = new FormData();
          formData.append('file', file);
  
          console.log("Form Data: ", formData);
  
          // Make the API request using the retrieved token
          const bboxResponse = await fetch(`https://api.artvista.app/get_bbox_for_website/?token=${token}`, {
            method: 'POST',
            body: formData,
          });
  
          if (!bboxResponse.ok) {
            throw new Error(`API request failed with status ${bboxResponse.status}`);
          }
  
          console.log("Response: ", bboxResponse);
  
          // Parse the response and log bbox coordinates
          const bboxes = await bboxResponse.json();
          console.log("Bounding Box Coordinates: ", bboxes);
  
          // Process the image and create cropped images
          this.processBoundingBoxes(bboxes);
  
        } catch (error) {
          console.error("Failed to process image: ", error);
        }
      },
  
      // Process bounding boxes and create cropped images
      processBoundingBoxes(bboxes) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const croppedImages = [];
  
          bboxes.forEach((bboxObj) => {
            const bbox = bboxObj.bbox;
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
  
            canvas.width = bbox.w;
            canvas.height = bbox.h;
  
            ctx.drawImage(
              img,
              bbox.x,
              bbox.y,
              bbox.w,
              bbox.h,
              0,
              0,
              bbox.w,
              bbox.h
            );
  
            const dataURL = canvas.toDataURL();
            croppedImages.push(dataURL);
          });
  
          this.croppedImages = croppedImages;
        };
  
        img.src = this.imageSrc;
      },
    },
    mounted() {
      // Process the initial image when the component is mounted
      this.fetchTokenAndSendImage();
    }
  };
  </script>
  
  <style scoped>
  /* API Search Section */
  .api-search-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh; /* Changed from height */
    background: #10113300; /* Transparent background */
    padding: 20px; /* Adjusted padding */
  }
  
  .playground-container {
    width: 100%; /* Adjust based on your desired width */
    max-width: 1000px;
    padding: 30px; /* Adjusted padding */
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1); /* Transparent white background */
    border: 2px solid #9b51e0; /* Purple border */
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3); /* Soft shadow */
    position: relative; /* Ensure this is set */
    text-align: center;
    margin-top: 25px; /* Adjusted spacing */
  }
  
  .title-holder {
    position: absolute;
    top: -25px; /* Adjust this value as needed */
    right: 70%; /* Adjust this value as needed */
    background: #260853; /* Purple background */
    padding: 10px 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    border: 2px solid #9b51e0; /* Purple border */
  }
  
  .playground-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff; /* White color for title */
    margin: 0;
  }
  
  .playground-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start; /* Align items to the top */
    color: #ccc; /* Light color for text */
    margin-top: 30px; /* Add spacing between content and title holder */
  }
  
  /* Left content styling */
  .left-content {
    flex: 1;
    color: #ffffff;
    text-align: left;
    padding-right: 20px; /* Space between left and right content */
  }
  
  /* Right content styling */
  .right-content {
    flex: 1;
    color: #ffffff;
    text-align: left;
    padding-left: 20px; /* Space between left and right content */
  }
  
  /* Styling for instructions */
  .demo-instructions {
    font-size: 1.5rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 10px;
  }
  
  .playground-content ol {
    list-style: none;
    padding: 0;
  }
  
  .playground-content li {
    margin: 10px 0;
    font-size: 1.2rem;
    color: #ffffff;
  }
  
  .playground-content li span {
    color: #9b51e0; /* Highlight color for numbers */
  }
  
  /* Image processing container */
  .image-processing-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 30px;
  }
  
  .demo-image-container,
  .cropped-images-container {
    flex: 1;
    margin: 10px;
  }
  
  .demo-image {
    background: rgba(32, 12, 60, 0.8); /* Darker background */
    border-radius: 15px;
    padding: 20px;
    border: 2px solid #9b51e0; /* Purple border */
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3); /* Soft shadow */
    text-align: center;
  }
  
  .demo-image img {
    max-height: 200px; /* Adjust this value as needed for your design */
    max-width: 100%; /* Ensures image doesn't overflow horizontally */
    height: auto;
    width: auto;
    border-radius: 10px;
    
  }
  
  .cropped-images-container {
    background: rgba(32, 12, 60, 0.8);
    border-radius: 15px;
    padding: 20px;
    border: 2px solid #9b51e0;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
    text-align: center;
    max-height: 250px; /* Set a maximum height for the scrollable area */
    overflow-y: auto; /* Make the container scrollable vertically */
  }
  
  .cropped-image {
    margin: 0;
    margin-bottom: 15px;
  }
  
  .cropped-image img {
    max-width: 100%;
    border-radius: 10px;
  }
  
  .demo-buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
  
  .demo-button {
    background-color: #9b51e0;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .demo-button:hover {
    background-color: #7326a6;
  }
  
  /* Responsive Adjustments */
  
  /* Laptop Screens */
  @media (min-width: 1024px) and (max-width: 1440px) {
    .playground-title {
      font-size: 1.5rem;
    }
  
    .demo-instructions {
      font-size: 1.6rem;
    }
  
    .playground-content li {
      font-size: 1.3rem;
    }
  }
  
  /* Tablets and Smaller Laptops */
  @media (max-width: 1024px) {
    .playground-container {
      padding: 25px;
    }
  
    .playground-title {
      font-size: 1.3rem;
    }
  
    .demo-instructions {
      font-size: 1.4rem;
    }
  
    .playground-content li {
      font-size: 1.2rem;
    }
  
    .title-holder {
      margin-bottom: -20px;
    }
  
    .image-processing-container {
      flex-direction: column;
      align-items: center;
    }
  }
  
  /* Mobile Devices */
  @media (max-width: 768px) {
    .playground-container {
      padding: 20px;
    }
  
    .playground-title {
      font-size: 1.2rem;
    }
  
    .demo-instructions {
      font-size: 1.2rem;
    }
  
    .playground-content {
      flex-direction: column;
      align-items: center;
    }
  
    .left-content,
    .right-content {
      padding: 0;
      text-align: center;
    }
  
    .playground-content li {
      font-size: 1.1rem;
    }
  
    .title-holder {
      margin-bottom: -15px;
    }
  
    .image-processing-container {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>
  