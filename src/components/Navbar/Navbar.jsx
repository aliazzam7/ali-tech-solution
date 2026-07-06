import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import navigation from "../../data/navigation";
import { useScrolled } from "../../hooks/useScrolled";
import logo from "../../assets/logo/logormv.png";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(16);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="Ali Tech Solution" className="navbar-logo-img" />
          <span className="navbar-logo-text">
            Ali<span className="grad-text"> Tech</span>
            <em>Solution</em>
          </span>
        </Link>

        <nav className="navbar-links" aria-label="Primary">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `navbar-link ${isActive ? "is-active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="btn btn-primary btn-sm navbar-cta">
          Start Your Project <ArrowUpRight size={16} />
        </Link>

        <button
          className="navbar-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`navbar-mobile ${open ? "is-open" : ""}`}>
        <nav className="navbar-mobile-links" aria-label="Mobile">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `navbar-mobile-link ${isActive ? "is-active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary btn-block"
            style={{ marginTop: 8 }}
          >
            Start Your Project
          </Link>
        </nav>
      </div>
    </header>
  );
}