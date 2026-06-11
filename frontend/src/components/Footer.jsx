import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="glass-panel" style={{ marginTop: '4rem', borderRadius: '16px 16px 0 0', padding: '2rem 2rem 1rem 2rem', borderBottom: 'none'}}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
                <div>
                    <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Naveed ur Rehman</h3>
                    <p style={{ opacity: 0.8, lineHeight: '1.6', marginBottom: '0.5rem' }}>
                        Full-Stack Software Engineer Wed Development and Web Application building scalable, beautifully designed.
                    </p>
                    <p style={{ opacity: 0.8, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Multan, Pakistan
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Quick Links</h4>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Home</Link>
                    <Link to="/about" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>About</Link>
                    <Link to="/projects" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Projects</Link>
                    <Link to="/blog" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Blog</Link>
                    <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Contact</Link>
                </div>

                <div>
                    <h4 style={{ marginTop: 0, marginBottom: '1rem' }}>Connect</h4>
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
                        <a href="https://github.com/naveedkhan-1996/" target="_blank" rel="noreferrer" style={{ color: 'inherit', transition: 'opacity 0.3s' }} className="social-link">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" style={{ color: 'inherit', transition: 'opacity 0.3s' }} className="social-link">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="mailto:your.email@example.com" style={{ color: 'inherit', transition: 'opacity 0.3s' }} className="social-link">
                           <FontAwesomeIcon icon={faEnvelope} /> 
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', fontSize: '0.9rem', opacity: 0.7}}>
                <p style={{ margin: 0 }}>
                    &copy; {currentYear} Naveed ur Rehman.
                </p>
            </div>
        </footer>
    );
};

export default Footer;