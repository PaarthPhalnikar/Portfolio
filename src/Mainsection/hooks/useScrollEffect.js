import { useLayoutEffect } from "react";

export function useScrollEffect() {
  useLayoutEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const change = document.getElementById("switchs");
      if (!header || !change) return;

      if (window.scrollY > 40) {
        header.classList.add("scrolled");
        change.classList.add("style_switcher");
      } else {
        header.classList.remove("scrolled");
        change.classList.remove("style_switcher");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}