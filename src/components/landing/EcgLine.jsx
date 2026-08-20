import React from 'react';

// The heartbeat / ECG trace motif used across the dark sections of the deck.
const EcgLine = ({ color = 'rgba(45, 212, 191, 0.55)', height = 60 }) => (
  <svg
    className="ecg-line"
    viewBox="0 0 1440 90"
    preserveAspectRatio="none"
    style={{ width: '100%', height, display: 'block' }}
  >
    <path
      d="M0 45 H140 L165 20 L190 70 L215 45 H360 L385 20 L410 70 L435 45 H580 L605 20 L630 70 L655 45 H800 L825 20 L850 70 L875 45 H1020 L1045 20 L1070 70 L1095 45 H1240 L1265 20 L1290 70 L1315 45 H1440"
      fill="none"
      stroke={color}
      strokeWidth="2"
    />
  </svg>
);

export default EcgLine;
