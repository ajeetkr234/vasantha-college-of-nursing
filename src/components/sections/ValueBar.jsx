import React from 'react';

export default function ValueBar() {
  const pillars = [
    {
      title: '50 Beds Attached',
      subtitle: 'Hospital & Diagnostic Center',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 21h18"></path>
          <path d="M5 21V7l8-4v18"></path>
          <path d="M19 21V11l-6-4"></path>
          <path d="M9 9h1"></path>
          <path d="M9 13h1"></path>
          <path d="M9 17h1"></path>
        </svg>
      )
    },
    {
      title: '6 Clinical Labs',
      subtitle: 'Advanced Simulation & Anatomy',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    },
    {
      title: 'RGUHS Affiliated',
      subtitle: 'Govt. Recognised Since 1991',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className="stats-strip-navy" aria-label="Key Institutional Pillars">
      <div className="container">
        <div className="stats-grid-3">
          {pillars.map((item, idx) => (
            <div key={idx} className="stats-col-item">
              <div className="stats-col-icon">
                {item.icon}
              </div>
              <div className="stats-col-text">
                <div className="stats-col-title">{item.title}</div>
                <div className="stats-col-subtitle">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
