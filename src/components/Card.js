// src/Card.js
import React from 'react';
import './Card.css';

const Card = ({ title, subtitle, description, image, cta, available, link }) => {
  return (
    <div className="card">
      
      <div className="card-content">
        <h3 className="card-subtitle">{subtitle}</h3>
        <h2 className="card-title">{title}</h2>
        {available && <p className="card-available">Available from {available}</p>}
        <p className="card-description">{description}</p>
        {cta && <a href={link} className="card-cta">{cta}</a>}
      </div>
      {image && <img src={image} alt={title} className="card-image" />}
    </div>
  );
};

export default Card;