import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ IsDarkMode, toggleTheme }) => {
    return (
        <nav className="glass-panel" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', marginBottom: '2rem', padding: '1rem 2rem'}}>

            <div className="brand">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span style={{ color: '#0cc5f3'}}>Naveed</span> <span style={{ color: '#0ce90c'}}>ur</span> <span style={{ color: '#db2424e7'}}>Rehman</span>
                </Link>
            </div>

            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
                <li><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
                <li><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link></li>
                <li><Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</Link></li>
                <li><Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>Blog</Link></li>
                <li><Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link></li>
            </ul>

            <div style={{ justifySelf: 'end' }}>
                <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'inherit' }}>
                    <FontAwesomeIcon icon={IsDarkMode ? faSun : faMoon} />
                </button>
            </div>
        </nav>
    );
};

export default NavBar;