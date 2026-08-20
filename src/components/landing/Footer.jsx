import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo light />
        <nav className="footer__links">
          <button onClick={() => goTo('problem')}>Problem</button>
          <button onClick={() => goTo('who-benefits')}>Who Benefits</button>
          <button onClick={() => goTo('business-model')}>Business Model</button>
          <button onClick={() => goTo('team')}>Team</button>
          <button onClick={() => navigate('/assessment')}>Risk Tool</button>
        </nav>
      </div>
      <div className="footer__copy">
        © {year} Cardio AI. Built for the Health &amp; Wellbeing track — a decision-support tool, not a substitute for professional medical diagnosis.
      </div>
    </footer>
  );
};

export default Footer;
