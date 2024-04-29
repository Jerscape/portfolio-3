document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Function to change slide
  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  // Attach listeners to next/previous buttons
  document.querySelector('.prev').addEventListener('click', function() {
      plusSlides(-1);
  });
  document.querySelector('.next').addEventListener('click', function() {
      plusSlides(1);
  });

  // Main function to display the correct slide
  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("project");
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
  }

  // Hamburger menu toggle functionality
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.top-nav-menu');

  hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
  });

});



