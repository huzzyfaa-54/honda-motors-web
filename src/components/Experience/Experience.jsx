import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="exp-header">
        <span className="section-subtitle text-accent">CRAFTSMANSHIP</span>
        <h2 className="section-title">The Experience</h2>
      </div>

      <div className="exp-grid">
        {/* Experience Card 1 */}
        <div className="exp-card">
          <img src="/images/exp-1.jpg" alt="Honda Interior" className="exp-img" />
          <div className="exp-content">
            <h3>Type R Legacy</h3>
            <p>Precision power unleashed</p>
          </div>
        </div>

        {/* Experience Card 2 */}
        <div className="exp-card">
          <img src="/images/exp-2.jpg" alt="Honda Touring" className="exp-img" />
          <div className="exp-content">
            <h3>Touring Class</h3>
            <p>The flagship in motion</p>
          </div>
        </div>

        {/* Experience Card 3 */}
        <div className="exp-card">
          <img src="/images/exp-3.jpg" alt="Honda EV" className="exp-img" />
          <div className="exp-content">
            <h3>e:Architecture</h3>
            <p>The electric future</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;