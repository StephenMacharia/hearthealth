import React from 'react';
import Reveal from './Reveal';
import { IconBadge } from './Icon';

const REVENUE = [
  {
    name: 'Hospital SaaS Subscriptions',
    desc: 'Recurring platform licensing for hospitals & clinics',
    pct: '55%',
  },
  {
    name: 'Per-Patient Monitoring Plans',
    desc: 'Usage-based pricing tied to patients actively monitored',
    pct: '30%',
  },
  {
    name: 'Premium Analytics & API Licensing',
    desc: 'Advanced risk intelligence & wearable integrations',
    pct: '15%',
  },
];

const OPPORTUNITIES = [
  {
    icon: 'building',
    title: 'Institutional Contracts',
    body: 'Paid deployments with Kenyan county referral hospitals and Ministry of Health chronic-disease programs.',
  },
  {
    icon: 'handshake',
    title: 'SHA & Insurance Partnerships',
    body: "Revenue-share and reimbursement pathways with Kenya's Social Health Authority and private insurers rewarding earlier intervention.",
  },
  {
    icon: 'dollar',
    title: 'Wearable Manufacturer Licensing',
    body: 'API and data-partnership deals that embed Cardio AI inside third-party devices.',
  },
  {
    icon: 'graduation',
    title: 'Training & Onboarding Programs',
    body: 'Paid certification and onboarding for clinical staff adopting the platform.',
  },
];

const BusinessModel = () => (
  <section className="section section--dark" id="business-model">
    <div className="container">
      <Reveal className="section-head">
        <span className="kicker kicker--on-dark">Business Model &amp; Revenue Generation</span>
        <h2 className="section-title">How Cardio AI Sustains Itself Financially</h2>
      </Reveal>

      <Reveal className="rev-table-wrap">
        <table className="rev-table">
          <thead>
            <tr>
              <th>Revenue Stream</th>
              <th>Description</th>
              <th>Est. Contribution</th>
            </tr>
          </thead>
          <tbody>
            {REVENUE.map((row) => (
              <tr key={row.name}>
                <td className="rev-table__name">{row.name}</td>
                <td>{row.desc}</td>
                <td className="rev-table__pct">{row.pct}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <Reveal delay={0.1} className="rev-callout">
        Recurring, high-margin revenue built to scale across every customer segment.
      </Reveal>

      <div style={{ marginTop: 64 }}>
        <Reveal className="section-head">
          <span className="kicker kicker--on-dark">Revenue Generation Opportunities</span>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Where Growth Comes From</h3>
        </Reveal>

        <div className="card-grid card-grid--2">
          {OPPORTUNITIES.map((op, i) => (
            <Reveal key={op.title} delay={i * 0.08} className="card card--dark">
              <IconBadge name={op.icon} dark />
              <div className="card__title">{op.title}</div>
              <div className="card__body">{op.body}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BusinessModel;
