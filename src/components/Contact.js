import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="contact-details">
          <div className="contact-hero">
            <h2>Contact Us</h2>
            <p className="section-lead">Have questions or want to discuss an opportunity? Reach us directly — message us on WhatsApp or send an email.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-main">
              <ul className="contact-list">
                <li className="contact-item">
                  <span className="contact-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15a2 2 0 0 1-2 2h-1l-2 3-3-2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 10h8M8 14h6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <div className="contact-label">WhatsApp</div>
                    <a className="contact-link" href="https://wa.me/94786109206" target="_blank" rel="noreferrer">+94 78 610 9206</a>
                  </div>
                </li>

                <li className="contact-item">
                  <span className="contact-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <div className="contact-label">Email</div>
                    <a className="contact-link" href="mailto:hello@stack47.com">hello@stack47.com</a>
                  </div>
                </li>

                <li className="contact-item">
                  <span className="contact-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="9" r="2.2" />
                    </svg>
                  </span>
                  <div>
                    <div className="contact-label">Office</div>
                    <div className="contact-link">Colombo, Sri Lanka</div>
                  </div>
                </li>

                <li className="contact-item">
                  <span className="contact-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <div className="contact-label">Hours</div>
                    <div className="contact-link">Mon–Fri 9:00–17:00</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right-side CTA removed as requested */}
          </div>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  children: PropTypes.node,
};
