import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Careers from './components/Careers';
import Internships from './components/Internships';
import Jobs from './components/Jobs';
import JobDetail from './components/JobDetail';
import ApplicationPage from './components/ApplicationPage';
import Contact from './components/Contact';
import DeliveryCommitment from './components/DeliveryCommitment';
import Footer from './components/Footer';

function getPageFromPathname() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  if (pathname === '/careers') {
    return 'careers';
  }

  if (pathname === '/careers/internships') {
    return 'internships';
  }

  if (pathname === '/careers/jobs') {
    return 'jobs';
  }

  if (pathname.startsWith('/careers/jobs/')) {
    return 'jobDetail';
  }

  if (pathname.startsWith('/careers/apply/')) {
    return 'apply';
  }

  return 'home';
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
          <DeliveryCommitment />
          <About />
          <Contact />
        </main>
      ) : page === 'careers' ? (
        <main>
          <Careers />
        </main>
      ) : page === 'internships' ? (
        <main>
          <Internships />
        </main>
      ) : page === 'jobs' ? (
        <main>
          <Jobs />
        </main>
      ) : page === 'apply' ? (
        <main>
          <ApplicationPage />
        </main>
      ) : (
        <main>
          <JobDetail />
        </main>
      )
      }
      <Footer />
    </div>
  );
}

export default App;
