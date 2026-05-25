import React from 'react';
import './DeliveryCommitment.css';

export default function DeliveryCommitment() {
  return (
    <div className="hero-panel hero-panel--full delivery-panel" role="region" aria-labelledby="delivery-heading">
      <h2 id="delivery-heading">Our Delivery Commitment</h2>
      <p className="hero-subtitle">A professional engagement model focused on clarity, quality, and long-term reliability.</p>
      <div className="delivery-grid" role="list" aria-label="Delivery commitments">
        <div className="delivery-card" role="listitem">
          <div className="delivery-icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-svg" aria-hidden>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 9h8M8 12h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <strong>Structured Communication</strong>
            <p>Planned updates, clear documentation, and transparent progress tracking.</p>
          </div>
        </div>

        <div className="delivery-card" role="listitem">
          <div className="delivery-icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-svg" aria-hidden>
              <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 2v4M8 2v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <strong>Predictable Delivery</strong>
            <p>Milestone-based execution with practical timelines and accountable ownership.</p>
          </div>
        </div>

        <div className="delivery-card" role="listitem">
          <div className="delivery-icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-svg" aria-hidden>
              <path d="M12 2l7 4v5a7 7 0 0 1-7 7 7 7 0 0 1-7-7V6l7-4z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.5 12.5l1.8 1.8L15 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <strong>Quality Assurance and Continuity</strong>
            <p>Production-ready standards with post-launch maintenance and improvement support.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// component is static for now
