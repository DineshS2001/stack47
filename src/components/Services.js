import React from 'react';
import PropTypes from 'prop-types';
import './Services.css';

export default function Services() {
  const items = [
    {
      title: 'Custom Development',
      desc: 'Full lifecycle custom software — features, platforms, integrations and long-term support.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'POS Systems',
      desc: 'Bespoke point-of-sale solutions for retail and hospitality, with inventory and reporting.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6h18v11H3z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 10h10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Web & Mobile Apps',
      desc: 'Responsive websites and native/hybrid mobile apps — polished UI and reliable performance.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="14" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 8v8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Maintenance & Support',
      desc: 'Ongoing maintenance, monitoring and support to keep products secure and evolving.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>What We Do</h2>
        <div className="grid">
          {items.map((s) => (
            <article key={s.title} className="card">
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Services.propTypes = {
  children: PropTypes.node,
};
