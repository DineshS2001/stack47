import React from 'react';
import PropTypes from 'prop-types';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-text">
          <h2>About Stack47</h2>
          <p className="about-lead">We create reliable, scalable software for startups and enterprises. Our approach prioritizes measurable outcomes, clean code, and collaborative partnerships.</p>
          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 3l-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4>Mission</h4>
                <p>Help teams ship high-quality products faster.</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14h7l-1 8L21 10h-7l-1-8z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4>Principles</h4>
                <p>Clarity, ownership, continuous improvement.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 9L4 12l4 3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 9l4 3-4 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="service-body">
              <h4>Custom Development</h4>
              <p>End-to-end custom software development — we build features and platforms that match your business, not a specific language.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="14" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="18" y="6" width="4" height="8" rx="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="service-body">
              <h4>Web & Mobile Apps</h4>
              <p>Responsive web apps and native/hybrid mobile applications — from prototypes to production-ready products.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6h15l-3 9H9L6 6z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="10.5" cy="18.5" r="1.2" />
                <circle cx="18.5" cy="18.5" r="1.2" />
              </svg>
            </div>
            <div className="service-body">
              <h4>POS Systems</h4>
              <p>Custom point-of-sale solutions tailored for retail and hospitality — reliable, secure, and easy to use.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  children: PropTypes.node,
};
