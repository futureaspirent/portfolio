import React from 'react';
import { aboutData, certificationsData } from '../data/portfolioData';
import { FaCode, FaRocket, FaLightbulb, FaUserTie, FaCertificate } from 'react-icons/fa';
import '../styles/About.css';


export default function About() {
  const valueIcons = [
    <FaCode key="0" className="val-icon" />,
    <FaLightbulb key="1" className="val-icon" />,
    <FaRocket key="2" className="val-icon" />,
    <FaUserTie key="3" className="val-icon" />
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">01. About Me</span>
          <h2 className="section-title">
            Crafting Digital Solutions with <span className="text-gradient">Passion & Precision</span>
          </h2>
          <p className="section-desc">
            Get to know my journey, background, problem-solving ethos, and dedication to full-stack craftsmanship.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Story & Highlights */}
          <div className="about-story-col">
            <div className="card-glass about-narrative-card">
              <h3 className="about-card-title">My Developer Journey</h3>
              {aboutData.summary.map((para, idx) => (
                <p key={idx} className="about-paragraph">
                  {para}
                </p>
              ))}

              <div className="about-stats-row">
                <div className="about-stat-item">
                  <span className="about-stat-val text-gradient">8+</span>
                  <span className="about-stat-lbl">Months Internship Experience</span>
                </div>
                <div className="about-stat-item">
                  <span className="about-stat-val text-gradient">8.64</span>
                  <span className="about-stat-lbl">MCA CGPA</span>
                </div>
                <div className="about-stat-item">
                  <span className="about-stat-val text-gradient">8.80</span>
                  <span className="about-stat-lbl">B.Sc Computer Science CGPA</span>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            {certificationsData && (
              <div className="card-glass about-certifications-card">
                <h4 className="cert-heading">
                  <FaCertificate className="cert-icon" /> Certifications & Specialized Training
                </h4>
                <div className="cert-list">
                  {certificationsData.map((cert) => (
                    <div key={cert.id} className="cert-item">
                      <div className="cert-meta">
                        <span className="cert-title">{cert.title}</span>
                        <span className="cert-issuer">{cert.issuer} • {cert.date}</span>
                      </div>
                      <p className="cert-desc">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Core Strengths & Values */}
          <div className="about-values-col">
            <div className="values-header">
              <h3 className="values-title">What I Bring to the Table</h3>
              <p className="values-subtitle">Key principles that guide my day-to-day coding and team collaboration.</p>
            </div>

            <div className="values-grid">
              {aboutData.coreValues.map((val, idx) => (
                <div key={idx} className="card-glass value-card">
                  <div className="value-icon-box">
                    {valueIcons[idx % valueIcons.length]}
                  </div>
                  <div className="value-content">
                    <h4 className="value-card-title">{val.title}</h4>
                    <p className="value-card-desc">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Overview Pill Card */}
            <div className="card-glass quick-info-card">
              <div className="quick-info-row">
                <span className="quick-info-label">Specialization:</span>
                <span className="quick-info-value">Full-Stack MERN Development</span>
              </div>
              <div className="quick-info-row">
                <span className="quick-info-label">Education:</span>
                <span className="quick-info-value">MCA (2023 - 2025) & B.Sc (CS)</span>
              </div>
              <div className="quick-info-row">
                <span className="quick-info-label">Industry Experience:</span>
                <span className="quick-info-value">Zethic Tech & Rubicorn Tech</span>
              </div>
              <div className="quick-info-row">
                <span className="quick-info-label">Open for:</span>
                <span className="quick-info-value highlight-emerald">Full-Time Software Roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
