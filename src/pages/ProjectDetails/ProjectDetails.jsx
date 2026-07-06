// src/pages/ProjectDetails/ProjectDetails.jsx
import { useState, useEffect, useCallback } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ChevronRight,
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  X,
  ChevronLeft,
  Play,
} from "lucide-react";
import { GithubIcon } from "../../components/icons/BrandIcons";
import projects from "../../data/projects";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const hasVideo = Boolean(project?.video);

  const gallery = project
    ? project.gallery?.length > 0
      ? project.gallery
      : project.image
      ? [project.image]
      : []
    : [];

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i === 0 ? gallery.length - 1 : i - 1));
  }, [gallery.length]);
  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === gallery.length - 1 ? 0 : i + 1));
  }, [gallery.length]);

  const openVideo = useCallback(() => setIsVideoOpen(true), []);
  const closeVideo = useCallback(() => setIsVideoOpen(false), []);

  useEffect(() => {
    if (lightboxIndex === null && !isVideoOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") {
        closeLightbox();
        closeVideo();
      }
      if (lightboxIndex !== null) {
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
      }
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, isVideoOpen, closeLightbox, closeVideo, showPrev, showNext]);

  if (!project) return <Navigate to="/portfolio" replace />;

  return (
    <>
      <section className="page-hero container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={13} />
          <Link to="/portfolio">Portfolio</Link>
          <ChevronRight size={13} />
          <span>{project.name}</span>
        </div>
        <span className="tag">{project.category}</span>
        <h1 style={{ marginTop: 16 }}>{project.name}</h1>
        <p>{project.description}</p>
        <div className="hero-actions" style={{ marginTop: 26 }}>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo <ExternalLink size={16} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <GithubIcon size={16} /> GitHub
            </a>
          )}
        </div>
      </section>

      <div className="container project-details-grid">
        <div className="project-details-media glass">
          {gallery.length > 0 ? (
            <img
              src={gallery[0]}
              alt={project.name}
              className="project-details-main-image"
              onClick={() => setLightboxIndex(0)}
            />
          ) : (
            <span className="project-card-glyph">{project.name.charAt(0)}</span>
          )}
        </div>

        <div className="project-details-body">
          <div className="pd-block">
            <h4>Problem</h4>
            <p>{project.problem}</p>
          </div>
          <div className="pd-block">
            <h4>Solution</h4>
            <p>{project.solution}</p>
          </div>
          <div className="pd-block">
            <h4>Key Features</h4>
            <ul className="pd-features">
              {project.features.map((f) => (
                <li key={f}>
                  <CheckCircle2 size={16} /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="pd-block">
            <h4>Technologies</h4>
            <div className="pill-row">
              {project.technologies.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {gallery.length > 1 && (
            <div className="pd-block">
              <h4>Gallery</h4>
              <div className="pd-gallery-grid">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    className="pd-gallery-thumb"
                    onClick={() => setLightboxIndex(i)}
                  >
                    <img
                      src={img}
                      alt={`${project.name} screenshot ${i + 1}`}
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {hasVideo && (
            <div className="pd-block">
              <h4>Demo Video</h4>
              <button
                type="button"
                className="pd-video-thumb"
                onClick={openVideo}
                aria-label="Open demo video"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.name} demo preview`}
                    className="pd-video-thumb-img"
                  />
                )}
                <span className="pd-video-play-overlay">
                  <Play size={28} fill="currentColor" />
                </span>
              </button>
              <p className="pd-video-caption">
                Watch a walkthrough of how users interact with the app.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="container project-details-footer">
        <Link to="/portfolio" className="btn btn-ghost">
          Back to Portfolio
        </Link>
        <Link to="/contact" className="btn btn-primary">
          Start a Similar Project <ArrowUpRight size={16} />
        </Link>
      </div>

      {lightboxIndex !== null && (
        <div className="pd-lightbox" onClick={closeLightbox}>
          <button
            className="pd-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={26} />
          </button>

          {gallery.length > 1 && (
            <button
              className="pd-lightbox-nav pd-lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={30} />
            </button>
          )}

          <img
            src={gallery[lightboxIndex]}
            alt={`${project.name} screenshot ${lightboxIndex + 1}`}
            className="pd-lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />

          {gallery.length > 1 && (
            <button
              className="pd-lightbox-nav pd-lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight size={30} />
            </button>
          )}

          {gallery.length > 1 && (
            <div className="pd-lightbox-counter">
              {lightboxIndex + 1} / {gallery.length}
            </div>
          )}
        </div>
      )}

      {isVideoOpen && hasVideo && (
        <div className="pd-lightbox pd-video-lightbox" onClick={closeVideo}>
          <button
            className="pd-lightbox-close"
            onClick={closeVideo}
            aria-label="Close video"
          >
            <X size={26} />
          </button>

          <video
            className="pd-lightbox-video"
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </>
  );
}
