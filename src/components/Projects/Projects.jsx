import React, { useState, useMemo } from 'react';
import { projectsData } from '../../data/portfolioData';
import SectionHeader from '../UI/SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = useMemo(() => {
    const cats = ['All'];
    projectsData.forEach((p) => {
      if (p.category && !cats.includes(p.category)) {
        cats.push(p.category);
      }
    });
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHeader
          subtitle="Featured Work"
          title="Showcase"
          highlightText="Project"
          description="Hardware and embedded IoT solution integrating microcontrollers, secure access logic, and real-time telemetry."
        />

        {/* Glassmorphic Category Filter Tabs */}
        <div className="project-filters-wrapper">
          <div className="project-filters-glass">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-tab ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`projects-grid ${filteredProjects.length === 1 ? 'single-project-grid' : ''}`}>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Project Details Modal */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </div>
    </section>
  );
}
