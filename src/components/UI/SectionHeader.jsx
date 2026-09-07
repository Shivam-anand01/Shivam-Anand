import React from 'react';
import './UI.css';

export default function SectionHeader({ subtitle, title, description, highlightText }) {
  return (
    <div className="section-header">
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title">
        {title}{' '}
        {highlightText && <span className="gradient-text">{highlightText}</span>}
      </h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
