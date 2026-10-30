import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { facilitiesData } from '../data/facilitiesData';
import CampusTour from '../components/sections/CampusTour';

const teachingHospitals = [
  {
    id: 'vasantha-hospital',
    name: '50-Bedded Hospital Attached with Vasantha College',
    type: 'In-Campus Hospital & Advanced Diagnostics',
    beds: '50 Beds Attached',
    badgeTheme: 'crimson',
    location: 'Vasantha Campus, Bidar',
    leadSpec: 'Medical Laboratory, CT Scan Center & Cancer Diagnostic Center',
    rotations: ['Medical Laboratory', 'CT Scan & Imaging', 'Cancer Diagnostic Unit', 'Inpatient Nursing Care', 'Day Care & Casualty'],
    features: [
      '50-Bedded hospital directly attached with Vasantha College campus for immediate bedside training',
      'Advanced Medical Laboratory for automated biochemistry, pathology, and hematology investigations',
      'High-speed CT Scan Center providing advanced computed tomography and imaging training',
      'Specialized Cancer Diagnostic Center with oncology screening and early diagnostic infrastructure'
    ],
    accreditation: 'Attached Institutional Hospital • Vasantha Group',
    tag: 'Attached Hospital'
  },
  {
    id: 'brims',
    name: 'District Teaching Hospital (BRIMS)',
    type: 'Autonomous Govt. Medical College',
    beds: '750+ Beds',
    badgeTheme: 'crimson',
    location: 'Bidar, Karnataka',
    leadSpec: 'Tertiary Inpatient Care & 24/7 Trauma Emergency',
    rotations: ['General Medicine', 'General Surgery', 'ICU / CCU', 'Emergency Casualty', 'Operation Theatre', 'Orthopedics'],
    features: [
      'Comprehensive inpatient ward postings under senior clinical faculty',
      'Round-the-clock emergency casualty and acute trauma triage',
      'High-flow oxygen, critical care and bedside monitor training'
    ],
    accreditation: 'Govt. of Karnataka • Medical College Hospital',
    tag: 'BRIMS Postings'
  },
  {
    id: 'mch',
    name: 'Mother & Child Health Hospital',
    type: 'Super-Specialty Maternal Care',
    beds: '250+ Beds',
    badgeTheme: 'amber',
    location: 'Bidar District',
    leadSpec: 'Obstetrics, Active Labor & Neonatal ICU (NICU)',
    rotations: ['Obstetrics & Gynaecology', 'Labor Delivery Suites', 'Neonatal ICU (NICU)', 'Pediatric Wards', 'Postnatal Care'],
    features: [
      'Active labor suite management, normal deliveries and postpartum care',
      'Neonatal warmers, high-risk infant resuscitation and phototherapy',
      'Child immunization, developmental milestone screening and pediatric care'
    ],
    accreditation: 'District Health Authority Specialty Postings',
    tag: 'MCH Postings'
  },
  {
    id: 'uhtc',
    name: 'Urban Health Training Centre (UHTC)',
    type: 'Urban Primary Healthcare',
    beds: 'Primary Healthcare',
    badgeTheme: 'blue',
    location: 'Shahpur Gate, Bidar',
    leadSpec: 'Maternal Nutrition & Urban Community Outpatient',
    rotations: ['Maternal Immunization', 'Infant Nutrition', 'Family Welfare Counseling', 'Epidemiological Surveys', 'Geriatric Care'],
    features: [
      'Preventive community nursing and outpatient clinic triaging',
      'National immunization mission tracking and maternal nutrition counseling',
      'Home-visit nursing assessments for urban underserved settlements'
    ],
    accreditation: 'Directorate of Health & Family Welfare',
    tag: 'UHTC Postings'
  },
  {
    id: 'rhtc',
    name: 'Rural Health Training Centre (RHTC)',
    type: 'Rural Field Practice Station',
    beds: 'Community Outreach',
    badgeTheme: 'emerald',
    location: 'Gunnalli Village, Bidar',
    leadSpec: 'Village Health Surveys & Rural Field Drills',
    rotations: ['Rural Community Postings', 'Village Health Surveys', 'School Health Drills', 'Sanitation Education', 'Mobile Camps'],
    features: [
      'Immersive village health camps and epidemiological community surveys',
      'Rural school health examinations and adolescent wellness awareness',
      'Family health folder maintenance and environmental sanitation drives'
    ],
    accreditation: 'Community Medicine & Nursing Outreach Wing',
    tag: 'RHTC Postings'
  }
];

