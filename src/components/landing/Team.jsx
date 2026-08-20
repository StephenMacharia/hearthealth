import React from 'react';
import Reveal from './Reveal';

const TEAM = [
  { name: 'Stephen Macharia', role: 'Founder & CEO', desc: 'Program execution & partnerships' },
  { name: 'Imani Anam', role: 'AI Lead', desc: 'Risk-scoring models & data pipeline' },
  { name: 'Paul Odumo', role: 'Clinical Lead', desc: 'Cardiology guidance & validation' },
  { name: 'Steven Karimi', role: 'Security & Compliance Lead', desc: 'Data protection & regulatory readiness' },
  { name: 'Enoch Kisiara', role: 'Business Development', desc: 'Hospital partnerships & growth' },
];

const CHALLENGES = [
  { label: 'Clinician trust', body: 'built through clinical advisory input and transparent, explainable risk scores.' },
  { label: 'Device & data integration', body: 'start with the most common wearable APIs, expand incrementally.' },
  { label: 'Regulatory pathway', body: 'engage early with health authorities while pursuing certification.' },
];

const initials = (name) => name.split(' ').map((p) => p[0]).join('');

const Team = () => (
  <section className="section section--light" id="team">
    <div className="container">
      <Reveal className="section-head">
        <span className="kicker">Team Strength &amp; Execution Capability</span>
        <h2 className="section-title">Who Is Building This</h2>
      </Reveal>

      <div className="team-grid">
        {TEAM.map((member, i) => (
          <Reveal key={member.name} delay={i * 0.06} className="team-card">
            <div className="team-card__avatar">{initials(member.name)}</div>
            <div className="team-card__name">{member.name}</div>
            <div className="team-card__role">{member.role}</div>
            <div className="team-card__desc">{member.desc}</div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <span className="stage-badge">Current Stage: Minimum Viable Product (MVP)</span>
      </Reveal>

      <Reveal delay={0.1}>
        <h3 style={{ marginTop: 40, fontSize: '1.1rem', fontWeight: 700 }}>
          Known Challenges &amp; How We'll Address Them
        </h3>
        <ul className="challenge-list">
          {CHALLENGES.map((c) => (
            <li key={c.label}>
              <span>⚠</span>
              <span><strong>{c.label}</strong> — {c.body}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default Team;
