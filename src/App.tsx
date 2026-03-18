import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import StudyList from './pages/StudyList';
import PostView from './pages/PostView';
import Settings from './pages/Settings';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="app-container">
        <nav className="main-nav">
          <div className="nav-container">
            <div className="nav-brand"><Link to="/">PolyGon</Link></div>
            <div className="nav-links">
              <Link to="/">Portfolio</Link>
              <Link to="/study">Study</Link>
              <Link to="/settings">Settings</Link>
            </div>
          </div>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/study" element={<StudyList />} />
            <Route path="/study/:id" element={<PostView />} />
            <Route path="/settings" element={<Settings isDark={isDark} setIsDark={setIsDark} />} />
          </Routes>
        </main>
        
        <footer className="main-footer">
          <p>&copy; {new Date().getFullYear()} PolyGon. All rights reserved.</p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
