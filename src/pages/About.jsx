import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ApprovalsSection from '../components/sections/ApprovalsSection';

export default function About() {
  const [chairmanExpanded, setChairmanExpanded] = useState(false);
  const [principalExpanded, setPrincipalExpanded] = useState(false);
  return (
    <main>
      {/* PAGE BANNER */}
      <section className="page-banner-strip" aria-label="About Us Header">
        <div className="container">
          <div className="page-banner-inner">
            <div className="banner-left-text">
              <div className="banner-breadcrumb-link">
                <Link to="/">Home</Link> &gt; <span>About Us</span>
              </div>
              <h1 className="banner-main-title">
                About <span className="gold-text">Our College</span>
              </h1>
              <p className="banner-sub-p">
                A legacy of compassion, clinical skill and academic excellence in nursing education.
              </p>
            </div>

            <div className="banner-right-visual">
              <img src="/images/hero_students.jpg" alt="Clinical lab nursing students" />
            </div>
            <div className="banner-ribbon-swoosh">
              <div className="ribbon-script-stack">
                Service<br />
                Skill<br />
                Success
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: 3-COLUMNS ROW */}
      <section className="section-about-content" aria-label="About College Overview">
        <div className="container">
          <div className="about-tri-columns">
            {/* Column 1: Our College Text */}
            <article className="card-about-college-text">
              <div>
                <div className="tag-red-caps">OUR COLLEGE</div>
                <h2 className="about-heading-title">
                  Smt. M. C. Vasantha College of Nursing, <span>Bidar</span>
                </h2>
                <p className="about-body-text">
                  Smt. M. C. Vasantha College of Nursing, established in 1991 under Shri Shivaling Vidhya Vardhak Education Society (R), is dedicated to providing quality nursing education with a strong focus on practical training, ethical values and community service. Our institution aims to shape skilled, empathetic and confident nurses who can contribute to better healthcare and a healthier society.
                </p>
              </div>
              <Link to="/courses" className="btn-know-more-red">
                <span>Know More About Us</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </article>

            {/* Column 2: Campus Building Image */}
            <div className="about-building-photo-box">
              <img src="/images/college_building.jpg" alt="Smt. M. C. Vasantha College of Nursing Campus Building" />
            </div>

            {/* Column 3: Shri Shivaling Vidhya Vardhak Education Society (R) Card */}
            <article className="card-trust-center">
              <img src="/images/trust_logo.svg" alt="Shri Shivaling Vidhya Vardhak Education Society Logo" className="trust-crest-icon" />
              <h3 className="trust-title-text">Shri Shivaling Vidhya Vardhak Education Society (R)</h3>
              <p className="trust-desc-p">
                A committed educational trust working for quality education, community development and empowerment of youth through skill and value-based learning.
              </p>
              <div className="trust-3-pills">
                <div className="trust-3-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                  <span>Quality Education</span>
                </div>
                <div className="trust-3-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#c01823">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>Community Service</span>
                </div>
                <div className="trust-3-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  <span>Value-Based Learning</span>
                </div>
              </div>
            </article>
          </div>

          {/* SECTION: INSTITUTIONAL LEADERSHIP (2 COLUMNS WITH READ MORE) */}
          <section className="section-leadership-messages" id="leadership-messages" aria-label="Institutional Leadership Messages">
            
            {/* Leadership Section Header */}
            <div className="leadership-section-header">
              <div className="tag-red-caps">INSTITUTIONAL LEADERSHIP &amp; VISION</div>
              <h2 className="section-title-styled" style={{ marginBottom: '8px' }}>
                Guiding Voices: <span>Messages from Our Leadership</span>
              </h2>
              <p className="leadership-subtext">
                Over 43 years of visionary education, compassionate healthcare service, and shaping global clinical champions at Vasantha Group Educational Campus.
              </p>
            </div>

            {/* TWO-COLUMN BALANCED GRID */}
            <div className="leadership-two-col-grid">
              
              {/* COLUMN 1: CHAIRMAN CARD */}
              <article
                className="leader-col-card chairman-theme"
                id="chairman-message"
                style={{ minWidth: 0, width: '100%', boxSizing: 'border-box' }}
              >
                {/* Profile Header Row */}
                <div className="leader-col-header">
                  <div className="leader-col-photo-frame gold-border">
                    <img
                      src="/images/chairman_dr_chandrakant_gaddagi.jpg"
                      alt="Shri Chandrakant Gadaggi - Founder & Chairman"
                    />
                  </div>
                  <div className="leader-col-meta">
                    <span className="leader-role-chip navy-gold">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      Founder &amp; Chairman
                    </span>
                    <h3 className="leader-col-name">Shri Chandrakant Gadaggi</h3>
                    <span className="leader-col-degree amber">Dr. Chandrakant M. Gaddgi, B.A., LL.B.</span>
                    <p className="leader-col-trust">
                      Vasantha Group Educational Campus
                      <br />
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-sub)' }}>SSVVES (R), Estd. 1984 / 1991</span>
                    </p>
                    <span className="leader-col-milestone-pill gold">
                      🌱 43+ Years Serving Society (Seeds Sown 1984)
                    </span>
                  </div>
                </div>

                {/* Featured Quote Callout */}
                <blockquote className="leader-col-quote gold">
                  <p>
                    “My heart is full of pleasure and pride as I perceive the progress being made at Vasantha Group Educational Campus, serving from 43 years. The seeds of an idea sown in 1984 have taken firm root, and our campus has grown as a sturdy banyan tree with widespread branches.”
                  </p>
                  <cite>— Shri Chandrakant Gadaggi, Founder &amp; Chairman</cite>
                </blockquote>

                {/* Body Content & Preview */}
                <div className="leader-col-body">
                  <p>
                    I extend my warm wishes to one and all who have worked for the progress of the campus and are still creating a road towards excellence. My dream has come true when thousands of students are striving hard for their best career and leaving the campus with best opportunities and ideas to become healthcare entrepreneurs and clinical leaders.
                  </p>

                  {/* Expandable Section */}
                  {chairmanExpanded && (
                    <div className="leader-expandable-content animate-fade-in">
                      <p>
                        Our Educational Campus plays an important role to shape students with the highest caliber for global education culture by providing a Center of Excellence and incubation center right at their doorstep. We believe in empowering our students to become not just healthcare providers, but also proactive advocates for health and wellness in their communities.
                      </p>
                      <p>
                        The college’s state-of-the-art facilities, experienced faculty, and diverse student body create a vibrant learning environment that inspires innovation and excellence. With the establishment of Vasantha Group of Education, we intend to considerably invest in research, technology, and industrial-academic partnerships to drive socio-economic growth and international recognition.
                      </p>

                      {/* 3 Chairman Highlights */}
                      <div className="leader-mini-highlights-grid">
                        <div className="leader-mini-pill">
                          <span className="mini-icon">🌳</span>
                          <div>
                            <strong>Sturdy Banyan Tree</strong>
                            <small>43-year legacy rooted in 1984</small>
                          </div>
                        </div>
                        <div className="leader-mini-pill">
                          <span className="mini-icon">🔬</span>
                          <div>
                            <strong>Incubation Center</strong>
                            <small>Center of Excellence at doorstep</small>
                          </div>
                        </div>
                        <div className="leader-mini-pill">
                          <span className="mini-icon">🤝</span>
                          <div>
                            <strong>Global Ties</strong>
                            <small>Industry &amp; academic partners</small>
                          </div>
                        </div>
                      </div>

                      {/* Signature */}
                      <div className="leader-col-signature">
                        <div>
                          <div className="sig-bless">With Warm Wishes,</div>
                          <strong className="sig-name">Shri Chandrakant Gadaggi</strong>
                          <div className="sig-title">Founder &amp; Chairman, Vasantha Group</div>
                        </div>
                        <div className="sig-seal">
                          <img src="/images/trust_logo.svg" alt="Trust Seal" />
                          <span>SSVVES 1984</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Read More / Show Less Button */}
                <button
                  type="button"
                  className={`btn-readmore-toggle chairman-btn ${chairmanExpanded ? 'is-expanded' : ''}`}
                  onClick={() => setChairmanExpanded(!chairmanExpanded)}
                  aria-expanded={chairmanExpanded}
                >
                  <span>{chairmanExpanded ? 'Show Less' : 'Read Full Message'}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </article>

              {/* COLUMN 2: PRINCIPAL CARD */}
              <article
                className="leader-col-card principal-theme"
                id="principal-message"
                style={{ minWidth: 0, width: '100%', boxSizing: 'border-box' }}
              >
                {/* Profile Header Row */}
                <div className="leader-col-header">
                  <div className="leader-col-photo-frame crimson-border">
                    <img
                      src="/images/principal_dr_chinamma_gadggi.jpg"
                      alt="Dr. Chinamma C. Gadggi - Principal & Group Head"
                    />
                  </div>
                  <div className="leader-col-meta">
                    <span className="leader-role-chip red-crimson">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                      Principal &amp; Group Head
                    </span>
                    <h3 className="leader-col-name">Dr. Chinamma C. Gadggi</h3>
                    <span className="leader-col-degree blue">Principal &amp; Group Head - Nursing Education</span>
                    <p className="leader-col-trust">
                      Smt. M. C. Vasantha College of Nursing
                      <br />
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-sub)' }}>Vasantha Group of Education</span>
                    </p>
                    <span className="leader-col-milestone-pill crimson">
                      ❤️ Motto: “Service with a Smile”
                    </span>
                  </div>
                </div>

                {/* Featured Quote Callout */}
                <blockquote className="leader-col-quote crimson">
                  <p>
                    “Nursing makes Vasantha educational institutions outstanding in all endeavors through personalized care given to patients. The nurses are the pride of Vasantha, and their motto, ‘Service with a Smile,’ is meticulously translated into action.”
                  </p>
                  <cite>— Dr. Chinamma C. Gadggi, Principal &amp; Group Head</cite>
                </blockquote>

                {/* Body Content & Preview */}
                <div className="leader-col-body">
                  <p>
                    We strive to provide our students with an educational experience that is both challenging and rewarding, preparing them to excel in their nursing careers and to make a meaningful impact on the health and well-being of individuals and communities. Our curriculum blends theoretical knowledge with practical, hands-on clinical experience.
                  </p>

                  {/* Expandable Section */}
                  {principalExpanded && (
                    <div className="leader-expandable-content animate-fade-in">
                      <p>
                        In addition to academic excellence, we place a strong emphasis on personal and professional growth. We believe that nursing is not just a profession but a calling, and we are committed to nurturing not only the minds but also the hearts of our students through extracurricular activities, community outreach, and leadership opportunities that cultivate empathy and lifelong learning.
                      </p>
                      <p>
                        A Vasantha nurse is not merely a caregiver; she is computer-savvy, confident, and highly resourceful, capable of deftly handling state-of-the-art equipment in the hospital. Endowed with unique qualities of love, courage, and mercy, our nurses are much in demand. When you become part of the Vasantha family, we leave no stone unturned to prepare strong and ethical leaders who shape the future of healthcare.
                      </p>

                      {/* 3 Principal Highlights */}
                      <div className="leader-mini-highlights-grid">
                        <div className="leader-mini-pill">
                          <span className="mini-icon">❤️</span>
                          <div>
                            <strong>Love, Courage &amp; Mercy</strong>
                            <small>Motto: ‘Service with a Smile’</small>
                          </div>
                        </div>
                        <div className="leader-mini-pill">
                          <span className="mini-icon">💻</span>
                          <div>
                            <strong>Computer-Savvy</strong>
                            <small>State-of-the-art clinical tech</small>
                          </div>
                        </div>
                        <div className="leader-mini-pill">
                          <span className="mini-icon">🌍</span>
                          <div>
                            <strong>Ethical Leaders</strong>
                            <small>Prepared for global healthcare</small>
                          </div>
                        </div>
                      </div>

                      {/* Signature */}
                      <div className="leader-col-signature">
                        <div>
                          <div className="sig-bless">With Dedication &amp; Care,</div>
                          <strong className="sig-name">Dr. Chinamma C. Gadggi</strong>
                          <div className="sig-title">Principal &amp; Group Head, Nursing Education</div>
                        </div>
                        <div className="sig-seal">
                          <img src="/images/logo.svg" alt="College Crest" />
                          <span>Vasantha Nursing</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Read More / Show Less Button */}
                <button
                  type="button"
                  className={`btn-readmore-toggle principal-btn ${principalExpanded ? 'is-expanded' : ''}`}
                  onClick={() => setPrincipalExpanded(!principalExpanded)}
                  aria-expanded={principalExpanded}
                >
                  <span>{principalExpanded ? 'Show Less' : 'Read Full Message'}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </article>

            </div>
          </section>

          {/* SECTION 2: VISION & MISSION */}
          <div className="vision-mission-row">
            <div className="vm-box peach">
              <div className="vm-icon-bubble-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="vm-title-h3">Our Vision</h3>
                <p className="vm-desc-p">
                  To be a leading institution in nursing education, known for academic excellence, quality clinical training and the development of compassionate healthcare professionals who serve society with dedication.
                </p>
              </div>
            </div>

            <div className="vm-box sky">
              <div className="vm-icon-bubble-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <div>
                <h3 className="vm-title-h3">Our Mission</h3>
                <p className="vm-desc-p">
                  To provide value-based nursing education, practical learning opportunities and a supportive environment that empowers students to become skilled, ethical and service-minded nursing professionals.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 3: WHY CHOOSE US */}
          <h2 className="section-title-styled">
            Why Choose <span>Smt. M. C. Vasantha College of Nursing?</span>
          </h2>

          <div className="why-choose-4-grid">
            <div className="why-item-card">
              <div className="why-circle-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div className="why-card-title">Experienced Faculty</div>
              <div className="why-card-desc">Learn from qualified and dedicated faculty members.</div>
            </div>

            <div className="why-item-card">
              <div className="why-circle-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18"></path>
                  <path d="M5 21V7l8-4v18"></path>
                  <path d="M19 21V11l-6-4"></path>
                </svg>
              </div>
              <div className="why-card-title">Modern Learning Facilities</div>
              <div className="why-card-desc">Computer lab, library, laboratories and more.</div>
            </div>

            <div className="why-item-card">
              <div className="why-circle-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 2v7.31L4 19a2 2 0 0 0 1.66 3h12.68A2 2 0 0 0 20 19l-6-9.69V2"></path>
                </svg>
              </div>
              <div className="why-card-title">Practical Clinical Training</div>
              <div className="why-card-desc">Hands-on experience in well-equipped hospitals.</div>
            </div>

            <div className="why-item-card">
              <div className="why-circle-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="why-card-title">Student Support</div>
              <div className="why-card-desc">Guidance for academic, personal and career growth.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: OFFICIAL STATUTORY APPROVALS & RECOGNITIONS */}
      <ApprovalsSection />
    </main>
  );
}
