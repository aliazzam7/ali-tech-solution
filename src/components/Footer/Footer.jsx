import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaTwitter,
  FaXTwitter,
  FaFacebook,
  FaYoutube,
  FaDribbble,
  FaBehance,
} from "react-icons/fa6";
import navigation from "../../data/navigation";
import socials from "../../data/socials";
import siteConfig from "../../data/siteConfig";
import serviceCategories from "../../data/services";
import logo from "../../assets/logo/logormv.png";
import "./Footer.css";

const iconMap = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  WhatsApp: FaWhatsapp,
  Twitter: FaTwitter,
  X: FaXTwitter,
  Facebook: FaFacebook,
  Youtube: FaYoutube,
  Dribbble: FaDribbble,
  Behance: FaBehance,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Ali Tech Solution" className="footer-logo-img" />
          </Link>

          <p className="footer-tagline">{siteConfig.tagline}</p>

          <div className="footer-status">
            <span className="footer-status-dot"></span>
            Available 24/7 — we reply fast
          </div>

          <div className="footer-socials">
            {socials.map((s) => {
              const Icon = iconMap[s.icon];
              if (!Icon) {
                return null;
              }
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="footer-social-link"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <nav className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {navigation.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-col">
          <h4>Services</h4>
          <ul>
            {serviceCategories.map((service) => (
              <li key={service.id}>
                <Link to={`/services#${service.id}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-touch-card glass">
          <h4>Get in Touch</h4>

          <a href={`mailto:${siteConfig.email}`} className="footer-touch-item">
            <span className="footer-touch-icon">
              <Mail size={16} />
            </span>
            <div className="footer-touch-text">
              <span className="footer-touch-label">Email</span>
              <span className="footer-touch-value">{siteConfig.email}</span>
            </div>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-touch-item"
          >
            <span className="footer-touch-icon">
              <FaWhatsapp size={16} />
            </span>
            <div className="footer-touch-text">
              <span className="footer-touch-label">WhatsApp</span>
              <span className="footer-touch-value">Chat with us</span>
            </div>
          </a>

          
          <Link to="/contact" className="footer-touch-btn">
            Start a Project
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>&copy; {year} Ali Tech Solution. All rights reserved.</span>
          <span className="footer-bottom-divider">&bull;</span>
          <span>Built by Ali Azzam, Owner of Ali Tech Solution</span>
        </div>
      </div>
    </footer>
  );
}