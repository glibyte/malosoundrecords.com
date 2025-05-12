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

  document.addEventListener("DOMContentLoaded", function () {
    const placeholders = document.querySelectorAll(".youtube-placeholder");

    placeholders.forEach(el => {
      const videoId = el.dataset.videoId;
      const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
      el.style.backgroundImage = `url('${thumbnail}')`;

      el.addEventListener("click", () => {
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1`);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("loading", "lazy");
        iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.position = "absolute";
        iframe.style.top = "0";
        iframe.style.left = "0";

        el.innerHTML = "";
        el.appendChild(iframe);
      });
    });
  });