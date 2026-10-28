import React from 'react';
import { useModal } from '../../context/ModalContext';

export default function HeroSection() {
  const { openApplyModal, openLightbox } = useModal();

  const handleScrollToPrograms = (e) => {
    e.preventDefault();
    const el = document.getElementById('programs');
    if (el) {
      const headerOffset = 80;
      const elTop = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: elTop, behavior: 'smooth' });
    }
  };

  const handleOpenCampusImage = () => {
    openLightbox(
      '/images/college_building.png',
      'VASANTHA GROUP OF EDUCATION - Official Campus Elevation (Naubad-bhalki Road, Naubad Karnataka 585402)',
      'Official College Building'
    );
  };

  return (
    <section className="hero-home" aria-label="Hero Overview">
      <div className="container">
        <div className="hero-home-container">
          {/* Left Column: Eyebrow, Headline, Supporting Description, 2x2 Feature Matrix, CTAs */}
          <div className="hero-left-content">
            {/* Unified Sleek Admissions & Trust Badge */}
            <div className="hero-live-admission-badge">
              <span className="live-pulse-indicator" aria-hidden="true">
                <span className="pulse-ring"></span>
                <span className="pulse-core"></span>
              </span>
              <span className="badge-admissions-title">Admissions Open 2026–27</span>
              <span className="badge-bullet">•</span>
              <span className="badge-courses-highlight">Nursing • Pharmacy • Physiotherapy • B.Ed</span>
              <span className="badge-pill-pill">Merit Admissions</span>
              <span className="badge-estd-tag">ESTD. 1984</span>
            </div>

            <h1 className="hero-title">
              Excellence in Healthcare &amp; Education.{' '}
              <span className="title-red">Build a Career That Matters.</span>
            </h1>

            <p className="hero-description">
              Pioneering educational institution offering <strong>Nursing, Pharmacy, Physiotherapy &amp; Teacher Education</strong> with bedside clinical rotations at our <strong>50-Bedded Attached Hospital</strong>, Medical Laboratory, CT Scan Center, Cancer Diagnostic Center, and dedicated career placement support.
            </p>

            {/* Symmetrical 2x2 Clinical Feature Matrix */}
            <div className="hero-features-grid-2x2">
              <div className="hero-feature-card">
                <div className="feature-icon-circle hospital">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9h1M9 13h1M9 17h1"/>
                  </svg>
                </div>
                <div className="feature-text-block">
                  <strong className="feature-title">50-Bed Attached Hospital</strong>
                  <span className="feature-sub">Attached with Vasantha College</span>
                </div>
              </div>

              <div className="hero-feature-card">
                <div className="feature-icon-circle labs">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <path d="M6 18h12M3 22h18M14 22a7 7 0 1 0-4 0M9 14h6M12 6V3M8 3h8"/>
                  </svg>
                </div>
                <div className="feature-text-block">
                  <strong className="feature-title">Medical Laboratory</strong>
                  <span className="feature-sub">Automated Pathology &amp; Diagnostics</span>
                </div>
              </div>

              <div className="hero-feature-card">
                <div className="feature-icon-circle cancer" style={{ background: '#eff6ff', color: '#1d4ed8' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <div className="feature-text-block">
                  <strong className="feature-title">CT Scan &amp; Cancer Center</strong>
                  <span className="feature-sub">Specialized Diagnostics &amp; Imaging</span>
                </div>
              </div>

              <div className="hero-feature-card">
                <div className="feature-icon-circle placement">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div className="feature-text-block">
                  <strong className="feature-title">Placement Assistance</strong>
                  <span className="feature-sub">Top Hospital Networks &amp; Guidance</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-buttons-row">
              <button
                type="button"
                className="btn-pill-red hero-cta-btn"
                onClick={() => openApplyModal('B.Sc. Nursing')}
                aria-label="Enquire about Admissions 2026-27"
              >
                <span className="hero-btn-text-full">Enquire About Admissions 2026–27</span>
                <span className="hero-btn-text-compact">Enquire Admissions 2026–27</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <a
                href="#programs"
                onClick={handleScrollToPrograms}
                className="btn-pill-navy"
                aria-label="Explore Nursing Programs offered"
              >
                <span className="hero-btn-text-full">Explore Academic Programs</span>
                <span className="hero-btn-text-compact">Explore Programs</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </a>
            </div>

            <div className="hero-trust-subtext">
              <span className="shield-icon">🛡️</span>
              <span>
                Recognised by <strong>Govt. of Karnataka, KSNC &amp; INC</strong> • Affiliated to <strong>RGUHS Bangalore</strong> • Karnataka SSP Scholarship Assistance
              </span>
            </div>
          </div>

          {/* Right Column: Full Official College Campus Building Photograph */}
          <div className="hero-right-visual">
            <div
              className="hero-campus-card"
              onClick={handleOpenCampusImage}
              aria-label="View high-resolution official campus photograph"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOpenCampusImage();
                }
              }}
            >
              <div className="hero-campus-image-frame">
                <img
                  src="/images/college_building.png"
                  alt="VASANTHA GROUP OF EDUCATION Official Campus Building in Bidar"
                  className="hero-college-full-image"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              <div className="hero-campus-caption-strip">
                <div className="caption-tag-left">
                  <span className="caption-live-dot" aria-hidden="true"></span>
                  <span className="caption-title">VASANTHA GROUP OF EDUCATION</span>
                  <span className="caption-badge">Bidar Campus</span>
                </div>
                <div className="caption-tag-right">
                  <span>Naubad, Karnataka • ESTD. 1984</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
