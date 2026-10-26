import React, { useState, useEffect } from 'react';
import { navigationLinks, personalInfo } from '../data/portfolioData';
import { FaBars, FaTimes, FaFileAlt } from 'react-icons/fa';
import '../styles/Navbar.css';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Accessibility: close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-logo" onClick={closeMobileMenu}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">{personalInfo.shortName || personalInfo.name}</span>
          <span className="logo-accent">.dev</span>
          <span className="logo-bracket"> /&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            {navigationLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                    {isActive && <span className="active-dot" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="navbar-actions">
          <a
            href={personalInfo.resumeUrl}
            className="btn btn-secondary nav-cta-btn"
          >
            <FaFileAlt className="nav-cta-icon" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="mobile-backdrop"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <nav
        className={`mobile-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-header">
          <span className="mobile-logo-text">
            {personalInfo.name}
          </span>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navigationLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <span className="mobile-link-index">
                    0{navigationLinks.indexOf(link) + 1}.
                  </span>
                  <span>{link.name}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mobile-drawer-footer">
          <a
            href={personalInfo.resumeUrl}
            className="btn btn-secondary mobile-resume-btn"
            onClick={closeMobileMenu}
          >
            <FaFileAlt />
            <span>Resume</span>
          </a>
          <a
            href="#contact"
            className="btn btn-primary mobile-contact-btn"
            onClick={closeMobileMenu}
          >
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  );
}
