import React, { useState } from 'react';
import './ApplicationForm.css';

export default function ApplicationForm({ role }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', linkedin: '', cover: '', portfolio: '', salary: '', notice: '' });
  const [resumeName, setResumeName] = useState('');

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function onFile(e) {
    const f = e.target.files && e.target.files[0];
    if (f) setResumeName(f.name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, phone, location, linkedin, cover } = form;
    const text = `Hello Stack47,%0A%0AI am applying for the ${role} role.%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0ALocation: ${encodeURIComponent(location)}%0ALinkedIn: ${encodeURIComponent(linkedin)}%0A%0ACover Letter: ${encodeURIComponent(cover)}%0A%0AResume: ${encodeURIComponent(resumeName || 'Will attach in chat')}`;
    const wa = `https://wa.me/94786109206?text=${text}`;
    window.open(wa, '_blank');
  }

  return (
    <form className="application-form" onSubmit={handleSubmit} aria-label={`Application form for ${role}`}>
      <h3>Apply for this role</h3>
      <div className="form-grid">
        <label>
          Full name
          <input name="name" value={form.name} onChange={onChange} required />
        </label>
        <label>
          Email address
          <input name="email" type="email" value={form.email} onChange={onChange} required />
        </label>
        <label>
          Phone
          <input name="phone" value={form.phone} onChange={onChange} required />
        </label>
        <label>
          Location
          <input name="location" value={form.location} onChange={onChange} />
        </label>
        <label>
          LinkedIn (optional)
          <input name="linkedin" value={form.linkedin} onChange={onChange} placeholder="https://linkedin.com/in/yourname" />
        </label>
        <label>
          Portfolio / Website (optional)
          <input name="portfolio" value={form.portfolio} onChange={onChange} placeholder="https://your-site.com" />
        </label>
        <label className="full">
          Cover letter
          <textarea name="cover" value={form.cover} onChange={onChange} rows={5} placeholder="A short note about why you're a good fit" />
        </label>
        <label>
          Expected salary (optional)
          <input name="salary" value={form.salary} onChange={onChange} placeholder="e.g. USD 30,000/year" />
        </label>
        <label>
          Notice period (optional)
          <input name="notice" value={form.notice} onChange={onChange} placeholder="e.g. 2 weeks" />
        </label>
        <label className="file-input full">
          Upload resume (optional)
          <div className="file-row">
            <label className="file-chooser">
              <input type="file" name="resume" onChange={onFile} accept=".pdf,.doc,.docx" />
              <span className="choose">Choose File</span>
            </label>
            <span className="file-name">{resumeName || 'No file chosen'}</span>
          </div>
          <small className="hint">After clicking Apply, we'll open WhatsApp — please attach your resume in the chat.</small>
        </label>
      </div>

      <div className="form-actions">
        <button type="submit" className="button primary">Apply via WhatsApp</button>
      </div>
    </form>
  );
}