const roadmapYears = [
  {
    year: 1,
    title: 'Foundations of Nursing & Lab Simulation',
    hours: '200+ Lab Hours',
    badge: 'Year 1 • Academic & Lab Foundations',
    venue: 'On-Campus High-Fidelity Simulation Suites',
    img: '/images/hero_students.jpg',
    tag: 'Simulation Drills',
    caption: 'Adult Manikin Simulation & Bed Making Drills',
    desc: 'Students master fundamental aseptic technique, vital signs monitoring, patient hygiene, and biological sciences in our advanced simulation labs before entering active hospital patient wards.',
    competencies: [
      {
        title: 'Aseptic Sterile Technique & Hygiene',
        text: 'Surgical hand hygiene, PPE donning, sterile wound dressing, and hospital bed making protocols.'
      },
      {
        title: 'Vital Signs & Physical Assessment',
        text: 'Precise monitoring of blood pressure, pulse, respiration, SpO2, and baseline adult triage assessment.'
      },
      {
        title: 'Injections & Fundamental Drills',
        text: 'Intramuscular, subcutaneous, and intradermal injection administration on simulation manikins with basic CPR drills.'
      }
    ],
    skills: ['Adult Vital Signs', 'Injections & IV Setup', 'Sterile Technique', 'Basic CPR', 'Patient Safety']
  },
  {
    year: 2,
    title: 'Medical-Surgical Nursing & Bedside Rotations',
    hours: '450+ Hospital Hours',
    badge: 'Year 2 • Hospital Inpatient Rotations',
    venue: '50-Bedded Hospital Attached with Vasantha College',
    img: '/images/hospital_postings.jpg',
    tag: 'Attached Hospital',
    caption: 'Direct Bedside Patient Encounters & Clinical Rounds',
    desc: 'Students transition into regular bedside patient rotations at our 50-bedded hospital attached with Vasantha College, with direct learning in the Medical Laboratory, CT Scan Center, and Cancer Diagnostic Center.',
    competencies: [
      {
        title: 'Pre & Post-Operative Surgical Nursing',
        text: 'Surgical wound asepsis, surgical drain maintenance, catheterization, and post-anesthesia recovery observation.'
      },
      {
        title: 'Pharmacology & Medication Safety',
        text: 'IV cannulation, multi-channel fluid titration, five rights of medication administration, and dosage calculations.'
      },
      {
        title: 'Pathology & Diagnostic Integration',
        text: 'Specimen collection, blood glucose monitoring, catheterization, and 12-lead ECG recording.'
      }
    ],
    skills: ['IV Cannulation', 'Pre/Post-Op Nursing', 'Surgical Dressing', 'Drug Dosage', 'Ward Rounds']
  },
  {
    year: 3,
    title: 'Maternal, Neonatal & Community Health Outreach',
    hours: '600+ Clinical Hours',
    badge: 'Year 3 • Specialty & Community Rotations',
    venue: '250+ Bed MCH Hospital, UHTC & RHTC Stations',
    img: '/images/maternity_lab.jpg',
    tag: 'Specialty Care',
    caption: 'Childbirth Simulation Lab & Neonatal ICU Postings',
    desc: 'Focused rotations in Obstetrics, Gynecology, Neonatal Intensive Care (NICU), pediatric wards, and immersive outreach postings at Urban & Rural Health Training Centres.',
    competencies: [
      {
        title: 'Obstetric & Labor Room Deliveries',
        text: 'Antenatal abdominal palpation, active labor stage management, normal childbirth assistance, and newborn APGAR scoring.'
      },
      {
        title: 'NICU & Pediatric Ward Nursing',
        text: 'Neonatal warmers, phototherapy management, pediatric immunization schedule, and child growth trajectory charts.'
      },
      {
        title: 'Community Outreach & Village Surveys',
        text: 'Conducting family health surveys, epidemiological tracking, and school health camps in rural Bidar.'
      }
    ],
    skills: ['Normal Labor Care', 'Neonatal Warmers', 'Pediatric Inpatient', 'Immunization', 'Community Surveys']
  },
  {
    year: 4,
    title: 'Critical Care, 6-Month Internship & Placements',
    hours: '850+ Internship Hours',
    badge: 'Year 4 • Autonomous Clinical Internship',
    venue: 'ICU / CCU, Trauma Casualty & Campus Placements',
    img: '/images/alumni_anjali.jpg',
    tag: 'Career Launch',
    caption: 'Autonomous Ward Shift Management & Critical Care Triage',
    desc: 'The culminating year with intensive ICU and Emergency rotations, followed by a mandatory 6-month continuous clinical internship with shift leadership and hospital campus placements.',
    competencies: [
      {
        title: 'Critical Care & Emergency Trauma Triage',
        text: 'Mechanical ventilator monitoring, cardiac telemetry, central venous line care, and emergency code blue protocols.'
      },
      {
        title: '6-Month Autonomous Hospital Internship',
        text: 'Independent ward shift management, doctor rounds coordination, nursing documentation, and bedside handover.'
      },
      {
        title: 'NCLEX-RN & Campus Placement Preparation',
        text: 'Interview grooming with premier hospital chains, clinical aptitude development, and state licensing exam readiness.'
      }
    ],
    skills: ['Ventilator Care', 'ICU / CCU Triage', 'Emergency Casualty', 'Shift Leadership', 'Licensing Ready']
  }
];

