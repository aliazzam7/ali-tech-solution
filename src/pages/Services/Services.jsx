import { Link } from "react-router-dom";
import { ChevronRight, ArrowUpRight, BrainCircuit, Globe, Smartphone, ShieldCheck } from "lucide-react";
import serviceCategories from "../../data/services";
import "./Services.css";

const iconMap = { BrainCircuit, Globe, Smartphone, ShieldCheck };

export default function Services() {
  return (
    <>
      <section className="page-hero container">
        <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>Services</span></div>
        <span className="eyebrow">What We Do</span>
        <h1>Services built to <span className="grad-text">ship and hold up.</span></h1>
        <p>Four core disciplines, one accountable team. Pick a service below to see what's included, who it's for, and how the engagement works.</p>
      </section>

      <div className="container services-list">
        {serviceCategories.map((service) => (
          <ServiceDetail key={service.id} service={service} />
        ))}
      </div>
    </>
  );
}

function ServiceDetail({ service }) {
  const Icon = iconMap[service.icon] || BrainCircuit;
  return (
    <section id={service.id} className="service-detail glass">
      <div className="service-detail-header">
        <div className="service-detail-icon"><Icon size={24} /></div>
        <div>
          <h2>{service.title}</h2>
          <p>{service.shortDescription}</p>
        </div>
      </div>

      <div className="service-detail-grid">
        <div>
          <h4>What's Offered</h4>
          <p>{service.whatIsOffered}</p>
        </div>
        <div>
          <h4>Who It's For</h4>
          <p>{service.whoItsFor}</p>
        </div>
      </div>

      <div className="service-detail-tags">
        <h4>Technologies</h4>
        <div className="pill-row">
          {service.technologies.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>

      <div className="service-detail-workflow">
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

      <Link to="/contact" className="btn btn-primary">Request a Quote <ArrowUpRight size={16} /></Link>
    </section>
  );
}
