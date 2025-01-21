import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false); // Gestion de l'état pour le menu hamburger

  return (
    <>
      <nav className="navbar">
        {/* Bouton Hamburger */}
        <button 
          className="hamburger-menu" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>À propos</Link></li>
          <li><Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
