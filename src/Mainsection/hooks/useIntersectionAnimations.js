import { useEffect } from "react";

const animationClasses = ['fade-in-right', 'fade-in-left', 'fade-in-up','intialRightLi'];

export function useIntersectionAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    });

    animationClasses.forEach(className => {
      document.querySelectorAll(`.${className}`).forEach(el => {
        observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, []);
}