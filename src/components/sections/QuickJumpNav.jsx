import React from 'react';

export default function QuickJumpNav() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80; // Account for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="quick-jump-strip" aria-label="Page Section Quick Navigation">
      <div className="container">
        <div className="quick-jump-scroll-row">
          <span className="quick-jump-label">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            Quick Jump:
          </span>

          <a href="#programs" onClick={(e) => handleScrollTo(e, 'programs')} className="quick-jump-chip">
            <span className="chip-icon">🎓</span> Programs
          </a>
          <a href="#leadership" onClick={(e) => handleScrollTo(e, 'leadership')} className="quick-jump-chip">
            <span className="chip-icon">🏛️</span> Leadership
          </a>
          <a href="#facilities" onClick={(e) => handleScrollTo(e, 'facilities')} className="quick-jump-chip">
            <span className="chip-icon">🔬</span> Labs &amp; Campus
          </a>
          <a href="#hospital-partners" onClick={(e) => handleScrollTo(e, 'hospital-partners')} className="quick-jump-chip">
            <span className="chip-icon">🏥</span> Hospitals
          </a>
          <a href="#faq" onClick={(e) => handleScrollTo(e, 'faq')} className="quick-jump-chip">
            <span className="chip-icon">❓</span> FAQs
          </a>
          <a href="#footer" onClick={(e) => handleScrollTo(e, 'footer')} className="quick-jump-chip jump-footer-highlight">
            <span className="chip-icon">⚡</span> Footer &amp; Contact ↓
          </a>
        </div>
      </div>
    </nav>
  );
}
