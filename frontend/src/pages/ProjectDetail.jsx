import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faExternalLinkAlt, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/projects/${id}/`)
      .then(response => {
        setProject(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching project:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="page-container" style={{ textAlign: 'center' }}>Loading project details...</div>;
  if (!project) return <div className="page-container" style={{ textAlign: 'center' }}>Project not found.</div>;

  return (
    <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/projects" style={{ display: 'inline-block', marginBottom: '2rem', border: '1px solid var(--text-color)', borderRadius: '10px', padding: '8px'}}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
      </Link>
      
      <div className="glass-panel" style={{ padding: '3rem' }}>
        <span style={{ fontSize: '0.9rem', background: 'var(--glass-border)', padding: '4px 10px', borderRadius: '4px', marginBottom: '1rem', display: 'inline-block' }}>
          {project.category_name || project.category}
        </span>
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', marginTop: 0 }}>{project.title}</h1>

        {project.image_url && (
          <div style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <img src={project.image_url} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}

        <div style={{ fontSize: '1.1rem', lineHeight: '1.9', whiteSpace: 'pre-wrap', marginBottom: '3rem' }}>
          {project.description}
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
          {project.github_link && (
            <a href={project.github_link} target="_blank" rel="noreferrer" className="read-more-btn" style={{ margin: 0 }}>
              <FontAwesomeIcon icon={faCodeBranch} style={{ marginRight: '8px' }} /> View Code
            </a>
          )}
          {project.live_link && (
            <a href={project.live_link} target="_blank" rel="noreferrer" className="read-more-btn" style={{ margin: 0, background: 'transparent', border: '1px solid var(--text-color)', color: 'var(--text-color)' }}>
              <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginRight: '8px' }} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;