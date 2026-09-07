import React from 'react';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon } from '../UI/Icons';
import { ArrowRight, Sparkles } from 'lucide-react';
import TiltCard from '../UI/TiltCard';
import './Hero.css';

const renderSocialIcon = (iconName) => {
  switch (iconName) {
    case 'Github':
      return <GithubIcon size={18} />;
    case 'Linkedin':
      return <LinkedinIcon size={18} />;
    case 'Mail':
      return <MailIcon size={18} />;
    default:
      return <MailIcon size={18} />;
  }
};

export default function Hero() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="badge badge-status hero-badge">
            <span className="status-dot"></span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            Hi, I'm {personalInfo.name}
            <span className="hero-role">{personalInfo.role}</span>
          </h1>

          {/* Tagline */}
          <p className="hero-description">
            {personalInfo.tagline}
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => handleSmoothScroll(e, 'projects')}
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
            >
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="hero-socials">
            <span className="social-label">Connect:</span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="social-pill"
                aria-label={`Open ${social.name}`}
              >
                {renderSocialIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Purple Glassmorphism 3D Tilt Card with Profile Image */}
        <div className="hero-visual">
          <TiltCard
            className="hero-purple-glass-card"
            maxTilt={12}
            scale={1.03}
            perspective={1000}
          >
            <div className="hero-purple-card-inner">
              <div className="hero-purple-image-wrapper">
                <img
                  src="/profile.png"
                  alt="Shivam Anand"
                  className="hero-purple-photo"
                />
                <div className="hero-purple-glow-ring" aria-hidden="true"></div>
              </div>

              <div className="hero-purple-info">
                <div className="hero-purple-badge">
                  <span className="purple-dot"></span>
                  <span>Undergraduate</span>
                </div>
                <h2 className="hero-purple-name">Shivam Anand</h2>
                <p className="hero-purple-subtitle">B.Tech Student</p>
                <p className="hero-purple-dept">Computer Science & Engineering</p>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
