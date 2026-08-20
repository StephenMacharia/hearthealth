import React from 'react';
import Reveal from './Reveal';

const VALUE_PROPS = [
  {
    title: 'Clinical Impact',
    body: 'Predicts cardiovascular emergencies before they happen, enabling earlier, life-saving intervention.',
  },
  {
    title: 'Decision Support',
    body: 'Spatially and clinically referenced risk scores give clinicians and patients a clear signal to act on.',
  },
  {
    title: 'Health-System Alignment',
    body: "Complements Kenya's Social Health Authority (SHA) benefits package and county chronic-disease programs, plugging into how the health system already funds prevention.",
  },
];

const Problem = () => (
  <section className="section section--light" id="problem">
    <div className="container">
      <Reveal className="section-head">
        <span className="kicker">The Problem &amp; Our Value Proposition</span>
        <h2 className="section-title">Every Heartbeat Matters</h2>
      </Reveal>

      <div className="problem-grid">
        <Reveal>
          <p className="section-lede" style={{ marginTop: 0 }}>
            Heart disease remains one of the world's leading causes of death,
            and cardiovascular cases are rising sharply across Kenya as
            lifestyles shift. Most care is reactive — patients in Nairobi and
            county hospitals alike are diagnosed only after symptoms become
            severe, when treatment is harder and outcomes are worse. Existing
            tools rely on periodic check-ups, not continuous, personalized
            insight.
          </p>
          <div className="stat-callout">
            <div className="stat-callout__value">17.9M</div>
            <div className="stat-callout__label">lives lost to cardiovascular disease every year — WHO</div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="value-prop-panel">
          <span className="kicker kicker--on-dark">Our Value Proposition</span>
          {VALUE_PROPS.map((item) => (
            <div className="value-prop-item" key={item.title}>
              <div className="value-prop-item__title">{item.title}</div>
              <div className="value-prop-item__body">{item.body}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  </section>
);

export default Problem;
