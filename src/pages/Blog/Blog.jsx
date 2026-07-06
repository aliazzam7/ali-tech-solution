import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowUpRight, Clock } from "lucide-react";
import posts from "../../data/blogPosts";
import { formatDate } from "../../utils/helpers";
import "./Blog.css";

const TAG_CLASS = {
  AI: "tag-ai",
  Cybersecurity: "tag-cybersecurity",
  Web: "tag-web",
  "Mobile App": "tag-mobile",
};

export default function Blog() {
  const [activeTag, setActiveTag] = useState("All");

  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)),
    []
  );

  const tags = useMemo(() => {
    const unique = [...new Set(sortedPosts.map((p) => p.tag))];
    return ["All", ...unique];
  }, [sortedPosts]);

  const [featured, ...rest] = sortedPosts;

  const filteredRest = useMemo(() => {
    if (activeTag === "All") return rest;
    return rest.filter((p) => p.tag === activeTag);
  }, [rest, activeTag]);

  const showFeatured = activeTag === "All" || activeTag === featured?.tag;

  return (
    <>
      <section className="page-hero container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={13} />
          <span>Blog</span>
        </div>
        <span className="eyebrow">Writing</span>
        <h1>
          Notes on <span className="grad-text">AI, web &amp; security.</span>
        </h1>
        <p>Short, practical write-ups from real project work — no fluff.</p>
      </section>

      <div className="container blog-filters">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`filter-pill ${activeTag === tag ? "is-active" : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {showFeatured && featured && (
        <div className="container">
          <Link to={`/blog/${featured.id}`} className="blog-featured glass">
            <div className="blog-featured-glow" />
            <span className="featured-label">Latest post</span>
            <span className={`tag ${TAG_CLASS[featured.tag] || ""}`}>
              {featured.tag}
            </span>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <div className="blog-item-footer">
              <span>{formatDate(featured.date)}</span>
              <span className="meta-dot" aria-hidden="true">
                &bull;
              </span>
              <span className="meta-readtime">
                <Clock size={13} /> {featured.readTime} min read
              </span>
              <span className="blog-item-link">
                Read post <ArrowUpRight size={14} />
              </span>
            </div>
          </Link>
        </div>
      )}

      <div className="container blog-list">
        {filteredRest.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="blog-item glass">
            <span className={`tag ${TAG_CLASS[post.tag] || ""}`}>{post.tag}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="blog-item-footer">
              <span>{formatDate(post.date)}</span>
              <span className="meta-readtime">
                <Clock size={13} /> {post.readTime} min
              </span>
              <span className="blog-item-link">
                Read post <ArrowUpRight size={14} />
              </span>
            </div>
          </Link>
        ))}

        {filteredRest.length === 0 && !showFeatured && (
          <div className="blog-empty glass">
            <p>No posts under "{activeTag}" yet — check back soon.</p>
          </div>
        )}
      </div>
    </>
  );
}