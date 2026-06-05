import React from 'react';
import PropTypes from 'prop-types';
import './Services.css';

export default function Services() {
  const items = [
    {
      title: 'Software Development',
      desc: 'We build custom software solutions tailored to your business needs. From business automation tools to enterprise systems, we deliver scalable and efficient applications with long-term support.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 7L6 12l4 5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 7l4 5-4 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Web Development',
      desc: 'We build modern, responsive, and high-availability web platforms that strengthen your digital presence. Every solution is engineered for usability, performance, and seamless user experience across all devices.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12h20" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 2v20" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Mobile Development',
      desc: 'We develop secure and scalable mobile applications for Android and iOS platforms. Our focus is on delivering intuitive interfaces, optimized performance, and consistent cross-platform experiences.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="3" width="10" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="17" r="1" />
        </svg>
      )
    },
    {
      title: 'Web Hosting & Infrastructure',
      desc: 'Reliable and secure hosting solutions to keep your websites and applications running smoothly. We ensure high uptime, scalability, and strong data protection.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="18" height="6" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="3" y="13" width="18" height="6" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="grid">
          {items.map((s) => (
            <article key={s.title} className="card">
              <div className="icon">{s.icon}</div>
              <div className="card-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
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
