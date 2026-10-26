import React from 'react';
import { personalInfo, navigationLinks } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';
import '../styles/Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-wrap">
      <div className="container footer-container">
        {/* Top Footer Section */}
        <div className="footer-main-row">
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">{personalInfo.shortName || personalInfo.name}</span>
              <span className="logo-accent">.dev</span>
              <span className="logo-bracket"> /&gt;</span>
            </a>
            <p className="footer-brand-desc">
              MERN Stack Developer dedicated to building performant web applications, clean RESTful APIs, and user-friendly digital experiences.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav">
            <span className="footer-nav-title">Quick Navigation</span>
            <ul className="footer-nav-list">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social-col">
            <span className="footer-nav-title">Connect</span>
            <div className="footer-social-icons">
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
              {personalInfo.phone && (
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="social-icon-btn"
                  aria-label="Call Swathi"
                  title="Phone: 9652822231"
                >
                  <FaPhoneAlt />
                </a>
              )}
            </div>
            <p className="footer-avail-note">
              Based in {personalInfo.location}.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {CURRENT_YEAR} {personalInfo.name}. Designed & Built with{' '}
            <span className="tech-badge-inline">React.js</span> and{' '}
            <span className="tech-badge-inline">MERN</span> principles.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            title="Scroll to top"
          >
            <span>Top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
