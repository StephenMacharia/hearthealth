import React from 'react';
import Reveal from './Reveal';
import { IconBadge } from './Icon';

const COMPLIANCE = [
  { title: 'Data protection', body: 'Compliant with the Kenya Data Protection Act (2019) for handling patient and clinical data.' },
  { title: 'Medical device standards', body: 'Actively working towards ISO 13485 and IEC 62304 (medical device software) certification.' },
  { title: 'Health authority engagement', body: "Engaging with Kenya's digital health guidance as the platform moves toward clinical deployment." },
];

const IP = [
  { title: 'Proprietary algorithm', body: 'The risk-scoring model and signal-processing pipeline are protected as proprietary trade secrets.' },
  { title: 'Provisional patent', body: 'Planned filing for the personalized cardiovascular risk-scoring methodology.' },
  { title: 'Documentation & provenance', body: 'Codebase and datasets version-controlled with clear authorship for future licensing.' },
];

const Compliance = () => (
  <section className="section section--muted" id="compliance">
    <div className="container">
      <Reveal className="section-head">
        <span className="kicker">Regulatory Compliance, Risk &amp; IP</span>
        <h2 className="section-title">Compliant by Design</h2>
      </Reveal>

      <div className="card-grid card-grid--2">
        <Reveal className="card">
          <IconBadge name="scale" />
          <div className="card__title">Regulatory Compliance &amp; Risk Management</div>
          <ul className="compliance-list" style={{ marginTop: 14 }}>
            {COMPLIANCE.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.body}</span>
              </li>
            ))}
          </ul>
          <div className="risk-flag">
            <strong>Key risk:</strong> Clinical adoption risk — mitigated through clinician-in-the-loop design and phased hospital pilots.
          </div>
        </Reveal>

        <Reveal delay={0.1} className="card card--dark">
          <IconBadge name="gavel" dark />
          <div className="card__title">Intellectual Property Strategy</div>
          <ul className="ip-list" style={{ marginTop: 14 }}>
            {IP.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.body}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Compliance;
