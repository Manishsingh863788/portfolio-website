import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Startup Ecosystem Tracker',
      description: 'A comprehensive platform for tracking and analyzing startup ecosystems, featuring company profiles, funding rounds, investor networks, and market trends with real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop&auto=format&q=80',
      technologies: [
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Express', icon: SiExpress }
      ],
      github: 'https://github.com/Manishsingh863788/startup-tracker',
      live: 'http://startupecosystemtracker.infinityfreeapp.com/?i=1',
      featured: true
    },
    {
      id: 2,
      title: 'Pet Care Service Platform',
      description: 'A full-featured pet care service application connecting pet owners with veterinarians, groomers, and pet sitters. Includes appointment scheduling, pet health records, and service provider ratings.',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=500&h=300&fit=crop&auto=format&q=80',
      technologies: [
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Tailwind', icon: SiTailwindcss }
      ],
      github: 'https://github.com/Manishsingh863788/pet-care',
      live: 'https://pet-care-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Quiz Builder Application',
      description: 'An interactive quiz creation and management platform with customizable question types, automatic grading, analytics dashboard, and real-time results tracking for educators and trainers.',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=500&h=300&fit=crop&auto=format&q=80',
      technologies: [
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Express', icon: SiExpress }
      ],
      github: 'https://github.com/Manishsingh863788/quiz-builder',
      live: 'https://quiz-builder-cfeaq6j7v-shivam-kesharis-projects.vercel.app/login',
      featured: false
    },
    {
      id: 4,
      title: 'Educational Website - Remo',
      description: 'A modern educational platform offering online courses, interactive learning modules, student progress tracking, live classes, and collaborative learning tools for enhanced educational experience.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop&auto=format&q=80',
      technologies: [
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Tailwind', icon: SiTailwindcss }
      ],
      github: 'https://github.com/Manishsingh863788/remo-education',
      live: 'https://remo-education-demo.com',
      featured: true
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <p>Some of the projects I've worked on recently</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                {project.featured && <div className="featured-badge">Featured</div>}
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      <tech.icon />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>Want to see more projects?</p>
          <a href="https://github.com/Manishsingh863788" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <FaGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;