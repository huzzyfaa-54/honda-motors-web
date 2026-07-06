import './WhyHonda.css';

const WhyHonda = () => {
  return (
    <section className="why-section">
      <div className="section-header">
        <span className="section-subtitle text-accent">WHY HONDA</span>
        <h2 className="section-title">Built Different</h2>
      </div>

      <div className="why-grid">
        {/* Card 1 */}
        <div className="why-card">
          <div className="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <h3>Electrified Performance</h3>
          <p>From advanced hybrids to pure electric — our e:HEV lineup delivers zero-compromise performance with maximum efficiency.</p>
        </div>

        {/* Card 2 */}
        <div className="why-card">
          <div className="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3>Unmatched Safety</h3>
          <p>Honda Sensing® suite and advanced driver assistance systems form an invisible, intelligent shield around you and your passengers.</p>
        </div>

        {/* Card 3 */}
        <div className="why-card">
          <div className="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <h3>Global Reliability</h3>
          <p>Millions of drivers worldwide trust Honda. Wherever the road leads, legendary Japanese durability ensures you arrive.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyHonda;