import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  const [IsDarkMode, setIsDarkMode] = useState(() => {
    const saveTheme = localStorage.getItem('theme');
    if (saveTheme) {
      return saveTheme === 'dark';
    }
    const currentHour = new Date().getHours();
    const nightTime = currentHour >= 19 || currentHour < 5;
    return nightTime;
  });

  useEffect(() => {
    if (IsDarkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [IsDarkMode]);
  
  const toggleTheme = () => setIsDarkMode(!IsDarkMode);

  return (
    <Router>
      <div className="app-container">
        
        <Navbar IsDarkMode={IsDarkMode} toggleTheme={toggleTheme} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path='/projects/:id' element={<ProjectDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;