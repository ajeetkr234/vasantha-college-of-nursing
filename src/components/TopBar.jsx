import React from 'react';

export default function TopBar() {
  return (
    <aside className="top-bar" aria-label="Institutional Information & Admission Helpline">
      <div className="container">
        <div className="top-bar-inner">
          <div className="top-bar-trust">
            <span className="top-trust-name">Shri Shivaling Vidhya Vardhak Education Society (R)</span>
          </div>

          <div className="top-bar-meta">
            <div className="meta-item meta-address">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Shahpur Gate, Bidar, Karnataka</span>
            </div>

            <div className="meta-item meta-phones">
              <span className="top-trust-badge">ESTD. 1991</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" className="phone-icon-svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="phone-links-wrap">
                <span className="phone-label">Helpline:</span>
                <a href="tel:9512592211" aria-label="Call 9512592211">9512592211</a>
                <span className="phone-slash">/</span>
                <a href="tel:8154968596" aria-label="Call 8154968596">8154968596</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
