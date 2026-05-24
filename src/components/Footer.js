import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Stack47</div>
        <div className="socials">
          <a
            className="social-link linkedin"
            href="https://www.linkedin.com/company/stack47"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stack47 on LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" opacity="0" />
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5z" fill="currentColor" transform="translate(4 4) scale(1)"/>
              <path d="M3 8h4v12H3z" fill="currentColor" transform="translate(4 3) scale(1)"/>
              <path d="M9 8h3.6v1.7h.1c.5-.9 1.8-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8V20h-4v-5.3c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9V20H9V8z" fill="currentColor" transform="translate(4 3) scale(1)"/>
            </svg>
          </a>

          <a
            className="social-link whatsapp"
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Stack47 on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20.52 3.48A11.94 11.94 0 0012 .5C5.65.5.79 5.36.79 11.71c0 2.08.56 4.12 1.62 5.92L.5 23.5l6.55-1.7a11.95 11.95 0 005.95 1.56c6.35 0 11.21-4.86 11.21-11.21 0-3-1.17-5.8-3.24-7.67z" fill="currentColor"/>
              <path d="M17.1 14.2c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.28.3-.47.1-.2.04-.38-.02-.53-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.49-.66-.5l-.56-.01c-.2 0-.52.07-.79.36-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.06 2.89 1.21 3.09.15.2 2.09 3.35 5.07 4.69 2.98 1.34 2.98.89 3.52.83.54-.06 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.06-.12-.24-.2-.54-.35z" fill="currentColor" transform="translate(1 1) scale(.9)"/>
            </svg>
          </a>

          <a
            className="social-link facebook"
            href="https://www.facebook.com/stack47"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stack47 on Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.92v-7.02H8.9v-2.9h1.54V9.42c0-1.52.9-2.36 2.28-2.36.66 0 1.36.12 1.36.12v1.5h-.77c-.76 0-.99.47-.99.95v1.14h1.68l-.27 2.9h-1.41V22c4.78-.79 8.44-4.93 8.44-9.93z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  children: PropTypes.node,
};
