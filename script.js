// Hamburger menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Slideshow functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 3000); // Change slide every 3 seconds (adjust as needed)
}

showSlides();

// Functions for slide navigation using arrows
function plusSlides(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach(slide => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
}
