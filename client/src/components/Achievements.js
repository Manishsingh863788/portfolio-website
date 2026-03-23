import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Best Project Award',
      description: 'Won the best project award for developing an innovative e-commerce solution during college.',
      icon: FaTrophy,
      year: '2024',
      category: 'Academic'
    },
    {
      id: 2,
      title: 'Hackathon Winner',
      description: 'First place in 48-hour hackathon for creating a real-time collaboration tool.',
      icon: FaMedal,
      year: '2025',
      category: 'Competition'
    },
    {
      id: 3,
      title: 'Open Source Contributor',
      description: 'Active contributor to various open source projects with 100+ contributions.',
      icon: FaAward,
      year: '2026',
      category: 'Community'
    }
  ];

  const stats = [
    { number: '4+', label: 'Projects Completed' },
    { number: '10+', label: 'Technologies Mastered' }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Achievements & Recognition</h2>
          <p>Milestones and accomplishments in my journey</p>
        </motion.div>

        <div className="achievements-content">
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="achievement-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="achievement-icon">
                  <achievement.icon />
                </div>
                <div className="achievement-content">
                  <span className="achievement-category">{achievement.category}</span>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="stats-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>By the Numbers</h3>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4>{stat.number}</h4>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;