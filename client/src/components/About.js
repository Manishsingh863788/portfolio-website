import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Get to know more about who I am and what I do</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Hello! I'm Manish Kumar Singh</h3>
            <p>
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              I love creating innovative solutions that solve real-world problems and deliver 
              exceptional user experiences.
            </p>
            <p>
              With a strong foundation in both frontend and backend development, I specialize 
              in React, Node.js, and building scalable web applications. I'm always eager to 
              learn new technologies and take on challenging projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;