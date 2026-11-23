import { Link } from "react-router-dom";
import { BrainCircuit, Globe, Smartphone, ShieldCheck, Megaphone, UserCheck, GraduationCap, ArrowUpRight } from "lucide-react";
import serviceImages from "../../data/serviceImages";
import "./ServiceCard.css";

const iconMap = { BrainCircuit, Globe, Smartphone, ShieldCheck, Megaphone, UserCheck, GraduationCap };

export default function ServiceCard({ service, compact = false }) {
  const Icon = iconMap[service.icon] || BrainCircuit;
  const image = serviceImages[service.id];

  return (
    <div className={`service-card glass ${compact ? "is-compact" : ""}`}>
      {image && !compact ? (
        <div className="service-card-media">
          <img src={image} alt={service.title} loading="lazy" width="1200" height="750" />
        </div>
      ) : (
        <div className="service-card-icon"><Icon size={22} /></div>
      )}
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
// import { Link } from "react-router-dom";
// import { BrainCircuit, Globe, Smartphone, ShieldCheck, ArrowUpRight } from "lucide-react";
// import "./ServiceCard.css";

// const iconMap = { BrainCircuit, Globe, Smartphone, ShieldCheck };

// export default function ServiceCard({ service, compact = false }) {
//   const Icon = iconMap[service.icon] || BrainCircuit;
//   return (
//     <div className={`service-card glass ${compact ? "is-compact" : ""}`}>
//       <div className="service-card-icon"><Icon size={22} /></div>
//       <h3>{service.title}</h3>
//       <p>{service.shortDescription}</p>
//       {!compact && (
//         <ul className="service-card-items">
//           {service.items.slice(0, 4).map((item) => (
//             <li key={item}>{item}</li>
//           ))}
//         </ul> 
//       )}
//       <Link to={`/services#${service.id}`} className="service-card-link">
//         Learn more <ArrowUpRight size={15} />
//       </Link>
//     </div>
//   );
// }
