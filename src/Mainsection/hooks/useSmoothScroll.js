import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navigator');

    const handleClick = (e) => {
      e.preventDefault();
      const target = e.target;
      let id = null;

      if (target.classList.contains('start') && target.classList.contains('nav-link')) {
        const parent = target.parentElement?.parentElement;
        id = parent?.getAttribute('data-target') || null;
      } else if (target.classList.contains('mains-nav-item')) {
        id = target.parentElement?.getAttribute('data-target') || null;
      }

      const section = id ? document.getElementById(id) : null;
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    navLinks.forEach(link => link.addEventListener('click', handleClick));

    return () => {
      navLinks.forEach(link => link.removeEventListener('click', handleClick));
    };
  }, []);
}
