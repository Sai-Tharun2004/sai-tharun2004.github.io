// Smooth scroll for navigation
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth"
      });
    }
  });
});

// Fade-in effect when sections enter viewport
const faders = document.querySelectorAll(".fade-in, .card");
const options = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Dark mode toggle
const toggleButton = document.getElementById("darkModeToggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleButton.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Initial animation on load
window.addEventListener("load", () => {
  document.querySelector("header h1").classList.add("visible");
  document.querySelector("header p").classList.add("visible");
});

