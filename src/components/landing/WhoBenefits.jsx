import React from 'react';
import Reveal from './Reveal';
import { IconBadge } from './Icon';

const GROUPS = [
  {
    icon: 'stethoscope',
    title: 'Clinicians',
    body: 'Converts continuous monitoring into actionable, risk-ranked patient lists — so care teams know exactly who to prioritize instead of spreading attention thinly.',
  },
  {
    icon: 'users',
    title: 'Patients & Communities',
    body: 'Earlier detection and continuous reassurance for patients and families, especially those with limited access to frequent in-person screening.',
  },
  {
    icon: 'building',
    title: 'Health Systems & Payers',
    body: "Directly supports Kenya's Social Health Authority (SHA) and county chronic-disease programs — turning prevention into a measurable, fundable outcome rather than a standalone cost.",
  },
];

const WhoBenefits = () => (
  <section className="section section--muted" id="who-benefits">
    <div className="container">
      <Reveal className="section-head section-head--center">
        <span className="kicker">Who Benefits</span>
        <h2 className="section-title">One Platform, Value Across the Ecosystem</h2>
      </Reveal>

      <div className="card-grid card-grid--3">
        {GROUPS.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.1} className="card" style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <IconBadge name={g.icon} />
            </div>
            <div className="card__title">{g.title}</div>
            <div className="card__body">{g.body}</div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhoBenefits;
