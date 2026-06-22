import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className='page-container' style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', textAlign: 'center', 'marginTop': '4rem'}}>

            <header className='glass-panel' style={{ maxWidth: '800px', width: '100%' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                    Hi, I'm Naveed ur Rehman
                </h1>
                <h2 style={{ fontWeight: '300', opacity: 0.6, marginBottom: '1.2rem' }}>
                    Full Stack Software Engineer
                </h2>
                <p style={{ lineHeight: '1.6', marginBottom: '2rem' }}>
                    I am a Software Developer specializing in building websites, Web Development, Web Applications and Game Development.
                </p>

                <Link to="/projects" className='glass-panel' style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit', fontWeight: '600', padding: '1rem 1.2rem', border: 'var(--glass-border)'}}>
                    View My Projects <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </header>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', width: '200px' }}>
                    <FontAwesomeIcon icon={faCode} size="2x" style={{ marginBottom: '1rem' }}/>
                    <h3>Frontend</h3>
                    <p>HTML, CSS, JavaScripts, JQuery, React.js</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', width: '200px' }}>
                    <FontAwesomeIcon icon={faServer} size="2x" style={{ marginBottom: '1rem' }}/>
                    <h3>Backend</h3>
                    <p>Python, Django</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', width: '200px' }}>
                    <FontAwesomeIcon icon={faDatabase} size="2x" style={{ marginBottom: '1rem' }}/>
                    <h3>Database</h3>
                    <p>PostgreSQL, SQLite</p>
                </div>
            </div>
        </div>
    );
};

export default Home;