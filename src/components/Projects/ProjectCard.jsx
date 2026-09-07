import React from 'react';
import { ExternalLink, Star, ChevronRight } from 'lucide-react';
import { GithubIcon } from '../UI/Icons';
import TiltCard from '../UI/TiltCard';
import './Projects.css';

export default function ProjectCard({ project, onOpenDetails }) {
  return (
    <TiltCard
      className="glass-card project-card"
      maxTilt={8}
      scale={1.02}
    >
      <div className="project-card-top">
        <div className="project-card-header">
          <span className="project-category-badge">{project.category}</span>
          {project.featured && (
            <span className="project-featured-badge">
              <Star size={12} fill="#eab308" color="#eab308" />
              <span>Featured</span>
            </span>
          )}
        </div>

        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
      </div>

      <div className="project-card-bottom">
        <div className="project-tech-stack">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-tag">+{project.technologies.length - 4}</span>
          )}
        </div>

        <div className="project-card-footer">
          <div className="project-links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
                aria-label={`View live demo of ${project.title}`}
              >
                <span>Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
                aria-label={`View GitHub repository of ${project.title}`}
              >
                <span>Code</span>
                <GithubIcon size={14} />
              </a>
            )}
          </div>

          <button
            type="button"
            className="btn-details"
            onClick={() => onOpenDetails(project)}
            aria-label={`View full details for ${project.title}`}
          >
            <span>Details</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </TiltCard>
  );
}
