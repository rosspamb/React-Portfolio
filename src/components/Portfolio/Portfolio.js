import React from 'react';
import './Portfolio.css';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-container">
      <h2 className="portfolio-title">Mes Projets</h2>
      <div className="portfolio-grid">
        {/* Exemple de projet */}
        <div className="portfolio-item">
          <h3>Projet 1</h3>
          <p>Description du projet.</p>
        </div>
        <div className="portfolio-item">
          <h3>Projet 2</h3>
          <p>Description du projet.</p>
        </div>
      </div>
      <div className="social-links">
        <h3>Retrouvez-moi sur :</h3>
        <div className="icons">
          {/* Icônes des réseaux sociaux */}
          <a href="https://github.com/rosspamb" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/rossylainpambu" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/ton-profil" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://wa.me/+243821206739" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com/rossylainpambu" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="mailto:rossylainpamb25@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
