import { useEffect } from "react";

export default function useNavbarHeight(selector = "nav, .navbar, header") {
  useEffect(() => {
    const navEl = document.querySelector(selector);
    if (!navEl) return;

    const setHeight = () => {
      const height = navEl.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${height}px`
      );
    };

    setHeight();

    const resizeObserver = new ResizeObserver(setHeight);
    resizeObserver.observe(navEl);

    window.addEventListener("resize", setHeight);
    window.addEventListener("orientationchange", setHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", setHeight);
      window.removeEventListener("orientationchange", setHeight);
    };
  }, [selector]);
}