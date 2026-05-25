import React from 'react';
import './CareersHub.css';

function navigateTo(pathname) {
  window.history.pushState({}, '', pathname);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export default function Careers() {
  function go(pathname) {
    return (e) => {
      e.preventDefault();
      navigateTo(pathname);
    };
  }

  return (
    <div className="careers-page careers-hub-page">
      <section className="careers-hero careers-hub-hero">
        <div className="container careers-hero-inner careers-hub-hero-inner">
          <h1>Build Your Career With Stack47</h1>
          <p className="lead">Choose the path that fits your stage: internship tracks for fresh graduates, or full-time roles for experienced professionals.</p>
        </div>
      </section>

      <section className="careers-hub-section">
        <div className="container">
          <div className="careers-path-grid" role="list" aria-label="Career paths">
            <article className="career-path-card" role="listitem">
              <h2>Internship Program</h2>
              <p>Join our 6-month mentorship-focused internship and work on real products with expert guidance.</p>
              <ul>
                <li>Project-based learning with code reviews</li>
                <li>Specialization tracks and mentor sessions</li>
                <li>Potential pathway to full-time roles</li>
              </ul>
              <a className="button primary" href="/careers/internships" onClick={go('/careers/internships')}>Explore Internships</a>
            </article>

            <article className="career-path-card" role="listitem">
              <h2>Job Opportunities</h2>
              <p>Apply for open positions across engineering, QA, and product teams to build impactful software.</p>
              <ul>
                <li>Role-based hiring with clear expectations</li>
                <li>Collaborative, high-performance engineering culture</li>
                <li>Growth path, ownership, and modern delivery practices</li>
              </ul>
              <a className="button primary" href="/careers/jobs" onClick={go('/careers/jobs')}>View Open Roles</a>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
