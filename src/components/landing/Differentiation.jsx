import React from 'react';
import Reveal from './Reveal';
import IconGlyph, { IconBadge } from './Icon';

const COLUMNS = [
  {
    icon: 'target',
    title: 'Differentiation',
    items: [
      'Continuous AI monitoring vs. periodic check-ups',
      'Personalized risk scoring vs. generic screening',
      'One unified platform vs. fragmented wearable apps',
    ],
  },
  {
    icon: 'shield',
    title: 'Competitive Advantage',
    items: [
      'Proprietary risk-scoring model trained on diverse cardiovascular signal data',
      'Clinician-in-the-loop design for trusted adoption',
      'Integration-ready for major EHR & wearable ecosystems',
    ],
  },
  {
    icon: 'globe',
    title: 'Scalability',
    items: [
      'Framework extends beyond cardiovascular to other chronic-disease risk prediction',
      'Cloud-native architecture scales across hospitals and geographies',
      'Reusable pipeline lowers cost of entry into new markets',
    ],
  },
];

const Differentiation = () => (
  <section className="section section--light" id="differentiation">
    <div className="container">
      <Reveal className="section-head section-head--center">
        <span className="kicker">Competitive Edge &amp; Growth Potential</span>
        <h2 className="section-title">Built to Win, Built to Scale</h2>
      </Reveal>

      <div className="card-grid card-grid--3">
        {COLUMNS.map((col, i) => (
          <Reveal key={col.title} delay={i * 0.1} className="card card--muted">
            <IconBadge name={col.icon} />
            <div className="card__title">{col.title}</div>
            <ul className="compare-list" style={{ marginTop: 16 }}>
              {col.items.map((item) => (
                <li key={item}>
                  <IconGlyph name="check" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Differentiation;
