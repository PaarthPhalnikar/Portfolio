import { useEffect } from 'react';

export function useNavbarScrollSpy() {
  useEffect(() => {
    const container = document.querySelector("#navbarSupportedContent");
    const toggleBtn = document.querySelector('.navbar-toggler');
    const downloadBtn = document.querySelector('.dow');
    const checkbox = document.querySelector("#ch");
    const toggleMenu = (e) => {
      e.stopPropagation();
      if (container.classList.contains('show') || checkbox.checked) {
        container.classList.remove('show');
        checkbox.checked = false;
      } else {
        container.classList.add('show');
        checkbox.checked = true;
      }
    };

    const closeMenu = (e) => {
      if (!container.contains(e.target) && e.target !== toggleBtn && e.target !== downloadBtn) {
        container.classList.remove('show');
        checkbox.checked = false;
      }
    };

    const scrollSpy = () => {
      const scrollPosition = window.scrollY + 200;
      document.querySelectorAll('.navigator').forEach(link => {
        const id = link.getAttribute('data-target');
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          document.querySelectorAll('.navigator.active').forEach(active => {
            active.classList.remove('active');
          });
          link.classList.add('active');
        }
      });
    };

    downloadBtn.addEventListener('click', toggleMenu);
    downloadBtn.addEventListener('click', closeMenu);
    window.addEventListener('click', closeMenu);
    window.addEventListener('scroll', scrollSpy);
    window.addEventListener('load', scrollSpy);

    return () => {
      downloadBtn.removeEventListener('click', toggleMenu);
      downloadBtn.removeEventListener('click', closeMenu);
      window.removeEventListener('click', closeMenu);
      window.removeEventListener('scroll', scrollSpy);
      window.removeEventListener('load', scrollSpy);
    };
  }, []);
}

