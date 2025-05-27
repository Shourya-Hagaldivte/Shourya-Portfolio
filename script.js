// script.js

// Animate On Scroll
AOS.init({ once: true });

// Mobile menu toggle
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Custom pointer movement
const pointer = document.getElementById('pointer');
document.addEventListener('mousemove', (e) => {
  pointer.style.left = e.clientX + 'px';
  pointer.style.top  = e.clientY + 'px';
});
