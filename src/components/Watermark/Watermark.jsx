// src/components/Watermark/Watermark.jsx

import './Watermark.css';

/**
 * Watermark Component
 * Renders a massive, faint background logo/text.
 * It is purely decorative.
 */
const Watermark = () => {
  return (
    // aria-hidden="true" tells screen readers to completely ignore this element
    <div className="watermark" aria-hidden="true">
      HONDA
    </div>
  );
};

export default Watermark;