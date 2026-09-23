// Run after DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // --- Mobile nav toggle ---
  var menuToggle = document.querySelector(".menu-toggle");
  var navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("nav-links--open");
    });

    navLinks.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        navLinks.classList.remove("nav-links--open");
      }
    });
  }

  // --- Footer year ---
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- Hero typing effect ---
  var typerEl = document.getElementById("hero-typer");
  if (!typerEl) return;

  var cursorEl = document.querySelector(".typer-cursor");
  var fullText = "Computer Science • Software development • Problem solving • Calisthenics";
  var index = 0;
  var typingSpeed = 45;
  var delayBeforeStart = 600;
  var hideCursorDelay = 400;

  function typeNext() {
    if (index <= fullText.length) {
      typerEl.textContent = fullText.slice(0, index);
      index++;
      setTimeout(typeNext, typingSpeed);
    } else if (cursorEl) {
      setTimeout(function () {
        cursorEl.classList.add("typer-cursor--hidden");
      }, hideCursorDelay);
    }
  }

  setTimeout(typeNext, delayBeforeStart);
});
