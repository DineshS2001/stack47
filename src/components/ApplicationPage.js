import React from 'react';
import { roles } from '../data/roles';
import ApplicationForm from './ApplicationForm';
import './ApplicationPage.css';

function getSlugFromPath() {
  const parts = window.location.pathname.replace(/\/+$/, '').split('/');
  return parts[parts.length - 1] || '';
}

function navigateTo(pathname) {
  window.history.pushState({}, '', pathname);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export default function ApplicationPage() {
  const slug = getSlugFromPath();
  const role = roles.find((r) => r.slug === slug);

  if (!role) {
    return (
      <div className="container">
        <h2>Application page not found</h2>
        <p>Return to the <a href="/careers" onClick={(e) => { e.preventDefault(); navigateTo('/careers'); }}>Careers hub</a>.</p>
      </div>
    );
  }

  return (
    <div className="application-page">
      <section className="careers-hero apply-hero">
        <div className="container careers-hero-inner">
          <h1>Apply: {role.title}</h1>
          <p className="lead">Complete the application and we'll contact you with next steps.</p>
          <a href={`/careers/jobs/${role.slug}`} className="jobs-back-link" onClick={(e) => { e.preventDefault(); navigateTo(`/careers/jobs/${role.slug}`); }}>Back to role</a>
        </div>
      </section>

      <section className="apply-section">
        <div className="container">
          <div className="apply-layout">
            <div className="apply-left">
              <h2>Role summary</h2>
              <p>{role.summary}</p>

              {role.responsibilities && (
                <>
                  <h3>Responsibilities</h3>
                  <ul>
                    {role.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </>
              )}

              {role.requirements && (
                <>
                  <h3>Requirements</h3>
                  <ul>
                    {role.requirements.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </>
              )}

            </div>

            <aside className="apply-right">
              <ApplicationForm role={role.title} />
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
