import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faExternalLinkAlt, faCodeBranch, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrev, setHasPrev] = useState(false);

    useEffect(() => {
        setLoading(true);

        const url = `http://127.0.0.1:8000/api/projects/?page=${currentPage}&search=${searchTerm}`;

        axios.get(url)
            .then(response => {
                const fetchedProjects = response.data.results || response.data;
                setProjects(fetchedProjects);
                setHasNext(response.data.next !== null && response.data.next !== undefined);
                setHasPrev(response.data.previous !== null && response.data.previous !== undefined);
                setLoading(false);
            })
            .catch(error => {
                console.error("API error, using fallback data:", error);
                setProjects([]);
                setLoading(false);
            });
    }, [currentPage, searchTerm]);

    const searchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const filteredProjects = projects.filter(project => {
        const named = project.category_name || project.category;
        return selectedCategory === 'All' || named === selectedCategory;
    });

    return (
        <div className='page-container'>
            <div className='glass-panel' style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', background: 'var(--glass-border)', borderRadius: '8px', padding: '0.5rem 1rem' }}>
                    <FontAwesomeIcon icon={faSearch} style={{ opacity: 0.5, marginRight: '10px' }} />
                    <input type="text" placeholder='Search projects...' value={searchTerm} onChange={searchChange} style={{ border: 'none', background: 'transparent', color: 'inherit', width: '100%', outline: 'none' }} />
                </div>

                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--bg-color)', color: 'var(--text-color)', outline: 'none', cursor: 'pointer' }}>
                    <option value="All">All</option>
                    <option value="Fullstack">Fullstack</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                </select>
            </div>

            {loading ? (
                <p style={{ textAlign: 'center' }}>Loading...</p>
            ) : (
                <>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem'}}>
                        {filteredProjects.map(proj => (
                            <div key={proj.id} className='glass-panel' style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
                                <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>{proj.title}</h3>

                                <span style={{fontSize: '0.8rem', background: 'var(--glass-border)', padding: '4px 8px', borderRadius: '4px', alignSelf: 'flex-start', marginBottom: '1rem' }}>
                                    {proj.category_name || proj.category || 'Uncategorized'}
                                </span>

                                {proj.image_url && (
                                    <div style={{ width: '100%', height: '180px', marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                                        <img src={proj.image_url} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                )}

                                <p style={{ flex: 1, opacity: 0.9 }}>{proj.description}</p>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                                    {proj.github_link && (
                                        <a href={proj.github_link} target='_blank' rel='noreferrer' style={{ color: 'inherit', textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faCodeBranch} /> Code
                                        </a>
                                    )}
                                    {proj.live_link && (
                                        <a href={proj.live_link} target='_blank' rel='noreferrer' style={{ color: 'inherit', textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} /> Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className='glass-panel' style={{ textAlign: 'center', padding: '3rem', marginTop: '2rem' }}>
                            <p>No projects found matching.</p>
                        </div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem' }}>
                        <button onClick={() => setCurrentPage(prev => prev - 1)} className='glass-panel' disabled={!hasPrev} style={{ padding: '0.8rem 1.5rem', cursor: hasPrev ? 'pointer' : 'not-allowed', opacity: hasPrev ? 1 : 0.7, display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FontAwesomeIcon icon={faChevronLeft} /> Previous
                        </button>
                        <button onClick={() => setCurrentPage(prev => prev + 1)} className='glass-panel' disabled={!hasNext} style={{ padding: '0.8rem 1.5rem', cursor: hasNext ? 'pointer' : 'not-allowed', opacity: hasNext ? 1 : 0.7, display: 'flex', alignItems: 'center', gap: '8px' }}>
                            Next <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Projects;