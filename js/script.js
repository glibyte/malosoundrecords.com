const toggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const header = document.querySelector('header');

toggle.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
  header.classList.toggle('menu-open');
});

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});