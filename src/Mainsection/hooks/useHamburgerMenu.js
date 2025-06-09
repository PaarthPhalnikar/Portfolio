import { useEffect } from 'react';

export function useHamburgerMenu() {
  useEffect(() => {
    const container = document.querySelector("#navbarSupportedContent");
    const toggleBtn = document.getElementsByClassName('navbar-toggler')[0];
    const downloadBtn = document.getElementsByClassName('dow')[0];
    const checkbox = document.querySelector("#ch");

    const closeMenu = () => {
      if (container.classList.contains('show')) {
        container.classList.remove('show');
        if (checkbox) {
          checkbox.checked = false;
        }
      }
    };

    const toggleMenu = () => {
      if (!container || !checkbox) return;

      if (container.classList.contains('show') || checkbox.checked) {
        container.classList.remove('show');
        checkbox.checked = false;
      } else {
        container.classList.add('show');
        checkbox.checked = true;
      }
    };

    downloadBtn.addEventListener('click', toggleMenu);
    window.addEventListener('click', closeMenu);

    return () => {
      downloadBtn.removeEventListener('click', toggleMenu);
      window.removeEventListener('click', closeMenu);
    };
  }, []);
}
