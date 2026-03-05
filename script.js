// Run this code after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Simple mobile navigation toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("nav-links--open");
    });

    // Close the mobile menu when a link is clicked
    navLinks.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        navLinks.classList.remove("nav-links--open");
      }
    });
  }

  // Set the current year in the footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

