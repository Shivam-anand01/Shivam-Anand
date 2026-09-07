import React from 'react';
import { experienceData } from '../../data/portfolioData';
import SectionHeader from '../UI/SectionHeader';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          subtitle="Career Path"
          title="Work"
          highlightText="Experience"
          description="A chronological timeline of my professional roles, engineering contributions, and collaborative milestones."
        />

        <div className="timeline">
          {experienceData.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot" />

              <div className="glass-card timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-company-info">
                      <span>
                        <Briefcase size={15} />
                        {item.company}
                      </span>
                      <span>•</span>
                      <span>
                        <MapPin size={14} />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <span className="timeline-period-badge">
                    {item.period}
                  </span>
                </div>

                <p className="timeline-desc">{item.description}</p>

                {item.responsibilities && item.responsibilities.length > 0 && (
                  <div className="timeline-responsibilities">
                    {item.responsibilities.map((resp, idx) => (
                      <div key={idx} className="timeline-bullet">
                        <CheckCircle2 size={16} className="timeline-bullet-icon" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                )}

                {item.technologies && item.technologies.length > 0 && (
                  <div className="timeline-tech-stack">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
