// Toggle mobile menu
const toggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", !expanded);
});

// Scroll-based reveal effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-up');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .about-text, .about-image').forEach(el => {
  el.classList.add('fade-init');
  observer.observe(el);
});

// Skills tab switching logic
function showSkill(skillId) {
  document.querySelectorAll('.skill-box').forEach(box => {
    box.classList.remove('active-box');  // FIXED
  });

  const selectedBox = document.getElementById(skillId);
  if (selectedBox) {
    selectedBox.classList.add('active-box');  // FIXED
  }

  document.querySelectorAll('.skillstype button').forEach(button => {
    button.classList.remove('active-tab');
    if (button.getAttribute('data-target') === skillId) {
      button.classList.add('active-tab');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skillstype button').forEach(button => {
    button.addEventListener('click', () => {
      showSkill(button.getAttribute('data-target'));
    });
  });

  showSkill('programming'); // default tab
});
