import { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/skills/')
        .then(response => {
            setSkills(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.log("Error fetching skills:", error)
            setLoading(false);
        });
    }, []);

    return (
        <div className='page-container' style={{ maxWidth: '900px', margin: '0 auto' }}>

            <div className='glass-panel' style={{ marginBottom: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>

                <div style={{ flex: '0 0 200px', height: '200px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)', margin: '0 auto' }}>
                    <img src="/src/WhatsApp Image 2026-05-01.jpeg" alt="Naveed ur Rehman" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </div>

                <div className='about-text'>
                    <h2>About Me</h2>
                    <p>
                        Hi, I am Naveed Ur Rehman, a passionate Software Development who enjoys building modern, responsive and user-friendly web applications.
                        My journey into software development began with a curiosity about how websites and applications work behind the scenes.
                        With over 3+ years of experience, I continue to improve my skills and expand my knowledge in web development. I will develop modern websites and web applications that are responsive, user-friendly and
                        efficient. My expertise includes HTML, CSS, JavaScript, React.JS, JQuery, Python, Django, SQLite and PostgreSQL.
                        These technologies allow me to create complete web applications from designing beautiful and interactive user interfaces to developing secure, scalable, reliable, high-performance, responsive, user-friendly, feature-rich, data-driven, modern, professional, efficient and back-end systems.
                        I enjoy every stage of the development process, whether it is planning a project, designing the user experience, writing code, managing databases, and testing.
                        On the front-end side, I focus on creating clean, modern and responsive designs that work well across different devices and screen sizes. I believe that a website should not only function correctly but should also provide an enjoyable experience for users.
                        I build interfaces that are visually appealing and interactive with careful attention to typography, animations, spacing and responsiveness to ensure a professional result.
                        On the back-end side, I use Python and Django to build secure, scalable web applications with authentication, database management and API Intergration. I enjoy solving complex problems through code and creating efficient solutions that improve application performance and reliability.
                        My understanding of both front-end and back-end development helps me build complete and well-structured web applications. This Full-stack knowledge gives me a broader perspective on software development and allows me to deliver better and more effective results.
                        Throughout my learning journey, I have developed several projects to strengthen my practical skills, including Weather Application, To-Do Apps, Task Schedulers, Image Gallery GUI applications, Blog, Inventory Management Systems, Expense Trackers, Note Apps, event countdown timers, BMI Calculators and more.
                        Thank you for choosing me for this project. Unfortunately, this project is out of my expertise, so I'm afraid I won't be able to complete it. I appreciate your understanding.
                        I have also developed interactive games such as Snake, Hangman, Memory Game, Tic Tac Toe, Tenzies, Dice Rolling, Word Guess and Ping Pong game to improve my logic building and programming skills.
                        One of the things. I enjoy most about programming is the opportunity to continously learn, Technology changes rapidly and there is always something new to discover. My goal is a become a professional full stack developer capable of building high-quality applications that solve real world problems.
                        I am interested in working on impacful projects that provide real value to users and improve their experience.
                        I write code while learning and using AI as a guide. Instead of copying code directly, I focus on understanding the concepts and building solutions myself. This helps me avoid bugs, poor design, security issues, and other development problems while improving my programming skills.
                        Thank you for taking the time to learn more about me.

                    </p>
                </div>

                <div className='glass-panel'>
                    <h2>Technical Skills</h2>
                    {loading ? (
                        <p>Loading skills</p>
                    ) : (
                        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {skills.length > 0 ? skills.map(skill => (
                                <div key={skill.id} className='skill-container'>
                                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '600' }}>
                                        <span>{skill.name}</span>
                                        <span>{skill.proficiency}%</span>
                                    </div>
                                    <div className='progress-track'>
                                        <div className='progress-fill' style={{ width: `${skill.proficiency}%` }}>
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <div className='skill-container'>
                                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '600' }}><span>HTML</span><span>95%</span></div>
                                    <div className="progress-track"><div className="progress-fill" style={{ width: '95%' }}></div></div>
                                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '600' }}><span>CSS</span><span>90%</span></div>
                                    <div className="progress-track"><div className="progress-fill" style={{ width: '90%' }}></div></div>
                                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '600' }}><span>JavaScript</span><span>80%</span></div>
                                    <div className="progress-track"><div className="progress-fill" style={{ width: '80%' }}></div></div>
                                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '600' }}><span>JQuery</span><span>65%</span></div>
                                    <div className="progress-track"><div className="progress-fill" style={{ width: '65%' }}></div></div>
                                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '600' }}><span>Python</span><span>75%</span></div>
                                    <div className="progress-track"><div className="progress-fill" style={{ width: '75%' }}></div></div>
                                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '600' }}><span>Django</span><span>70%</span></div>
                                    <div className="progress-track"><div className="progress-fill" style={{ width: '70%' }}></div></div>
                                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '600' }}><span>SQLite</span><span>60%</span></div>
                                    <div className="progress-track"><div className="progress-fill" style={{ width: '60%' }}></div></div>
                                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '600' }}><span>PostgreSQL</span><span>50%</span></div>
                                    <div className="progress-track"><div className="progress-fill" style={{ width: '50%' }}></div></div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default About;