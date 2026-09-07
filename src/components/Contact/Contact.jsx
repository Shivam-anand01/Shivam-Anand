import React, { useState } from 'react';
import { contactInfo, personalInfo } from '../../data/portfolioData';
import SectionHeader from '../UI/SectionHeader';
import { GithubIcon, LinkedinIcon } from '../UI/Icons';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Copy, 
  Check, 
  CheckCircle2, 
  Sparkles,
  Loader2 
} from 'lucide-react';
import './Contact.css';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Copy email to clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    if (onShowToast) {
      onShowToast('Email address copied to clipboard!', 'success');
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onShowToast) {
        onShowToast('Message sent successfully! I will get back to you shortly.', 'success');
      }
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="section contact-section-wrapper">
      <div className="container">
        <SectionHeader
          subtitle="Get In Touch"
          title="Let's Build Something"
          highlightText="Together"
          description="Have an open software developer role, project collaboration, or question? Send a message and let's connect."
        />

        <div className="contact-grid">
          {/* Left Column: Direct Contact Information */}
          <div className="contact-info-column">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Direct Channels</h3>
              <p className="contact-info-desc">
                Feel free to connect directly via GitHub, LinkedIn, or Email. I am actively available for software developer roles.
              </p>

              <div className="contact-details-list">
                {/* Email Item */}
                <div className="contact-detail-item">
                  <div className="contact-icon-wrapper">
                    <Mail size={22} />
                  </div>
                  <div className="contact-detail-text">
                    <h5>Email</h5>
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    <div>
                      <button
                        type="button"
                        className="copy-email-btn"
                        onClick={handleCopyEmail}
                        aria-label="Copy email to clipboard"
                      >
                        {copied ? <Check size={13} color="#16a34a" /> : <Copy size={13} />}
                        <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div className="contact-detail-item">
                  <div className="contact-icon-wrapper">
                    <LinkedinIcon size={22} />
                  </div>
                  <div className="contact-detail-text">
                    <h5>LinkedIn</h5>
                    <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                {/* GitHub Item */}
                <div className="contact-detail-item">
                  <div className="contact-icon-wrapper">
                    <GithubIcon size={22} />
                  </div>
                  <div className="contact-detail-text">
                    <h5>GitHub</h5>
                    <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                      View GitHub Profile
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="contact-detail-item">
                  <div className="contact-icon-wrapper">
                    <MapPin size={22} />
                  </div>
                  <div className="contact-detail-text">
                    <h5>Location</h5>
                    <p>{contactInfo.location}</p>
                  </div>
                </div>

                {/* Availability Item */}
                <div className="contact-detail-item">
                  <div className="contact-icon-wrapper">
                    <Clock size={22} />
                  </div>
                  <div className="contact-detail-text">
                    <h5>Availability</h5>
                    <p>{contactInfo.availability}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Turnaround Badge */}
            <div
              style={{
                padding: '1.25rem 1.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                background: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <Sparkles size={20} color="#0f172a" />
              <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                Average response turnaround: <strong style={{ color: 'var(--text-primary)' }}>{contactInfo.responseTime}</strong>
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card">
            {isSubmitted ? (
              <div className="form-success-banner">
                <CheckCircle2 size={46} color="#16a34a" />
                <h4>Thank You for Reaching Out!</h4>
                <p>Your message has been received. I'll get back to you as soon as possible.</p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => setIsSubmitted(false)}
                  style={{ marginTop: '0.75rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Software Developer Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Hello Shivam! I would like to connect about..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{ marginTop: '0.5rem' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" style={{ animation: 'pulse-dot 1s infinite linear' }} />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
