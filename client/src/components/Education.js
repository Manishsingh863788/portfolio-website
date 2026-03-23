import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      duration: 'Since Aug 2023',
      grade: 'CGPA: 7',
      description: 'Currently pursuing B.Tech in Computer Science and Engineering with focus on software development, data structures, algorithms, and modern programming technologies.'
    },
    {
      id: 2,
      degree: 'Intermediate (XII)',
      field: 'Science Stream',
      institution: 'R.A.N Public School',
      location: 'Rudrapur, Uttarakhand',
      duration: 'Apr 2022 - Mar 2023',
      grade: '89%',
      description: 'Completed higher secondary education with excellent performance in Science stream, building strong foundation in Physics, Chemistry, and Mathematics.'
    },
    {
      id: 3,
      degree: 'Matriculation (X)',
      field: 'All Subjects',
      institution: 'R.A.N Public School',
      location: 'Rudrapur, Uttarakhand',
      duration: 'Apr 2020 - Mar 2021',
      grade: '92%',
      description: 'Completed secondary education with outstanding academic performance across all subjects, demonstrating strong analytical and problem-solving abilities.'
    }
  ];

  const certifications = [
    {
      name: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      year: '2024'
    },
    {
      name: 'React - The Complete Guide',
      issuer: 'Udemy',
      year: '2025'
    },
    {
      name: 'Node.js Developer',
      issuer: 'MongoDB University',
      year: '2025'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Education & Certifications</h2>
          <p>My academic background and professional certifications</p>
        </motion.div>

        <div className="education-content">
          <div className="education-section">
            <h3>Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker">
                    <FaGraduationCap />
                  </div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.field}</h5>
                    <div className="education-meta">
                      <span className="institution">
                        <FaMapMarkerAlt /> {edu.institution}, {edu.location}
                      </span>
                      <span className="duration">
                        <FaCalendarAlt /> {edu.duration}
                      </span>
                      <span className="grade">{edu.grade}</span>
                    </div>
                    <p>{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="certifications-section">
            <h3>Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer}</p>
                  <span className="cert-year">{cert.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;