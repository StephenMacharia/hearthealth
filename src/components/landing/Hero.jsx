import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import EcgLine from './EcgLine';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <motion.span
          className="hero__badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track: Health &amp; Wellbeing
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Cardio <em>AI</em>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Predictive cardiovascular intelligence, before the emergency.
          Cardio AI turns continuous signals into a clear, clinically
          referenced risk score — so care teams can act before a heart
          emergency happens, not after.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="btn btn--primary" onClick={() => navigate('/assessment')}>
            Try the Risk Tool
          </button>
          <button
            className="btn btn--ghost"
            onClick={() => {
              const el = document.getElementById('problem');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See How It Works
          </button>
        </motion.div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <div className="hero__stat-value">17.9M</div>
            <div className="hero__stat-label">lives lost to CVD every year — WHO</div>
          </div>
          <div>
            <div className="hero__stat-value">65–75%</div>
            <div className="hero__stat-label">projected gross margin</div>
          </div>
          <div>
            <div className="hero__stat-value">MVP</div>
            <div className="hero__stat-label">current build stage</div>
          </div>
        </motion.div>
      </div>

      <div className="hero__ecg">
        <EcgLine />
      </div>
    </section>
  );
};

export default Hero;
