import React from 'react';

const Logo = ({ light = false, size = 30 }) => {
  const wordColor = light ? '#ffffff' : 'var(--ink-900)';
  return (
    <span className="logo-mark" aria-label="Cardio AI">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 27.5c-.5 0-1-.2-1.35-.55L6.4 18.7c-2.4-2.4-2.4-6.3 0-8.7s6.3-2.4 8.7 0l.9.9.9-.9c2.4-2.4 6.3-2.4 8.7 0s2.4 6.3 0 8.7l-8.25 8.25c-.35.35-.85.55-1.35.55Z"
          fill="none"
          stroke="var(--teal-500)"
          strokeWidth="2"
        />
        <path
          d="M6 17h4l2-5 3 9 2.5-7 1.5 3h7"
          fill="none"
          stroke="var(--teal-500)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1.15rem',
          color: wordColor,
        }}
      >
        Cardio <span style={{ color: 'var(--teal-400)' }}>AI</span>
      </span>
    </span>
  );
};

export default Logo;
