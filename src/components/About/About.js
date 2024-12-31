// src/components/About/About.js
import React from 'react';
import './About.css'; // Si tu souhaites ajouter du CSS spécifique à cette page

const About = () => {
  return (
    <div className="about-container">
      <h1>À propos de moi</h1>
      <p>Je m'appelle Rossylain Pambu, et je suis un développeur web passionné avec une expertise dans le développement front-end et back-end. J'ai acquis de l'expérience dans la gestion de projets informatiques et dans l'administration des réseaux. Mon objectif est de créer des sites web dynamiques, sécurisés et intuitifs.</p>

      <h2>Compétences</h2>
      <ul>
        <li>Développement web (HTML, CSS, JavaScript, React, Node.js, etc.)</li>
        <li>Gestion de bases de données (MySQL, MongoDB)</li>
        <li>Intégration de services backend (APIs, serveurs, authentification)</li>
        <li>Maintenance réseau et administration des systèmes</li>
      </ul>

      <h2>Pourquoi me choisir ?</h2>
      <p>Mon approche est toujours axée sur la qualité, la performance et l'expérience utilisateur. Avec un sens aigu de la résolution de problèmes et un souci du détail, je m'engage à fournir des solutions durables et personnalisées pour mes clients.</p>
    </div>
  );
};

export default About;
