// src/components/Blog/Blog.js
import React from 'react';
import './Blog.css';

const Blog = () => {
  const articles = [
    {
      title: 'Comprendre React en 2024',
      date: '25 Décembre 2024',
      description: 'Un guide pour débutants et professionnels qui souhaitent apprendre ou renforcer leurs compétences en React.',
      link: '#',
    },
    {
      title: 'Les bases de Node.js',
      date: '15 Décembre 2024',
      description: 'Découvrez comment utiliser Node.js pour construire des serveurs rapides et évolutifs.',
      link: '#',
    },
    {
      title: 'CSS moderne : Flexbox et Grid',
      date: '5 Décembre 2024',
      description: 'Les meilleures pratiques pour construire des interfaces responsives en utilisant Flexbox et CSS Grid.',
      link: '#',
    },
  ];

  return (
    <div className="blog-container">
      <h1>Mes Articles</h1>
      <p>Voici les articles récents que j’ai écrits :</p>

      <div className="blog-list">
        {articles.map((article, index) => (
          <div className="blog-card" key={index}>
            <h2>{article.title}</h2>
            <p className="blog-date">{article.date}</p>
            <p>{article.description}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              Lire plus
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
