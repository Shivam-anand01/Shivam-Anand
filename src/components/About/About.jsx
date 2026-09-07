import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import SectionHeader from '../UI/SectionHeader';
import { Code2, Cpu, BookOpen, Rocket } from 'lucide-react';
import './About.css';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code & Architecture',
    description: 'Writing modular, readable, and maintainable software with solid logic.',
  },
  {
    icon: Cpu,
    title: 'IoT & Hardware Systems',
    description: 'Interfacing microcontrollers (ESP32), sensors, and actuators seamlessly.',
  },
  {
    icon: BookOpen,
    title: 'CS Foundations',
    description: 'Grounding problem-solving in Data Structures, Algorithms, and DBMS.',
  },
  {
    icon: Rocket,
    title: 'Continuous Growth',
    description: 'Eager learner constantly building projects and exploring modern tech.',
  },
];

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <SectionHeader
          subtitle="Background"
          title="About"
          highlightText="Me"
          description="A glimpse into my development philosophy, technical journey, and core focus areas."
        />

        <div className="about-grid">
          {/* Left Column: Bio and Highlights */}
          <div className="about-text-content">
            {personalInfo.bio.map((paragraph, idx) => (
              <p key={idx} className="about-bio-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about-highlights">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="highlight-item">
                    <div className="highlight-icon-wrapper">
                      <IconComponent size={20} />
                    </div>
                    <div className="highlight-text">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Stats Cards */}
          <div className="stats-grid">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="glass-card stat-card">
                <span className="stat-value gradient-text">
                  {stat.value}
                  {stat.suffix}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
