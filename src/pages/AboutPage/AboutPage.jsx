import React, { useEffect } from 'react';
import './AboutPage.css';

const AboutPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-on-scroll, .timeline-item').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="about-container">
      {/* Fixed Background Image */}
      <div className="hero-bg">
        <img src="/images/about-hero.jpg" alt="Honda" />
      </div>

      <nav className="about-nav">
        <span className="logo">HONDA</span>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>Driven by Dreams.<br />
          <span className="red-text">Inspired by Innovation.</span>
        </h1>
        <p>For over seven decades, Honda has transformed imagination into engineering excellence, crafting the future of mobility through passion and precision.</p>
      </div>

      {/* Timeline Section - Added back exactly as requested */}
      <section className="timeline-section">
        <h2 className="timeline-title">Our Journey</h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {[
            { year: "1948", title: "Foundation", desc: "Soichiro Honda incorporates Honda Motor Co. Ltd in Hamamatsu." },
            { year: "1963", title: "First Automobile", desc: "Production of the T360 mini-truck and S500 sports car begins." },
            { year: "1986", title: "Acura Launch", desc: "The first Japanese luxury automotive brand debuts in North America." },
            { year: "2025", title: "Carbon Neutrality", desc: "Accelerating towards a zero-emission future through electrification." }
          ].map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="dot"></div>
              <div className="card">
                <div className="year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;