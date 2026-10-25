import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

export default function ClinicalRoadmap() {
  const [activeYear, setActiveYear] = useState(1);
  const { openApplyModal } = useModal();
  const tabRefs = useRef([]);

  const roadmapData = [
    {
      year: 1,
      tabTitle: 'Year 1: Foundations & Labs',
      badge: 'Year 1 • Academic & Clinical Foundation',
      title: 'Fundamental Nursing Skills & Biological Sciences',
      desc: 'Students establish rigorous foundational nursing skills in dedicated simulation laboratories before entering active hospital patient wards.',
      points: [
        {
          head: 'Nursing Foundation Lab:',
          text: 'Mastering adult vital signs, bed making, injections, IV setups, and sterile technique on advanced adult manikins.'
        },
        {
          head: 'Anatomy & Physiology Museum:',
          text: 'Studying articulated human skeletons, 500+ organ specimens, and body system charts.'
        },
        {
          head: 'Nutrition & Dietetics Lab:',
          text: 'Formulating therapeutic dietary plans, diabetic balances, and infant nutritional charts.'
        }
      ],
      img: '/images/hero_students.jpg',
      alt: 'Year 1 Nursing Foundation Practical Simulation',
      tag: 'Campus Simulation',
      caption: 'High-Fidelity Demonstration Manikins & Bed Making Drills',
      ctaText: 'Join Year 1 Batch (2026-27)',
      ctaAction: () => openApplyModal('B.Sc. Nursing')
    },
    {
      year: 2,
      tabTitle: 'Year 2: Med-Surg & Hospital Wards',
      badge: 'Year 2 • Clinical Rotations Milestone',
      title: 'Medical-Surgical Nursing & Bedside Hospital Training',
      desc: 'Students transition into regular bedside rotations at our 750+ bed affiliated BRIMS District Government Teaching Hospital in Bidar.',
      points: [
        {
          head: 'BRIMS Teaching Hospital Rotations:',
          text: 'Direct bedside patient nursing across General Medicine, Surgery, and Orthopedic wards.'
        },
        {
          head: 'Pharmacology & Pathology:',
          text: 'Applying medication safety protocols, IV cannulation, dosage calculations, and diagnostic interpretation.'
        },
        {
          head: 'Pre & Post-Operative Nursing:',
          text: 'Surgical wound asepsis, catheterization, and post-anesthesia recovery monitoring.'
        }
      ],
      img: '/images/hospital_postings.jpg',
      alt: 'Year 2 Hospital Ward Rotations at BRIMS',
      tag: '750+ Bedded Teaching Hospital',
      caption: 'Direct Bedside Patient Encounters & Clinical Rounds',
      ctaText: 'View Clinical Training Details',
      ctaLink: '/clinical-training'
    },
    {
      year: 3,
      tabTitle: 'Year 3: Maternity & Pediatrics',
      badge: 'Year 3 • Specialized Care Milestone',
      title: 'Maternal, Neonatal & Community Health Postings',
      desc: 'Focused rotations in Obstetrics & Gynecology, Neonatal Intensive Care, and field outreach at Urban & Rural Health Training Centres.',
      points: [
        {
          head: 'Maternity Simulation & Hospital OBG:',
          text: 'Assisting normal deliveries on childbirth simulators, conducting antenatal assessments, and labor care.'
        },
        {
          head: 'NICU & Pediatric Ward:',
          text: 'Neonatal warmers, phototherapy management, pediatric immunizations, and child growth monitoring.'
        },
        {
          head: 'Community Health Centers (UHTC & RHTC):',
          text: 'Rural health screening camps, village health surveys, and family welfare education.'
        }
      ],
      img: '/images/maternity_lab.jpg',
      alt: 'Year 3 Maternity Simulation Training',
      tag: 'Specialized Simulation',
      caption: 'Advanced Childbirth Simulators & Neonatal Warmers',
      ctaText: 'Explore Maternity & Community Labs',
      ctaLink: '/clinical-training'
    },
    {
      year: 4,
      tabTitle: 'Year 4: ICU & Career Placements',
      badge: 'Year 4 • Internship & Licensure Launch',
      title: 'Critical Care, 6-Month Internship & Career Placements',
      desc: 'The culminating year with intensive ICU rotations, a mandatory 6-month clinical internship, and campus placement drives.',
      points: [
        {
          head: 'Critical Care & Emergency Units:',
          text: 'Mechanical ventilator management, trauma triage, cardiac monitors, and emergency casualty care.'
        },
        {
          head: '6-Month Mandatory Hospital Internship:',
          text: 'Independent shift assignments, ward administrative leadership, and healthcare informatics.'
        },
        {
          head: 'Campus Recruitment & Licensing Mentorship:',
          text: 'Interview grooming with premier hospital chains along with NCLEX-RN and global exam support.'
        }
      ],
      img: '/images/alumni_anjali.jpg',
      alt: 'Year 4 Graduate Nurse Ready for Clinical Practice',
      tag: 'Career Launch',
      caption: 'Graduating as a Competent, Licensed Global Nurse Leader',
      ctaText: 'View Hospital Partners & Placements',
      ctaLink: '/placements'
    }
  ];

  const handleKeyDown = (e, index) => {
    let newIndex = index;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      newIndex = (index + 1) % roadmapData.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      newIndex = (index - 1 + roadmapData.length) % roadmapData.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      newIndex = roadmapData.length - 1;
    }

    if (newIndex !== index) {
      setActiveYear(roadmapData[newIndex].year);
      tabRefs.current[newIndex]?.focus();
    }
  };

  const currentData = roadmapData.find(item => item.year === activeYear) || roadmapData[0];

  return (
    <section className="roadmap-section" id="roadmap" aria-label="4-Year Nursing Clinical Roadmap">
      <div className="container">
        <div className="roadmap-header-box">
          <div className="tag-red-caps">STEP-BY-STEP PROGRESSION</div>
          <h2 className="section-title-styled" style={{ marginBottom: '8px' }}>
            The 4-Year <span>Clinical Roadmap</span>
          </h2>
          <p className="roadmap-subtitle">
            Structured yearly milestones taking students from laboratory simulation to bedside hospital mastery and professional career launch.
          </p>
        </div>

        {/* Accessible Tab List */}
        <div
          className="roadmap-tabs-bar"
          role="tablist"
          aria-label="4-Year Clinical Roadmap Milestones"
        >
          {roadmapData.map((item, idx) => {
            const isActive = activeYear === item.year;
            return (
              <button
                key={item.year}
                ref={el => (tabRefs.current[idx] = el)}
                id={`tab-year-${item.year}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-year-${item.year}`}
                tabIndex={isActive ? 0 : -1}
                className={`roadmap-tab-btn ${isActive ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveYear(item.year)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
              >
                <span className="roadmap-tab-num" aria-hidden="true">{item.year}</span>
                <span className="roadmap-tab-label">{item.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <div
          id={`panel-year-${currentData.year}`}
          role="tabpanel"
          aria-labelledby={`tab-year-${currentData.year}`}
          className="roadmap-cards-container"
          tabIndex={0}
        >
          <div className="roadmap-year-card active">
            <div className="roadmap-card-content">
              <div>
                <span className="roadmap-year-badge">{currentData.badge}</span>
                <h3 className="roadmap-year-title">{currentData.title}</h3>
                <p className="roadmap-year-desc">{currentData.desc}</p>

                <ul className="roadmap-points-list">
                  {currentData.points.map((pt, pIdx) => (
                    <li key={pIdx} className="roadmap-point-item">
                      <span className="roadmap-point-check" aria-hidden="true">✓</span>
                      <span>
                        <strong>{pt.head}</strong> {pt.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="roadmap-card-action">
                {currentData.ctaLink ? (
                  <Link to={currentData.ctaLink} className="section-explore-badge">
                    <span>{currentData.ctaText} →</span>
                  </Link>
                ) : (
                  <button
                    className="btn-card-apply-red"
                    type="button"
                    onClick={currentData.ctaAction}
                    aria-label={currentData.ctaText}
                  >
                    <span>{currentData.ctaText}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                )}
              </div>
            </div>

            <div className="roadmap-card-visual">
              <img
                src={currentData.img}
                alt={currentData.alt}
                loading="lazy"
                className="roadmap-visual-img"
              />
              <div className="roadmap-visual-overlay">
                <span className="roadmap-visual-tag">{currentData.tag}</span>
                <div className="roadmap-visual-caption">{currentData.caption}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
