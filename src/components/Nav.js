import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

function navigateTo(pathname) {
  window.history.pushState({}, '', pathname);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export default function Nav({ page }) {
  const [open, setOpen] = useState(false);

  function go(pathname) {
    return (e) => {
      e.preventDefault();
      setOpen(false);
      navigateTo(pathname);
    };
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="/" aria-label="stack47" onClick={go('/') }>
          <img src="/logo.png" alt="Stack47 logo" className="site-logo" />
        </a>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="site-navigation" className={`nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          {page === 'home' ? (
            <>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="/careers" onClick={go('/careers')}>Careers</a>
              <a href="#contact" className="cta">Contact Us</a>
            </>
          ) : (
            <>
              <a href="/" onClick={go('/')}>Home</a>
              <a href="/#services" onClick={go('/#services')}>Services</a>
              <a href="/#about" onClick={go('/#about')}>About</a>
              <a href="/careers" onClick={go('/careers')}>Careers</a>
              <a href="/#contact" onClick={go('/#contact')} className="cta">Contact Us</a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

Nav.propTypes = {
  page: PropTypes.oneOf(['home', 'careers', 'internships', 'jobs']),
};
