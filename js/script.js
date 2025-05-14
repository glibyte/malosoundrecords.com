document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const header = document.querySelector('header');

  window.addEventListener('load', () => {
    const video = document.getElementById('bg-video');
    const isDesktop = window.innerWidth >= 768;

    // Set poster image
    video.poster = isDesktop
      ? 'img/hero-fallback-desktop.webp'
      : 'img/hero-fallback-mobile.webp';

    // Set video source
    const source = document.createElement('source');
    source.src = isDesktop
      ? 'video/hero-video-720.mp4'
      : 'video/hero-video-540.mp4';
    source.type = 'video/mp4';

    video.appendChild(source);
    video.muted = true;
    video.load();
    video.play().catch(() => { }); // Silenciar errores si autoplay falla
  });

  // Toggle menú móvil
  toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
    header.classList.toggle('menu-open');
  });

  // Cambiar estilo del header al hacer scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Reemplazo de placeholders de YouTube
  const placeholders = document.querySelectorAll(".youtube-placeholder");

  placeholders.forEach(el => {
    const videoId = el.dataset.videoId;
    const videoTitle = el.dataset.videoTitle || "Video"; // fallback
    const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    const localthumbnail = `img/thumbnail/${videoId}/hqdefault.jpg`;

    el.style.backgroundImage = `url('${localthumbnail}')`;

    // Accesibilidad
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", `Reproducir video: ${videoTitle}`);

    // Click y teclado
    const activateVideo = () => {
      const iframe = document.createElement("iframe");
      iframe.setAttribute("title", `YouTube video: ${videoTitle}`);
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
    };

    el.addEventListener("click", activateVideo);

    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activateVideo();
      }
    });
  });
});
