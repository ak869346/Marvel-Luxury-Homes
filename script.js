document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});


// for Carousel part

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
  
    carousels.forEach((carousel) => {
      const images = carousel.querySelectorAll('.carousel-img');
      let index = 0;
  
      const showImage = (i) => {
        images.forEach((img, idx) => {
          img.classList.toggle('active', idx === i);
        });
      };
  
      // Initial image
      showImage(index);
  
      // Auto-slide every 3 seconds
      setInterval(() => {
        index = (index + 1) % images.length;
        showImage(index);
      }, 3000); // change every 3 seconds
    });
  });
  