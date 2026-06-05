import React from 'react';
import './DeliveryCommitment.css';

export default function DeliveryCommitment() {
  const items = [
    {
      title: 'Transparent Communication',
      desc: 'We maintain clear, structured communication throughout every phase of development. Clients receive consistent progress updates, documented decisions, and full visibility into project status to ensure alignment at all times.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-svg" aria-hidden>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 9h8M8 12h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Controlled & Predictable Execution',
      desc: 'Our delivery framework is milestone-driven, with well-defined scopes, timelines, and responsibilities. This enables predictable progress, reduced risk, and dependable project delivery without ambiguity.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-svg" aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 2v4M8 2v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Engineering Quality Standards',
      desc: 'We follow strict engineering and testing standards to ensure every solution is stable, secure, and production-ready. Quality assurance is embedded throughout the development lifecycle, not treated as a final phase.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-svg" aria-hidden>
          <path d="M12 2l7 4v5a7 7 0 0 1-7 7 7 7 0 0 1-7-7V6l7-4z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 12.5l1.8 1.8L15 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Ongoing Support & Evolution',
      desc: 'We provide continuous post-deployment support, including system monitoring, maintenance, and iterative improvements. This ensures long-term performance, adaptability, and sustained business value.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-svg" aria-hidden>
          <path d="M12 2l7 4v5a7 7 0 0 1-7 7 7 7 0 0 1-7-7V6l7-4z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 12.5l1.8 1.8L15 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section id="delivery" className="services delivery-panel" role="region" aria-labelledby="delivery-heading">
      <div className="container">
        <h2 id="delivery-heading">Our Delivery Commitment</h2>
        <br></br>
        <p className="hero-subtitle">A structured and accountable delivery model built for reliability, precision, and long-term value.</p>
        <p className="hero-subtitle">We follow a disciplined execution approach that ensures every solution is delivered with clarity, technical excellence, and measurable outcomes. Our process is designed to maintain transparency while consistently meeting business and technical expectations.</p>

        <div className="grid delivery-grid" role="list" aria-label="Delivery commitments">
          {items.map((item) => (
            <article key={item.title} className="card" role="listitem">
              <div className="icon">{item.icon}</div>
              <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
