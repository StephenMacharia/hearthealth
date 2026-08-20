import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from './Reveal';
import EcgLine from './EcgLine';

const FinalCta = () => {
  const navigate = useNavigate();

  return (
    <section className="final-cta" id="thank-you">
      <EcgLine height={50} />
      <div className="final-cta__inner">
        <Reveal className="final-cta__tagline">
          Predict Earlier. Treat Smarter. Save Lives.
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="final-cta__title">Thank You</h2>
        </Reveal>
        <Reveal delay={0.15} className="final-cta__sub">
          We welcome your questions — and invite you to try the risk
          assessment tool for yourself.
        </Reveal>
        <Reveal delay={0.2} className="final-cta__actions">
          <button className="btn btn--primary" onClick={() => navigate('/assessment')}>
            Try the Risk Tool
          </button>
          <button
            className="btn btn--ghost"
            onClick={() => {
              const el = document.getElementById('team');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Meet the Team
          </button>
        </Reveal>
      </div>
      <EcgLine height={50} />
    </section>
  );
};

export default FinalCta;
