import React from 'react';
import './Portfolio.css';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaFacebookF, FaEnvelope } from 'react-icons/fa';

// Importation des images avec les bonnes extensions PNG
import project1Image from '../../assets/Projet1.PNG';
import project2Image from '../../assets/Projet2.PNG';
import project3Image from '../../assets/Projet3.PNG';
import project4Image from '../../assets/Projet4.PNG';
import project5Image from '../../assets/Projet5.PNG';

const projects = [
  {
    title: "Projet 1",
    description: "Description du projet 1.",
    image: project1Image,  // Utilisation des images importées
    link: "https://sonal-three.vercel.app/login"
  },
  {
    title: "Projet 2",
    description: "Description du projet 2.",
    image: project2Image,
    link: "https://tchikeva.vercel.app/"
  },
  {
    title: "Projet 3",
    description: "Description du projet 3.",
    image: project3Image,
    link: "https://angular-mocha.vercel.app/"
  },
  {
    title: "Projet 4",
    description: "Description du projet 4.",
    image: project4Image,
    link: "https://esu-vykk.vercel.app/"
  },
  {
    title: "Projet 5",
    description: "Description du projet 5.",
    image: project5Image,
    link: "https://devstyle-chi.vercel.app/"
  }
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-container">
      <h2 className="portfolio-title">Mes Projets</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              Voir le projet
            </a>
          </div>
        ))}
      </div>
      <div className="social-links">
        <h3>Retrouvez-moi sur :</h3>
        <div className="icons">
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
