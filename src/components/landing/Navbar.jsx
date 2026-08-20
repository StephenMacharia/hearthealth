import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const LINKS = [
  { label: 'Problem', id: 'problem' },
  { label: 'Product', id: 'why-it-matters' },
  { label: 'Who Benefits', id: 'who-benefits' },
  { label: 'Business Model', id: 'business-model' },
  { label: 'Team', id: 'team' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Logo />
        </a>

        <nav className={`navbar__links${open ? ' is-open' : ''}`}>
          {LINKS.map((link) => (
            <button
              key={link.id}
              className="navbar__link"
              onClick={() => goTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button
            className="btn btn--dark navbar__cta"
            onClick={() => {
              setOpen(false);
              navigate('/assessment');
            }}
          >
            Try the Risk Tool
          </button>
        </nav>

        <button
          className="navbar__toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink-900)" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
