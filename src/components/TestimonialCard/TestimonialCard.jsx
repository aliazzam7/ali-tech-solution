import { Quote } from "lucide-react";
import "./TestimonialCard.css";

function getInitials(name = "") {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card glass">
      <div className="testimonial-card-topbar" />
      <Quote size={54} className="testimonial-card-icon" />
      <p className="testimonial-card-quote">{testimonial.quote}</p>
      <div className="testimonial-card-author">
        <div className="testimonial-card-avatar">
          {getInitials(testimonial.name)}
        </div>
        <div className="testimonial-card-author-info">
          <span className="testimonial-card-name">{testimonial.name}</span>
          <span className="testimonial-card-role">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
}