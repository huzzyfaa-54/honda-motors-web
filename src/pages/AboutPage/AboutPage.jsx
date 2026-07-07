import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <nav className="about-nav">
        <Link to="/">← Back to Home</Link>
      </nav>

      <header className="about-hero">
        <h1>The Spirit of Honda</h1>
        <p>Engineering dreams into reality since 1948.</p>
      </header>

      <section className="about-content">
        <div className="about-card">
          <h2>Precision Craftsmanship</h2>
          <p>Every vehicle is a testament to our dedication to perfection, blending seamless performance with timeless design.</p>
        </div>
        <div className="about-card">
          <h2>The Power of Dreams</h2>
          <p>We don't just build cars; we innovate the future of mobility, ensuring every journey is an exceptional event.</p>
        </div>
      </section>
    </div>
  );
};
export default AboutPage;