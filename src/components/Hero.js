import React from 'react';
import PropTypes from 'prop-types';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div>
          <h1>We build scalable software solutions for growing businesses</h1>
          <p className="lead">Product-focused engineering, cloud-native architectures, and reliable delivery.</p>
          <a href="#contact" className="button primary">Work With Us</a>
        </div>
        <div className="hero-visual" aria-hidden>
          <div className="mockup" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  children: PropTypes.node,
};
