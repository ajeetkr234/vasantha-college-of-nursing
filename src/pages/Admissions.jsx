import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export default function Admissions() {
  const { showToast, downloadBrochure, openTourModal } = useModal();

  const [formData, setFormData] = useState({
    fullName: '',
    guardianName: '',
    course: 'B.Sc. Nursing',
    phone: '',
    email: '',
    gender: 'Female',
    pcbScore: '',
    hostelNeeded: 'Yes',
    cityState: '',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState(0);
  const [selectedCourseTab, setSelectedCourseTab] = useState('all'); // 'all', 'bsc', 'gnm'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const student = formData.fullName || 'Student';
      const chosenCourse = formData.course || 'Nursing Program';
      showToast(
        `Application received! Thank you ${student}. Your provisional application for ${chosenCourse} (2026-27) is registered. Our admission counselor will call you at ${formData.phone || 'your number'} within 2 hours.`
      );
      setFormData({
        fullName: '',
        guardianName: '',
        course: 'B.Sc. Nursing',
        phone: '',
        email: '',
        gender: 'Female',
        pcbScore: '',
        hostelNeeded: 'Yes',
        cityState: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleSelectCourse = (courseName) => {
    setFormData(prev => ({ ...prev, course: courseName }));
    const formEl = document.getElementById('admission-apply-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const faqs = [
    {
      q: "Is NEET mandatory for B.Sc. Nursing admission at Smt. M. C. Vasantha College of Nursing?",
      a: "No, NEET is not mandatory. Admissions for B.Sc. Nursing (2026-27) are conducted strictly on merit basis based on your 10+2 / PUC Physics, Chemistry, and Biology (PCB) marks with English as a compulsory subject, in accordance with Karnataka State Nursing Council (KSNC) & RGUHS guidelines."
    },
    {
      q: "Can Arts or Commerce students apply for the GNM Nursing Diploma course?",
      a: "Yes! As per Indian Nursing Council (INC) & KSNC norms, candidates from any stream (Science, Arts, or Commerce) who have completed 10+2 / PUC with minimum 40% aggregate (35% for SC/ST) are completely eligible to enroll in our 3-year GNM Diploma program."
    },
    {
      q: "Are students from outside Karnataka eligible to apply?",
      a: "Yes, we proudly welcome candidates from all states across India (including Bihar, West Bengal, Assam, Kerala, Maharashtra, Telangana, and Jharkhand). Non-Karnataka candidates only need to provide an official Migration Certificate and standard 10+2 marksheets."
    },
    {
      q: "Where does clinical practical training and hospital posting take place?",
      a: "Our students undergo rigorous clinical hands-on postings at the 100-Bed Bidar District Government Hospital and our affiliated multi-speciality healthcare partners. Rotations cover Emergency, General Medicine, Pediatric ICU, Labour Room, Surgery, and Community Health."
    },
    {
      q: "What hostel and dining facilities are provided for female students?",
      a: "We provide secure, separate on-campus hostels for girls with 24/7 CCTV surveillance, biometric access, warden supervision, clean furnished rooms, and a hygienic dining hall serving fresh, nutritious South and North Indian meals."
    },
    {
      q: "Can college and hostel fees be paid in semester-wise installments?",
      a: "Yes. Shri Shivaling Vidhya Vardhak Education Society provides flexible semester-wise fee installment options to ease financial pressure on families. We also provide all necessary bonafide certificates and fee quotation letters for bank education loans."
    }
  ];

  return (
    <main className="admissions-page-wrapper">
      {/* 1. HERO BANNER */}
      <section className="page-banner-strip admissions-hero-strip" aria-label="Admissions Banner">
        <div className="container">
          <div className="page-banner-inner">
            <div className="banner-left-text">
              <div className="banner-breadcrumb-link">
                <Link to="/">Home</Link> &gt; <span>Admissions 2026–27</span>
              </div>
              <div className="adm-hero-pill-badge">
                <span className="live-pulse-dot"></span>
                <span>Admissions Open for Academic Year 2026–2027</span>
              </div>
              <h1 className="banner-main-title">
                Start Your Nursing Career with <span className="gold-text">Excellence</span>
              </h1>
              <p className="banner-sub-p">
                Direct merit-based seats available for B.Sc. Nursing (4 Years Degree) and GNM Nursing (3 Years Diploma). Affiliated to RGUHS Bangalore &amp; KSNC Recognised.
              </p>
              
              <div className="banner-cta-group">
                <a href="#admission-apply-form" className="btn-banner-primary">
                  <span>Apply Online Now</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </a>
                <button
                  type="button"
                  className="btn-banner-secondary"
                  onClick={() => downloadBrochure('Smt_MC_Vasantha_Admissions_Prospectus_2026-27.pdf', 'Smt. M. C. Vasantha College of Nursing Prospectus 2026-27')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download Prospectus</span>
                </button>
                <a href="tel:9512592211" className="banner-helpline-link">
                  <span className="helpline-circle">📞</span>
                  <span>Helpline: <strong>9512592211</strong></span>
                </a>
              </div>
            </div>

            <div className="banner-right-visual">
              <img src="/images/hero_students.jpg" alt="Smt. M. C. Vasantha College Nursing Students in simulation lab" />
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

      {/* 2. ADMISSIONS TRUST METRICS STRIP */}
      <section className="adm-metrics-strip" aria-label="Key Admission Highlights">
        <div className="container">
          <div className="adm-metrics-grid">
            <div className="adm-metric-card">
              <div className="metric-icon-box gold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <div className="metric-text-box">
                <div className="metric-val">Govt. Recognised</div>
                <div className="metric-lbl">KSNC &amp; RGUHS Affiliated (Govt. of Karnataka)</div>
              </div>
            </div>

            <div className="adm-metric-card">
              <div className="metric-icon-box crimson">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="metric-text-box">
                <div className="metric-val">100-Bed Postings</div>
                <div className="metric-lbl">Clinical rotations at Bidar District Govt Hospital</div>
              </div>
            </div>

            <div className="adm-metric-card">
              <div className="metric-icon-box blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="metric-text-box">
                <div className="metric-val">Direct Merit Seats</div>
                <div className="metric-lbl">Transparent, quota-based admission with zero donation</div>
              </div>
            </div>

            <div className="adm-metric-card">
              <div className="metric-icon-box green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="M7 15h0M2 9.5h20"></path>
                </svg>
              </div>
              <div className="metric-text-box">
                <div className="metric-val">SSP / NSP Scholarships</div>
                <div className="metric-lbl">Full support for SC/ST, OBC &amp; Minority schemes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STICKY SUB-NAVIGATION ANCHOR BAR */}
      <nav className="adm-subnav-strip" aria-label="Admissions Sub-Navigation">
        <div className="container">
          <div className="adm-subnav-inner">
            <span className="subnav-label">Quick Jump:</span>
            <div className="adm-subnav-pills">
              <a href="#programs-eligibility" className="subnav-pill">🎓 Programs &amp; Eligibility</a>
              <a href="#admission-steps" className="subnav-pill">📋 4-Step Process</a>
              <a href="#documents-required" className="subnav-pill">📑 Required Documents</a>
              <a href="#admission-schedule" className="subnav-pill">📅 Important Dates</a>
              <a href="#scholarships-fees" className="subnav-pill">💰 Fees &amp; Scholarships</a>
              <a href="#admission-faqs" className="subnav-pill">❓ Admission FAQs</a>
              <a href="#admission-apply-form" className="subnav-pill highlight">📝 Online Form</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 4. MASTER TWO-COLUMN ADMISSIONS CONTENT */}
      <section className="admissions-master-section">
        <div className="container">
          <div className="admissions-master-layout">
            
            {/* LEFT COLUMN: COMPREHENSIVE INFORMATION */}
            <div className="admissions-left-content">
              
              {/* SECTION A: PROGRAMS & ELIGIBILITY */}
              <section id="programs-eligibility" className="adm-content-card">
                <div className="adm-card-header">
                  <div className="adm-card-icon-wrap red">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h2 className="adm-card-heading">Approved Nursing Programs (2026–27)</h2>
                    <p className="adm-card-subtitle">
                      Recognised by Govt. of Karnataka, approved by Karnataka State Nursing Council (KSNC) &amp; Rajiv Gandhi University of Health Sciences (RGUHS).
                    </p>
                  </div>
                </div>

                {/* Filter Tabs */}
                <div className="adm-course-tabs">
                  <button
                    className={`adm-tab-btn ${selectedCourseTab === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedCourseTab('all')}
                  >
                    All Programs (2)
                  </button>
                  <button
                    className={`adm-tab-btn ${selectedCourseTab === 'bsc' ? 'active' : ''}`}
                    onClick={() => setSelectedCourseTab('bsc')}
                  >
                    B.Sc. Nursing (Degree)
                  </button>
                  <button
                    className={`adm-tab-btn ${selectedCourseTab === 'gnm' ? 'active' : ''}`}
                    onClick={() => setSelectedCourseTab('gnm')}
                  >
                    GNM Nursing (Diploma)
                  </button>
                </div>

                <div className="adm-programs-deck">
                  {/* PROGRAM 1: B.SC NURSING */}
                  {(selectedCourseTab === 'all' || selectedCourseTab === 'bsc') && (
                    <article className="program-showcase-box featured">
                      <div className="program-box-top">
                        <div className="program-tag-badge degree">Undergraduate Degree Course</div>
                        <div className="program-seats-badge">Approved Intake: <strong>60 Seats</strong></div>
                      </div>

                      <div className="program-box-main">
                        <div className="program-info-left">
                          <h3 className="program-title">
                            Bachelor of Science in Nursing <span className="program-abbr">(B.Sc. Nursing)</span>
                          </h3>
                          <div className="program-meta-chips">
                            <span className="meta-chip">⏱ 4 Years Duration</span>
                            <span className="meta-chip">🏛 Affiliated to RGUHS Bangalore</span>
                            <span className="meta-chip">🩺 100% Clinical Postings</span>
                          </div>

                          <div className="eligibility-spec-box">
                            <h4 className="spec-heading">Mandatory Eligibility Criteria:</h4>
                            <ul className="spec-list">
                              <li>
                                <span className="check-bullet">✓</span>
                                <strong>Academic Qualification:</strong> Passed 10+2 / 2nd PUC / 12th standard with Physics, Chemistry &amp; Biology (PCB) and English as compulsory subjects from a recognized board (CBSE, ICSE, Karnataka State Board or equivalent).
                              </li>
                              <li>
                                <span className="check-bullet">✓</span>
                                <strong>Minimum Aggregate Marks:</strong> At least <strong>45% aggregate</strong> marks in PCB subjects (40% aggregate for SC/ST/OBC category candidates).
                              </li>
                              <li>
                                <span className="check-bullet">✓</span>
                                <strong>Age Limit:</strong> Must have completed <strong>17 years</strong> of age on or before 31st December of the admission year (2026).
                              </li>
                              <li>
                                <span className="check-bullet">✓</span>
                                <strong>Medical Fitness:</strong> Must be declared medically fit by a recognized registered medical doctor.
                              </li>
                            </ul>
                          </div>

                          <div className="career-scope-mini">
                            <span className="scope-lbl">Career Pathways:</span>
                            <span className="scope-items">Staff Nurse, ICU Specialist, Nursing Officer, Clinical Instructor, International RN (NCLEX / OET / Prometric for UK, Gulf, Germany &amp; USA).</span>
                          </div>
                        </div>

                        <div className="program-actions-right">
                          <button
                            type="button"
                            className="btn-select-program primary"
                            onClick={() => handleSelectCourse('B.Sc. Nursing')}
                          >
                            <span>Apply for B.Sc. Nursing</span>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </button>
                          <Link to="/courses" className="link-course-detail">
                            View Syllabus &amp; Curriculum →
                          </Link>
                        </div>
                      </div>
                    </article>
                  )}

                  {/* PROGRAM 2: GNM NURSING */}
                  {(selectedCourseTab === 'all' || selectedCourseTab === 'gnm') && (
                    <article className="program-showcase-box">
                      <div className="program-box-top">
                        <div className="program-tag-badge diploma">Diploma Course</div>
                        <div className="program-seats-badge">Approved Intake: <strong>40 Seats</strong></div>
                      </div>

                      <div className="program-box-main">
                        <div className="program-info-left">
                          <h3 className="program-title">
                            General Nursing &amp; Midwifery <span className="program-abbr">(GNM)</span>
                          </h3>
                          <div className="program-meta-chips">
                            <span className="meta-chip">⏱ 3 Years Duration</span>
                            <span className="meta-chip">🏛 Approved by KSNC &amp; Govt. of Karnataka</span>
                            <span className="meta-chip">👥 Open to Science &amp; Arts</span>
                          </div>

                          <div className="eligibility-spec-box">
                            <h4 className="spec-heading">Mandatory Eligibility Criteria:</h4>
                            <ul className="spec-list">
                              <li>
                                <span className="check-bullet">✓</span>
                                <strong>Academic Qualification:</strong> Passed 10+2 / PUC or equivalent examination from a recognized board. <strong>Candidates with either Science, Arts, or Commerce stream are eligible.</strong>
                              </li>
                              <li>
                                <span className="check-bullet">✓</span>
                                <strong>Minimum Aggregate Marks:</strong> Minimum <strong>40% aggregate marks</strong> in 10+2 / PUC (35% for SC/ST candidates). English should be one of the subjects.
                              </li>
                              <li>
                                <span className="check-bullet">✓</span>
                                <strong>Age Limit:</strong> Minimum 17 years and maximum 35 years as on 31st December 2026.
                              </li>
                              <li>
                                <span className="check-bullet">✓</span>
                                <strong>Community &amp; Bedside Nursing:</strong> Ideal for rapid entry into professional hospital nursing and community public health services.
                              </li>
                            </ul>
                          </div>

                          <div className="career-scope-mini">
                            <span className="scope-lbl">Career Pathways:</span>
                            <span className="scope-items">General Hospital Staff Nurse, Maternity Care Nurse, Community Health Nurse, Industrial Health Nurse, Private Clinic Healthcare Manager.</span>
                          </div>
                        </div>

                        <div className="program-actions-right">
                          <button
                            type="button"
                            className="btn-select-program secondary"
                            onClick={() => handleSelectCourse('GNM Nursing')}
                          >
                            <span>Apply for GNM Nursing</span>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </button>
                          <Link to="/courses" className="link-course-detail">
                            View Syllabus &amp; Curriculum →
                          </Link>
                        </div>
                      </div>
                    </article>
                  )}
                </div>

                {/* Seat Matrix Quick Summary Table */}
                <div className="criteria-table-wrap">
                  <h4 className="table-caption-title">At-A-Glance Course Comparison (2026–27)</h4>
                  <table className="modern-criteria-table">
                    <thead>
                      <tr>
                        <th>Program</th>
                        <th>Level</th>
                        <th>Duration</th>
                        <th>Eligible Stream</th>
                        <th>Min. Marks</th>
                        <th>Annual Intake</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>B.Sc. Nursing</strong></td>
                        <td><span className="badge-type degree">Degree</span></td>
                        <td>4 Years</td>
                        <td>10+2 with PCB &amp; English</td>
                        <td>45% (40% SC/ST)</td>
                        <td><strong>60 Seats</strong></td>
                      </tr>
                      <tr>
                        <td><strong>GNM Nursing</strong></td>
                        <td><span className="badge-type diploma">Diploma</span></td>
                        <td>3 Years</td>
                        <td>10+2 Any Stream (Science / Arts)</td>
                        <td>40% (35% SC/ST)</td>
                        <td><strong>40 Seats</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION B: 4-STEP ADMISSION PROCESS */}
              <section id="admission-steps" className="adm-content-card">
                <div className="adm-card-header">
                  <div className="adm-card-icon-wrap blue">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 14 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h2 className="adm-card-heading">Step-by-Step Admission Journey</h2>
                    <p className="adm-card-subtitle">
                      A simple, transparent 4-stage enrollment process designed for stress-free admission without delays or middlemen.
                    </p>
                  </div>
                </div>

                <div className="modern-stepper">
                  {/* Step 1 */}
                  <div className="stepper-item">
                    <div className="stepper-track-col">
                      <div className="stepper-bubble">1</div>
                      <div className="stepper-line"></div>
                    </div>
                    <div className="stepper-body">
                      <div className="stepper-top-bar">
                        <h3 className="stepper-title">Submit Online Application or Campus Walk-In</h3>
                        <span className="stepper-time-badge instant">⚡ 5 Minutes</span>
                      </div>
                      <p className="stepper-desc">
                        Fill out the provisional online admission application on this page with your 10+2 marks, contact details, and program choice. Alternatively, candidates and parents can visit the college campus office in Bidar directly between 9:00 AM and 5:30 PM.
                      </p>
                      <div className="stepper-tip">
                        💡 <strong>Pro-Tip:</strong> Applying online reserves priority counseling queue without any upfront payment.
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="stepper-item">
                    <div className="stepper-track-col">
                      <div className="stepper-bubble">2</div>
                      <div className="stepper-line"></div>
                    </div>
                    <div className="stepper-body">
                      <div className="stepper-top-bar">
                        <h3 className="stepper-title">Eligibility Scrutiny &amp; Document Verification</h3>
                        <span className="stepper-time-badge normal">⏱ Within 24 Hours</span>
                      </div>
                      <p className="stepper-desc">
                        Our dedicated academic admission desk reviews your 10th and 10+2 marks cards, age eligibility, and reservation documents. Our admission officer calls you to confirm eligibility and schedule counseling.
                      </p>
                      <div className="stepper-tip">
                        💡 <strong>Outstation Students:</strong> Scrutiny can be conducted digitally via WhatsApp or email before traveling.
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="stepper-item">
                    <div className="stepper-track-col">
                      <div className="stepper-bubble">3</div>
                      <div className="stepper-line"></div>
                    </div>
                    <div className="stepper-body">
                      <div className="stepper-top-bar">
                        <h3 className="stepper-title">Academic Counseling &amp; Seat Allotment</h3>
                        <span className="stepper-time-badge same-day">🎯 Same Day</span>
                      </div>
                      <p className="stepper-desc">
                        Meet with our senior nursing faculty and principal for personalized career counseling. Review the RGUHS syllabus, clinical hospital postings at Bidar District Hospital, hostel rooms, mess menu, and scholarship options. Receive your Provisional Seat Allotment Letter.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="stepper-item">
                    <div className="stepper-track-col">
                      <div className="stepper-bubble done">4</div>
                    </div>
                    <div className="stepper-body">
                      <div className="stepper-top-bar">
                        <h3 className="stepper-title">Confirmation of Admission, Fee Receipt &amp; Kit</h3>
                        <span className="stepper-time-badge success">✓ Enrollment Complete</span>
                      </div>
                      <p className="stepper-desc">
                        Submit the required original certificates, pay the prescribed initial installment fees, and receive your official Admission Confirmation Order, Fee Receipt, Student ID Badge, and Custom Nursing Uniform sizing slip.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION C: REQUIRED DOCUMENTS CHECKLIST */}
              <section id="documents-required" className="adm-content-card">
                <div className="adm-card-header">
                  <div className="adm-card-icon-wrap gold">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h2 className="adm-card-heading">Documents Required at Enrollment</h2>
                    <p className="adm-card-subtitle">
                      Candidates must submit original certificates along with 3 sets of self-attested photocopies at the time of final admission.
                    </p>
                  </div>
                </div>

                <div className="docs-category-grid">
                  {/* Category 1 */}
                  <div className="doc-category-box">
                    <div className="cat-title-row">
                      <div className="cat-icon-dot academic"></div>
                      <h4 className="cat-title">Academic Records</h4>
                    </div>
                    <ul className="cat-docs-list">
                      <li>
                        <span className="doc-check">✓</span>
                        <div>
                          <strong>10th / SSLC Marks Card</strong>
                          <span className="doc-sub">Proof of Date of Birth and Parent's names</span>
                        </div>
                      </li>
                      <li>
                        <span className="doc-check">✓</span>
                        <div>
                          <strong>10+2 / 12th / PUC Marks Card</strong>
                          <span className="doc-sub">Showing PCB and English subject scores</span>
                        </div>
                      </li>
                      <li>
                        <span className="doc-check">✓</span>
                        <div>
                          <strong>Transfer Certificate (TC)</strong>
                          <span className="doc-sub">Issued by last attended school or junior college</span>
                        </div>
                      </li>
                      <li>
                        <span className="doc-check">✓</span>
                        <div>
                          <strong>Conduct / Study Certificate</strong>
                          <span className="doc-sub">Character certificate from the institution principal</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Category 2 */}
                  <div className="doc-category-box">
                    <div className="cat-title-row">
                      <div className="cat-icon-dot legal"></div>
                      <h4 className="cat-title">Identity &amp; Migration</h4>
                    </div>
                    <ul className="cat-docs-list">
                      <li>
                        <span className="doc-check">✓</span>
                        <div>
                          <strong>Migration Certificate</strong>
                          <span className="doc-sub">Mandatory for non-Karnataka / CBSE / ICSE students</span>
                        </div>
                      </li>
                      <li>
                        <span className="doc-check">✓</span>
                        <div>
                          <strong>Aadhaar Card Copy</strong>
                          <span className="doc-sub">Clear photocopy of student and father/mother</span>
                        </div>
                      </li>
                      <li>
                        <span className="doc-check">✓</span>
                        <div>
                          <strong>8 Passport-Size Photographs</strong>
                          <span className="doc-sub">Recent color photos with white background</span>
                        </div>
                      </li>
                      <li>
                        <span className="doc-check">✓</span>
                        <div>
                          <strong>Medical Fitness Certificate</strong>
                          <span className="doc-sub">Signed by Registered Medical Practitioner with blood group</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Category 3 */}
                  <div className="doc-category-box">
                    <div className="cat-title-row">
                      <div className="cat-icon-dot category"></div>
                      <h4 className="cat-title">Scholarship &amp; Category (If Applicable)</h4>
                    </div>
                    <ul className="cat-docs-list">
                      <li>
                        <span className="doc-check">✓</span>
                        <div>
                          <strong>Caste &amp; Income Certificate</strong>
                          <span className="doc-sub">Issued by Tahsildar for Karnataka SC / ST / Cat-1 / OBC</span>
                        </div>
                      </li>
                      <li>
                        <span className="doc-check">✓</span>
                        <div>
                          <strong>Domicile / Resident Certificate</strong>
                          <span className="doc-sub">For state quota fee concessions &amp; SSP portal</span>
                        </div>
                      </li>
                      <li>
                        <span className="doc-check">✓</span>
                        <div>
                          <strong>Student Bank Passbook Copy</strong>
                          <span className="doc-sub">Aadhaar-seeded bank account for scholarship transfer</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Important Document Notice Box */}
                <div className="docs-alert-box">
                  <div className="alert-bulb-icon">📌</div>
                  <div className="alert-content">
                    <h5>Awaiting Final 12th / PUC Marksheet or Original TC?</h5>
                    <p>
                      You can secure <strong>Provisional Admission</strong> with downloaded internet result copy or provisional mark statement. Original certificates can be submitted within 30 days after the commencement of academic classes.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn-download-docs-checklist"
                    onClick={() => downloadBrochure('Smt_MC_Vasantha_Admission_Documents_Checklist.pdf', 'Official Document Verification Checklist 2026-27')}
                  >
                    <span>Download Checklist PDF</span>
                  </button>
                </div>
              </section>

              {/* SECTION D: ADMISSION SCHEDULE & KEY DATES */}
              <section id="admission-schedule" className="adm-content-card">
                <div className="adm-card-header">
                  <div className="adm-card-icon-wrap crimson">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <h2 className="adm-card-heading">Admission Schedule &amp; Key Dates (2026–27)</h2>
                    <p className="adm-card-subtitle">
                      Keep track of crucial counseling dates, merit lists, and class commencement milestones.
                    </p>
                  </div>
                </div>

                <div className="dates-timeline-grid">
                  <div className="date-tile active">
                    <div className="date-status-pill open">Active Now</div>
                    <div className="date-main-num">Round 1</div>
                    <div className="date-title">Direct Merit Applications</div>
                    <div className="date-range">April – May 2026</div>
                    <div className="date-desc">Early bird merit registration for B.Sc. &amp; GNM Nursing with seat reservations.</div>
                  </div>

                  <div className="date-tile">
                    <div className="date-status-pill upcoming">Upcoming</div>
                    <div className="date-main-num">Round 2</div>
                    <div className="date-title">Counseling &amp; Seat Allotment</div>
                    <div className="date-range">June – July 2026</div>
                    <div className="date-desc">Document verification batches &amp; provisional admission letters issuance.</div>
                  </div>

                  <div className="date-tile">
                    <div className="date-status-pill upcoming">Upcoming</div>
                    <div className="date-main-num">Hostel</div>
                    <div className="date-title">Hostel Check-in &amp; Room Allotment</div>
                    <div className="date-range">Late July 2026</div>
                    <div className="date-desc">Girls hostel room allocation, mess registration &amp; campus orientation.</div>
                  </div>

                  <div className="date-tile">
                    <div className="date-status-pill finale">Milestone</div>
                    <div className="date-main-num">Classes</div>
                    <div className="date-title">Academic Session Commencement</div>
                    <div className="date-range">August 2026</div>
                    <div className="date-desc">White Coat Ceremony, Lamp Lighting &amp; First Semester lectures begin.</div>
                  </div>
                </div>
              </section>

              {/* SECTION E: SCHOLARSHIPS & FINANCIAL ASSISTANCE */}
              <section id="scholarships-fees" className="adm-content-card">
                <div className="adm-card-header">
                  <div className="adm-card-icon-wrap green">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="M7 15h0M2 9.5h20"></path>
                    </svg>
                  </div>
                  <div>
                    <h2 className="adm-card-heading">Fees, Scholarships &amp; Education Loan Assistance</h2>
                    <p className="adm-card-subtitle">
                      Shri Shivaling Vidhya Vardhak Education Society ensures quality healthcare education remains affordable and accessible through transparent fees and scholarship guidance.
                    </p>
                  </div>
                </div>

                <div className="scholarships-grid-4">
                  <div className="scholar-card">
                    <div className="scholar-badge">State Scheme</div>
                    <h4 className="scholar-name">Karnataka SSP Post-Matric</h4>
                    <p className="scholar-body">
                      Fee reimbursement and maintenance allowances for Karnataka domicile students belonging to SC, ST, Category-1, OBC, and Minorities through the State Scholarship Portal.
                    </p>
                    <div className="scholar-nodal">✓ Dedicated College Nodal Officer Assistance</div>
                  </div>

                  <div className="scholar-card">
                    <div className="scholar-badge national">Central Scheme</div>
                    <h4 className="scholar-name">National Scholarship Portal (NSP)</h4>
                    <p className="scholar-body">
                      Central government post-matric scholarships for meritorious minority students (Muslim, Christian, Jain, Buddhist, Sikh) and economically weaker sections across all Indian states.
                    </p>
                    <div className="scholar-nodal">✓ Outstation Student Eligibility</div>
                  </div>

                  <div className="scholar-card">
                    <div className="scholar-badge trust">Society Support</div>
                    <h4 className="scholar-name">SSVV Society Merit Concessions</h4>
                    <p className="scholar-body">
                      Direct tuition fee concessions granted by the management of Shri Shivaling Vidhya Vardhak Education Society for academic achievers scoring &gt;80% in 10+2 PCB and deserving underprivileged students.
                    </p>
                    <div className="scholar-nodal">✓ Evaluated at Campus Counseling</div>
                  </div>

                  <div className="scholar-card">
                    <div className="scholar-badge loan">Bank Aid</div>
                    <h4 className="scholar-name">100% Bank Education Loan Support</h4>
                    <p className="scholar-body">
                      We provide all official documentation including Bonafide Certificate, Complete Course Fee Estimation Structure, and University Affiliation Copies for nationalized &amp; private banks (SBI, Canara, PNB, etc.).
                    </p>
                    <div className="scholar-nodal">✓ Instant Documentation Desk</div>
                  </div>
                </div>
              </section>

              {/* SECTION F: FREQUENTLY ASKED QUESTIONS */}
              <section id="admission-faqs" className="adm-content-card">
                <div className="adm-card-header">
                  <div className="adm-card-icon-wrap purple">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <div>
                    <h2 className="adm-card-heading">Frequently Asked Questions (Admissions 2026–27)</h2>
                    <p className="adm-card-subtitle">
                      Clear answers to top questions asked by prospective nursing students and their parents.
                    </p>
                  </div>
                </div>

                <div className="faq-accordion-container">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className={`faq-accordion-item ${activeFaq === idx ? 'expanded' : ''}`}
                    >
                      <button
                        type="button"
                        className="faq-question-btn"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={activeFaq === idx}
                      >
                        <span className="faq-q-number">Q{idx + 1}.</span>
                        <span className="faq-q-text">{faq.q}</span>
                        <span className="faq-toggle-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </span>
                      </button>
                      <div className="faq-answer-panel">
                        <div className="faq-answer-inner">
                          <p>{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="faq-bottom-cta">
                  <span>Have more specific admission questions?</span>
                  <a href="tel:9512592211" className="btn-call-counselor">
                    <span>Call Admission Counselor (9512592211)</span>
                  </a>
                </div>
              </section>

            </div>

            {/* RIGHT COLUMN: STICKY APPLICATION FORM & HELPDESK */}
            <aside className="admissions-sidebar-col">
              
              {/* CARD 1: ONLINE APPLICATION FORM */}
              <div id="admission-apply-form" className="application-form-card sticky-sidebar-card">
                <div className="form-card-badge-row">
                  <span className="form-secure-pill">🔒 Official Admission Portal</span>
                  <span className="form-seats-pill">Limited 2026-27 Seats</span>
                </div>

                <h3 className="form-head-title">Online Admission Form</h3>
                <p className="form-head-sub">
                  Submit your preliminary details to secure provisional seat allotment. Our chief admission counselor will contact you within 2 hours.
                </p>

                <form className="admission-ajax-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="full_name">
                      Candidate Full Name <span className="req-star">*</span>
                    </label>
                    <input
                      id="full_name"
                      type="text"
                      name="full_name"
                      className="form-input"
                      placeholder="e.g. Anjali Deshmukh"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="guardian_name">
                      Father's / Guardian's Name <span className="req-star">*</span>
                    </label>
                    <input
                      id="guardian_name"
                      type="text"
                      name="guardian_name"
                      className="form-input"
                      placeholder="e.g. Ramesh Deshmukh"
                      required
                      value={formData.guardianName}
                      onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        Mobile Number (WhatsApp) <span className="req-star">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        className="form-input"
                        placeholder="e.g. 9512592211"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="gender">
                        Gender <span className="req-star">*</span>
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        className="form-select"
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      >
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email Address (Optional)
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="course">
                      Select Nursing Program <span className="req-star">*</span>
                    </label>
                    <select
                      id="course"
                      name="course"
                      className="form-select highlight-select"
                      required
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    >
                      <option value="B.Sc. Nursing">B.Sc. Nursing (4 Years Degree Course - RGUHS)</option>
                      <option value="GNM Nursing">GNM Nursing (3 Years Diploma Course - KSNC)</option>
                    </select>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="pcb_score">
                        12th / PUC PCB Marks (%) <span className="req-star">*</span>
                      </label>
                      <input
                        id="pcb_score"
                        type="text"
                        name="pcb_score"
                        className="form-input"
                        placeholder="e.g. 72% PCB / Result Awaited"
                        required
                        value={formData.pcbScore}
                        onChange={(e) => setFormData({ ...formData, pcbScore: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="hostel_needed">
                        Hostel Required?
                      </label>
                      <select
                        id="hostel_needed"
                        name="hostel_needed"
                        className="form-select"
                        value={formData.hostelNeeded}
                        onChange={(e) => setFormData({ ...formData, hostelNeeded: e.target.value })}
                      >
                        <option value="Yes">Yes, Girls Hostel with Mess</option>
                        <option value="No">No, Day Scholar</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="city_state">
                      Permanent City &amp; State <span className="req-star">*</span>
                    </label>
                    <input
                      id="city_state"
                      type="text"
                      name="city_state"
                      className="form-input"
                      placeholder="e.g. Bidar, Karnataka"
                      required
                      value={formData.cityState}
                      onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Any Query / Special Request (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="2"
                      className="form-textarea"
                      placeholder="Ask about fee installments, bus transport, or campus visit..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-submit-app"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Registering Application...</span>
                    ) : (
                      <>
                        <span>Submit Application for 2026–27</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </>
                    )}
                  </button>

                  <div className="form-trust-guarantee">
                    <div className="guarantee-item">
                      <span className="guarantee-icon">🛡</span>
                      <span>100% Free Consultation &amp; Direct Institute Allotment</span>
                    </div>
                    <div className="guarantee-item">
                      <span className="guarantee-icon">⏱</span>
                      <span>Counselor Call Back Guaranteed within 2 Hours</span>
                    </div>
                  </div>
                </form>
              </div>

              {/* CARD 2: ADMISSION HELPDESK & CALL SUPPORT */}
              <div className="helpdesk-contact-card">
                <div className="helpdesk-header">
                  <div className="helpdesk-icon-bubble">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="helpdesk-title">Need Immediate Help?</h4>
                    <p className="helpdesk-sub">Speak directly with our Chief Admission Officers</p>
                  </div>
                </div>

                <div className="helpdesk-numbers-list">
                  <a href="tel:9512592211" className="helpdesk-call-btn">
                    <div className="btn-call-left">
                      <span className="tel-label">Admission Desk 1</span>
                      <strong className="tel-val">+91 9512592211</strong>
                    </div>
                    <span className="tel-action-tag">Call Now</span>
                  </a>

                  <a href="tel:8154968596" className="helpdesk-call-btn">
                    <div className="btn-call-left">
                      <span className="tel-label">Admission Desk 2</span>
                      <strong className="tel-val">+91 8154968596</strong>
                    </div>
                    <span className="tel-action-tag">Call Now</span>
                  </a>

                  <a
                    href="https://wa.me/919512592211?text=Hello%20Smt.%20M.%20C.%20Vasantha%20College%20of%20Nursing%2C%20I%20am%20interested%20in%20Admissions%20for%202026-27.%20Please%20guide%20me."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="helpdesk-whatsapp-btn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Instant WhatsApp Chat with Counselor</span>
                  </a>
                </div>

                <div className="campus-visit-box">
                  <div className="visit-label">Campus Counseling Office:</div>
                  <div className="visit-address">
                    Shahpur Gate Gunnalli Road, Bidar - 585 403, Karnataka
                  </div>
                  <div className="visit-timing">
                    🕒 Open Monday – Saturday: 9:00 AM to 5:30 PM
                  </div>
                  <button
                    type="button"
                    className="btn-campus-tour-trigger"
                    onClick={openTourModal}
                  >
                    <span>🎥 Watch Campus Virtual Tour</span>
                  </button>
                </div>
              </div>

              {/* CARD 3: DOWNLOAD BROCHURE WIDGET */}
              <div className="prospectus-download-widget">
                <div className="widget-cover-icon">📘</div>
                <div className="widget-info">
                  <h4>Information Brochure 2026–27</h4>
                  <p>Includes syllabus breakdown, clinical hospital postings, fee structure, and hostel guidelines.</p>
                  <button
                    type="button"
                    className="btn-widget-download"
                    onClick={() => downloadBrochure('Smt_MC_Vasantha_College_of_Nursing_Brochure_2026-27.pdf', 'College Information Brochure 2026-27')}
                  >
                    <span>Download Official PDF (Free)</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </button>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* 5. CAMPUS LIFE & CLINICAL FACILITIES TEASER */}
      <section className="adm-facilities-showcase" aria-label="Campus Infrastructure">
        <div className="container">
          <div className="facilities-showcase-head">
            <span className="tag-red-caps">World-Class Infrastructure</span>
            <h2 className="section-title-styled">Experience Healthcare Learning in Bidar</h2>
            <p className="section-sub-styled">
              Our campus provides complete infrastructure designed to transform passionate students into globally qualified nursing professionals.
            </p>
          </div>

          <div className="adm-facilities-4grid">
            <div className="adm-fac-tile">
              <div className="fac-tile-img-box">
                <img src="/images/hero_students.jpg" alt="Clinical Simulation Lab" />
                <span className="fac-tile-badge">Advanced Simulation</span>
              </div>
              <div className="fac-tile-desc">
                <h4>Nursing Simulation Labs</h4>
                <p>Adult &amp; pediatric manikins with simulated ICU monitors for hands-on emergency training.</p>
              </div>
            </div>

            <div className="adm-fac-tile">
              <div className="fac-tile-img-box">
                <img src="/images/hospital_postings.jpg" alt="100-Bed Hospital Postings" />
                <span className="fac-tile-badge">Real-World Exposure</span>
              </div>
              <div className="fac-tile-desc">
                <h4>100-Bed Hospital Rotations</h4>
                <p>Daily clinical rotations at Bidar District Govt Hospital &amp; multi-speciality centers.</p>
              </div>
            </div>

            <div className="adm-fac-tile">
              <div className="fac-tile-img-box">
                <img src="/images/hostel.jpg" alt="Girls Hostel" />
                <span className="fac-tile-badge">Safe &amp; Furnished</span>
              </div>
              <div className="fac-tile-desc">
                <h4>Girls Hostel &amp; Mess</h4>
                <p>Secure on-campus residence with 24/7 security, Wi-Fi, and nutritious dining hall.</p>
              </div>
            </div>

            <div className="adm-fac-tile">
              <div className="fac-tile-img-box">
                <img src="/images/college_bus.jpg" alt="College Bus Transport" />
                <span className="fac-tile-badge">Campus Mobility</span>
              </div>
              <div className="fac-tile-desc">
                <h4>Dedicated Fleet Transport</h4>
                <p>College buses connecting campus directly to clinical hospitals and key city points.</p>
              </div>
            </div>
          </div>

          <div className="facilities-showcase-cta">
            <Link to="/clinical-training" className="btn-explore-facilities">
              <span>Explore All Campus Labs &amp; Clinical Facilities →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
