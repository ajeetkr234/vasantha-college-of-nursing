import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ApprovalsSection from '../components/sections/ApprovalsSection';

export default function About() {
  const [chairmanExpanded, setChairmanExpanded] = useState(false);
  const [groupHeadExpanded, setGroupHeadExpanded] = useState(false);
  const [provostExpanded, setProvostExpanded] = useState(false);
  const [principalExpanded, setPrincipalExpanded] = useState(false);
  return (
    <main>
      {/* PAGE BANNER */}
      <section className="page-banner-strip" aria-label="About Header">
        <div className="container">
          <div className="page-banner-inner">
            <div className="banner-left-text">
              <div className="banner-breadcrumb-link">
                <Link to="/">Home</Link> &gt; <span>About</span>
              </div>
              <h1 className="banner-main-title">
                About <span className="gold-text">Vasantha Group of Education</span>
              </h1>
              <p className="banner-sub-p">
                A legacy of compassion, clinical skill and academic excellence in healthcare and nursing education.
              </p>
            </div>

            <div className="banner-right-visual">
              <img
                src="/images/community_health.jpg"
                alt="Karnataka Nursing Students conducting Free Rural Community Health Camp with Kannada signage"
                className="img-pos-top"
                loading="eager"
              />
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
                <div className="tag-red-caps">OUR INSTITUTION</div>
                <h2 className="about-heading-title">
                  VASANTHA GROUP OF EDUCATION, <span>Bidar</span>
                </h2>
                <p className="about-body-text">
                  VASANTHA GROUP OF EDUCATION, serving society for over 43 years (seeds of an idea sown in 1984), is dedicated to providing quality healthcare and nursing education with a strong focus on practical training, ethical values and community service. Our institution aims to shape skilled, empathetic and confident healthcare champions who can contribute to better healthcare and a healthier society.
                </p>
              </div>
              <Link to="/courses" className="btn-know-more-red">
                <span>Know More About College</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </article>

            {/* Column 2: Campus Building Image */}
            <div className="about-building-photo-box">
              <img src="/images/college_building.jpg" alt="VASANTHA GROUP OF EDUCATION Campus Building" />
            </div>

            {/* Column 3: VASANTHA GROUP OF EDUCATION Card */}
            <article className="card-trust-center">
              <div className="card-trust-inner-top" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                <img
                  src="/images/trust_logo.svg"
                  alt="VASANTHA GROUP OF EDUCATION Logo"
                  className="trust-crest-icon"
                  style={{ display: 'block', margin: '0 auto 10px auto' }}
                />
                <h3 className="trust-title-text">VASANTHA GROUP OF EDUCATION</h3>
                <p className="trust-desc-p">
                  A premier educational institution serving for 43+ years, dedicated to quality education, incubation, community development and empowerment of youth through skill and value-based learning.
                </p>
              </div>
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

          {/* SECTION: INSTITUTIONAL LEADERSHIP (4 DESKS: FOUNDER & CHAIRMAN, GROUP HEAD & DIRECTOR, PRINCIPAL, ADMISSION COORDINATOR) */}
          <section className="section-leadership-messages" id="leadership-messages" aria-label="Institutional Leadership Messages">
            
            {/* Leadership Section Header */}
            <div className="leadership-section-header">
              <div className="tag-red-caps">PRESIDENT DESK &amp; LEADERSHIP</div>
              <h2 className="section-title-styled" style={{ marginBottom: '8px' }}>
                Guiding Voices: <span>Messages from Our Leadership</span>
              </h2>
              <p className="leadership-subtext">
                Serving 43+ years with a firm foundation sown in 1984. Our campus has grown as a sturdy banyan tree nurturing thousands of healthcare champions across India and globally.
              </p>
            </div>

            {/* THREE-COLUMN BALANCED GRID */}
            <div className="leadership-three-col-grid">
              
              {/* DESK 1: FOUNDER & CHAIRMAN */}
              <article
                className="leader-col-card chairman-theme"
                id="chairman-message"
                style={{ minWidth: 0, width: '100%', boxSizing: 'border-box' }}
              >
                {/* Profile Header Row */}
                <div className="leader-col-header">
                  <div className="leader-col-photo-frame gold-border">
                    <img
                      src="/images/chairman_dr_chandrakant_gaddagi_v4.jpg"
                      alt="Shri Chandrakant Gadaggi - Founder & Chairman"
                      loading="eager"
                      decoding="async"
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
                    <span className="leader-col-degree amber">Founder &amp; Chairman, Vasantha Group</span>
                    <p className="leader-col-trust">
                      Vasantha Group Educational Campus
                      <br />
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-sub)' }}>SSVVES (R), Estd. 1984</span>
                    </p>
                    <span className="leader-col-milestone-pill gold">
                      🌱 43 Years Serving Society (Rooted 1984)
                    </span>
                  </div>
                </div>

                {/* Featured Quote Callout */}
                <blockquote className="leader-col-quote gold">
                  <p>
                    “My heart is full of pleasure and pride as I perceive the progress being made at Vasantha Group Educational Campus &amp; serving from 43 years. The seeds of an idea sown in 1984 have taken firm root, and our campus has grown as a sturdy banyan tree with different branches widespread.”
                  </p>
                  <cite>— Shri Chandrakant Gadaggi, Founder &amp; Chairman</cite>
                </blockquote>

                {/* Body Content & Preview */}
                <div className="leader-col-body">
                  <p>
                    I extend my warm wishes to one and all who have worked for the progress of the campus and still creating a road towards excellence. My dream has come true when thousands of students are striving hard for their best career and leaving the campus with best opportunities and number of ideas to become an entrepreneur.
                  </p>

                  {/* Expandable Section */}
                  {chairmanExpanded && (
                    <div className="leader-expandable-content animate-fade-in">
                      <p>
                        Our Educational Campus will play an important role to shape the students with the highest Caliber for the global education culture by providing center of excellence incubation center at the doorstep. We believe in empowering our students to become not just healthcare providers, but also advocates for health and wellness in their communities.
                      </p>
                      <p>
                        The college’s state-of-the-art facilities, experienced faculty, and diverse student body create a vibrant learning environment that inspires innovation and excellence. To this end, we are committed to empowering our students with the accumulated knowledge and driving them towards a healthier, progressive, and prosperous future. This kind of educational system not only focuses on the socio-economic growth of the region but takes a leap towards international recognition as well.
                      </p>
                      <p>
                        With the establishment of Vasantha Group of Education, we intend to considerably invest in the educational sector in order to proportionately focus on entrepreneurship along with education. By doing so, we aim to nurture society in the areas of research and technology and also drive growth via industrial and academic partnerships.
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
                            <strong>Research &amp; Tech</strong>
                            <small>Industrial &amp; academic partnerships</small>
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
                  className={`btn-readmore-toggle ${chairmanExpanded ? 'is-expanded' : ''}`}
                  onClick={() => setChairmanExpanded(!chairmanExpanded)}
                  aria-expanded={chairmanExpanded}
                >
                  <span>{chairmanExpanded ? 'Show Less' : 'Read Full Message'}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </article>

              {/* DESK 2: GROUP HEAD & DIRECTOR */}
              <article
                className="leader-col-card principal-theme"
                id="grouphead-message"
                style={{ minWidth: 0, width: '100%', boxSizing: 'border-box', position: 'relative' }}
              >
                <span id="director-message" style={{ position: 'absolute', top: '-30px' }}></span>
                {/* Profile Header Row */}
                <div className="leader-col-header">
                  <div className="leader-col-photo-frame crimson-border">
                    <img
                      src="/images/principal_dr_chinamma_gadggi_v4.jpg"
                      alt="Dr. Chinamma C. Gadggi - Group Head & Director - Nursing Education"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <div className="leader-col-meta">
                    <span className="leader-role-chip red-crimson">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                      Group Head &amp; Director
                    </span>
                    <h3 className="leader-col-name">Dr. Chinamma C. Gadggi</h3>
                    <span className="leader-col-degree blue">Group Head &amp; Director - Nursing &amp; Health Sciences</span>
                    <p className="leader-col-trust">
                      VASANTHA GROUP OF EDUCATION
                      <br />
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-sub)' }}>Faculty of Nursing &amp; Health Sciences</span>
                    </p>
                    <span className="leader-col-milestone-pill crimson">
                      ❤️ Motto: “Services with a Smile”
                    </span>
                  </div>
                </div>

                {/* Featured Quote Callout */}
                <blockquote className="leader-col-quote crimson">
                  <p>
                    “Nursing makes Vasantha educational institutions outstanding in all its endeavors through the personalized care given to patients. The nurses are the pride of Vasantha, and their motto, ‘Services with a Smile,’ is meticulously translated into action while serving the sick.”
                  </p>
                  <cite>— Dr. Chinamma C. Gadggi, Group Head &amp; Director</cite>
                </blockquote>

                {/* Body Content & Preview */}
                <div className="leader-col-body">
                  <p>
                    We strive to provide our students with an educational experience that is both challenging and rewarding, preparing them to excel in their nursing careers and to make a meaningful impact on the health and well-being of individuals and communities. Our curriculum is designed with the latest advancements in healthcare in mind, ensuring that our students receive a comprehensive education that blends theoretical knowledge with practical, hands-on experience.
                  </p>

                  {/* Expandable Section */}
                  {groupHeadExpanded && (
                    <div className="leader-expandable-content animate-fade-in">
                      <p>
                        Our state-of-the-art facilities, experienced faculty, and robust clinical partnerships enable us to offer a learning environment that is second to none. In addition to academic excellence, we place a strong emphasis on personal and professional growth. We believe that nursing is not just a profession but a calling, and we are committed to nurturing not only the minds but also the hearts of our students.
                      </p>
                      <p>
                        Through a variety of extracurricular activities, community outreach programs, and leadership opportunities, we encourage our students to develop the qualities that define a true healthcare professional: empathy, integrity, and a lifelong commitment to learning.
                      </p>
                      <p>
                        A Vasantha nurse is not merely a caregiver; she is computer-savvy, confident, and highly resourceful, capable of deftly handling state-of-the-art equipment in the hospital. Endowed with unique qualities of love, courage, and mercy, which are the hallmarks of nursing, our nurses are much in demand in today’s modern healthcare system.
                      </p>
                      <p>
                        Vasantha has a unique platform that gives students a plethora of unparalleled opportunities to experience the joy of learning, the wonders of new knowledge and to unearth their limitless potential and capabilities. When you become part of the Vasantha family, we leave no stone unturned to guide, mentor, nurture and prepare you to meet the global requirements, both personal and professional. Our gift to you and our nation are strong and ethical leaders who will shape and change the destiny and future of the world.
                      </p>

                      {/* 3 Principal Highlights */}
                      <div className="leader-mini-highlights-grid">
                        <div className="leader-mini-pill">
                          <span className="mini-icon">❤️</span>
                          <div>
                            <strong>Love, Courage &amp; Mercy</strong>
                            <small>Motto: ‘Services with a Smile’</small>
                          </div>
                        </div>
                        <div className="leader-mini-pill">
                          <span className="mini-icon">💻</span>
                          <div>
                            <strong>Computer-Savvy</strong>
                            <small>Deftly handling state-of-the-art tech</small>
                          </div>
                        </div>
                        <div className="leader-mini-pill">
                          <span className="mini-icon">🌍</span>
                          <div>
                            <strong>Ethical Leaders</strong>
                            <small>Meeting global healthcare standards</small>
                          </div>
                        </div>
                      </div>

                      {/* Signature */}
                      <div className="leader-col-signature">
                        <div>
                          <div className="sig-bless">With Dedication &amp; Care,</div>
                          <strong className="sig-name">Dr. Chinamma C. Gadggi</strong>
                          <div className="sig-title">Group Head &amp; Director - Nursing &amp; Health Sciences</div>
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
                  className={`btn-readmore-toggle ${groupHeadExpanded ? 'is-expanded' : ''}`}
                  onClick={() => setGroupHeadExpanded(!groupHeadExpanded)}
                  aria-expanded={groupHeadExpanded}
                >
                  <span>{groupHeadExpanded ? 'Show Less' : 'Read Full Message'}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </article>

              {/* DESK 3: PRINCIPAL */}
              <article
                className="leader-col-card vice-principal-theme"
                id="principal-message"
                style={{ minWidth: 0, width: '100%', boxSizing: 'border-box', position: 'relative' }}
              >
                <span id="vice-principal-message" style={{ position: 'absolute', top: '-30px' }}></span>
                {/* Profile Header Row */}
                <div className="leader-col-header">
                  <div className="leader-col-photo-frame emerald-border">
                    <img
                      src="/images/principal_dr_dinesh_joy_v4.jpg"
                      alt="Dr. Dinesh Joy - Principal, Smt. M. C. Vasantha College of Nursing"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <div className="leader-col-meta">
                    <span className="leader-role-chip teal-emerald">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                      College Principal
                    </span>
                    <h3 className="leader-col-name">Dr. Dinesh Joy</h3>
                    <span className="leader-col-degree emerald">Principal, Smt. M. C. Vasantha College of Nursing</span>
                    <p className="leader-col-trust">
                      VASANTHA GROUP OF EDUCATION
                      <br />
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-sub)' }}>Faculty of Nursing &amp; Health Sciences</span>
                    </p>
                    <span className="leader-col-milestone-pill" style={{ color: '#047857' }}>
                      🌟 Legacy of Care &amp; Academic Leadership
                    </span>
                  </div>
                </div>

                {/* Featured Quote Callout */}
                <blockquote className="leader-col-quote" style={{ background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)', borderLeft: '3.5px solid #10b981' }}>
                  <p style={{ color: '#064e3b' }}>
                    “As part of the VASANTHA GROUP OF EDUCATION family, our students have the unique opportunity to be part of a legacy of care and compassion. We are dedicated to supporting you in every aspect of your educational journey, and we look forward to witnessing your contributions to the field of nursing.”
                  </p>
                  <cite style={{ color: '#047857' }}>— Dr. Dinesh Joy, Principal</cite>
                </blockquote>

                {/* Body Content & Preview */}
                <div className="leader-col-body">
                  <p>
                    At VASANTHA GROUP OF EDUCATION, we understand the pivotal role nurses play in shaping the future of healthcare. We are proud to offer a dynamic and supportive atmosphere where our students can thrive and grow both personally and professionally.
                  </p>

                  {/* Expandable Section */}
                  {principalExpanded && (
                    <div className="leader-expandable-content animate-fade-in">
                      <p>
                        Our commitment to our students extends beyond the classroom, offering a range of co-curricular activities, mentorship programs, community engagement and job opportunities (Domestic and International).
                      </p>
                      <p>
                        Every nurse entering our classrooms receives personal guidance and comprehensive clinical exposure in premier hospital settings, ensuring they step out fully equipped to deliver exceptional bedside care and ethical healthcare leadership anywhere across the globe.
                      </p>

                      {/* 3 Principal Highlights */}
                      <div className="leader-mini-highlights-grid">
                        <div className="leader-mini-pill">
                          <span className="mini-icon">🏥</span>
                          <div>
                            <strong>Dynamic Atmosphere</strong>
                            <small>Supportive clinical environment</small>
                          </div>
                        </div>
                        <div className="leader-mini-pill">
                          <span className="mini-icon">🌐</span>
                          <div>
                            <strong>Job Opportunities</strong>
                            <small>Domestic &amp; International career ties</small>
                          </div>
                        </div>
                        <div className="leader-mini-pill">
                          <span className="mini-icon">🤝</span>
                          <div>
                            <strong>Holistic Mentorship</strong>
                            <small>Co-curricular &amp; community outreach</small>
                          </div>
                        </div>
                      </div>

                      {/* Signature */}
                      <div className="leader-col-signature">
                        <div>
                          <div className="sig-bless">With Guidance &amp; Warm Regards,</div>
                          <strong className="sig-name">Dr. Dinesh Joy</strong>
                          <div className="sig-title">Principal, Smt. M. C. Vasantha College of Nursing</div>
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
                  className={`btn-readmore-toggle ${principalExpanded ? 'is-expanded' : ''}`}
                  onClick={() => setPrincipalExpanded(!principalExpanded)}
                  aria-expanded={principalExpanded}
                >
                  <span>{principalExpanded ? 'Show Less' : 'Read Full Message'}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </article>

              {/* DESK 4: ADMISSION COORDINATOR */}
              <article
                className="leader-col-card provost-theme"
                id="admission-coordinator-message"
                style={{ minWidth: 0, width: '100%', boxSizing: 'border-box', position: 'relative' }}
              >
                <span id="provost-message" style={{ position: 'absolute', top: '-100px', visibility: 'hidden' }} aria-hidden="true"></span>
                {/* Profile Header Row */}
                <div className="leader-col-header">
                  <div className="leader-col-photo-frame blue-border">
                    <img
                      src="/images/provost_dr_bhuleshwar_patel.jpg?v=20261027_v1"
                      alt="Dr. Bhuleshwar Patel - Admission Coordinator, Smt. M. C. Vasantha College of Nursing"
                    />
                  </div>
                  <div className="leader-col-meta">
                    <span className="leader-role-chip royal-blue">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM3.45 9L12 4.33 20.55 9 12 13.67 3.45 9zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                      </svg>
                      Admission Coordinator
                    </span>
                    <h3 className="leader-col-name">Dr. Bhuleshwar Patel</h3>
                    <span className="leader-col-degree blue">Admission Coordinator &amp; Higher Education Visionary</span>
                    <p className="leader-col-trust">
                      VASANTHA GROUP OF EDUCATION
                      <br />
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-sub)' }}>Academic &amp; Admission Counseling</span>
                    </p>
                    <span className="leader-col-milestone-pill blue">
                      🌱 15+ Years Higher Education &amp; Research
                    </span>
                  </div>
                </div>

                {/* Featured Quote Callout */}
                <blockquote className="leader-col-quote blue">
                  <p>
                    “We, at Smt. M. C. Vasantha College of Nursing, Bidar (Vasantha Group of Education), have quickly adapted to the emerging pedagogy and have continued our attempts to promote Higher education in the Allied Health sciences, Nursing and Pharmacy areas with focus on profound research. Further, to achieve our aim, we have strived to establish a regional model of higher education laced with an international competitive ecosystem.”
                  </p>
                  <cite>— Dr. Bhuleshwar Patel, Admission Coordinator</cite>
                </blockquote>

                {/* Body Content & Preview */}
                <div className="leader-col-body">
                  <p>
                    Dr. Bhuleshwar Patel is a Visionary, philanthropist and social worker who has been working in the field of Higher education studies, Tribal youth development, Rural livelihood, women empowerment, and upliftment of backward class and BPL families through quality and sustainable education for the last fifteen years.
                  </p>

                  {/* Expandable Section */}
                  {provostExpanded && (
                    <div className="leader-expandable-content animate-fade-in">
                      <p>
                        We have the requisite intellectual and physical infrastructure that supports the College to emerge as a leading citadel in the arena of higher education. The College has inviting ambience for academically committed and passionately creative people. Here, the faculty is highly qualified and equally passionate to nurture the creativity and innovation of young minds. At the same time, there is an urge at the student's end to match their steps with the rigors taken by the college for the healthy and overall development of self and humanity at large.
                      </p>
                      <p>
                        We take pride in our innovative teaching-learning practices, flexible academic structure customizable as per the need of our students amalgamating internship program, thesis/dissertation, entrepreneurial projects and social outreach programmes. This enables us to produce graduates who are industry &amp; research ready with humanity serving skills &amp; zeal.
                      </p>
                      <p>
                        Additionally, a healthy mix of co-curricular &amp; extra-curricular activities like club activities, general knowledge, speed typing, writing competency, interview training, standard practice instructions for students and faculties, sports competition, social initiative programs &amp; the likes are observed on campus for the holistic development of students.
                      </p>

                      {/* 3 Provost Highlights */}
                      <div className="leader-mini-highlights-grid">
                        <div className="leader-mini-pill">
                          <span className="mini-icon">🔬</span>
                          <div>
                            <strong>Profound Research</strong>
                            <small>Allied Health, Nursing &amp; Pharmacy</small>
                          </div>
                        </div>
                        <div className="leader-mini-pill">
                          <span className="mini-icon">🌐</span>
                          <div>
                            <strong>Global Pedagogy</strong>
                            <small>International competitive ecosystem</small>
                          </div>
                        </div>
                        <div className="leader-mini-pill">
                          <span className="mini-icon">🌱</span>
                          <div>
                            <strong>Empowerment &amp; Outreach</strong>
                            <small>Inclusive sustainable education</small>
                          </div>
                        </div>
                      </div>

                      {/* Signature */}
                      <div className="leader-col-signature">
                        <div>
                          <div className="sig-bless">With Visionary Leadership &amp; Warmth,</div>
                          <strong className="sig-name">Dr. Bhuleshwar Patel</strong>
                          <div className="sig-title">Admission Coordinator, Smt. M. C. Vasantha College of Nursing</div>
                        </div>
                        <div className="sig-seal">
                          <img src="/images/logo.svg" alt="College Crest" />
                          <span>Vasantha Group</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Read More / Show Less Button */}
                <button
                  type="button"
                  className={`btn-readmore-toggle ${provostExpanded ? 'is-expanded' : ''}`}
                  onClick={() => setProvostExpanded(!provostExpanded)}
                  aria-expanded={provostExpanded}
                >
                  <span>{provostExpanded ? 'Show Less' : 'Read Full Message'}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </article>

            </div>
          </section>

          {/* SECTION: FACULTY TEAM OF VASANTHA GROUP OF EDUCATION: DISCOVER HEALTH */}
          <section className="section-faculty-health-sciences" id="faculty-team" aria-label="Faculty Team of VASANTHA GROUP OF EDUCATION: Discover Health">
            <div className="faculty-health-card">
              <div className="faculty-health-grid">
                
                {/* Visual Col */}
                <div className="faculty-health-visual">
                  <img
                    src="/images/simulation_training_group.jpg"
                    alt="Karnataka Nursing Faculty Team and Students of VASANTHA GROUP OF EDUCATION"
                    className="faculty-team-photo"
                  />
                  <div className="faculty-photo-badge">
                    <span className="badge-pulse-green"></span>
                    <span>DISCOVER HEALTH • 21st Century Excellence</span>
                  </div>
                  <div className="faculty-disciplines-bar">
                    <span className="discipline-tag">🩺 Nursing</span>
                    <span className="discipline-tag">💊 Pharmacy</span>
                    <span className="discipline-tag">🏃 Physiotherapy</span>
                    <span className="discipline-tag">👶 Midwifery</span>
                  </div>
                </div>

                {/* Content Col */}
                <div className="faculty-health-content">
                  <div className="tag-red-caps">FACULTY TEAM OF VASANTHA GROUP OF EDUCATION</div>
                  <h2 className="faculty-section-title">
                    Discover Health: <span>Multidisciplinary Healthcare Education</span>
                  </h2>
                  <p className="faculty-lead-p">
                    The Faculty of Health Sciences aims to provide a healthy future to the upcoming generations with the help of multidisciplinary education and research that covers both practical as well as theoretical aspects. The programmes are designed considering the revolutionary changes and needs of the 21st century. We focus on various disciplines of Pharmacy, Physiotherapy, Nursing and Midwifery, etc.
                  </p>
                  <p className="faculty-body-p">
                    The clinical practices and their adaptation through the means of clinical training, tie-ups, training, and research throws a significant impact in integrating the best practices to solve modern healthcare problems. The commitment to sheer learning and dedication to excellence hold the utmost importance and is delivered through our learned faculty members, and national as well as international experts, with hospital tie-ups that nurture the practical experiences. Such experiential educational opportunities are a stepping stone towards learning beyond classrooms.
                  </p>
                  <p className="faculty-body-p">
                    The Faculty of Health Sciences strive to make a remarkable impact in the future of healthcare of the country. With hands-on experiences and holistic syllabus can boost the mindset of the students, hereby, equipping them with the right resources and learnings to create an ecosystem of professional healthcare.
                  </p>

                  {/* Highlights Pillars Strip */}
                  <div className="faculty-pillars-strip">
                    <div className="faculty-pillar-chip">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>Multidisciplinary Research &amp; Holistic Programs (Nursing, Pharmacy, Physiotherapy &amp; Midwifery)</span>
                    </div>
                    <div className="faculty-pillar-chip">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>50-Bedded Hospital Attached with Vasantha College (Medical Laboratory, CT Scan Center &amp; Cancer Diagnostic Center)</span>
                    </div>
                    <div className="faculty-pillar-chip">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>Experiential Hospital Training, Reputed Clinical Tie-ups &amp; Beyond-the-Classroom Learning</span>
                    </div>
                    <div className="faculty-pillar-chip">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>Learned Faculty Members, National &amp; International Healthcare Experts</span>
                    </div>
                  </div>
                </div>

              </div>
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
            Why Choose <span>VASANTHA GROUP OF EDUCATION?</span>
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
