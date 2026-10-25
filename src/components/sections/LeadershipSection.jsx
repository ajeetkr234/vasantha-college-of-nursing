import React from 'react';
import { Link } from 'react-router-dom';

export default function LeadershipSection() {
  return (
    <section className="section-leadership-spotlight" id="leadership" aria-label="Visionary Leadership and Governance">
      <div className="container">
        {/* Section Header */}
        <div className="leadership-header-center">
          <div className="tag-red-caps">VISIONARY LEADERSHIP &amp; GOVERNANCE</div>
          <h2 className="section-title-styled" style={{ margin: '8px 0 12px' }}>
            Guiding Our Institution with <span>Decades of Excellence</span>
          </h2>
          <p className="leadership-sub-p">
            Under the visionary stewardship of our Founder Chairman and the distinguished academic leadership of our Principal, 
            Smt. M. C. Vasantha College of Nursing has been shaping compassionate, clinically proficient nursing leaders for premier healthcare systems worldwide.
          </p>
        </div>

        {/* Dual Executive Leadership Cards */}
        <div className="leadership-cards-grid">
          {/* 1. Chairman Card */}
          <article className="leadership-card-item chairman-card">
            <div className="leadership-card-inner">
              <div className="leadership-portrait-wrap">
                <div className="leadership-img-frame">
                  <img
                    src="/images/chairman_dr_chandrakant_gaddagi.jpg"
                    alt="Dr. Chandrakant M. Gaddagi - Founder & Chairman"
                    className="leadership-photo chairman-photo"
                    loading="lazy"
                  />
                  <div className="leadership-role-badge chairman">Founder &amp; Chairman</div>
                </div>
                <div className="leadership-trust-note">
                  <span>Shri Shivaling Vidhya Vardhak Education Society (R)</span>
                </div>
              </div>

              <div className="leadership-details-wrap">
                <div className="leadership-meta-top">
                  <span className="leadership-kicker">INSTITUTIONAL FOUNDER</span>
                  <h3 className="leadership-name">Dr. Chandrakant M. Gaddagi</h3>
                  <div className="leadership-degrees">B.A., LL.B., Ph.D (Honorary)</div>
                  <div className="leadership-designation">President &amp; Chairman, Governing Council</div>
                </div>

                <div className="leadership-quote-box">
                  <svg className="quote-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="leadership-quote-text">
                    “Serving for over 4 decades, our institution has grown as a sturdy banyan tree with widespread branches of compassionate healthcare education. Our sacred duty is to make professional health education accessible to all students, instilling discipline, ethical service, and clinical skill.”
                  </p>
                </div>

                <div className="leadership-pillars-row">
                  <span className="leadership-pill">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    40+ Years Philanthropy &amp; Public Service
                  </span>
                  <span className="leadership-pill">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Estd. 1984 Trust Foundation
                  </span>
                </div>

                <div className="leadership-action-row">
                  <Link to="/about#chairman-message" className="btn-leadership-action chairman" aria-label="Read Chairman Dr. Chandrakant Gaddagi's full message">
                    <span>Read Chairman's Vision</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* 2. Principal Card */}
          <article className="leadership-card-item principal-card">
            <div className="leadership-card-inner">
              <div className="leadership-portrait-wrap">
                <div className="leadership-img-frame">
                  <img
                    src="/images/principal_dr_chinamma_gadggi.jpg"
                    alt="Dr. Chinnamma C. Gaddagi - Principal & Group Head"
                    className="leadership-photo principal-photo"
                    loading="lazy"
                  />
                  <div className="leadership-role-badge principal">Principal &amp; Group Head</div>
                </div>
                <div className="leadership-trust-note">
                  <span>Smt. M. C. Vasantha College of Nursing</span>
                </div>
              </div>

              <div className="leadership-details-wrap">
                <div className="leadership-meta-top">
                  <span className="leadership-kicker">ACADEMIC &amp; CLINICAL STEWARD</span>
                  <h3 className="leadership-name">Dr. Chinnamma C. Gaddagi</h3>
                  <div className="leadership-degrees">M.Sc Nursing, Ph.D in Nursing Sciences</div>
                  <div className="leadership-designation">Principal &amp; Senior Professor of Nursing</div>
                </div>

                <div className="leadership-quote-box">
                  <svg className="quote-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="leadership-quote-text">
                    “The nurses are the true pride of Vasantha. Our guiding motto, ‘Service with a Smile,’ is translated daily into clinical bedside precision, evidence-based patient management, and deep empathy. We prepare students not simply to pass examinations, but to lead healthcare teams globally.”
                  </p>
                </div>

                <div className="leadership-pillars-row">
                  <span className="leadership-pill">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    30+ Years Nursing Pedagogy &amp; Clinical Mentorship
                  </span>
                  <span className="leadership-pill">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    NCLEX-RN &amp; Global Licensure Advisor
                  </span>
                </div>

                <div className="leadership-action-row">
                  <Link to="/about#principal-message" className="btn-leadership-action principal" aria-label="Read Principal Dr. Chinnamma Gaddagi's full message">
                    <span>Read Principal's Message</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
