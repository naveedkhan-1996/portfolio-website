import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarAlt, faBookOpen, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrev, setHasPrev] = useState(false);

    useEffect(() => {
        setLoading(true);

        const url = `http://127.0.0.1:8000/api/blog/?page=${currentPage}&search=${searchTerm}`;

        axios.get(url)
            .then(response => {
                setPosts(response.data.results);
                setHasNext(response.data.next !== null);
                setHasPrev(response.data.previous !== null);
                setLoading(false);
            })
            .catch(error => {
                console.error("API error, using fallback data:", error);
                const filteredFallback = fallbackPosts.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
                setPosts(filteredFallback);
                setHasNext(false);
                setHasPrev(false);
                setLoading(false);
            });
    }, [currentPage, searchTerm]);

    const searchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    }

    const formatDate = (dataString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dataString).toLocaleDateString(undefined, options);
    };

    return (
        <div className='page-container' style={{ maxWidth: '900px', margin: '0 auto' }}>

            <div className='glass-panel' style={{display: 'flex', alignItems: 'center', marginBottom: '2.5rem', padding: '1rem 1.5rem' }}>
                <FontAwesomeIcon icon={faSearch} style={{ opacity: 0.6, marginRight: '15px', fontSize: '1.2rem' }}/>
                <input type="text" placeholder='Search articles...' value={searchTerm} onChange={searchChange} style={{border: 'none', background: 'transparent', color: 'inherit', width: '100%', outline: 'none', fontSize: '1.1rem' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', minHeight: '50vh' }}>
                {loading ? (
                    <p style={{ textAlign: 'center' }}>Loading...</p>
                ) : (
                    posts.map(post => (
                        <article key={post.id} className='glass-panel' style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
                            <h2 style={{ margin: 0}}>{post.title}</h2>

                            <div style={{display: 'flex', gap: '1.5rem', opacity: 0.7, fontSize: '0.9rem' }}>
                                <span><FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '5px' }}/> {formatDate(post.created_at)}</span>
                                <span><FontAwesomeIcon icon={faBookOpen} style={{ marginRight: '5px' }}/> {Math.max(1, Math.ceil(post.content.split(' ').length / 200))} min read</span>
                            </div>

                            {post.image && (
                                <div style={{width: '100%', height: '300px', borderRadius: '12px', overflow: 'hidden', marginTop: '0.5rem' }}>
                                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                                </div>
                            )}
                            <p style={{ lineHeight: '1.8', opacity: 0.9 }}>
                                {post.content.length > 250 ? `${post.content.substring(0, 250)}...` : post.content}
                            </p>

                            <button style={{ alignSelf: 'flex-start', background: 'var(--glass-border)', color: 'inherit', border: '1px solid var(--glass-border)', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginTop: '0.5rem' }}>
                                Read More
                            </button>
                        </article>
                    ))
                )}

                {!loading && posts.length === 0 && (
                    <div className='glass-panel' style={{ textAlign: 'center', padding: '3rem' }}>
                        <p>No articles found.</p>
                    </div>
                )}
            </div>

            <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem' }}>
                <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={!hasPrev} className='glass-panel' style={{ padding: '0.8rem 1.5rem', cursor: hasPrev ? 'pointer' : 'not-allowed', opacity: hasPrev ? 1 : 0.5, display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <FontAwesomeIcon icon={faChevronLeft} /> Previous
                </button>

                <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={!hasNext} className='glass-panel' style={{ padding: '0.8rem 1.5rem', cursor: hasNext ? 'pointer' : 'not-allowed', opacity: hasNext ? 1 : 0.5, display: 'flex', alignItems: 'center', gap: '8px'}}>
                    Next <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
};

const fallbackPosts = [
  { id: 1, title: 'Why I Prefer Manual CSS Over Frameworks', content: 'Fallback content...', created_at: '2026-05-15T10:00:00Z',},
  { id: 2, title: 'Mastering Technical Communication', content: 'Fallback content...', created_at: '2026-04-22T14:30:00Z', }
];

export default Blog;