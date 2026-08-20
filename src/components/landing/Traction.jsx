import React from 'react';
import Reveal from './Reveal';
import IconGlyph from './Icon';

const STATS = [
  { label: 'Customer Acquisition Cost', value: '~KES 90,000 per institutional client' },
  { label: 'Revenue per Client', value: 'KES 350,000–600,000 per hospital deployment / year' },
  { label: 'Gross Margin', value: 'Estimated 65–75%, driven by a reusable AI & cloud pipeline' },
];

const ASK_ITEMS = [
  'Pilot with one Nairobi-area county or private hospital',
  'Clinical validation of the risk-scoring model',
  'Regulatory & Digital Health Agency consultation',
  'Wearable devices & cloud costs for the pilot cohort',
];

const Traction = () => (
  <section className="section section--muted" id="traction">
    <div className="container">
      <Reveal className="section-head">
        <span className="kicker">Investment Readiness</span>
        <h2 className="section-title">Unit Economics &amp; Fund Utilization</h2>
      </Reveal>

      <div className="problem-grid">
        <Reveal>
          <div className="stat-tiles">
            {STATS.map((s) => (
              <div className="stat-tile" key={s.label}>
                <div className="stat-tile__label">{s.label}</div>
                <div className="stat-tile__value">{s.value}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="ask-panel">
          <span className="kicker kicker--on-dark">Investment Ask &amp; Fund Utilization</span>
          <div className="ask-panel__value">KES 400,000</div>
          <div className="ask-panel__sub">(~USD 3,100) grant funding to complete MVP validation</div>
          <ul className="ask-panel__list">
            {ASK_ITEMS.map((item) => (
              <li key={item}>
                <IconGlyph name="check" size={16} color="var(--teal-400)" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Traction;
