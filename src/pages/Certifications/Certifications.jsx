import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import certificates from "../../data/certificates";
import CertificateCard from "../../components/CertificateCard/CertificateCard";
import CertificateLightbox from "../../components/CertificateLightbox/CertificateLightbox";
import "./Certifications.css";

export default function Certifications() {
  const categories = useMemo(
    () => ["All", ...new Set(certificates.map((c) => c.category))],
    []
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCert, setActiveCert] = useState(null);

  const filtered =
    activeCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  return (
    <>
      <section className="page-hero container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={13} />
          <span>Certifications</span>
        </div>
        <span className="eyebrow">Credentials</span>
        <h1>
          Verified skills, <span className="grad-text">not just claims.</span>
        </h1>
        <p>
          {certificates.length} certifications spanning security, full-stack
          development, AI, DevOps, and professional growth.
        </p>
      </section>

      <div className="container">
        <div className="org-strip">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tag filter-tag ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="certs-grid">
          {filtered.map((c) => (
            <CertificateCard key={c.id} cert={c} onView={setActiveCert} />
          ))}
        </div>
      </div>

      <CertificateLightbox cert={activeCert} onClose={() => setActiveCert(null)} />
    </>
  );
}