export default function ClinicalTraining() {
  const { openFacilityModal, openApplyModal } = useModal();
  const [filterCategory, setFilterCategory] = useState('all');

  const [showAll, setShowAll] = useState(false);
  const [activeRoadmapYear, setActiveRoadmapYear] = useState(1);
  const roadmapTabRefs = useRef([]);

  const handleRoadmapKeyDown = (e, index) => {
    let newIndex = index;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      newIndex = (index + 1) % roadmapYears.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      newIndex = (index - 1 + roadmapYears.length) % roadmapYears.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      newIndex = roadmapYears.length - 1;
    }

    if (newIndex !== index) {
      setActiveRoadmapYear(roadmapYears[newIndex].year);
      roadmapTabRefs.current[newIndex]?.focus();
    }
  };

  const currentRoadmapData = roadmapYears.find(y => y.year === activeRoadmapYear) || roadmapYears[0];

  const handleCategoryChange = (category) => {
    setFilterCategory(category);
    setShowAll(false);
  };

  const filteredFacilities = facilitiesData.filter(fac => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'labs') return fac.category === 'clinical_learning';
    if (filterCategory === 'academic') return fac.category === 'academic_resources';
    if (filterCategory === 'postings') return fac.category === 'hospital_training';
    if (filterCategory === 'campus') return fac.category === 'student_facilities';
    return true;
  });

  const visibleFacilities = showAll ? filteredFacilities : filteredFacilities.slice(0, 8);

  return (
    <main>
      {/* PAGE BANNER */}
      <section className="page-banner-strip" aria-label="Clinical Training Banner">
        <div className="container">
          <div className="page-banner-inner">
            <div className="banner-left-text">
              <div className="banner-breadcrumb-link">
                <Link to="/">Home</Link> &gt; <span>Clinical Training &amp; Facilities</span>
              </div>
              <h1 className="banner-main-title">
                Clinical Training &amp; <span className="gold-text">Facilities</span>
              </h1>
              <p className="banner-sub-p">
                Hands-on learning. Real-world exposure. Modern infrastructure.
              </p>
            </div>

            <div className="banner-right-visual">
              <img
                src="/images/hospital_postings.jpg"
                alt="Bedside Clinical Hospital Rotations and Inpatient Postings"
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

      {/* SECTION 1: TOP 6 TRAINING PILL CARDS */}
      <section className="section-facilities-page" aria-label="Campus Facilities">
        <div className="container">
          <div className="facilities-quick-6">
            <div className="quick-pill-card">
              <div className="quick-pill-icon blue">
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
                <div className="quick-pill-title">Practical Clinical Training</div>
                <div className="quick-pill-sub">Hands-on hospital &amp; community care.</div>
              </div>
            </div>

            <div className="quick-pill-card">
              <div className="quick-pill-icon pink">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 2v7.31L4 19a2 2 0 0 0 1.66 3h12.68A2 2 0 0 0 20 19l-6-9.69V2"></path>
                </svg>
              </div>
              <div>
                <div className="quick-pill-title">Modern Laboratories</div>
                <div className="quick-pill-sub">Advanced models &amp; simulation labs.</div>
              </div>
            </div>

            <div className="quick-pill-card">
              <div className="quick-pill-icon purple">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <div>
                <div className="quick-pill-title">Library Facilities</div>
                <div className="quick-pill-sub">Nursing journals &amp; reference books.</div>
              </div>
            </div>

            <div className="quick-pill-card">
              <div className="quick-pill-icon teal">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div>
                <div className="quick-pill-title">Computer Lab</div>
                <div className="quick-pill-sub">Digital learning &amp; research access.</div>
              </div>
            </div>

            <div className="quick-pill-card">
              <div className="quick-pill-icon amber">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 4v16"></path>
                  <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
                  <path d="M2 17h20"></path>
                  <path d="M6 8v9"></path>
                </svg>
              </div>
              <div>
                <div className="quick-pill-title">CT Scan &amp; Cancer Center</div>
                <div className="quick-pill-sub">Advanced diagnostic infrastructure.</div>
              </div>
            </div>

            <div className="quick-pill-card">
              <div className="quick-pill-icon orange">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <div>
                <div className="quick-pill-title">Transportation</div>
                <div className="quick-pill-sub">Bus transit for daily student commutes.</div>
              </div>
            </div>
          </div>

          {/* SECTION 2: 12-GRID WITH INTERACTIVE CATEGORY TABS */}
          <div className="facilities-section-header">
            <div className="facilities-header-info">
              <span className="fac-section-tag">Campus Infrastructure</span>
              <h2 className="section-title-styled">
                Our <span>Facilities</span>
              </h2>
              <p className="facilities-header-sub">
                Explore our accredited simulation laboratories, specialized learning suites, and hospital rotation infrastructure.
              </p>
            </div>
            <button
              className="btn-tour-enquiry-styled"
              type="button"
              onClick={() => openApplyModal('B.Sc. Nursing')}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"></polygon>
              </svg>
              <span>Campus Tour Enquiry</span>
              <span className="tour-enquiry-arrow">→</span>
            </button>
          </div>

          {/* Category Filter Tabs with Smooth Horizontal Scroll & Count Badges */}
          <div className="facility-filter-tabs-wrapper">
            <div className="facility-filter-tabs" role="tablist" aria-label="Facility Categories">
              <button
                className={`fac-filter-btn ${filterCategory === 'all' ? 'active' : ''}`}
                type="button"
                role="tab"
                aria-selected={filterCategory === 'all'}
                onClick={() => handleCategoryChange('all')}
              >
                <span>All Facilities</span>
                <span className="fac-count-badge">12</span>
              </button>
              <button
                className={`fac-filter-btn ${filterCategory === 'labs' ? 'active' : ''}`}
                type="button"
                role="tab"
                aria-selected={filterCategory === 'labs'}
                onClick={() => handleCategoryChange('labs')}
              >
                <span>Simulation &amp; Labs</span>
                <span className="fac-count-badge">4</span>
              </button>
              <button
                className={`fac-filter-btn ${filterCategory === 'academic' ? 'active' : ''}`}
                type="button"
                role="tab"
                aria-selected={filterCategory === 'academic'}
                onClick={() => handleCategoryChange('academic')}
              >
                <span>Academic &amp; Digital</span>
                <span className="fac-count-badge">2</span>
              </button>
              <button
                className={`fac-filter-btn ${filterCategory === 'postings' ? 'active' : ''}`}
                type="button"
                role="tab"
                aria-selected={filterCategory === 'postings'}
                onClick={() => handleCategoryChange('postings')}
              >
                <span>Hospital &amp; Community</span>
                <span className="fac-count-badge">2</span>
              </button>
              <button
                className={`fac-filter-btn ${filterCategory === 'campus' ? 'active' : ''}`}
                type="button"
                role="tab"
                aria-selected={filterCategory === 'campus'}
                onClick={() => handleCategoryChange('campus')}
              >
                <span>Campus &amp; Amenities</span>
                <span className="fac-count-badge">4</span>
              </button>
            </div>
          </div>

          {/* Facilities Grid (Shows 2 rows by default, expandable via View More) */}
          <div className="facilities-grid-12" id="facilitiesContainer">
            {visibleFacilities.map(fac => (
              <article key={fac.id} className="fac-detail-card">
                <div className="fac-card-thumb">
                  <img src={fac.img || '/images/hero_students.jpg'} alt={fac.title} />
                  <span className="fac-category-tag">{fac.categoryLabel}</span>
                </div>
                <div className="fac-card-body">
                  <h3 className="fac-card-title">{fac.title}</h3>
                  <p className="fac-card-desc">{fac.desc.substring(0, 95)}...</p>
                  <div className="fac-specs-chips">
                    <span>{fac.beds}</span>
                    <span>{fac.specs}</span>
                  </div>
                  <button
                    className="btn-fac-details"
                    type="button"
                    onClick={() => openFacilityModal(fac)}
                  >
                    View Lab Specs →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* View More / View Less Toggle Button */}
          {filteredFacilities.length > 8 && (
            <div className="facilities-view-more-container">
              <button
                type="button"
                className="btn-view-more-facilities"
                onClick={() => setShowAll(prev => !prev)}
                aria-expanded={showAll}
              >
                <span>{showAll ? 'Show Less Facilities' : `View More Facilities (${filteredFacilities.length - 8} more)`}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`view-more-icon ${showAll ? 'rotated' : ''}`}
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          )}



          {/* SECTION 4: TEACHING HOSPITALS & CLINICAL AFFILIATIONS (COMPLETE REDESIGN) */}
          <section className="section-affiliations-redesign" aria-label="Affiliated Teaching Hospitals">
            <div className="section-title-spacing">
              <div className="tag-red-caps">CLINICAL NETWORK &amp; TEACHING HOSPITALS</div>
              <h2 className="section-title-styled" style={{ marginBottom: '8px' }}>
                Key Affiliated Teaching Hospitals &amp; <span>Bed Capacity</span>
              </h2>
              <p className="facilities-header-sub">
                50-Bedded Hospital attached with Vasantha College featuring a dedicated Medical Laboratory, CT Scan Center, and Cancer Diagnostic Center, alongside 1,000+ total active clinical beds across affiliated government medical colleges and super-specialty hospitals in Bidar.
              </p>
            </div>

            {/* Network Metric Highlights Strip */}
            <div className="hosp-network-metrics-strip">
              <div className="hosp-metric-pill">
                <div className="hosp-metric-icon red">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <path d="M3 21h18"></path>
                    <path d="M5 21V7l8-4v18"></path>
                    <path d="M19 21V11l-6-4"></path>
                    <path d="M9 9h1"></path>
                    <path d="M9 13h1"></path>
                    <path d="M9 17h1"></path>
                  </svg>
                </div>
                <div>
                  <div className="hosp-metric-val">50-Bed Attached Hospital</div>
                  <div className="hosp-metric-sub">Medical Lab, CT Scan &amp; Cancer Center</div>
                </div>
              </div>

              <div className="hosp-metric-pill">
                <div className="hosp-metric-icon red">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <path d="M3 21h18"></path>
                    <path d="M5 21V7l8-4v18"></path>
                    <path d="M19 21V11l-6-4"></path>
                    <path d="M9 9h1"></path>
                    <path d="M9 13h1"></path>
                    <path d="M9 17h1"></path>
                  </svg>
                </div>
                <div>
                  <div className="hosp-metric-val">1,000+ Teaching Beds</div>
                  <div className="hosp-metric-sub">Super-Specialty &amp; Govt. Network</div>
                </div>
              </div>

              <div className="hosp-metric-pill">
                <div className="hosp-metric-icon blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div>
                  <div className="hosp-metric-val">24/7 Ward Shifts</div>
                  <div className="hosp-metric-sub">ICU, OT &amp; Emergency Trauma</div>
                </div>
              </div>

              <div className="hosp-metric-pill">
                <div className="hosp-metric-icon purple">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <div className="hosp-metric-val">1:1 Clinical Guidance</div>
                  <div className="hosp-metric-sub">Senior Doctors &amp; Preceptors</div>
                </div>
              </div>

              <div className="hosp-metric-pill">
                <div className="hosp-metric-icon orange">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <div>
                  <div className="hosp-metric-val">College Bus Transit</div>
                  <div className="hosp-metric-sub">Escorted Postings &amp; Rural Camps</div>
                </div>
              </div>
            </div>

            {/* Redesigned 4 Hospital Cards Grid */}
            <div className="hosp-cards-grid-modern">
              {teachingHospitals.map(hosp => (
                <article key={hosp.id} className="hosp-modern-card">
                  {/* Card Header */}
                  <div className="hosp-card-top-row">
                    <span className={`hosp-type-tag ${hosp.badgeTheme}`}>{hosp.type}</span>
                    <span className="hosp-beds-pill">{hosp.beds}</span>
                  </div>

                  <h3 className="hosp-modern-title">{hosp.name}</h3>

                  <div className="hosp-modern-loc">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{hosp.location}</span>
                  </div>

                  <div className="hosp-lead-specialty-box">
                    <span className="lead-spec-label">Primary Rotation:</span>
                    <span className="lead-spec-val">{hosp.leadSpec}</span>
                  </div>

                  {/* Clinical Rotations Tags */}
                  <div className="hosp-rotations-container">
                    <span className="hosp-rot-title">Clinical Postings &amp; Wards:</span>
                    <div className="hosp-rot-chips-list">
                      {hosp.rotations.map((rot, rIdx) => (
                        <span key={rIdx} className="hosp-rot-chip">{rot}</span>
                      ))}
                    </div>
                  </div>

                  {/* Feature Highlights */}
                  <ul className="hosp-features-bullet-list">
                    {hosp.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="hosp-bullet-check" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Bottom Accreditation */}
                  <div className="hosp-card-footer-strip">
                    <span className="hosp-accred-text">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      {hosp.accreditation}
                    </span>
                    <span className="hosp-verified-chip">Verified Posting</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* SECTION 5: 4-YEAR CLINICAL ROTATION TIMELINE (COMPLETE REDESIGN) */}
          <section className="section-roadmap-redesign" aria-label="4-Year Clinical Roadmap">
            <div className="roadmap-redesign-box">
              <div className="roadmap-header-col">
                <div className="tag-red-caps">CLINICAL COMPETENCY PROGRESSION</div>
                <h2 className="roadmap-box-title">
                  4-Year Clinical Bedside <span>Rotation Roadmap</span>
                </h2>
                <p className="roadmap-box-sub">
                  A structured clinical progression taking nursing students from foundational simulation labs to active hospital inpatient shifts, specialized maternal-child care, and autonomous critical care internship.
                </p>
              </div>

              {/* Interactive Stepper Navigation Bar */}
              <div
                className="roadmap-stepper-bar"
                role="tablist"
                aria-label="Clinical Progression Milestones"
              >
                {roadmapYears.map((ry, index) => {
                  const isActive = activeRoadmapYear === ry.year;
                  return (
                    <button
                      key={ry.year}
                      ref={el => (roadmapTabRefs.current[index] = el)}
                      type="button"
                      role="tab"
                      id={`roadmap-tab-${ry.year}`}
                      aria-selected={isActive}
                      aria-controls={`roadmap-panel-${ry.year}`}
                      tabIndex={isActive ? 0 : -1}
                      className={`roadmap-step-btn ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveRoadmapYear(ry.year)}
                      onKeyDown={(e) => handleRoadmapKeyDown(e, index)}
                    >
                      <div className="step-num-bubble">
                        <span>{ry.year}</span>
                      </div>
                      <div className="step-label-group">
                        <span className="step-milestone-title">Year {ry.year}</span>
                        <span className="step-hours-badge">{ry.hours}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Milestone Showcase Panel */}
              <div
                id={`roadmap-panel-${currentRoadmapData.year}`}
                role="tabpanel"
                aria-labelledby={`roadmap-tab-${currentRoadmapData.year}`}
                className="roadmap-active-showcase"
                tabIndex={0}
              >
                {/* Left Column: Details & Competencies */}
                <div className="showcase-content-col">
                  <div className="showcase-badge-row">
                    <span className="showcase-year-tag">{currentRoadmapData.badge}</span>
                    <span className="showcase-venue-tag">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M3 21h18"></path>
                        <path d="M5 21V7l8-4v18"></path>
                        <path d="M19 21V11l-6-4"></path>
                      </svg>
                      {currentRoadmapData.venue}
                    </span>
                  </div>

                  <h3 className="showcase-main-title">{currentRoadmapData.title}</h3>
                  <p className="showcase-narrative-p">{currentRoadmapData.desc}</p>

                  {/* 3 Structured Competency Cards */}
                  <div className="showcase-competencies-stack">
                    {currentRoadmapData.competencies.map((comp, cIdx) => (
                      <div key={cIdx} className="competency-card-item">
                        <div className="competency-icon-bullet">
                          <span>{cIdx + 1}</span>
                        </div>
                        <div className="competency-text-col">
                          <h4 className="competency-item-title">{comp.title}</h4>
                          <p className="competency-item-text">{comp.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Skills Chips */}
                  <div className="showcase-skills-wrap">
                    <span className="skills-wrap-label">Practical Competencies Mastered:</span>
                    <div className="skills-chips-row">
                      {currentRoadmapData.skills.map((sk, sIdx) => (
                        <span key={sIdx} className="skill-chip-pill">{sk}</span>
                      ))}
                    </div>
                  </div>

                  {/* Stepper Navigation Buttons */}
                  <div className="showcase-action-row">
                    <div className="showcase-stepper-controls">
                      <button
                        type="button"
                        className="btn-step-prev"
                        disabled={activeRoadmapYear === 1}
                        onClick={() => setActiveRoadmapYear(prev => Math.max(1, prev - 1))}
                        aria-label="Previous Clinical Year"
                      >
                        ← Year {Math.max(1, activeRoadmapYear - 1)}
                      </button>
                      <button
                        type="button"
                        className="btn-step-next"
                        disabled={activeRoadmapYear === 4}
                        onClick={() => setActiveRoadmapYear(prev => Math.min(4, prev + 1))}
                        aria-label="Next Clinical Year"
                      >
                        Year {Math.min(4, activeRoadmapYear + 1)} →
                      </button>
                    </div>

                    <button
                      type="button"
                      className="btn-card-apply-red"
                      onClick={() => openApplyModal('B.Sc. Nursing')}
                      aria-label="Apply for 2026-27 Nursing Batch"
                    >
                      <span>Join 2026–27 Batch</span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Right Column: Authentic Image Showcase */}
                <div className="showcase-visual-col">
                  <div className="showcase-visual-frame">
                    <img
                      src={currentRoadmapData.img}
                      alt={currentRoadmapData.title}
                      className="showcase-image"
                      loading="lazy"
                    />
                    <div className="showcase-visual-overlay">
                      <span className="showcase-photo-tag">{currentRoadmapData.tag}</span>
                      <div className="showcase-photo-caption">{currentRoadmapData.caption}</div>
                    </div>
                  </div>

                  {/* Quick Stat Pill below photo */}
                  <div className="showcase-visual-stat-card">
                    <div className="stat-card-hours-badge">
                      <span className="stat-num">{currentRoadmapData.hours.split(' ')[0]}</span>
                      <span className="stat-sub">Hands-On Practice</span>
                    </div>
                    <div className="stat-card-desc">
                      Clinical ratio strictly follows 1:1 mentorship guidelines with preceptors and medical faculty.
                    </div>
                  </div>
                </div>
              </div>

              {/* Cumulative Hours Progression Meter */}
              <div className="roadmap-cumulative-strip">
                <div className="cumulative-label-col">
                  <span className="cumulative-tag">TOTAL CLINICAL EXPERIENCE</span>
                  <div className="cumulative-hours-title">2,100+ Cumulative Bedside &amp; Lab Hours</div>
                  <div className="cumulative-sub">Exceeds Indian Nursing Council (INC) &amp; KSNC Clinical Mandates</div>
                </div>

                <div className="cumulative-stepper-stages">
                  <div className="stage-pill">
                    <span className="stage-yr">Yr 1</span>
                    <span className="stage-hr">200h</span>
                  </div>
                  <span className="stage-arrow">+</span>
                  <div className="stage-pill">
                    <span className="stage-yr">Yr 2</span>
                    <span className="stage-hr">450h</span>
                  </div>
                  <span className="stage-arrow">+</span>
                  <div className="stage-pill">
                    <span className="stage-yr">Yr 3</span>
                    <span className="stage-hr">600h</span>
                  </div>
                  <span className="stage-arrow">+</span>
                  <div className="stage-pill">
                    <span className="stage-yr">Yr 4</span>
                    <span className="stage-hr">850h</span>
                  </div>
                  <span className="stage-arrow">=</span>
                  <div className="stage-pill total">
                    <span className="stage-yr">Total</span>
                    <span className="stage-hr">2,100h+</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* SECTION 6: INTERACTIVE VIRTUAL CAMPUS & CLINICAL TOUR STUDIO */}
      <CampusTour />
    </main>
  );
}
