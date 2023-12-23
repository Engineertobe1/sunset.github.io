// Get the parallax container and all the parallax images
const parallaxContainer = document.querySelector('.parallax-container');
const images = document.querySelectorAll('.image');

// Function to handle scroll event
function handleScroll() {
  let scrollTop = window.scrollY;

  // Loop through each image and apply parallax effect
  images.forEach((image, index) => {
    let speed = (index + 1) * 0.3; // Adjust speed as needed
    let yOffset = -(scrollTop * speed);
    image.style.transform = `translateY(${yOffset}px)`;
  });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Hamburger menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
