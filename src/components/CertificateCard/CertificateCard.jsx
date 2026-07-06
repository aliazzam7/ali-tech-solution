import { ExternalLink } from "lucide-react";
import "./CertificateCard.css";

export default function CertificateCard({ cert, onView }) {
  return (
    <div className="cert-card glass">
      <div className="cert-card-thumb">
        <img src={cert.image} alt={cert.name} loading="lazy" />
        <button
          type="button"
          onClick={() => onView(cert)}
          aria-label={`View credential: ${cert.name}`}
          className="cert-card-overlay"
        >
          <ExternalLink size={18} />
          <span>View Certificate</span>
        </button>
      </div>

      <div className="cert-card-body">
        <span className="cert-card-category">{cert.category}</span>
        <h4>{cert.name}</h4>
        <p>
          {cert.organization} · {cert.issueDate}
        </p>
      </div>
    </div>
  );
}