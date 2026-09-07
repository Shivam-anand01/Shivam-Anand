import React from 'react';
import { personalInfo, navLinks, socialLinks } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon, PhoneIcon } from '../UI/Icons';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const renderSocialIcon = (iconName) => {
  switch (iconName) {
    case 'Github':
      return <GithubIcon size={18} />;
    case 'Linkedin':
      return <LinkedinIcon size={18} />;
    case 'Twitter':
      return <TwitterIcon size={18} />;
    case 'Mail':
      return <MailIcon size={18} />;
    case 'Phone':
      return <PhoneIcon size={18} />;
    default:
      return <MailIcon size={18} />;
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nameParts = personalInfo.name.split(' ');
  const firstName = nameParts[0] || 'Shivam';
  const lastName = nameParts.slice(1).join(' ') || 'Anand';

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <a href="#home" className="footer-brand-logo" onClick={(e) => handleSmoothScroll(e, '#home')}>
              <div className="brand-icon">
                <span>SA</span>
              </div>
              <div className="brand-name">
                <span className="brand-name-first">{firstName}</span>{' '}
                <span className="brand-name-last">{lastName}</span>
              </div>
            </a>
            <p className="footer-desc">
              Software Developer specializing in web development, React.js, Node.js, JavaScript, and building modern software applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-column-title">Quick Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.name} className="footer-link-item">
                  <a href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles */}
          <div>
            <h4 className="footer-column-title">Connect</h4>
            <div className="footer-socials">
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
        </div>

        {/* Bottom Sub-bar */}
        <div className="footer-bottom">
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
