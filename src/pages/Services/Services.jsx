import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight, ChevronDown, ArrowUpRight,
  BrainCircuit, Globe, Smartphone, ShieldCheck, Megaphone, UserCheck, GraduationCap,
} from "lucide-react";
import serviceCategories from "../../data/services";
import serviceImages from "../../data/serviceImages";
import siteConfig from "../../data/siteConfig";
import community from "../../data/community";
import "./Services.css";

const iconMap = { BrainCircuit, Globe, Smartphone, ShieldCheck, Megaphone, UserCheck, GraduationCap };

export default function Services() {
  return (
    <>
      <section className="page-hero container">
        <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>Services</span></div>
        <span className="eyebrow">What We Do</span>
        <h1>Services built to <span className="grad-text">ship and hold up.</span></h1>
        <p>From web, mobile, AI, and security to ads, account recovery, and final year projects — one accountable team. Tap Details on any service to see what's included.</p>
      </section>

      <div className="container services-list">
        {serviceCategories.map((service) => (
          <ServiceDetail key={service.id} service={service} />
        ))}
      </div>

      <section className="container community-banner glass">
        <div className="community-banner-media">
          <img src={serviceImages.learning} alt={community.title} loading="lazy" width="1200" height="750" />
        </div>
        <div className="community-banner-body">
          <span className="eyebrow">Community</span>
          <h2>{community.title}</h2>
          <p>{community.shortDescription}</p>
          <ul className="service-detail-items">
            {community.items.map((i) => <li key={i} className="tag">{i}</li>)}
          </ul>
          <p className="service-detail-note">{community.note}</p>
          <div className="service-detail-actions">
            <a href={siteConfig.communityUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Join the Community <ArrowUpRight size={16} />
            </a>
            <Link to="/" className="btn btn-ghost">See current offers</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceDetail({ service }) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[service.icon] || BrainCircuit;
  const image = serviceImages[service.id];

  return (
    <section id={service.id} className="service-detail glass">
      <div className="service-detail-media">
        {image && <img src={image} alt={service.title} loading="lazy" width="1200" height="750" />}
      </div>

      <div className="service-detail-body">
        <div className="service-detail-title">
          <span className="service-detail-icon"><Icon size={20} /></span>
          <h2>{service.title}</h2>
        </div>

        <p className="service-detail-lead">{service.shortDescription}</p>

        <ul className="service-detail-items">
          {service.items.slice(0, 4).map((item) => (
            <li key={item} className="tag">{item}</li>
          ))}
        </ul>

        <div className="service-detail-actions">
          <Link to="/contact" className="btn btn-primary">Request a Quote <ArrowUpRight size={16} /></Link>
          <button
            type="button"
            className={`btn btn-ghost service-detail-toggle ${open ? "is-open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
          >
            {open ? "Hide details" : "Details"} <ChevronDown size={16} />
          </button>
        </div>

        {open && (
          <div className="service-detail-more">
            <div>
              <h4>What's Offered</h4>
              <p>{service.whatIsOffered}</p>
            </div>
            <div>
              <h4>Who It's For</h4>
              <p>{service.whoItsFor}</p>
            </div>
            {service.technologies?.length > 0 && (
              <div>
                <h4>Technologies</h4>
                <div className="pill-row">
                  {service.technologies.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            )}
            <div>
              <h4>Workflow</h4>
              <div className="workflow-steps">
                {service.workflow.map((step, i) => (
                  <div className="workflow-step" key={step}>
                    <span className="workflow-step-num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// import { Link } from "react-router-dom";
// import { ChevronRight, ArrowUpRight, BrainCircuit, Globe, Smartphone, ShieldCheck } from "lucide-react";
// import serviceCategories from "../../data/services";
// import "./Services.css";

// const iconMap = { BrainCircuit, Globe, Smartphone, ShieldCheck };

// export default function Services() {
//   return (
//     <>
//       <section className="page-hero container">
//         <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>Services</span></div>
//         <span className="eyebrow">What We Do</span>
//         <h1>Services built to <span className="grad-text">ship and hold up.</span></h1>
//         <p>Four core disciplines, one accountable team. Pick a service below to see what's included, who it's for, and how the engagement works.</p>
//       </section>

//       <div className="container services-list">
//         {serviceCategories.map((service) => (
//           <ServiceDetail key={service.id} service={service} />
//         ))}
//       </div>
//     </>
//   );
// }

// function ServiceDetail({ service }) {
//   const Icon = iconMap[service.icon] || BrainCircuit;
//   return (
//     <section id={service.id} className="service-detail glass">
//       <div className="service-detail-header">
//         <div className="service-detail-icon"><Icon size={24} /></div>
//         <div>
//           <h2>{service.title}</h2>
//           <p>{service.shortDescription}</p>
//         </div>
//       </div>

//       <div className="service-detail-grid">
//         <div>
//           <h4>What's Offered</h4>
//           <p>{service.whatIsOffered}</p>
//         </div>
//         <div>
//           <h4>Who It's For</h4>
//           <p>{service.whoItsFor}</p>
//         </div>
//       </div>

//       <div className="service-detail-tags">
//         <h4>Technologies</h4>
//         <div className="pill-row">
//           {service.technologies.map((t) => <span key={t} className="tag">{t}</span>)}
//         </div>
//       </div>

//       <div className="service-detail-workflow">
//         <h4>Workflow</h4>
//         <div className="workflow-steps">
//           {service.workflow.map((step, i) => (
//             <div className="workflow-step" key={step}>
//               <span className="workflow-step-num">{String(i + 1).padStart(2, "0")}</span>
//               <span>{step}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Link to="/contact" className="btn btn-primary">Request a Quote <ArrowUpRight size={16} /></Link>
//     </section>
//   );
// }
