import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import MarqueeStrip from './components/Marquee/MarqueeStrip';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Toast from './components/UI/Toast';
import CursorFollower from './components/CursorFollower';

export default function App() {
  const [toast, setToast] = useState({ message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast({ message: '', type: 'success' });
  };

  return (
    <div className="portfolio-app">
      {/* Subtle smooth cursor follower dot */}
      <CursorFollower />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        {/* Infinite Loop Animation Strip (stops on hover) before Contact */}
        <MarqueeStrip />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Toast Alerts */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={closeToast}
      />
    </div>
  );
}
