import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaCopy,
  FaCheck,
  FaExclamationCircle,
  FaInfoCircle
} from 'react-icons/fa';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = personalInfo.email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.warn('Clipboard copy fallback:', err);
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmittedData({ ...formData });
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmittedData(null);
    setErrors({});
  };

  const mailtoUri = submittedData
    ? `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio] ${submittedData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Swathi,\n\n${submittedData.message}\n\nFrom: ${submittedData.name} (${submittedData.email})`
      )}`
    : `mailto:${personalInfo.email}`;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">06. Let's Connect</span>
          <h2 className="section-title">
            Get in Touch
          </h2>
          <p className="section-desc">
            Whether you have a job opportunity, a project to discuss, or want to say hello, feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Contact Cards */}
          <div className="contact-info-col">
            <div className="card-glass contact-card">
              <h3 className="contact-col-title">Contact Channels</h3>
              <p className="contact-col-desc">
                Available for full-time MERN stack development and software engineering roles.
              </p>

              <div className="contact-methods-list">
                {/* Email Item */}
                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <FaEnvelope />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="method-link"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={handleCopyEmail}
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email address"
                  >
                    {copied ? <FaCheck className="copy-check" /> : <FaCopy />}
                  </button>
                </div>

                {/* Phone Item */}
                {personalInfo.phone && (
                  <div className="contact-method-item">
                    <div className="method-icon-box phone-box">
                      <FaPhoneAlt />
                    </div>
                    <div className="method-details">
                      <span className="method-label">Phone / WhatsApp</span>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="method-link"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* LinkedIn Item */}
                <div className="contact-method-item">
                  <div className="method-icon-box linkedin-box">
                    <FaLinkedin />
                  </div>
                  <div className="method-details">
                    <span className="method-label">LinkedIn</span>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="method-link"
                    >
                      linkedin.com/in/swathi-mudi &rarr;
                    </a>
                  </div>
                </div>

                {/* GitHub Item */}
                <div className="contact-method-item">
                  <div className="method-icon-box github-box">
                    <FaGithub />
                  </div>
                  <div className="method-details">
                    <span className="method-label">GitHub</span>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="method-link"
                    >
                      github.com/futureaspirent &rarr;
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="contact-method-item">
                  <div className="method-icon-box location-box">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Location</span>
                    <span className="method-text">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Status Box */}
              <div className="contact-status-card">
                <span className="status-pill">
                  <span className="status-dot" />
                  <span>Immediate Availability</span>
                </span>
                <p className="status-text">
                  Actively interviewing for full-time frontend and full-stack software development opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Col */}
          <div className="contact-form-col">
            <div className="card-glass form-card">
              <h3 className="form-card-title">Send a Message</h3>
              <p className="form-card-desc">
                Fill out the form below. Client-side validation ensures your message is well formatted.
              </p>

              {submittedData ? (
                /* Honest Success Feedback Box */
                <div className="form-feedback-success" role="alert">
                  <div className="feedback-icon-head">
                    <FaCheck className="success-icon" />
                    <h4>Message Prepared Successfully!</h4>
                  </div>
                  <p className="feedback-note">
                    Thank you, <strong>{submittedData.name}</strong>.
                  </p>
                  <div className="feedback-notice-box">
                    <FaInfoCircle className="notice-icon" />
                    <p>
                      <strong>Notice:</strong> As a secure client-side portfolio without an external mail server attached, your message is validated locally. Click the button below to launch your default email client with your pre-filled message, or email me directly at <code>{personalInfo.email}</code>.
                    </p>
                  </div>

                  <div className="feedback-actions">
                    <a
                      href={mailtoUri}
                      className="btn btn-primary"
                    >
                      <FaPaperPlane />
                      <span>Send via Email Client</span>
                    </a>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleReset}
                    >
                      Write Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* The Contact Form */
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    {/* Name */}
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">
                        Your Name <span className="req-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Recruiter / Hiring Manager"
                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <span id="name-error" className="error-text">
                          <FaExclamationCircle /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        Your Email <span className="req-star">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="recruiter@example.com"
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <span id="email-error" className="error-text">
                          <FaExclamationCircle /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="form-group">
                    <label htmlFor="contact-subject" className="form-label">
                      Subject <span className="req-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. MERN Stack Role / Interview Opportunity"
                      className={`form-input ${errors.subject ? 'input-error' : ''}`}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {errors.subject && (
                      <span id="subject-error" className="error-text">
                        <FaExclamationCircle /> {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Message <span className="req-star">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Swathi, we reviewed your MERN stack portfolio and live projects and would like to discuss..."
                      className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <span id="message-error" className="error-text">
                        <FaExclamationCircle /> {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary submit-btn"
                  >
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
