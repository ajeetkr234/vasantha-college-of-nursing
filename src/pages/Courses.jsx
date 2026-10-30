import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { coursesData, facultiesData } from '../data/coursesData';
import ApprovalsSection from '../components/sections/ApprovalsSection';

export default function Courses() {
  const { openApplyModal, downloadBrochure } = useModal();
  const [activeFaculty, setActiveFaculty] = useState('all');
  const [expandedCurriculum, setExpandedCurriculum] = useState({});

  const toggleCurriculum = (courseId) => {
    setExpandedCurriculum(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  const filteredCourses = activeFaculty === 'all'
    ? coursesData
    : coursesData.filter(c => c.category === activeFaculty);

  const getAvatarColor = (category) => {
    switch (category) {
      case 'pharmacy': return 'emerald';
      case 'physiotherapy': return 'teal';
      case 'education': return 'amber';
      default: return 'pink';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'pharmacy':
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path>
            <path d="m8.5 8.5 7 7"></path>
          </svg>
        );
      case 'physiotherapy':
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        );
      case 'education':
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
        );
      default:
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        );
    }
  };

  return (
    <main>
      {/* PAGE BANNER */}
      <section className="page-banner-strip" aria-label="Academic Programs Banner">
        <div className="container">
          <div className="page-banner-inner">
            <div className="banner-left-text">
              <div className="banner-breadcrumb-link">
                <Link to="/">Home</Link> &gt; <span>Courses &amp; Disciplines</span>
              </div>
              <h1 className="banner-main-title">
                Academic <span className="gold-text">Disciplines &amp; Courses</span>
              </h1>
              <p className="banner-sub-p">
                Multidisciplinary healthcare and educational excellence at VASANTHA GROUP OF EDUCATION: Nursing, Pharmacy, Physiotherapy &amp; Teacher Training.
              </p>
            </div>

            <div className="banner-right-visual">
              <img
                src="/images/simulation_training_group.jpg"
                alt="Karnataka Nursing Faculty and Students in clinical skills training under Karnataka Nursing Council"
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

      {/* SECTION 1: FACULTY FILTER BAR */}
      <section className="section-courses-detail" id="courses-catalog" aria-label="Courses Detailed Grid">
        <div className="container">
          
          {/* Section Heading & Filter Intro */}
          <div className="courses-filter-section-header">
            <div className="tag-red-caps">ACADEMIC DISCIPLINES • 7 APPROVED COURSES</div>
            <h2 className="section-title-styled" style={{ margin: '4px 0 8px', textAlign: 'center' }}>
              Explore Programs by <span>Discipline</span>
            </h2>
            <p className="courses-filter-subtitle">
              Select a faculty to filter degree &amp; diploma programs, seat intake, and statutory approvals.
            </p>
          </div>

          {/* Faculty Filter Tabs */}
          <div className="courses-filter-tabs-wrapper">
            {facultiesData.map(f => (
              <button
                key={f.id}
                type="button"
                className={`faculty-tab-filter-btn ${activeFaculty === f.id ? 'active' : ''}`}
                onClick={() => setActiveFaculty(f.id)}
              >
                {f.name}
              </button>
            ))}
          </div>

          {/* Clean Two-Column Grid: 2 cols on desktop/laptop, 1 col on tablet/mobile */}
          <div className="courses-two-col-grid">
            {filteredCourses.map((course) => {
              const isCurriculumOpen = !!expandedCurriculum[course.id];
              const shortSeats = course.seats.replace(' per Academic Year', '').trim();
              const shortAffiliation = course.affiliation.includes('RGUHS')
                ? 'RGUHS Bangalore'
                : course.affiliation.includes('PCI')
                ? 'PCI Approved'
                : course.affiliation.includes('Gulbarga')
                ? 'Gulbarga Univ'
                : 'KSNC Approved';

              return (
                <article key={course.id} className="course-card-horizontal" id={course.id}>
                  {/* 1. Course Image: approx 38% width on desktop, 100% on mobile */}
                  <div className="course-card-media">
                    <img
                      src={course.image}
                      alt={`${course.title} at VASANTHA GROUP OF EDUCATION`}
                      className="course-card-img"
                      loading="lazy"
                    />
                    <div className={`course-card-badge-pill badge-${course.category}`}>
                      {course.badge}
                    </div>
                  </div>

                  {/* 2-7. Course Information: approx 62% width */}
                  <div className="course-card-body">
                    {/* 2. Course Title */}
                    <h3 className="course-card-title">{course.title}</h3>

                    {/* 3. Course Duration */}
                    <div className="course-card-duration">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>{course.duration}</span>
                    </div>

                    {/* 4. Short Description */}
                    <p className="course-card-summary">
                      {course.overview}
                    </p>

                    {/* Micro Specs Strip */}
                    <div className="course-specs-mini-strip">
                      <span className="spec-mini-chip"><strong>Intake:</strong> {shortSeats}</span>
                      <span className="spec-mini-chip"><strong>Affiliation:</strong> {shortAffiliation}</span>
                    </div>

                    {/* 5. Eligibility Summary */}
                    <div className="course-card-eligibility">
                      <span className="eligibility-lead">Eligibility:</span>
                      <span>{course.eligibility}</span>
                    </div>

                    {/* 6. Affiliation & Approval */}
                    <div className="course-card-affiliation">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#be123c" strokeWidth="2.5" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                      <span>{course.affiliation}</span>
                    </div>

                    {/* Expandable Syllabus & Full Scope Accordion */}
                    {isCurriculumOpen && (
                      <div className="compact-details-drawer" style={{ marginBottom: '14px' }}>
                        <div className="drawer-subheading">All Career Pathways:</div>
                        <div className="drawer-careers-grid">
                          {course.careers.map((career, idx) => (
                            <div key={idx} className="drawer-career-item">
                              <span className="chk">✔</span> {career}
                            </div>
                          ))}
                        </div>

                        <div className="drawer-subheading" style={{ marginTop: '10px' }}>Year-wise Curriculum:</div>
                        <div className="drawer-curriculum-list">
                          {course.curriculum.map((cYear, yIdx) => (
                            <div key={yIdx} className="drawer-year-box">
                              <div className="drawer-year-title">{cYear.year}</div>
                              <ul className="drawer-subjects-list">
                                {cYear.subjects.map((sub, sIdx) => (
                                  <li key={sIdx}>{sub}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 7. Aligned Actions at Bottom */}
                    <div className="course-card-actions">
                      <button
                        className="btn-course-apply"
                        type="button"
                        onClick={() => openApplyModal(course.title)}
                        aria-label={`Apply Now for ${course.title}`}
                      >
                        <span>Apply Now</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </button>

                      <button
                        type="button"
                        className="btn-course-details"
                        onClick={() => toggleCurriculum(course.id)}
                        aria-expanded={isCurriculumOpen}
                        aria-label={`Toggle full curriculum and scope for ${course.title}`}
                      >
                        <span>{isCurriculumOpen ? 'Hide Scope ▲' : 'View Scope ▼'}</span>
                      </button>

                      <button
                        type="button"
                        className="btn-course-details"
                        onClick={() => downloadBrochure(`${course.id}_Syllabus_2026-27.pdf`, `${course.title} Official Curriculum & Syllabus`)}
                        title="Download Syllabus PDF"
                        aria-label={`Download official syllabus PDF for ${course.title}`}
                        style={{ padding: '0 12px' }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        <span>Syllabus</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* SECTION 2: PRACTICAL TRAINING & CLINICAL EXPOSURE */}
          <h2 className="section-title-styled section-title-spacing">
            Practical Labs &amp; <span>Clinical Simulation Arenas</span>
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
                <img src="/images/course_pharmacy_lab.jpg" alt="Pharmaceutical Chemistry & Formulation Lab" />
              </div>
              <div className="gallery-card-title">Pharmacy Formulation &amp; Analysis Lab</div>
            </div>
            <div className="training-gallery-card">
              <div className="gallery-card-img">
                <img src="/images/course_physiotherapy_rehab.jpg" alt="Physiotherapy Exercise & Rehabilitation Lab" />
              </div>
              <div className="gallery-card-title">Physiotherapy &amp; Rehab Arena</div>
            </div>
            <div className="training-gallery-card">
              <div className="gallery-card-img">
                <img src="/images/course_bed_teaching.jpg" alt="B.Ed Interactive Micro-Teaching Studio" />
              </div>
              <div className="gallery-card-title">B.Ed Pedagogy &amp; Micro-Teaching Studio</div>
            </div>
            <div className="training-gallery-card">
              <div className="gallery-card-img">
                <img src="/images/library_room.jpg" alt="Central Digital Library" />
              </div>
              <div className="gallery-card-title">Central Digital Library</div>
            </div>
            <div className="training-gallery-card">
              <div className="gallery-card-img">
                <img src="/images/hospital_postings.jpg" alt="50-Bedded Attached Hospital Postings" />
              </div>
              <div className="gallery-card-title">50-Bed Attached Hospital Postings</div>
            </div>
          </div>

          {/* SECTION 3: COMPARATIVE CURRICULUM PORTFOLIO TABLE */}
          <div className="section-title-spacing">
            <h2 className="section-title-styled">
              Academic Disciplines <span>Comparative Matrix</span>
            </h2>

            <div className="table-responsive-box">
              <table className="institutional-table">
                <thead>
                  <tr>
                    <th>Program</th>
                    <th>Discipline</th>
                    <th>Duration</th>
                    <th>Governing Council / Affiliation</th>
                    <th>Eligibility</th>
                    <th>Career Pathway</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>B.Sc. Nursing</strong></td>
                    <td><span className="badge-degree">Nursing</span></td>
                    <td>4 Years</td>
                    <td>RGUHS Bangalore • KSNC &amp; INC Approved</td>
                    <td>10+2 PCB (45% Gen / 40% SC/ST)</td>
                    <td>Staff Nurse, ICU Specialist, NCLEX Global RN</td>
                  </tr>
                  <tr>
                    <td><strong>GNM Nursing</strong></td>
                    <td><span className="badge-diploma">Nursing</span></td>
                    <td>3 Years</td>
                    <td>KSNC &amp; Govt. of Karnataka</td>
                    <td>10+2 Any Stream (40% Gen / 35% SC/ST)</td>
                    <td>Staff Nurse, Maternity Nurse, Post B.Sc. Bridge</td>
                  </tr>
                  <tr>
                    <td><strong>Post B.Sc. Nursing</strong></td>
                    <td><span className="badge-degree">Nursing</span></td>
                    <td>2 Years</td>
                    <td>RGUHS Bangalore • KSNC &amp; INC Approved</td>
                    <td>GNM Diploma + Registered Nurse (RN/RM)</td>
                    <td>Nursing Supervisor, Clinical Lecturer, M.Sc. Scope</td>
                  </tr>
                  <tr>
                    <td><strong>D.Pharm</strong></td>
                    <td><span className="badge-diploma">Pharmacy</span></td>
                    <td>2 Years</td>
                    <td>Pharmacy Council of India (PCI) &amp; BEA</td>
                    <td>10+2 PCB / PCM</td>
                    <td>Registered Pharmacist (R.Ph.), Retail Chemist</td>
                  </tr>
                  <tr>
                    <td><strong>B.Pharm</strong></td>
                    <td><span className="badge-degree">Pharmacy</span></td>
                    <td>4 Years (8 Sem)</td>
                    <td>Pharmacy Council of India (PCI) • RGUHS</td>
                    <td>10+2 PCB / PCM (45% Gen / 40% SC/ST)</td>
                    <td>R&amp;D Scientist, QA/QC, Drug Inspector, Pharma MNCs</td>
                  </tr>
                  <tr>
                    <td><strong>BPT</strong></td>
                    <td><span className="badge-degree">Physiotherapy</span></td>
                    <td>4.5 Years (4Y + 6M Int)</td>
                    <td>RGUHS Bangalore • Govt. of Karnataka</td>
                    <td>10+2 PCB (45% Gen / 40% SC/ST)</td>
                    <td>Consultant Physiotherapist, Sports Rehab, Clinic Owner</td>
                  </tr>
                  <tr>
                    <td><strong>B.Ed</strong></td>
                    <td><span className="badge-degree">Education</span></td>
                    <td>2 Years (4 Sem)</td>
                    <td>NCTE New Delhi • Gulbarga University</td>
                    <td>Graduation / Post Graduation (50% Gen / 45% SC/ST)</td>
                    <td>Secondary School Teacher, CTET/TET Govt. Teacher</td>
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
