import { Link } from "react-router-dom";
import { BrainCircuit, Globe, Smartphone, ShieldCheck, ArrowUpRight } from "lucide-react";
import "./ServiceCard.css";

const iconMap = { BrainCircuit, Globe, Smartphone, ShieldCheck };

export default function ServiceCard({ service, compact = false }) {
  const Icon = iconMap[service.icon] || BrainCircuit;
  return (
    <div className={`service-card glass ${compact ? "is-compact" : ""}`}>
      <div className="service-card-icon"><Icon size={22} /></div>
      <h3>{service.title}</h3>
      <p>{service.shortDescription}</p>
      {!compact && (
        <ul className="service-card-items">
          {service.items.slice(0, 4).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <Link to={`/services#${service.id}`} className="service-card-link">
        Learn more <ArrowUpRight size={15} />
      </Link>
    </div>
  );
}
