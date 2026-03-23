import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', icon: FaReact, level: 90, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, level: 85, color: '#339933' },
    { name: 'JavaScript', icon: FaJs, level: 90, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, level: 80, color: '#3178C6' },
    { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
    { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#47A248' },
    { name: 'Express', icon: SiExpress, level: 85, color: '#000000' },
    { name: 'Tailwind', icon: SiTailwindcss, level: 85, color: '#06B6D4' },
    { name: 'Git', icon: FaGitAlt, level: 85, color: '#F05032' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Technologies</h2>
          <p>Technologies I work with to bring ideas to life</p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                <skill.icon />
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-progress">
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;