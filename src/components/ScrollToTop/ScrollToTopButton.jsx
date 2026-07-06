import { ArrowUp } from "lucide-react";
import { useScrolled } from "../../hooks/useScrolled";
import "./ScrollToTop.css";

export default function ScrollToTopButton() {
  const visible = useScrolled(480);
  return (
    <button
      className={`scroll-top-btn ${visible ? "is-visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
