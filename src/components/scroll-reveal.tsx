"use client";

import { useEffect } from "react";

// Progressive-enhancement scroll reveal: sections start visible (no-JS safe),
// then JS hides below-the-fold ones and fades them in as they enter view.
export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section"));
    if (!sections.length) return;

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    sections.forEach((section) => {
      // Leave content already in view untouched to avoid a load-time flash.
      if (section.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      section.setAttribute("data-reveal", "");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
