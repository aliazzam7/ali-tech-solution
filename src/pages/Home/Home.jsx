import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../assets/images/herormv.png";
import {
  ArrowUpRight,
  Zap,
  ShieldCheck,
  Layers,
  Sparkles,
  LifeBuoy,
  Globe,
  ListChecks,
  FolderKanban,
  CalendarClock,
  Users,
  Award,
  Smile,
} from "lucide-react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import serviceCategories from "../../data/services";
import projects from "../../data/projects";
import testimonials from "../../data/testimonials";
import siteConfig from "../../data/siteConfig";
import { useCountUp } from "../../hooks/useScrolled";
import "./Home.css";

const reasons = [
  { icon: Zap, title: "Fast Delivery", text: "Clear milestones and no scope drift — your project ships on the timeline we agree on." },
  { icon: ShieldCheck, title: "Secure Development", text: "Security is built in from the first line of code, not bolted on at the end." },
  { icon: Layers, title: "Scalable Solutions", text: "Architecture that holds up as your users, data, and traffic grow." },
  { icon: Sparkles, title: "Modern UI/UX", text: "Interfaces people enjoy using, designed around your actual audience." },
  { icon: LifeBuoy, title: "Ongoing Support", text: "Post-launch support and maintenance plans so nothing is left behind." },
  { icon: Globe, title: "Professional Communication", text: "Straightforward updates at every stage — no jargon, no guessing." },
];

const stats = [
  { icon: ListChecks, value: 120, suffix: "+", label: "Tasks Completed", color: "blue" },
  { icon: FolderKanban, value: 30, suffix: "+", label: "Projects Delivered", color: "purple" },
  { icon: CalendarClock, value: 3, suffix: "+", label: "Years of Experience", color: "pink" },
  { icon: Users, value: 25, suffix: "+", label: "Happy Clients", color: "blue" },
  { icon: Award, value: 11, suffix: "+", label: "Certifications", color: "purple" },
  { icon: Smile, value: 98, suffix: "%", label: "Client Satisfaction", color: "pink" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="hero sec-a">
      <div className="hero-grid-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Turning Ideas into <span className="grad-text">Smart Digital Solutions.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            {siteConfig.heroDescription}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            <Link to="/contact" className="btn btn-primary">Start Your Project <ArrowUpRight size={17} /></Link>
            <Link to="/portfolio" className="btn btn-ghost">View Portfolio</Link>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
        >
          <img
            src={heroImg}
            alt="AI, web, mobile and cybersecurity solutions"
            className="hero-image"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section sec-b">
      <div className="container">
        <SectionHeading eyebrow="What We Build" title="Four disciplines. One team." description="Every engagement draws on the same core stack — AI, web, mobile, and security — so nothing gets handed off between disconnected vendors." />
        <div className="grid-cols g-4">
          {serviceCategories.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="section why-section sec-a">
      <div className="container">
        <SectionHeading eyebrow="Why Ali Tech Solution" title="Built like an agency, run like a partner." />
        <div className="grid-cols g-3">
          {reasons.map((r) => (
            <div className="why-card" key={r.title}>
              <r.icon size={20} className="why-card-icon" />
              <h4>{r.title}</h4>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const featured = projects.slice(0, 3);
  return (
    <section className="section featured-section sec-b">
      <div className="container">
        <SectionHeading eyebrow="Selected Work" title="Featured Projects" />
        <div className="grid-cols g-3">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <div className="featured-cta">
          <Link to="/portfolio" className="btn btn-ghost">View More Projects <ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats-section sec-a">
      <div className="container stats-grid">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ icon: Icon, value, suffix, label, color }) {
  const count = useCountUp(value, 1400, true);
  return (
    <div className={`stat-item stat-${color}`}>
      <div className="stat-icon-wrap">
        <Icon size={22} className="stat-icon" />
      </div>
      <span className="stat-value">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function Testimonials() {
  const preview = testimonials.slice(0, 3);
  return (
    <section className="section testimonials-section sec-b">
      <div className="container">
        <SectionHeading eyebrow="Client Feedback" title="What partners are saying" />
        <div className="grid-cols g-3">
          {preview.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
        <div className="featured-cta">
          <Link to="/feedbacks" className="btn btn-ghost">More Feedback <ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section cta-section sec-a">
      <div className="container">
        <div className="cta-box glass">
          <h2>Ready to build your next project?</h2>
          <p>Let's discuss your idea today — no pressure, just a clear plan forward.</p>
          <Link to="/contact" className="btn btn-primary">Start Your Project <ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}