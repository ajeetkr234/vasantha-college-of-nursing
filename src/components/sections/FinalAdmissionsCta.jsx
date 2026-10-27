import React from 'react';
import { useModal } from '../../context/ModalContext';

export default function FinalAdmissionsCta() {
  const { openApplyModal } = useModal();

  return (
    <section className="section-final-admissions-cta" id="admissions-cta" aria-label="Admissions 2026-27 Final Call to Action">
      <div className="container">
        <div className="approvals-cta-banner">
          <div className="cta-banner-text">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="ticker-pulse-dot" aria-hidden="true"></span>
              <span className="text-xs uppercase tracking-wider font-extrabold text-amber-300">
                ADMISSIONS OPEN • 2026–27 ACADEMIC SESSION
              </span>
            </div>
            <h4>Begin Your Healthcare Career at VASANTHA GROUP OF EDUCATION</h4>
            <p>
              Admissions Open for <strong>B.Sc. Nursing (4-Year Degree)</strong> and <strong>GNM (3-Year Diploma)</strong>. 
              Recognised by the Government of Karnataka, KSNC, Indian Nursing Council (INC New Delhi) &amp; affiliated to RGUHS Bangalore with 100% clinical hospital training.
            </p>
            <div className="cta-banner-pills-row">
              <span className="cta-banner-mini-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                750+ Bedded BRIMS Teaching Hospital
              </span>
              <span className="cta-banner-mini-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Safe Campus Hostels &amp; Transport
              </span>
              <span className="cta-banner-mini-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Placement &amp; NCLEX Support
              </span>
            </div>
          </div>

          <div className="cta-banner-actions">
            <button
              type="button"
              className="btn-pill-red"
              onClick={() => openApplyModal('B.Sc. Nursing')}
              aria-label="Open admission application form for 2026-27"
            >
              <span>Apply Online 2026–27</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <a
              href="tel:9512592211"
              className="btn-pill-white-outline"
              aria-label="Call Admissions Desk at +91 9512592211"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
