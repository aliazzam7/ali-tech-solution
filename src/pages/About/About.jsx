import { motion } from "framer-motion";
import { ChevronRight, MapPin } from "lucide-react";
import experience from "../../data/experience";
import skills from "../../data/skills";
import siteConfig from "../../data/siteConfig";
import { Link } from "react-router-dom";
import profileImg from "../../assets/images/Me/profile.jpeg";
import "./About.css";

export default function About() {
  return (
    <>
      <section className="page-hero container">
        <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>About</span></div>
        <span className="eyebrow">About</span>
        <h1>Meet <span className="grad-text">{siteConfig.founder}</span>.</h1>
        <p>
          Full-Stack Developer and Cybersecurity Ambassador specializing in AI-powered applications,
          secure web platforms, and cross-platform mobile apps. I turn ideas into production-ready
          software that businesses can confidently scale on.
        </p>
      </section>

      <section className="section about-intro">
        <div className="container about-intro-grid">
          <motion.div
            className="about-portrait glass"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={profileImg} alt="Ali Azzam" className="about-portrait-img" />
          </motion.div>
          <div>
            <span className="eyebrow">Mission</span>
            <h2>Ideas deserve solid engineering — and solid security.</h2>
            <p className="about-lead">
              Every project starts with the same question: what does this business actually need to
              move forward? From there, I build with React, Flutter, Firebase, and Laravel, layering in
              AI features and cybersecurity best practices — so what ships is fast, usable, and safe to
              grow on.
            </p>
            <span className="eyebrow" style={{ marginTop: 26, display: "inline-flex" }}>Vision</span>
            <p className="about-lead">
              To be the one technical partner startups and organizations call on — for full-stack
              development, AI integration, mobile apps, and security — instead of stitching together
              separate freelancers for each piece.
            </p>
            <div className="about-location"><MapPin size={16} /> {siteConfig.location}</div>
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <span className="eyebrow">Experience</span>
          <h2 className="timeline-title">A quick history</h2>
          {/* ===== Timeline section ===== */}
<div className="timeline">
  {experience.map((e, i) => (
    <motion.div
      className="timeline-item"
      key={e.year}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
    >
      <div className="timeline-marker" />
      <div className="timeline-content">
        <span className="timeline-date">{e.year}</span>
        <h4>{e.title}</h4>
        <p>{e.description}</p>
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </section>

   {/* ===== Skills section ===== */}
<section className="section skills-section">
  <div className="container">
    <span className="eyebrow">Toolkit</span>
    <h2 className="timeline-title">Skills</h2>

    {Object.entries(
      skills.reduce((acc, s) => {
        acc[s.category] = acc[s.category] || [];
        acc[s.category].push(s);
        return acc;
      }, {})
    ).map(([category, items], i) => (
      <motion.div
        className="skills-group"
        key={category}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.05 }}
      >
        <h3 className="skills-group-title">{category}</h3>
        <div className="skills-chip-row">
          {items.map((s) => (
            <span className="skill-chip" key={s.name}>
              {s.name}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>
    </>
  );
}