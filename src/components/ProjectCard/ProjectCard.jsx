// src/components/ProjectCard/ProjectCard.jsx
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/portfolio/${project.id}`} className="project-card glass">
      <div className="project-card-media">
        <span className="project-card-category tag">{project.category}</span>
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="project-card-image"
            loading="lazy"
          />
        ) : (
          <div className="project-card-glyph" aria-hidden="true">
            {project.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="project-card-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-card-tech">
          {project.technologies.slice(0, 3).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <span className="project-card-link">
          View Details <ArrowUpRight size={15} />
        </span>
      </div>
    </Link>
  );
}

// import { Link } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";
// import "./ProjectCard.css";

// export default function ProjectCard({ project }) {
//   return (
//     <Link to={`/portfolio/${project.id}`} className="project-card glass">
//       <div className="project-card-media">
//         <span className="project-card-category tag">{project.category}</span>
//         <div className="project-card-glyph" aria-hidden="true">{project.name.charAt(0)}</div>
//       </div>
//       <div className="project-card-body">
//         <h3>{project.name}</h3>
//         <p>{project.description}</p>
//         <div className="project-card-tech">
//           {project.technologies.slice(0, 3).map((t) => (
//             <span key={t} className="tag">{t}</span>
//           ))}
//         </div>
//         <span className="project-card-link">
//           View Details <ArrowUpRight size={15} />
//         </span>
//       </div>
//     </Link>
//   );
// }
