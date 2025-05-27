// script.js

// Initialize AOS animations
AOS.init({ once: true });

// Mobile menu toggle
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
