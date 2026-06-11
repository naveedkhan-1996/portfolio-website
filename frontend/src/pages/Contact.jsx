import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle');

    const dataChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await axios.post('http://127.0.0.1:8000/api/contact/', formData);
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error("Error sending message:", error);
            setStatus('error');
        }
    };

    return (
        <div className='page-container' style={{ maxWidth: '700px', margin: '0 auto'}}>

            <div className='glass-panel' style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} /> Get In Touch</h2>
                <p style={{ opacity: 0.8 }}>
                    Have a project in mind or want to discuss opportunities? Send me a message and I'll get back to you shortly.
                </p>
            </div>

            <div className='glass-panel'>
                {status === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#19ee67' }}>
                        <FontAwesomeIcon icon={faCheckCircle} size="3x" style={{ marginBottom: '1rem' }}/>
                        <h3>Message Sent!</h3>
                        <p style={{ color: 'var(--text-color)' }}> Thank you for reaching out. I'll be in touch soon.</p>
                    </div>
                ): (
                    <form onSubmit={contactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '250px' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Name</label>
                                <input type="text" name="name" value={formData.name} onChange={dataChange} required className='contact-input' />
                            </div>

                            <div style={{ flex: 1, minWidth: '250px' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email</label>
                                <input type="email" name="email" value={formData.email} onChange={dataChange} required className='contact-input' />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Subject</label>
                            <input type="text" name='subject' value={formData.subject} onChange={dataChange} required className='contact-input' />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Message</label>
                            <textarea name="message" value={formData.message} onChange={dataChange} required rows="6" className='contact-input' style={{ resize: 'vertical' }}></textarea>
                        </div>

                        {status === 'error' && (
                            <p style={{ color: '#f01111', margin: 0 }}>Something went wrong. Please try again.</p>
                        )}

                        <button type='submit' disabled={status === 'loading'} className='glass-panel' style={{ padding: '1rem', marginTop: '1rem', cursor: status === 'loading' ? 'wait' : 'pointer', fontWeight: 'bold', fontSize: '1.1rem', background: status === 'loading' ? 'var(--glass-border)' : 'var(--text-color)', color: 'var(--bg-color)', transition: 'transform 0.3s ease, opacity 0.3s ease', opacity: status === 'loading' ? 0.7 : 1 }}>
                            {status === 'loading' ? 'Sending...' : <><FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '8px' }}/> Send Message</>}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;