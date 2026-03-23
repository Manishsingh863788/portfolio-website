import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'Cloud Computing',
      issuer: 'NPTEL – IIT Kharagpur',
      badge: 'Elite',
      score: '63%',
      year: '2025',
      image: '/images/nptel-cloud-computing.jpg',
    },
    {
      id: 2,
      title: 'Data Structure & Algorithm using Java',
      issuer: 'CipherSchools',
      badge: 'Completion',
      score: null,
      year: 'Jul 2025',
      image: '/images/cipher-dsa-java.jpg',
    },
    {
      id: 3,
      title: 'Backend Development Course',
      issuer: 'Physics Wallah',
      badge: 'Completion',
      score: null,
      year: 'Sep 2025',
      image: '/images/pw-backend-dev.jpg',
    },
    {
      id: 5,
      title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
      issuer: 'Infosys Springboard',
      badge: 'Completion',
      score: null,
      year: 'Aug 2025',
      image: '/images/infosys-chatgpt-prompt.jpg',
    },
    {
      id: 6,
      title: 'Master Generative AI & Generative AI tools (ChatGPT & more)',
      issuer: 'Infosys Springboard',
      badge: 'Completion',
      score: null,
      year: 'Aug 2025',
      image: '/images/infosys-generative-ai.jpg',
    },
    {
      id: 7,
      title: 'Build Generative AI Apps and Solutions with No-Code Tools',
      issuer: 'Infosys Springboard',
      badge: 'Completion',
      score: null,
      year: 'Aug 2025',
      image: '/images/infosys-genai-nocode.jpg',
    },
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Certificates</h2>
          <p>Professional certifications and course completions</p>
        </motion.div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="cert-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(cert)}
            >
              <div className="cert-thumbnail">
                <img src={cert.image} alt={cert.title} />
                <div className="cert-thumbnail-overlay">
                  <FaExternalLinkAlt />
                  <span>View Certificate</span>
                </div>
              </div>
              <div className="cert-body">
                <span className="cert-badge">{cert.badge}</span>
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-meta">
                  {cert.score && <span className="cert-score">Score: {cert.score}</span>}
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="cert-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="cert-modal-close" onClick={() => setSelected(null)} aria-label="Close">
                <FaTimes />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="cert-modal-image"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
