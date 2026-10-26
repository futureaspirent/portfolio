import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCode, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge-wrap">
            <span className="status-pill">
              <span className="status-dot" />
              <span>{personalInfo.statusBadge}</span>
            </span>
            <span className="exp-pill">
              <span className="exp-icon">⚡</span>
              <span>{personalInfo.experienceYears}</span>
            </span>
          </div>

          {/* Heading */}
          <div className="hero-headings">
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-name">
              <span className="hero-name-text">{personalInfo.name}</span>
            </h1>
            <h2 className="hero-role">
              <span className="role-prefix">Full-Stack </span>
              <span className="text-gradient role-title">{personalInfo.role}</span>
            </h2>
          </div>

          {/* Short Introduction */}
          <p className="hero-description">
            {personalInfo.bio}
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary hero-btn">
              <span>View Projects</span>
              <FaArrowRight className="hero-btn-arrow" />
            </a>
            <a href="#contact" className="btn btn-secondary hero-btn">
              <span>Contact Me</span>
              <FaEnvelope />
            </a>
          </div>

          {/* Social Links & Highlights */}
          <div className="hero-social-strip">
            <span className="social-label">Connect:</span>
            <div className="social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
                title="GitHub: futureaspirent"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-icon-btn"
                aria-label="Send Email"
                title="Email Swathi"
              >
                <FaEnvelope />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="social-icon-btn"
                aria-label="Call Swathi"
                title="Phone: 9652822231"
              >
                <FaPhoneAlt />
              </a>
            </div>
          </div>
        </div>

        {/* Visual Showcase Card */}
        <div className="hero-visual">
          <div className="hero-card card-glass">
            {/* Terminal Top Bar */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
              </div>
              <span className="terminal-title">developer@swathimudi: ~/mern-portfolio</span>
            </div>

            {/* Code Snippet Box */}
            <div className="terminal-body">
              <div className="code-line">
                <span className="token-keyword">const</span>{' '}
                <span className="token-var">developer</span> = &#123;
              </div>
              <div className="code-line indent-1">
                <span className="token-prop">name:</span>{' '}
                <span className="token-string">"{personalInfo.name}"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="token-prop">role:</span>{' '}
                <span className="token-string">"{personalInfo.role}"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="token-prop">education:</span>{' '}
                <span className="token-string">"MCA (8.64 CGPA)"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="token-prop">coreStack:</span> [
              </div>
              <div className="code-line indent-2">
                <span className="token-highlight">"MongoDB"</span>,{' '}
                <span className="token-highlight">"Express.js"</span>,{' '}
                <span className="token-highlight">"React.js"</span>,{' '}
                <span className="token-highlight">"Node.js"</span>
              </div>
              <div className="code-line indent-1">],</div>
              <div className="code-line indent-1">
                <span className="token-prop">internships:</span>{' '}
                <span className="token-string">"Zethic Tech & Rubicorn"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="token-prop">openForWork:</span>{' '}
                <span className="token-bool">true</span>
              </div>
              <div className="code-line">&#125;;</div>
            </div>

            {/* MERN Stack Badges */}
            <div className="mern-pills-bar">
              <div className="mern-pill" title="MongoDB">
                <SiMongodb className="mern-icon icon-mongo" />
                <span>MongoDB</span>
              </div>
              <div className="mern-pill" title="Express.js">
                <SiExpress className="mern-icon icon-express" />
                <span>Express</span>
              </div>
              <div className="mern-pill" title="React.js">
                <SiReact className="mern-icon icon-react" />
                <span>React</span>
              </div>
              <div className="mern-pill" title="Node.js">
                <SiNodedotjs className="mern-icon icon-node" />
                <span>Node.js</span>
              </div>
            </div>

            {/* Quick Stat Footer */}
            <div className="hero-card-footer">
              <div className="quick-metric">
                <FaCheckCircle className="metric-icon" />
                <span>RESTful APIs & JWT</span>
              </div>
              <div className="quick-metric">
                <FaCode className="metric-icon" />
                <span>Vercel Deployed Apps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
