import { Link } from "react-router-dom";
import { ChevronRight, Mail, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import ContactForm from "../../components/ContactForm/ContactForm";
import siteConfig from "../../data/siteConfig";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section className="page-hero container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={13} />
          <span>Start Your Project</span>
        </div>
        <span className="eyebrow">Let's Build Your Idea</span>
        <h1>
          Start Your <span className="grad-text">Project.</span>
        </h1>
        <p>
          Tell us about your idea and we'll get back to you with next steps —
          usually within 24 hours.
        </p>

        <ul className="hero-trust-row" aria-label="What to expect">
          <li>
            <ShieldCheck size={16} />
            No commitment, just a conversation
          </li>
          <li>
            <Clock size={16} />
            Reply within 24 hours
          </li>
        </ul>
      </section>

      <div className="container contact-grid">
        <ContactForm />

        <aside className="contact-side" aria-label="Other ways to reach us">
          <div className="contact-side-card glass">
            <span className="contact-side-icon">
              <Mail size={18} />
            </span>
            <div>
              <h4>Email</h4>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
          </div>

          <div className="contact-side-card glass">
            <span className="contact-side-icon">
              <MessageCircle size={18} />
            </span>
            <div>
              <h4>WhatsApp</h4>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message directly
              </a>
            </div>
          </div>

          <div className="contact-side-card glass">
            <span className="contact-side-icon">
              <Clock size={18} />
            </span>
            <div>
              <h4>Response Time</h4>
              <p>Usually within 24 hours</p>
            </div>
          </div>

          <p className="contact-side-note">
            Prefer a quick chat instead of a form? Reach out on WhatsApp and
            we'll pick it up from there.
          </p>
        </aside>
      </div>
    </>
  );
}
