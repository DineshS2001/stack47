import React from 'react';
import PropTypes from 'prop-types';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-text">
          <h2>About Stack47</h2>
          <h3>Engineering Digital Solutions That Drive Business Growth</h3>
          <p className="about-lead">Stack47 is a software-driven solutions company focused on building reliable, scalable, 
            and high-performance digital systems for modern businesses. We specialize in transforming complex requirements into structured, efficient, and user-focused software products.</p>
          <p className="about-lead">Our approach combines technical expertise with clear execution strategies, enabling organizations to streamline operations, enhance digital presence, and adapt to evolving technological demands.</p>
        </div>

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
              <h4>Our Focus</h4>
              <p>At Stack47, we prioritize on building scalable, reliable, and high-performance digital systems. We combine engineering precision with structured development practices to deliver clean, maintainable solutions, with a strong emphasis on transparency, quality, and long-term reliability.</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14h7l-1 8L21 10h-7l-1-8z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h4>Our Vision</h4>
              <p>To become a trusted technology partner for businesses by delivering software solutions that are not only functional, but strategically aligned with growth and innovation.</p>
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
