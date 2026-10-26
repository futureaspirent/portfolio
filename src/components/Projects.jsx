import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaCheck, FaLayerGroup, FaStar, FaDatabase, FaReact, FaCode } from 'react-icons/fa';
import '../styles/Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'Featured'
    ? projectsData.filter(p => p.featured)
    : filter === 'React'
      ? projectsData.filter(p => p.technologies.some(t => t.includes('React')))
      : projectsData;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">04. Featured Projects</span>
          <h2 className="section-title">
            Featured Web Applications
          </h2>
          <p className="section-desc">
            Full-stack MERN systems, dynamic REST API integrations, and responsive React applications.
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="projects-filter-bar">
          <button
            type="button"
            className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
            onClick={() => setFilter('All')}
          >
            <FaLayerGroup />
            <span>All Projects ({projectsData.length})</span>
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'Featured' ? 'active' : ''}`}
            onClick={() => setFilter('Featured')}
          >
            <FaStar />
            <span>Featured MERN System</span>
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'React' ? 'active' : ''}`}
            onClick={() => setFilter('React')}
          >
            <FaReact />
            <span>React Applications</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`card-glass project-card ${project.featured ? 'project-featured' : ''}`}
            >
              <div className="project-top-row">
                <span className={`project-badge ${project.featured ? 'badge-primary' : 'badge-neutral'}`}>
                  {project.badge}
                </span>

                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      aria-label={`${project.title} GitHub repository`}
                      title="View GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn live-btn"
                      aria-label={`${project.title} Live Demo`}
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  ) : project.category === 'frontend' ? (
                    <span className="badge-client-tag" title="Frontend application">
                      <FaCode /> Web App
                    </span>
                  ) : (
                    <span className="badge-service-tag" title="Backend service focused purely on MongoDB database operations (No frontend needed)">
                      <FaDatabase /> API / DB
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">
                {project.detailedDescription || project.shortDescription}
              </p>

              {/* Key Highlights */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="project-highlights">
                  <span className="highlights-heading">Key Features:</span>
                  <ul className="highlights-list">
                    {project.keyFeatures.map((feature, fIdx) => (
                      <li key={fIdx} className="highlight-item">
                        <FaCheck className="highlight-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technology Tags */}
              <div className="project-footer">
                <div className="project-tech-tags">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="badge-tech">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions-row">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  ) : project.category === 'frontend' ? (
                    <span className="badge-frontend-only" title="Client application">
                      <FaCode /> Client App
                    </span>
                  ) : (
                    <span className="badge-backend-only" title="Backend service only – focused on MongoDB operations">
                      <FaDatabase /> Backend & DB Only
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

