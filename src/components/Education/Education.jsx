import React from 'react';
import { educationData } from '../../data/portfolioData';
import SectionHeader from '../UI/SectionHeader';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <SectionHeader
          subtitle="Academic Journey"
          title="Education &"
          highlightText="Foundations"
          description="Academic background in Computer Science & Engineering with coursework in core software principles."
        />

        <div className="education-cards-container">
          {educationData.map((edu) => (
            <div key={edu.id} className="glass-card edu-card-full">
              <div className="edu-card-header">
                <div className="edu-icon-badge">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                </div>
              </div>

              <div className="edu-meta">
                <span>
                  <Calendar size={14} style={{ display: 'inline', marginRight: '6px' }} />
                  {edu.period}
                </span>
                <span>•</span>
                <span>
                  <MapPin size={14} style={{ display: 'inline', marginRight: '6px' }} />
                  {edu.location}
                </span>
              </div>

              {edu.highlights && edu.highlights.length > 0 && (
                <div className="edu-highlights-list">
                  {edu.highlights.map((item, idx) => (
                    <div key={idx} className="edu-highlight-row">
                      <CheckCircle2 size={16} color="var(--primary-light)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
