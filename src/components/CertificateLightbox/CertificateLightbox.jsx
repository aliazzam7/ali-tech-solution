import { useEffect } from "react";
import { X } from "lucide-react";
import "./CertificateLightbox.css";

export default function CertificateLightbox({ cert, onClose }) {
  useEffect(() => {
    if (!cert) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <X size={22} />
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={cert.image} alt={cert.name} />
        <div className="lightbox-caption">
          <h4>{cert.name}</h4>
          <p>{cert.organization} · {cert.issueDate}</p>
        </div>
      </div>
    </div>
  );
}