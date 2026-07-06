import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found container">
      <span className="eyebrow">Error 404</span>
      <h1>Page not <span className="grad-text">found.</span></h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn btn-primary"><ArrowLeft size={16} /> Back to Home</Link>
    </section>
  );
}
