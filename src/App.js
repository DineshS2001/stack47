import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function getPageFromPathname() {
  return window.location.pathname.replace(/\/+$/, '') === '/careers' ? 'careers' : 'home';
}

// routing helpers are implemented inside Nav component; App only manages page state

function App() {
  const [page, setPage] = useState(getPageFromPathname());

  useEffect(() => {
    const handlePopState = () => setPage(getPageFromPathname());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="app-root">
      <Nav page={page} />
      {page === 'home' ? (
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
      ) : (
        <main>
          <Careers />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
