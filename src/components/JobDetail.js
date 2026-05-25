import React from 'react';
import { roles } from '../data/roles';
import './JobDetail.css';

function getSlugFromPath() {
  const parts = window.location.pathname.replace(/\/+$/, '').split('/');
  return parts[parts.length - 1] || '';
}

function navigateTo(pathname) {
  window.history.pushState({}, '', pathname);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export default function JobDetail() {
  const slug = getSlugFromPath();
  const role = roles.find((r) => r.slug === slug);

  if (!role) {
    return (
      <div className="container">
        <h2>Role not found</h2>
        <p>We couldn't find that job. Return to the <a href="/careers/jobs" onClick={(e) => { e.preventDefault(); navigateTo('/careers/jobs'); }}>jobs list</a>.</p>
      </div>
    );
  }

  return (
    <div className="job-detail-page">
      <section className="careers-hero jobs-hero">
        <div className="container careers-hero-inner">
          <h1>{role.title}</h1>
          <p className="lead">{role.type} • {role.location}</p>
          <a href="/careers/jobs" className="jobs-back-link" onClick={(e) => { e.preventDefault(); navigateTo('/careers/jobs'); }}>Back to Roles</a>
        </div>
      </section>

      <section className="job-detail-section">
        <div className="container">
          <div className="job-detail-card">
            <h2>About the role</h2>
            <p>{role.details}</p>

            <h3>Short summary</h3>
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

            {role.niceToHave && (
              <>
                <h3>Nice to have</h3>
                <ul>
                  {role.niceToHave.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </>
            )}

            {role.techStack && (
              <>
                <h3>Technical stack</h3>
                <p>{role.techStack.join(', ')}</p>
              </>
            )}

            <p>
              <a
                href={`/careers/apply/${role.slug}`}
                className="button primary"
                onClick={(e) => { e.preventDefault(); navigateTo(`/careers/apply/${role.slug}`); }}
              >Apply for this role</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
