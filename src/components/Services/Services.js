// src/components/Services/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Mes Services</h1>
      <p>Découvrez les services que je propose pour répondre à vos besoins en développement et technologie.</p>

      <div className="service-cards">
        <div className="service-card">
          <h2>Développement Web</h2>
          <p>
            Créez une présence en ligne professionnelle avec des sites web responsives, rapides et optimisés.
          </p>
        </div>

        <div className="service-card">
          <h2>Maintenance Réseau</h2>
          <p>
            Assurez le bon fonctionnement de votre infrastructure informatique avec un support réseau fiable et rapide.
          </p>
        </div>

        <div className="service-card">
          <h2>Conseil et Audit Technologique</h2>
          <p>
            Recevez des recommandations personnalisées pour optimiser votre infrastructure et vos processus informatiques.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
