import React from 'react';
import { useModal } from '../../context/ModalContext';

export default function AdmissionStrip() {
  const { openLightbox } = useModal();

  return (
    <section className="landing-banner-section" aria-label="Official College Banner and Admissions Strip">
      <div className="container">
        <div className="landing-banner-wrapper">
          {/* Institutional Banner Frame */}
          <div
            className="landing-banner-frame"
            onClick={() =>
              openLightbox(
                '/images/college_banner.png',
                'VASANTHA GROUP OF EDUCATION - Official Banner & Leadership',
                'Official Institutional Banner'
              )
            }
            title="Click to view high-resolution official banner"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openLightbox(
                  '/images/college_banner.png',
                  'VASANTHA GROUP OF EDUCATION - Official Banner & Leadership',
                  'Official Institutional Banner'
                );
              }
            }}
          >
            <img
              src="/images/college_banner.png"
              alt="VASANTHA GROUP OF EDUCATION Official Banner - Featuring Chairman Shri Chandrakant Gadaggi & Principal Dr. Chinnamma C. Gadaggi"
              className="landing-banner-img"
              loading="eager"
            />
            <div className="banner-expand-btn" aria-hidden="true" title="Expand banner">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </div>
          </div>

          {/* Clean Official Admission Announcement Ticker (No Duplicate Buttons) */}
          <div className="landing-banner-ticker" role="region" aria-label="Admissions 2026-27 Announcement">
            <div className="ticker-left-info">
              <span className="ticker-badge-live">
                <span className="ticker-pulse-dot" aria-hidden="true"></span>
                ADMISSIONS 2026–27
              </span>
              <span className="ticker-announcement-text">
                Applications Open for <strong>B.Sc. Nursing (4 Yrs Degree)</strong> &amp; <strong>GNM Diploma (3 Yrs)</strong> • Recognised by KSNC, INC &amp; Affiliated to RGUHS Bangalore
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
