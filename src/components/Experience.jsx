import React from 'react';
import { experienceData } from '../data/portfolioData';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaLaptopCode } from 'react-icons/fa';
import '../styles/Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">03. Professional Experience</span>
          <h2 className="section-title">
            Internship & Practical Experience
          </h2>
          <p className="section-desc">
            Hands-on software development internship experience applying MERN stack practices in team workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {experienceData.map((exp) => (
            <div key={exp.id} className="timeline-item">
              {/* Timeline Connector Line & Icon */}
              <div className="timeline-marker">
                <div className="marker-icon-wrapper">
                  <FaBriefcase className="marker-icon" />
                </div>
                <div className="marker-line" />
              </div>

              {/* Main Content Card */}
              <div className="card-glass timeline-content-card">
                <div className="experience-card-header">
                  <div className="title-and-company">
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="company-meta">
                      <span className="experience-company">{exp.company}</span>
                      <span className="meta-divider">•</span>
                      <span className="experience-type-pill">{exp.type}</span>
                    </div>
                  </div>

                  <div className="period-and-location">
                    <span className="meta-badge">
                      <FaCalendarAlt className="meta-icon" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="meta-badge">
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="experience-overview">{exp.description}</p>

                {/* Key Responsibilities */}
                <div className="responsibilities-block">
                  <h4 className="responsibilities-title">
                    <FaLaptopCode className="title-icon" /> Key Contributions & Responsibilities:
                  </h4>
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="responsibility-item">
                        <FaCheckCircle className="resp-check-icon" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="experience-tech-used">
                  <span className="tech-label">Technologies:</span>
                  <div className="tech-badges-list">
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="badge-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
