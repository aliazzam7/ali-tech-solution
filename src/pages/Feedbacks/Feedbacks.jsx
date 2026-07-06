import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import testimonials from "../../data/testimonials";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import "./Feedbacks.css";

export default function Feedbacks() {
  return (
    <>
      <section className="page-hero container">
        <div className="breadcrumb"><Link to="/">Home</Link><ChevronRight size={13} /><span>Feedbacks</span></div>
        <span className="eyebrow">Client Feedback</span>
        <h1>What partners say <span className="grad-text">after working with us.</span></h1>
        <p>Every project ends with a conversation about what worked. Here's what clients across AI, web, mobile, and security engagements had to say.</p>
      </section>

      <div className="container">
        {testimonials.length === 0 ? (
          <div className="portfolio-empty glass">
            <p>No feedback published yet — check back soon.</p>
          </div>
        ) : (
          <div className="grid-cols g-3 feedbacks-grid">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}