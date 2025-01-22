import React from 'react';
import './Home.css';
import profileImage from '../../assets/profile.jpeg';



const Home = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio'); // Cible l'id "portfolio"
    portfolioSection.scrollIntoView({ behavior: 'smooth' }); // Scrolling fluide
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="profile-image-container">
          <img src={profileImage} alt="Rossylain" className="profile-image" />
        </div>
        <h1 className="hero-title">Bonjour, je suis Rossylain</h1>
        <h2 className="hero-subtitle">Développeur Web et Administrateur Réseau</h2>
        <p className="hero-description">
          Passionné par la création de solutions modernes et innovantes pour améliorer la vie numérique.
        </p>
        <button className="cta-button" onClick={scrollToPortfolio}>
          Découvrez mon travail
        </button>
      </div>
    </div>
  );
};

export default Home;
