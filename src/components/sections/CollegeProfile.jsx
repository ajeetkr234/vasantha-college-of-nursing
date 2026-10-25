import React from 'react';
import { Link } from 'react-router-dom';

export default function CollegeProfile() {
  return (
    <section className="section-about-content" id="about" aria-label="About the College and Leadership">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-with-badge" style={{ marginBottom: '24px' }}>
          <div>
            <div className="tag-red-caps">INSTITUTIONAL PROFILE</div>
            <h2 className="section-title-styled" style={{ margin: 0, textAlign: 'left' }}>
              About <span>Our College &amp; Trust</span>
            </h2>
          </div>
          <Link to="/about" className="section-explore-badge" aria-label="Read full trust history and leadership details">
            <span>Read Trust History &amp; Leadership Details</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* 2-Column Overview: College (Left) + Trust (Right) */}
        <div className="about-dual-columns">
          {/* Column 1: College Intro */}
          <article className="card-about-college-text">
            <div>
              <div className="tag-red-caps">OUR COLLEGE</div>
              <h3 className="about-heading-title">
                Smt. M. C. Vasantha College of Nursing, <span>Bidar</span>
              </h3>
              <p className="about-body-text">
                Smt. M. C. Vasantha College of Nursing, established in 1991 under Shri Shivaling Vidhya Vardhak Education Society (R), is dedicated to providing excellence in nursing education with rigorous clinical training, ethical values, and community service.
              </p>
              <p className="about-body-text" style={{ marginTop: '8px' }}>
                Affiliated to Rajiv Gandhi University of Health Sciences (RGUHS Bangalore) and recognised by the Karnataka State Nursing Council (KSNC) and Government of Karnataka, our graduates serve in premier hospital networks worldwide.
              </p>
            </div>
            <Link to="/about" className="btn-know-more-red" aria-label="Know more about our college history">
              <span>Know More About Us</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </article>

          {/* Column 2: Trust Card */}
          <article className="card-trust-center">
            <div className="card-trust-inner-top">
              <img
                src="/images/trust_logo.svg"
                alt="Shri Shivaling Vidhya Vardhak Education Society Emblem"
                className="trust-crest-icon"
                loading="lazy"
              />
              <div className="tag-red-caps" style={{ marginTop: '4px' }}>SPONSORING TRUST</div>
              <h3 className="trust-title-text">Shri Shivaling Vidhya Vardhak Education Society (R)</h3>
              <p className="trust-desc-p">
                A pioneering educational society established in 1991, dedicated to youth empowerment, quality health sciences education, and healthcare service across Karnataka.
              </p>
            </div>
            <div>
              <div className="trust-3-pills">
                <div className="trust-3-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                  <span>Quality Education</span>
                </div>
                <div className="trust-3-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#C91F2C" aria-hidden="true">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>Community Service</span>
                </div>
                <div className="trust-3-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  <span>Value-Based Learning</span>
                </div>
              </div>
              <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'center' }}>
                <Link to="/about" className="btn-know-more-red" aria-label="Explore Trust history and leadership details">
                  <span>Read Trust History</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* Official Campus Infrastructure Panoramic Showcase */}
        <div className="campus-panoramic-showcase-card">
          <div className="panoramic-header-row">
            <div className="panoramic-header-left">
              <span className="tag-red-caps">AUTHENTIC CAMPUS INFRASTRUCTURE</span>
              <h3 className="panoramic-title">Smt. M. C. Vasantha College of Nursing Campus, Bidar</h3>
              <p className="panoramic-desc">
                Purpose-built 3-storey health sciences academic complex with high-fidelity nursing simulation labs, digital anatomy museum, ventilated lecture halls, and lush landscaped campus grounds.
              </p>
            </div>
            <div className="panoramic-header-pills">
              <span className="pano-pill green">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                INC &amp; KNC Approved
              </span>
              <span className="pano-pill blue">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                RGUHS Bangalore Affiliated
              </span>
            </div>
          </div>

          <div className="panoramic-image-container">
            <img
              src="/images/college_building.png"
              alt="Smt. M. C. Vasantha College of Nursing Official Campus Building Elevation in Bidar"
              className="panoramic-building-photo"
              loading="lazy"
            />
            <div className="panoramic-photo-tag">
              <span className="tag-pulse"></span>
              <span>Official Front Elevation &amp; Main Entrance • Shahpur Gate, Bidar</span>
            </div>
          </div>

          <div className="panoramic-metrics-strip">
            <div className="pano-metric">
              <span className="pano-metric-number">3-Storey</span>
              <span className="pano-metric-label">Academic Complex</span>
            </div>
            <div className="pano-divider"></div>
            <div className="pano-metric">
              <span className="pano-metric-number">Shahpur Gate</span>
              <span className="pano-metric-label">Bidar City Campus</span>
            </div>
            <div className="pano-divider"></div>
            <div className="pano-metric">
              <span className="pano-metric-number">100% Practical</span>
              <span className="pano-metric-label">Clinical Demo Labs</span>
            </div>
            <div className="pano-divider"></div>
            <div className="pano-metric">
              <span className="pano-metric-number">750+ Beds</span>
              <span className="pano-metric-label">BRIMS Teaching Hospital</span>
            </div>
          </div>
        </div>


        {/* Vision & Mission */}
        <div className="vision-mission-row">
          <div className="vm-box peach">
            <div className="vm-icon-bubble-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <div>
              <h3 className="vm-title-h3">Our Vision</h3>
              <p className="vm-desc-p">
                To be a premier institution in nursing and healthcare education, renowned for academic excellence, state-of-the-art clinical simulation, and the cultivation of compassionate nurses who serve society with uncompromised integrity.
              </p>
            </div>
          </div>

          <div className="vm-box sky">
            <div className="vm-icon-bubble-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="6" r="6"></circle>
                <circle cx="12" cy="2" r="2"></circle>
              </svg>
            </div>
            <div>
              <h3 className="vm-title-h3">Our Mission</h3>
              <p className="vm-desc-p">
                To provide value-based professional nursing curricula, real-world bedside clinical hospital experience, and an inspiring academic ecosystem that empowers students into globally competent healthcare practitioners.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-choose-header-block">
          <h2 className="section-title-styled" style={{ marginBottom: '16px' }}>
            Why Choose <span>Smt. M. C. Vasantha College of Nursing?</span>
          </h2>
        </div>

        <div className="why-choose-4-grid">
          <div className="why-item-card">
            <div className="why-circle-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div className="why-card-text">
              <div className="why-card-title">Experienced Faculty</div>
              <div className="why-card-desc">Mentorship from senior clinical specialists and seasoned nursing educators.</div>
            </div>
          </div>

          <div className="why-item-card">
            <div className="why-circle-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 21h18"></path>
                <path d="M5 21V7l8-4v18"></path>
                <path d="M19 21V11l-6-4"></path>
              </svg>
            </div>
            <div className="why-card-text">
              <div className="why-card-title">Modern Facilities</div>
              <div className="why-card-desc">6 high-fidelity simulation labs, anatomical museum, digital library, and hostels.</div>
            </div>
          </div>

          <div className="why-item-card">
            <div className="why-circle-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M10 2v7.31L4 19a2 2 0 0 0 1.66 3h12.68A2 2 0 0 0 20 19l-6-9.69V2"></path>
              </svg>
            </div>
            <div className="why-card-text">
              <div className="why-card-title">750+ Bedded Training</div>
              <div className="why-card-desc">Intensive bedside clinical exposure at affiliated BRIMS District Teaching Hospital.</div>
            </div>
          </div>

          <div className="why-item-card">
            <div className="why-circle-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="why-card-text">
              <div className="why-card-title">Student Support</div>
              <div className="why-card-desc">Comprehensive scholarship guidance, hostel facilities, and career placement support.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
