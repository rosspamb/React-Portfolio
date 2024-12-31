// src/components/Contact/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci ${name} pour votre message. Nous vous répondrons bientôt.`);
  };

  return (
    <div className="contact-container">
      <h1>Contactez-moi</h1>
      <p>Vous avez une question, un projet en tête ou simplement envie de discuter ? N'hésitez pas à me contacter via le formulaire ci-dessous.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <label htmlFor="name">Votre nom</label>
          <input
            type="text"
            id="name"
            placeholder="Entrez votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Votre email</label>
          <input
            type="email"
            id="email"
            placeholder="Entrez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="message">Votre message</label>
          <textarea
            id="message"
            placeholder="Écrivez votre message ici"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
