import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { partnersData, alumniData } from '../data/partnersData';

export default function Placements() {
  const { openApplyModal } = useModal();

  return (
    <main>
      {/* PAGE BANNER */}
      <section className="page-banner-strip" aria-label="Placements Banner">
        <div className="container">
          <div className="page-banner-inner">
            <div className="banner-left-text">
              <div className="banner-breadcrumb-link">
                <Link to="/">Home</Link> &gt; <span>Placements</span>
              </div>
              <h1 className="banner-main-title">
                Placements &amp; <span className="gold-text">Career Opportunities</span>
              </h1>
              <p className="banner-sub-p" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                Your Nursing Career, Our Support.
              </p>
              <p className="banner-sub-p">
                We provide placement assistance, and global career guidance to help you build a successful future in healthcare.
              </p>
            </div>

            <div className="banner-right-visual">
              <img
                src="/images/student_bsc_portrait.jpg"
                alt="Healthcare Placement and Career Opportunities for Nursing Graduates"
                className="img-pos-top"
                loading="eager"
              />
            </div>
            <div className="banner-ribbon-swoosh">
              <div className="ribbon-script-stack">
                Care<br />
                Skill<br />
                Success
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: 5 PLACEMENT HIGHLIGHT PILLS */}
      <section className="section-placements-page" aria-label="Placement Highlights">
        <div className="container">
          <div className="placements-5-stats">
            <div className="pill-stat-card">
              <div className="pill-icon red">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <div className="pill-stat-title">100%</div>
                <div className="pill-stat-sub">Placement Support</div>
              </div>
            </div>

            <div className="pill-stat-card">
              <div className="pill-icon red">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18"></path>
                  <path d="M5 21V7l8-4v18"></path>
                  <path d="M19 21V11l-6-4"></path>
                  <path d="M9 9h1"></path>
                  <path d="M9 13h1"></path>
                  <path d="M9 17h1"></path>
                </svg>
              </div>
              <div>
                <div className="pill-stat-title">50+</div>
                <div className="pill-stat-sub">Hospital Partners</div>
              </div>
            </div>

            <div className="pill-stat-card">
              <div className="pill-icon blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div>
                <div className="pill-stat-title">Global Opportunities</div>
                <div className="pill-stat-sub">Nursing Jobs in India &amp; Abroad</div>
              </div>
            </div>

            <div className="pill-stat-card">
              <div className="pill-icon red">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div>
                <div className="pill-stat-title">Career Guidance</div>
                <div className="pill-stat-sub">NCLEX, UK NHS, Gulf DHA</div>
              </div>
            </div>

            <div className="pill-stat-card">
              <div className="pill-icon red">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <div>
                <div className="pill-stat-title">Resume &amp; Interview Support</div>
                <div className="pill-stat-sub">Training by Experts</div>
              </div>
            </div>
          </div>

          {/* SECTION 2: 10 RECRUITING HOSPITAL PARTNERS */}
          <h2 className="section-title-styled section-title-spacing">
            Our Recruiting <span>Hospital Partners</span>
          </h2>

          {/* Partner Logos Continuous Marquee - Logos Only */}
          <div className="hospital-partners-marquee-container" aria-label="Our Recruiting Hospital Partners Marquee">
            <div className="hospital-partners-marquee-track">
              {/* Primary Set */}
              <div className="hospital-partners-marquee-group">
                {partnersData.map((p, idx) => (
                  <div key={`pl1-${idx}`} className="hospital-marquee-card" title={p.name}>
                    <img
                      src={p.logo}
                      alt={`${p.name} logo`}
                      className="hospital-marquee-logo"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Seamless Duplicated Set */}
              <div className="hospital-partners-marquee-group" aria-hidden="true">
                {partnersData.map((p, idx) => (
                  <div key={`pl2-${idx}`} className="hospital-marquee-card" title={p.name}>
                    <img
                      src={p.logo}
                      alt={`${p.name} logo`}
                      className="hospital-marquee-logo"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 3: HOW WE SUPPORT YOUR CAREER */}
          <h2 className="section-title-styled section-title-spacing">
            How We Support <span>Your Career?</span>
          </h2>

          <div className="career-support-4">
            <div className="support-card blue">
              <div className="support-icon-circle blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div>
                <div className="support-card-title">Dedicated Placement Cell</div>
                <div className="support-card-desc">Guidance, training and hospital tie-ups.</div>
              </div>
            </div>

            <div className="support-card pink">
              <div className="support-icon-circle pink">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <div>
                <div className="support-card-title">Skill Development Training</div>
                <div className="support-card-desc">Communication, interview skills and personality development.</div>
              </div>
            </div>

            <div className="support-card yellow">
              <div className="support-icon-circle yellow">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div>
                <div className="support-card-title">Overseas Licensing Support</div>
                <div className="support-card-desc">Guidance for NCLEX, UK NHS, Gulf DHA and more.</div>
              </div>
            </div>

            <div className="support-card green">
              <div className="support-icon-circle green">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <div className="support-card-title">Campus &amp; Off-Campus Drives</div>
                <div className="support-card-desc">Regular recruitment opportunities with reputed hospitals.</div>
              </div>
            </div>
          </div>

          {/* SECTION 4: ALUMNI SUCCESS STORIES */}
          <div
            className="alumni-section-header"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <h2 className="section-title-styled" style={{ marginBottom: 0 }}>
              Our Alumni <span>Success Stories</span>
            </h2>
            <button
              className="btn-view-more"
              type="button"
              onClick={() => openApplyModal('B.Sc. Nursing')}
            >
              Apply for 2026-27 Intake →
            </button>
          </div>

          <div className="alumni-3-grid">
            <article className="alumni-card">
              <div className="alumni-avatar-box">
                <img src="/images/alumni_anjali.jpg" alt="Anjali Deshmukh" />
              </div>
              <div className="alumni-info-col">
                <p className="alumni-quote-text">
                  "Placed at Shalby Hospital - Best-in-class training for a rewarding career!"
                </p>
                <div className="alumni-bottom-split">
                  <div className="alumni-author-block">
                    <h3 className="alumni-name">Anjali Deshmukh</h3>
                    <div className="alumni-batch">B.Sc. Nursing (2024)</div>
                    <div className="alumni-placement-meta">Shalby Hospital, Ahmedabad</div>
                  </div>
                  <div className="alumni-logo-stamp">
                    <img src="/images/partners/shalby.svg" alt="Shalby Hospital" />
                  </div>
                </div>
              </div>
            </article>

            <article className="alumni-card">
              <div className="alumni-avatar-box">
                <img src="/images/alumni_priya.jpg" alt="Priya Patil" />
              </div>
              <div className="alumni-info-col">
                <p className="alumni-quote-text">
                  "Placed at Niramaya Hospital - Excellent learning experience and supportive environment!"
                </p>
                <div className="alumni-bottom-split">
                  <div className="alumni-author-block">
                    <h3 className="alumni-name">Priya Patil</h3>
                    <div className="alumni-batch">GNM Nursing (2023)</div>
                    <div className="alumni-placement-meta">Niramaya Hospital, Gujarat</div>
                  </div>
                  <div className="alumni-logo-stamp">
                    <img src="/images/partners/niramaya.svg" alt="Niramaya Hospital" />
                  </div>
                </div>
              </div>
            </article>

            <article className="alumni-card">
              <div className="alumni-avatar-box">
                <img src="/images/alumni_sneha.jpg" alt="Sneha Kulkarni" />
              </div>
              <div className="alumni-info-col">
                <p className="alumni-quote-text">
                  "Placed at Hariya Hospital - Great exposure and growth opportunities!"
                </p>
                <div className="alumni-bottom-split">
                  <div className="alumni-author-block">
                    <h3 className="alumni-name">Sneha Kulkarni</h3>
                    <div className="alumni-batch">B.Sc. Nursing (2024)</div>
                    <div className="alumni-placement-meta">Hariya Hospital, Vapi</div>
                  </div>
                  <div className="alumni-logo-stamp">
                    <img src="/images/partners/hariya.svg" alt="Hariya Hospital" />
                  </div>
                </div>
              </div>
            </article>
          </div>


        </div>
      </section>
    </main>
  );
}
