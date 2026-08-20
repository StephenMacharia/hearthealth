import React from 'react';

// Minimal stroke-icon set, hand-drawn to match the pitch deck's line-icon style.
const PATHS = {
  chart: 'M4 20V10M11 20V4M18 20v-7M2 22h20',
  target: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 12m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0 M12 12m-0.5 0a0.5 0.5 0 1 0 1 0a0.5 0.5 0 1 0 -1 0',
  shield: 'M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z M9 12l2 2 4-4',
  brain: 'M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5h6a3 3 0 0 0 2-5 3 3 0 0 0-2-5 3 3 0 0 0-3-3zM9 4v16',
  stethoscope: 'M6 3v6a4 4 0 0 0 8 0V3 M10 13v3a5 5 0 0 0 10 0v-2 M20 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0',
  users: 'M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 20c0-3 2.5-5 6-5s6 2 6 5 M17 8a2.5 2.5 0 1 1 0-5 M16 20c0-2.3 1.8-4 4-4.2',
  building: 'M6 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16 M14 21v-9h5a1 1 0 0 1 1 1v8 M9 7h.01M9 11h.01M9 15h.01',
  dollar: 'M12 2v20 M17 6.5c0-1.9-2.2-3.5-5-3.5s-5 1.6-5 3.5S9.2 10 12 10s5 1.6 5 3.5-2.2 3.5-5 3.5-5-1.6-5-3.5',
  graduation: 'M2 9l10-5 10 5-10 5-10-5z M6 11.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5 M22 9v6',
  scale: 'M12 3v18 M6 21h12 M5 7l3.5-2L12 7 M19 7l-3.5-2L12 7 M2 12l3-5 3 5c0 1.7-1.3 3-3 3s-3-1.3-3-3zM16 12l3-5 3 5c0 1.7-1.3 3-3 3s-3-1.3-3-3z',
  gavel: 'M13 8l5 5-2 2-5-5zM9 12l4 4-5 5-4-4z M17 4l3 3-2 2-3-3z M3 21h8',
  bulb: 'M9 18h6 M10 21h4 M12 3a6 6 0 0 0-4 10.5c.6.5 1 1.3 1 2.1v.4h6v-.4c0-.8.4-1.6 1-2.1A6 6 0 0 0 12 3z',
  star: 'M12 2.5l2.9 6.2 6.6.7-5 4.6 1.4 6.6L12 17.3 6.1 20.6l1.4-6.6-5-4.6 6.6-.7L12 2.5z',
  globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3 12h18 M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z',
  handshake: 'M2 12l4-4 4 3h4l4-3 4 4 M6 8l6 6 3-3 M10 14l1.5 1.5a2 2 0 0 0 2.8-2.8',
  check: 'M20 6L9 17l-5-5',
};

const IconGlyph = ({ name, size = 22, strokeWidth = 1.7, color = 'var(--teal-600)' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={PATHS[name] || PATHS.check} />
  </svg>
);

export const IconBadge = ({ name, dark = false }) => (
  <div className={`icon-badge${dark ? ' icon-badge--dark' : ''}`}>
    <IconGlyph name={name} color={dark ? 'var(--teal-400)' : 'var(--teal-600)'} />
  </div>
);

export default IconGlyph;
