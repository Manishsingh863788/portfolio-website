import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NanoCursor from './components/NanoCursor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NanoCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;