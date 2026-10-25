import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import ApprovalsSection from '../components/sections/ApprovalsSection';

export default function Courses() {
  const { openApplyModal, downloadBrochure } = useModal();

  return (
    <main>
      {/* PAGE BANNER */}
      <section className="page-banner-strip" aria-label="Academic Programs Banner">
        <div className="container">
          <div className="page-banner-inner">
            <div className="banner-left-text">
              <div className="banner-breadcrumb-link">
                <Link to="/">Home</Link> &gt; <span>Courses</span>
              </div>
              <h1 className="banner-main-title">
                Our <span className="gold-text">Academic Programs</span>
              </h1>
              <p className="banner-sub-p">
                Choose a career that cares. Build your future in Nursing.
              </p>
            </div>

            <div className="banner-right-visual">
              <img src="/images/hero_students.jpg" alt="Clinical simulation nursing students" />
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

      {/* SECTION 1: DUAL COURSE CARDS */}
      <section className="section-courses-detail" aria-label="Courses Detailed Grid">
        <div className="container">
          <div className="courses-dual-container">
            {/* 1. B.SC. NURSING CARD */}
            <article className="course-detail-card">
              <div className="course-card-top-header">
                <div className="course-avatar-circle pink">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <div className="course-header-titles">
                  <h2 className="course-title-h2">B.Sc. Nursing</h2>
                  <div className="course-sub-type">4 Years Degree Course</div>
                </div>
                <div className="course-header-photo">
                  <img src="/images/student_bsc_portrait.jpg" alt="B.Sc. Nursing Students" />
                </div>
              </div>

              <p className="course-intro-p">
                B.Sc. Nursing is an undergraduate degree program that prepares students to become professional nurses with strong clinical skills, theoretical knowledge and leadership abilities.
              </p>

              <div className="course-specs-4bar">
                <div className="spec-mini-box">
                  <div className="spec-mini-title">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Duration</span>
                  </div>
                  <div className="spec-mini-text">4 Years</div>
                </div>

                <div className="spec-mini-box">
                  <div className="spec-mini-title">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span>Eligibility</span>
                  </div>
                  <div className="spec-mini-text">10+2 PCB (min. 40% SC/ST 45% General)</div>
                </div>

                <div className="spec-mini-box">
                  <div className="spec-mini-title">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                    <span>Course Type</span>
                  </div>
                  <div className="spec-mini-text">Degree Course</div>
                </div>

                <div className="spec-mini-box">
                  <div className="spec-mini-title">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span>Career Opportunities</span>
                  </div>
                  <div className="spec-mini-text">Staff Nurse, Clinical Instructor, Nursing Administrator and more...</div>
                </div>
              </div>

              <div className="highlights-container pink">
                <div className="highlights-header-title">
                  <span>★</span>
                  <span>Key Highlights</span>
                </div>
                <div className="highlights-2cols">
                  <div className="highlight-bullet"><span className="check-dot">✔</span> Comprehensive Nursing Education</div>
                  <div className="highlight-bullet"><span className="check-dot">✔</span> Experienced Faculty</div>
                  <div className="highlight-bullet"><span className="check-dot">✔</span> Clinical &amp; Practical Training</div>
                  <div className="highlight-bullet"><span className="check-dot">✔</span> Community &amp; Hospital Exposure</div>
                  <div className="highlight-bullet"><span className="check-dot">✔</span> Modern Learning Facilities</div>
                  <div className="highlight-bullet"><span className="check-dot">✔</span> Better Career Opportunities</div>
                </div>
              </div>

              <div className="course-btns-row">
                <button
                  className="btn-pill-red"
                  type="button"
                  onClick={() => openApplyModal('B.Sc. Nursing')}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                  <span>Apply for B.Sc. Nursing</span>
                </button>
                <button
                  className="btn-syllabus-outline"
                  type="button"
                  onClick={() => downloadBrochure('B.Sc_Nursing_Syllabus_2026-27.pdf', 'B.Sc. Nursing Official Curriculum & Syllabus')}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download Syllabus</span>
                </button>
              </div>
            </article>

            {/* 2. GNM NURSING CARD */}
            <article className="course-detail-card">
              <div className="course-card-top-header">
                <div className="course-avatar-circle blue">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M5.5 21a8.38 8.38 0 0 1 13 0"></path>
                  </svg>
                </div>
                <div className="course-header-titles">
                  <h2 className="course-title-h2">GNM Nursing</h2>
                  <div className="course-sub-type">3 Years Diploma Course</div>
                </div>
                <div className="course-header-photo">
                  <img src="/images/simulation_training_group.jpg" alt="GNM Nursing Students" />
                </div>
              </div>

              <p className="course-intro-p">
                General Nursing and Midwifery (GNM) is a diploma program that trains students in patient care, community health, clinical procedures and essential nursing skills.
              </p>

              <div className="course-specs-4bar">
                <div className="spec-mini-box">
                  <div className="spec-mini-title">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Duration</span>
                  </div>
                  <div className="spec-mini-text">3 Years</div>
                </div>

                <div className="spec-mini-box">
                  <div className="spec-mini-title">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span>Eligibility</span>
                  </div>
                  <div className="spec-mini-text">10+2 PCB (min. 40% SC/ST 45% General)</div>
                </div>

                <div className="spec-mini-box">
                  <div className="spec-mini-title">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                    <span>Course Type</span>
                  </div>
                  <div className="spec-mini-text">Diploma Course</div>
                </div>

                <div className="spec-mini-box">
                  <div className="spec-mini-title">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span>Career Opportunities</span>
                  </div>
                  <div className="spec-mini-text">Staff Nurse, Community Health Nurse, Nursing Assistant and more...</div>
                </div>
              </div>

              <div className="highlights-container blue">
                <div className="highlights-header-title">
                  <span>★</span>
                  <span>Key Highlights</span>
                </div>
                <div className="highlights-2cols">
                  <div className="highlight-bullet"><span className="check-dot">✔</span> Focus on Community Health</div>
                  <div className="highlight-bullet"><span className="check-dot">✔</span> Build a Meaningful Career</div>
                  <div className="highlight-bullet"><span className="check-dot">✔</span> Practical Clinical Exposure</div>
                  <div className="highlight-bullet"><span className="check-dot">✔</span> Experienced Faculty</div>
                  <div className="highlight-bullet"><span className="check-dot">✔</span> Skill-based Learning</div>
                  <div className="highlight-bullet"><span className="check-dot">✔</span> Hospital &amp; Community Training</div>
                </div>
              </div>

              <div className="course-btns-row">
                <button
                  className="btn-pill-red"
                  type="button"
                  onClick={() => openApplyModal('GNM Nursing')}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                  <span>Apply for GNM Nursing</span>
                </button>
                <button
                  className="btn-syllabus-outline"
                  type="button"
                  onClick={() => downloadBrochure('GNM_Nursing_Syllabus_2026-27.pdf', 'GNM Nursing Official Curriculum & Syllabus')}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download Syllabus</span>
                </button>
              </div>
            </article>
          </div>

          {/* SECTION 2: PRACTICAL TRAINING & CLINICAL EXPOSURE */}
          <h2 className="section-title-styled section-title-spacing">
            Practical Training &amp; <span>Clinical Exposure</span>
          </h2>

          <div className="training-gallery-6">
            <div className="training-gallery-card">
              <div className="gallery-card-img">
                <img src="/images/hero_students.jpg" alt="Nursing Foundation Lab" />
              </div>
              <div className="gallery-card-title">Nursing Foundation Lab</div>
            </div>
            <div className="training-gallery-card">
              <div className="gallery-card-img">
                <img src="/images/maternity_lab.jpg" alt="Maternity Simulation Lab" />
              </div>
              <div className="gallery-card-title">Maternity Simulation Lab</div>
            </div>
            <div className="training-gallery-card">
              <div className="gallery-card-img">
                <img src="/images/nutrition_lab.jpg" alt="Nutrition Lab" />
              </div>
              <div className="gallery-card-title">Nutrition Lab</div>
            </div>
            <div className="training-gallery-card">
              <div className="gallery-card-img">
                <img src="/images/computer_lab.jpg" alt="Computer Lab" />
              </div>
              <div className="gallery-card-title">Computer Lab</div>
            </div>
            <div className="training-gallery-card">
              <div className="gallery-card-img">
                <img src="/images/library_room.jpg" alt="Well Equipped Library" />
              </div>
              <div className="gallery-card-title">Well Equipped Library</div>
            </div>
            <div className="training-gallery-card">
              <div className="gallery-card-img">
                <img src="/images/hospital_postings.jpg" alt="Clinical Training in Hospitals" />
              </div>
              <div className="gallery-card-title">Clinical Training in Hospitals</div>
            </div>
          </div>

          {/* SECTION 3: COMPARATIVE CURRICULUM PORTFOLIO TABLE */}
          <div className="section-title-spacing">
            <h2 className="section-title-styled">
              Program Comparison &amp; <span>Curricular Framework</span>
            </h2>

            <div className="table-responsive-box">
              <table className="institutional-table">
                <thead>
                  <tr>
                    <th>Parameters</th>
                    <th>B.Sc. Nursing</th>
                    <th>GNM (General Nursing &amp; Midwifery)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Program Level</strong></td>
                    <td><span className="badge-degree">Undergraduate Degree (Bachelor)</span></td>
                    <td><span className="badge-diploma">Professional Diploma</span></td>
                  </tr>
                  <tr>
                    <td><strong>Program Duration</strong></td>
                    <td>4 Years (Including 6 Months Rotatory Internship)</td>
                    <td>3 Years (Theory &amp; Clinical Postings)</td>
                  </tr>
                  <tr>
                    <td><strong>Governing Body</strong></td>
                    <td>Affiliated to RGUHS Bangalore • Approved by Govt. of Karnataka, KNC &amp; INC</td>
                    <td>Approved by Karnataka Nursing Council (KNC / KSNC) &amp; Govt. of Karnataka</td>
                  </tr>
                  <tr>
                    <td><strong>Minimum Eligibility</strong></td>
                    <td>10+2 with Physics, Chemistry &amp; Biology (45% General, 40% SC/ST)</td>
                    <td>10+2 with PCB (45% General, 40% SC/ST)</td>
                  </tr>
                  <tr>
                    <td><strong>Clinical Exposure Hours</strong></td>
                    <td>Over 1,400+ Hours in Multi-Specialty Hospitals</td>
                    <td>Over 1,200+ Hours in Community &amp; Hospital Wards</td>
                  </tr>
                  <tr>
                    <td><strong>Global Acceptance</strong></td>
                    <td>Direct eligibility for NCLEX-RN (USA), UK NMC, DHA/MOH</td>
                    <td>Eligible for State Nursing Registration &amp; Hospital Careers</td>
                  </tr>
                  <tr>
                    <td><strong>Higher Study Scope</strong></td>
                    <td>Direct admission to M.Sc. Nursing &amp; Healthcare MBA</td>
                    <td>Eligible for Post Basic B.Sc. Nursing (2 Years)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* STATUTORY APPROVALS & RECOGNITIONS DIRECTORY */}
      <ApprovalsSection />
    </main>
  );
}
