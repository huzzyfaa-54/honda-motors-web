import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import './Hero.css';

const Hero = () => {
  return (
    <section className="premium-hero">
      <div className="hero-background">
        <img src="/images/honda-dark-hero.jpg" alt="Honda Flagship" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span>★</span> THE NEW 2025 COLLECTION
        </div>
        
        <h1 className="hero-title">
          The Power of <br />
          <span className="text-accent">Dreams.</span>
        </h1>
        
        <p className="hero-subtitle">
          Experience the pinnacle of Japanese engineering. Every detail crafted 
          to perfection, every journey transformed into an event.
        </p>
        
        <div className="hero-actions">
          {/* 2. Wrap the primary button in a Link tag */}
          <Link to="/models">
            <button className="btn-primary">Explore Models →</button>
          </Link>
          
          <button className="btn-secondary">Book Test Drive</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;