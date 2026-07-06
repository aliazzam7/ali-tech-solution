import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronRight, Clock, ArrowUpRight, ArrowLeft } from "lucide-react";
import posts from "../../data/blogPosts";
import { formatDate } from "../../utils/helpers";
import "./Blog.css";

const TAG_CLASS = {
  AI: "tag-ai",
  Cybersecurity: "tag-cybersecurity",
  Web: "tag-web",
  "Mobile App": "tag-mobile",
};

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);
  if (!post) return <Navigate to="/blog" replace />;

  const related = posts
    .filter((p) => p.id !== post.id && p.tag === post.tag)
    .slice(0, 2);

  return (
    <>
      <section className="page-hero container blog-post">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={13} />
          <Link to="/blog">Blog</Link>
          <ChevronRight size={13} />
          <span>{post.title}</span>
        </div>

        <span className={`tag ${TAG_CLASS[post.tag] || ""}`}>{post.tag}</span>
        <h1 style={{ marginTop: 16 }}>{post.title}</h1>

        <div className="blog-post-meta">
          <span>{formatDate(post.date)}</span>
          <span className="meta-dot" aria-hidden="true">
            &bull;
          </span>
          <span className="meta-readtime">
            <Clock size={13} /> {post.readTime} min read
          </span>
        </div>

        <p className="blog-post-body">{post.excerpt}</p>
        <p className="blog-post-note">
          This is a placeholder summary. Drop in the full article content here
          when it's ready — the layout, routing, and SEO metadata are already
          wired up.
        </p>

        <Link to="/blog" className="btn btn-ghost blog-back">
          <ArrowLeft size={15} /> Back to Blog
        </Link>
      </section>

      {related.length > 0 && (
        <div className="container blog-related">
          <span className="related-heading">More on {post.tag}</span>
          <div className="blog-related-grid">
            {related.map((r) => (
              <Link to={`/blog/${r.id}`} key={r.id} className="blog-item glass">
                <span className={`tag ${TAG_CLASS[r.tag] || ""}`}>{r.tag}</span>
                <h3>{r.title}</h3>
                <p>{r.excerpt}</p>
                <div className="blog-item-footer">
                  <span>{formatDate(r.date)}</span>
                  <span className="blog-item-link">
                    Read post <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}