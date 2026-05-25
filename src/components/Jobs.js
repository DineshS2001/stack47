import React from 'react';
import './Jobs.css';
import { roles } from '../data/roles';

function navigateTo(pathname) {
  window.history.pushState({}, '', pathname);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export default function Jobs() {
  function go(pathname) {
    return (e) => {
      e.preventDefault();
      navigateTo(pathname);
    };
  }

  return (
    <div className="jobs-page">
      <section className="careers-hero jobs-hero">
        <div className="container careers-hero-inner">
          <h1>Job Opportunities</h1>
          <p className="lead">Join Stack47 from anywhere and help deliver reliable software products with strong engineering standards.</p>
          <a href="/careers" className="jobs-back-link" onClick={go('/careers')}>Back to Careers</a>
        </div>
      </section>

      <section className="jobs-section">
        <div className="container">
          <div className="jobs-grid" role="list" aria-label="Open roles">
            {roles.map((role) => (
              <article
                className="job-card"
                role="listitem"
                key={role.slug}
                tabIndex={0}
                onClick={() => navigateTo(`/careers/jobs/${role.slug}`)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigateTo(`/careers/jobs/${role.slug}`); }}
                aria-label={`View details for ${role.title}`}
              >
                <div className="job-meta">
                  <span>{role.type}</span>
                  <span>{role.location}</span>
                </div>
                <h2>{role.title}</h2>
                <p>{role.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
