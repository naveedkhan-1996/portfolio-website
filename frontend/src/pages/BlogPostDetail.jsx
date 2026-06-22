import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const BlogPostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/blog/${id}/`)
      .then(response => {
        setPost(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching post:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="page-container" style={{ textAlign: 'center' }}>Loading article...</div>;
  if (!post) return <div className="page-container" style={{ textAlign: 'center' }}>Article not found.</div>;

  return (
    <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/blog" style={{ display: 'inline-block', marginBottom: '2rem', border: '1px solid var(--text-color)', borderRadius: '10px', padding: '8px' }}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Articles
      </Link>
      
      <article className="glass-panel" style={{ padding: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', marginTop: 0 }}>{post.title}</h1>
        <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
          <FontAwesomeIcon icon={faCalendarAlt} /> {new Date(post.created_at).toLocaleDateString()}
        </p>

        {post.image_url && (
          <div style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <img src={post.image_url} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}

        {/* Use white-space: pre-wrap to respect the paragraph breaks from your Django database */}
        <div style={{ fontSize: '1.1rem', lineHeight: '1.9', whiteSpace: 'pre-wrap' }}>
          {post.content}
        </div>
      </article>
    </div>
  );
};

export default BlogPostDetail;