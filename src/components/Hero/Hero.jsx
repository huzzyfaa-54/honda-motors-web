// src/components/Hero/Hero.jsx

import './Hero.css';

/**
 * Hero Component
 * Renders the massive top banner for the landing page.
 */
const Hero = () => {
  return (
    // <section> is used for a thematic grouping of content
    <section className="hero">
      
      <h1 className="hero-title">The All-New Civic</h1>
      <p className="hero-subtitle">Power meets pure efficiency.</p>
      
      {/* This is our Call to Action. Later, we can add an onClick event 
        to navigate the user to the Civic's specific details page.
      */}
      <button className="hero-cta">
        Explore the Civic
      </button>

    </section>
  );
};

export default Hero;