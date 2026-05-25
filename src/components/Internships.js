import React from 'react';
import './Careers.css';

export default function Internships() {
  const tracks = [
    {
      title: 'Full-stack Developer',
      color: 'var(--primary)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7.5V16.5L12 21l9-4.5V7.5L12 3 3 7.5z" />
          <path d="M12 3v18" />
          <path d="M3 7.5l9 4.5 9-4.5" />
        </svg>
      )
    },
    {
      title: 'Software Engineer',
      color: 'var(--primary)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v5l3 2" />
        </svg>
      )
    },
    {
      title: 'QA Engineer',
      color: 'var(--primary)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17l-5-5" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
    },
    {
      title: 'Business Analyst',
      color: 'var(--primary)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12h18" />
          <path d="M6 8v8" />
          <path d="M12 6v12" />
          <path d="M18 10v6" />
        </svg>
      )
    },
    {
      title: 'Product Manager',
      color: 'var(--primary)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    }
  ];

  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="container careers-hero-inner">
          <h1>Internship Program</h1>
          <p className="lead">Explore our 6-month industry internship program and join Stack47 on real projects with mentor-led guidance.</p>
        </div>
      </section>

      <section className="internship careers-section">
        <div className="container">
          <h2>6-Month Industry Internship Program</h2>
          <p className="section-lead">Gain real-world experience with industry-level mentorship from experts at Stack47.</p>

          <div className="internship-layout">
            <div className="internship-left">
              <div className="internship-details">
                <h3>Why Our Internship?</h3>
                <ul className="benefits-list">
                  <li><strong>Real Industry Projects:</strong> Work on projects used by actual clients and organizations.</li>
                  <li><strong>Expert Mentorship:</strong> Learn from senior engineers and architects with years of experience.</li>
                  <li><strong>Theory to Practice:</strong> Understand how to apply academic concepts to real-world challenges.</li>
                  <li><strong>Best Practices:</strong> Learn industry standards, code quality, and professional workflows.</li>
                  <li><strong>Team Collaboration:</strong> Experience working with diverse teams in an agile environment.</li>
                  <li><strong>Career Growth:</strong> Build a portfolio and network that opens doors to job opportunities.</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>Program Details</h3>
                <div className="pricing-meta">
                  <div><strong>Duration:</strong> 6 months (mentorship + project work)</div>
                  <div><strong>Investment:</strong> LKR 40,000</div>
                  <div><strong>Time:</strong> ~10-15 hrs/week including mentor sessions</div>
                </div>

                <div className="pricing-section">
                  <h4>What the Internship Is</h4>
                  <p className="about-lead">This is an industry internship where interns join Stack47 as junior team members working on real client tasks. Interns are treated like employees for the duration of the programme - you will be assigned meaningful work, follow team processes, and receive hands-on guidance because many participants are fresh graduates.</p>
                </div>

                <div className="pricing-section">
                  <h4>How We Guide You</h4>
                  <ul className="included-list">
                    <li>Assigned project tasks with clear acceptance criteria - you deliver, we review</li>
                    <li>Regular mentor sessions (1:1 and team) to review progress and unblock issues</li>
                    <li>Pair programming and live code reviews to teach practical workflows</li>
                    <li>Performance feedback, career coaching, and support for interview preparation</li>
                    <li>Final demo day; high-performing interns may be considered for hire</li>
                  </ul>
                </div>

                <div className="pricing-section">
                  <h4>Project Pathways (examples)</h4>
                  <ul className="syllabus-list">
                    <li>Feature delivery cycle: spec -> implementation -> testing -> deploy</li>
                    <li>API design and backend integration with data modeling</li>
                    <li>Testing, CI/CD, observability and performance tuning</li>
                    <li>Product collaboration: stakeholder meetings, UX feedback, demos</li>
                  </ul>
                </div>

                <div className="pricing-steps">
                  <h4>How Applications Are Processed</h4>
                  <ol>
                    <li>Submit the application form (basic details + preferred track)</li>
                    <li>Short screening call (15-20 minutes) to discuss goals</li>
                    <li>Accepted candidates receive onboarding and project brief</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="internship-right">
              <div className="internship-tracks">
                <h3>Specialization Tracks</h3>
                <div className="tracks-grid">
                  {tracks.map((track) => (
                    <div key={track.title} className="track-card" style={{ '--track-color': track.color }}>
                      <div className="track-icon">{track.icon}</div>
                      <h4>{track.title}</h4>
                    </div>
                  ))}
                </div>
              </div>

              <section id="apply" className="application" aria-labelledby="apply-heading">
                <h3 id="apply-heading">Apply for Internship Program</h3>
                <p className="section-lead">Fill the form and we'll connect with you on WhatsApp to discuss your application.</p>
                <form onSubmit={handleSubmit} className="app-form-inline" aria-label="Internship application form">
                  <div className="form-row">
                    <input name="name" aria-label="Full name" placeholder="Full Name" required />
                    <input name="email" aria-label="Email address" type="email" placeholder="Email Address" required />
                  </div>
                  <div className="form-row">
                    <input name="phone" aria-label="Phone number" type="tel" placeholder="Phone Number" required />
                    <select name="track" aria-label="Preferred track" required>
                      <option>Full-stack Developer</option>
                      <option>Software Engineer</option>
                      <option>QA Engineer</option>
                      <option>Business Analyst</option>
                      <option>Product Manager</option>
                    </select>
                  </div>
                  <textarea name="message" aria-label="About you" placeholder="Tell us about yourself" rows="4" required />
                  <button type="submit" className="button primary">Contact us on Whatsapp</button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get('name') || '';
    const email = fd.get('email') || '';
    const phone = fd.get('phone') || '';
    const track = fd.get('track') || '';
    const message = fd.get('message') || '';

    const text = `Hello Stack47,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0ATrack: ${encodeURIComponent(track)}%0A%0AMessage: ${encodeURIComponent(message)}%0A%0AI'm interested in the 6-month internship program.`;
    const wa = `https://wa.me/94786109206?text=${text}`;
    window.open(wa, '_blank');
  }
}
