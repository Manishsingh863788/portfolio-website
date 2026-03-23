import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaCode, FaRocket, FaLightbulb, FaCoffee } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const roles = [
    'Full Stack Developer',
    'React.js Specialist', 
    'Node.js Expert',
    'Cloud Solutions Architect',
    'UI/UX Developer',
    'Software Engineer'
  ];
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Manishsingh863788', label: 'GitHub' },
    { icon: FaLinkedin, href: 'http://www.linkedin.com/in/manishsingh', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:singh.manish.rudp@gmail.com', label: 'Email' },
    { icon: FaPhone, href: 'tel:+91-9760846762', label: 'Phone' }
  ];

  const skills = [
    { icon: FaCode, text: 'Clean Architecture', color: '#4f46e5' },
    { icon: FaRocket, text: 'High Performance', color: '#7c3aed' },
    { icon: FaLightbulb, text: 'Innovation', color: '#ec4899' },
    { icon: FaCoffee, text: 'Dedication', color: '#3b82f6' }
  ];

  // Typing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Mouse movement for 3D effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="animated-3d-bg">
          <div className="floating-cube cube-1"></div>
          <div className="floating-cube cube-2"></div>
          <div className="floating-cube cube-3"></div>
          <div className="floating-sphere sphere-1"></div>
          <div className="floating-sphere sphere-2"></div>
          <div className="floating-pyramid pyramid-1"></div>
          <div className="floating-pyramid pyramid-2"></div>
        </div>
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>
      
      <div className="container">
        <div 
          className="hero-content"
          style={{
            transform: `rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`
          }}
        >
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-decoration">
              <div className="decoration-line"></div>
              <span className="decoration-text">Welcome to my portfolio</span>
              <div className="decoration-line"></div>
            </div>
            
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm <span className="gradient-text">Manish Kumar Singh</span>
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="typing-text">{roles[currentRole]}</span>
            </motion.p>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              🚀 Passionate Full Stack Developer with expertise in modern web technologies. 
              I specialize in creating scalable, high-performance applications using React, Node.js, and cloud technologies. 
              With a keen eye for design and user experience, I transform complex business requirements into elegant, 
              efficient solutions that drive growth and innovation.
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button className="btn btn-primary" onClick={scrollToContact}>
                Get In Touch
              </button>
              <button className="btn btn-secondary" onClick={scrollToProjects}>
                View Projects
              </button>
              <a href="/resume.pdf" className="btn btn-outline" download>
                <FaDownload /> Download CV
              </a>
            </motion.div>

            <motion.div
              className="hero-skills"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.text}
                  className="skill-badge"
                  style={{ '--skill-color': skill.color }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <skill.icon />
                  <span>{skill.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="profile-card">
              <div className="profile-image">
                <img 
                  src="/images/manish-profile.jpg" 
                  alt="Manish Kumar Singh - Full Stack Developer"
                  onError={(e) => {
                    console.log('Image failed to load, trying alternative path');
                    e.target.src = "/manish-profile.jpg";
                  }}
                />
                <div className="image-overlay">
                  <div className="overlay-text">
                    <span>Full Stack</span>
                    <span>Developer</span>
                  </div>
                </div>
              </div>
              <div className="profile-info">
                <h3>Manish Kumar Singh</h3>
                <p>Full Stack Developer & Software Engineer</p>
                <div className="profile-badges">
                  <span className="badge">React.js</span>
                  <span className="badge">Node.js</span>
                  <span className="badge">MongoDB</span>
                  <span className="badge">AWS</span>
                </div>
                <div className="social-links">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <link.icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;