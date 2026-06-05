import React from 'react';
import PropTypes from 'prop-types';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-inner">
          <div>
            <h1>Transforming Businesses Through Smart Software Solutions</h1> 
            <p className="lead">We build scalable, secure, and innovative digital solutions that help businesses streamline operations, improve customer experiences, and accelerate growth.</p>
            <p className="lead">From custom software development to enterprise systems and cloud-based platforms, we deliver technology that drives real business results.</p>
            {/* View Services? */}
            <a href="#contact" className="button primary">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  children: PropTypes.node,
};