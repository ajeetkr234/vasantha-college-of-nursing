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
      'Smt. M. C. Vasantha College of Nursing - Official Campus Elevation (Shahpur Gate, Bidar)',
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
              <span className="badge-courses-highlight">B.Sc. Nursing &amp; GNM</span>
              <span className="badge-pill-pill">No NEET Required</span>
              <span className="badge-estd-tag">ESTD. 1991</span>
            </div>

            <h1 className="hero-title">
              Learn Nursing.{' '}
              <span className="title-red">Build a Career That Matters.</span>
            </h1>

            <p className="hero-description">
              Develop clinical excellence through bedside hospital rotations at affiliated <strong>750+ Bedded BRIMS Teaching Hospital</strong>, high-fidelity clinical simulation laboratories, and dedicated NCLEX &amp; placement mentorship.
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
                  <strong className="feature-title">750+ Bed Clinical Postings</strong>
                  <span className="feature-sub">Affiliated BRIMS Teaching Hospital</span>
                </div>
              </div>

              <div className="hero-feature-card">
                <div className="feature-icon-circle labs">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <path d="M6 18h12M3 22h18M14 22a7 7 0 1 0-4 0M9 14h6M12 6V3M8 3h8"/>
                  </svg>
                </div>
                <div className="feature-text-block">
                  <strong className="feature-title">6 Clinical Simulation Labs</strong>
                  <span className="feature-sub">Foundations, Maternity &amp; Child Health</span>
                </div>
              </div>

              <div className="hero-feature-card">
                <div className="feature-icon-circle nclex">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="feature-text-block">
                  <strong className="feature-title">100% Placement &amp; NCLEX</strong>
                  <span className="feature-sub">Reciprocity in UK, Gulf, USA &amp; India</span>
                </div>
              </div>

              <div className="hero-feature-card">
                <div className="feature-icon-circle hostel">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <div className="feature-text-block">
                  <strong className="feature-title">Safe Girls Hostel &amp; Mess</strong>
                  <span className="feature-sub">24/7 CCTV, Dining &amp; Resident Warden</span>
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
              title="Click to view high-resolution campus photo"
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
                  alt="Smt. M. C. Vasantha College of Nursing Official Campus Building in Bidar"
                  className="hero-college-full-image"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              <div className="hero-campus-caption-strip">
                <div className="caption-tag-left">
                  <span className="caption-live-dot" aria-hidden="true"></span>
                  <span className="caption-title">Smt. M. C. Vasantha College of Nursing</span>
                  <span className="caption-badge">Bidar Campus</span>
                </div>
                <div className="caption-tag-right">
                  <span>Shahpur Gate, Bidar • ESTD. 1991</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
