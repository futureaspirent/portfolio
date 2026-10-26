import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNetworkWired,
  FaKey,
  FaCalendarAlt,
  FaDatabase,
  FaCheck,
  FaRobot
} from 'react-icons/fa';
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiPostman,
  SiVercel
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import '../styles/Skills.css';

// Helper to render respective icons
const getSkillIcon = (name) => {
  switch (name) {
    case 'React.js':
      return <FaReact className="skill-svg icon-react" />;
    case 'JavaScript (ES6+)':
      return <SiJavascript className="skill-svg icon-js" />;
    case 'HTML5':
      return <FaHtml5 className="skill-svg icon-html" />;
    case 'CSS3':
      return <FaCss3Alt className="skill-svg icon-css" />;
    case 'Bootstrap':
      return <FaBootstrap className="skill-svg icon-bootstrap" />;
    case 'Node.js':
      return <FaNodeJs className="skill-svg icon-node" />;
    case 'Express.js':
      return <SiExpress className="skill-svg icon-express" />;
    case 'REST APIs':
      return <FaNetworkWired className="skill-svg icon-api" />;
    case 'JWT Authentication':
      return <SiJsonwebtokens className="skill-svg icon-jwt" />;
    case 'bcrypt & Security':
      return <FaKey className="skill-svg icon-security" />;
    case 'Node-Cron':
      return <FaCalendarAlt className="skill-svg icon-cron" />;
    case 'MongoDB':
    case 'Mongoose ODM':
      return <SiMongodb className="skill-svg icon-mongo" />;
    case 'Git':
      return <FaGitAlt className="skill-svg icon-git" />;
    case 'GitHub':
      return <FaGithub className="skill-svg icon-github" />;
    case 'Postman':
      return <SiPostman className="skill-svg icon-postman" />;
    case 'VS Code':
      return <VscCode className="skill-svg icon-vscode" />;
    case 'Vercel':
      return <SiVercel className="skill-svg icon-vercel" />;
    case 'ChatGPT / AI Tools':
      return <FaRobot className="skill-svg icon-openai" />;
    default:
      return <FaDatabase className="skill-svg" />;
  }
};


export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((cat) => cat.category)];

  const displayedSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">02. Skills & Tech Stack</span>
          <h2 className="section-title">
            Technologies I Work With Every Day
          </h2>
          <p className="section-desc">
            A comprehensive set of modern full-stack web technologies, from intuitive frontends to secure RESTful backends.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-tabs" role="tablist" aria-label="Skills Category Filter">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`filter-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Category Grid */}
        <div className="skills-categories-grid">
          {displayedSkills.map((catGroup, idx) => (
            <div key={idx} className="card-glass skill-category-card">
              <div className="category-card-header">
                <h3 className="category-title">{catGroup.category}</h3>
                <p className="category-desc">{catGroup.description}</p>
              </div>

              <div className="skills-items-grid">
                {catGroup.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-card-item">
                    <div className="skill-icon-wrapper">
                      {getSkillIcon(skill.name)}
                    </div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level-badge">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Highlights Summary Banner */}
        <div className="card-glass skills-summary-banner">
          <div className="summary-banner-text">
            <h4>Full-Stack MERN Architecture</h4>
            <p>
              Architecting modular React frontends, connecting them to secure Node.js & Express REST APIs, and modeling scalable document schemas with MongoDB & Mongoose.
            </p>
          </div>
          <div className="workflow-tags">
            <span className="badge-tech"><FaCheck /> Frontend State & Hooks</span>
            <span className="badge-tech"><FaCheck /> RESTful API Standards</span>
            <span className="badge-tech"><FaCheck /> JWT Auth & Password Hashing</span>
            <span className="badge-tech"><FaCheck /> Git Branching & Vercel Deploy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
