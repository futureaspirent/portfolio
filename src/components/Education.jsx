import React from 'react';
import { educationData } from '../data/portfolioData';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaBookOpen } from 'react-icons/fa';
import '../styles/Education.css';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">05. Academic Foundation</span>
          <h2 className="section-title">
            Education & Qualifications
          </h2>
          <p className="section-desc">
            Formal computer science postgraduate education providing core foundations in software architecture and algorithms.
          </p>
        </div>

        {/* Education Card Grid */}
        <div className="education-grid">
          {educationData.map((edu) => (
            <div key={edu.id} className="card-glass education-card">
              <div className="edu-header">
                <div className="edu-icon-badge">
                  <FaGraduationCap className="edu-icon" />
                </div>

                <div className="edu-main-info">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <span className="edu-institution">{edu.institution}</span>

                  <div className="edu-meta-row">
                    <span className="meta-badge">
                      <FaCalendarAlt className="meta-icon" />
                      <span>{edu.period}</span>
                    </span>
                    <span className="meta-badge">
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{edu.location}</span>
                    </span>
                  </div>
                </div>

                {/* CGPA Highlight Pill */}
                <div className="edu-cgpa-box">
                  <div className="cgpa-label">
                    <FaAward className="cgpa-icon" />
                    <span>Academic Score</span>
                  </div>
                  <div className="cgpa-value text-gradient">{edu.cgpa}</div>
                </div>
              </div>

              <p className="edu-description">{edu.description}</p>

              {/* Coursework */}
              {edu.keyCourses && (
                <div className="edu-courses-block">
                  <span className="courses-label">
                    <FaBookOpen className="courses-icon" /> Core Technical Modules:
                  </span>
                  <div className="courses-tags-grid">
                    {edu.keyCourses.map((course, cIdx) => (
                      <span key={cIdx} className="course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
