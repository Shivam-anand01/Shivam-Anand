import React from 'react';
import { marqueeItems } from '../../data/portfolioData';
import './MarqueeStrip.css';

export default function MarqueeStrip() {
  return (
    <div className="marquee-container" aria-label="Skills and highlights ticker">
      <div className="marquee-track">
        {/* Set 1 */}
        <div className="marquee-content">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`set1-${idx}`}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-separator">•</span>
            </React.Fragment>
          ))}
        </div>

        {/* Set 2 for seamless infinite looping */}
        <div className="marquee-content" aria-hidden="true">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`set2-${idx}`}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-separator">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
