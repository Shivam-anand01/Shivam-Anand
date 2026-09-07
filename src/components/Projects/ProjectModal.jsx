import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../UI/Icons';
import './Projects.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="project-category-badge" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
              {project.category}
            </span>
            <h3 className="modal-title">{project.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close project modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-desc">
            {project.detailedDescription || project.description}
          </p>

          {/* Key Architectural Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="modal-section-title">Key Engineering Highlights</h4>
              <div className="modal-highlights-list">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="modal-highlight-item">
                    <CheckCircle2 size={16} color="var(--primary-light)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="modal-section-title">Technologies Used</h4>
            <div className="project-tech-stack">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="modal-actions">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <span>Live Demo</span>
                <ExternalLink size={15} />
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <span>Source Code</span>
                <GithubIcon size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
