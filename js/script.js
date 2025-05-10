const toggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

toggle.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});
