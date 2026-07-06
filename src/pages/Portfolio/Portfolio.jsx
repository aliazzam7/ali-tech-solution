import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import projects from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Portfolio.css";

const FILTERS = ["All", "AI", "Web", "Mobile", "Cybersecurity"];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="page-hero container">
        <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>Portfolio</span></div>
        <span className="eyebrow">Selected Work</span>
        <h1>Projects across <span className="grad-text">AI, web, mobile &amp; security.</span></h1>
        <p>A sample of what's shipped so far. Filter by category to see relevant work for your project type.</p>
      </section>

      <div className="container">
        <div className="portfolio-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`pill ${active === f ? "is-selected" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <p className="portfolio-note">
          Screenshots shown are a small selection from each project, not the full application — every project involves significantly more work, pages, and features than what's pictured here.
        </p>

        {filtered.length === 0 ? (
          <div className="portfolio-empty glass">
            <p>No projects in this category yet — check back soon or ask about one directly.</p>
          </div>
        ) : (
          <div className="grid-cols g-4 portfolio-grid">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
