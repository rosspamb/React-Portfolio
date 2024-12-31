// src/components/Home/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Bonjour, je suis Rossylain</h1>
        <h2 className="hero-subtitle">Développeur Web et Administrateur Réseau</h2>
        <p className="hero-description">
          Passionné par la création de solutions modernes et innovantes pour améliorer la vie numérique.
        </p>
        <a href="#portfolio" className="cta-button">
          Découvrez mon travail
        </a>
      </div>
    </div>
  );
};

export default Home;
