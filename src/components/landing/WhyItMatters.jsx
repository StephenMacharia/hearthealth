import React from 'react';
import Reveal from './Reveal';
import { IconBadge } from './Icon';

const ITEMS = [
  {
    icon: 'chart',
    title: 'Transparent Risk Measurement',
    body: "Aggregates multiple cardiovascular risk drivers — vitals, rhythm, history — into a single score that's easy for clinicians and patients to understand and act on.",
  },
  {
    icon: 'target',
    title: 'Comparability Across Patients',
    body: 'Enables consistent benchmarking across patients and populations, highlighting who is most at risk and where attention should be prioritized.',
  },
  {
    icon: 'shield',
    title: 'Decision Support for Care & Coverage',
    body: 'Guides clinical triage, care-team resourcing, and insurance/value-based-care decisions by making risk visible and quantifiable.',
  },
  {
    icon: 'brain',
    title: 'Continuous Monitoring Over Time',
    body: "Repeatable and data-driven, so care teams can track how a patient's risk evolves and confirm whether interventions are working.",
  },
];

const WhyItMatters = () => (
  <section className="section section--muted" id="why-it-matters">
    <div className="container">
      <Reveal className="section-head">
        <span className="kicker">Why It Matters</span>
        <h2 className="section-title">Transparent Risk Intelligence, Built to Act On</h2>
      </Reveal>

      <div className="card-grid card-grid--2">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08} className="card">
            <IconBadge name={item.icon} />
            <div className="card__title">{item.title}</div>
            <div className="card__body">{item.body}</div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyItMatters;
