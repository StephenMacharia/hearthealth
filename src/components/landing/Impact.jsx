import React from 'react';
import Reveal from './Reveal';
import { IconBadge } from './Icon';

const SDGS = [
  'SDG 3 — Good Health & Well-Being',
  'SDG 9 — Industry, Innovation & Infrastructure',
  'SDG 10 — Reduced Inequalities',
];

const Impact = () => (
  <section className="section section--light" id="impact">
    <div className="container">
      <Reveal className="section-head">
        <span className="kicker">Originality &amp; Lasting Impact</span>
        <h2 className="section-title">Why This Is New, Why It Lasts</h2>
      </Reveal>

      <div className="card-grid card-grid--2">
        <Reveal className="card card--muted">
          <IconBadge name="bulb" />
          <div className="card__title">Originality &amp; Creativity</div>
          <div className="card__body">
            Cardio AI is among the first platforms to fuse continuous
            wearable signals with AI-driven risk scoring into one
            longitudinal, personalized cardiovascular index — rather than a
            one-off screening snapshot. It continuously updates as new
            signals arrive, giving clinicians a living picture of risk
            instead of a static report.
          </div>
        </Reveal>

        <Reveal delay={0.1} className="card card--dark">
          <IconBadge name="star" dark />
          <div className="card__title">Lasting &amp; Transformative Impact</div>
          <div className="card__body">
            Shifts cardiovascular care from reactive treatment to proactive
            prevention — embedding continuous risk intelligence into how
            hospitals and health systems plan care, allocate resources, and
            measure outcomes over time.
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="kicker" style={{ marginTop: 40 }}>SDG Contribution</div>
        <div className="sdg-pills">
          {SDGS.map((s) => (
            <span className="sdg-pill" key={s}>{s}</span>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Impact;
