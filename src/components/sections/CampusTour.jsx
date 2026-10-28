import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';

const tourSpots = [
  {
    id: 'campus',
    title: 'Main Academic Complex & Front Elevation',
    shortTitle: 'Academic Complex',
    category: 'Naubad Campus',
    badge: '3-Storey Facility',
    image: '/images/college_building.png',
    caption: 'Official front elevation of VASANTHA GROUP OF EDUCATION on Naubad-bhalki Road, Naubad Karnataka 585402.',
    description: 'Purpose-built 3-storey health sciences educational complex featuring spacious ventilated lecture halls, digital demonstration theatres, administrative chambers, and serene green campus environs.',
    metrics: [
      { label: 'Infrastructure', val: '3-Storey' },
      { label: 'Affiliation', val: 'RGUHS Bangalore' },
      { label: 'Security', val: '24/7 Monitored' }
    ]
  },
  {
    id: 'foundations',
    title: 'Nursing Foundation & Clinical Skill Demonstration Lab',
    shortTitle: 'Foundations & Skill Lab',
    category: 'Simulation Facility',
    badge: 'Hands-on Clinical Demo',
    image: '/images/hero_students.jpg',
    caption: 'Hands-on clinical skills training with advanced full-body manikins and simulated patient care units.',
    description: 'High-fidelity skill demonstration arena replicating authentic hospital wards with multi-bed units, advanced adult & paediatric CPR manikins, vitals monitoring, and bedside patient care apparatus.',
    metrics: [
      { label: 'Manikins', val: 'Full-Body Sim' },
      { label: 'Ward Setup', val: 'Multi-Bed Beds' },
      { label: 'Supervision', val: '1:1 Faculty Demo' }
    ]
  },
  {
    id: 'hospital',
    title: '50-Bedded Hospital Attached with Vasantha College',
    shortTitle: '50-Bed Attached Hospital',
    category: 'In-Campus Hospital',
    badge: '50 Attached Beds',
    image: '/images/hospital_postings.jpg',
    caption: 'Intensive bedside clinical postings at 50-bedded hospital attached directly with Vasantha College.',
    description: 'Comprehensive practical postings with direct inpatient care, vital signs monitoring, and diagnostic exposure across general medicine, surgery, and emergency casualty under senior clinical faculty.',
    metrics: [
      { label: 'Bed Capacity', val: '50 Beds Attached' },
      { label: 'Postings', val: 'Daily Bedside' },
      { label: 'Campus', val: 'Directly Attached' }
    ]
  },
  {
    id: 'maternity',
    title: 'Maternity, OBG & Child Health Simulation Lab',
    shortTitle: 'Maternity & Child Lab',
    category: 'Speciality Simulation',
    badge: 'OBG & Paediatrics',
    image: '/images/maternity_lab.jpg',
    caption: 'State-of-the-art obstetric delivery simulators, radiant baby warmers, and phototherapy equipment.',
    description: 'Specialised maternal and paediatric simulation ward enabling students to master labour management, neonatal resuscitation, infant incubator monitoring, and antenatal assessments with clinical precision.',
    metrics: [
      { label: 'Simulators', val: 'Birthing & Infant' },
      { label: 'Equipment', val: 'Radiant Warmers' },
      { label: 'Standard', val: 'INC Aligned' }
    ]
  },
  {
    id: 'museum',
    title: 'Anatomy, Physiology & Pathology Museum',
    shortTitle: 'Anatomy Museum',
    category: 'Visual Health Sciences',
    badge: '150+ Specimens',
    image: '/images/anatomy_museum.jpg',
    caption: 'Comprehensive visual learning gallery with articulated human skeletons, wet specimens, and organ models.',
    description: 'Diagnostic museum housing over 150+ mounted human anatomical specimens, full articulated skeletons, organ cross-sections, embryological models, and detailed anatomical charts for foundational medical learning.',
    metrics: [
      { label: 'Specimens', val: '150+ Mounted' },
      { label: 'Skeletons', val: 'Full Articulated' },
      { label: 'Displays', val: 'Organ Anatomy' }
    ]
  },
  {
    id: 'diagnostics',
    title: 'Medical Laboratory, CT Scan & Cancer Diagnostic Center',
    shortTitle: 'Diagnostics & Imaging',
    category: 'Diagnostic Excellence',
    badge: 'CT Scan & Oncology',
    image: '/images/hospital_postings.jpg',
    caption: 'Advanced diagnostic infrastructure supporting pathology, high-speed CT imaging, and cancer diagnostics.',
    description: 'Comprehensive in-campus diagnostic complex featuring automated biochemistry and pathology Medical Laboratory, high-speed CT Scan Center, and specialized Cancer Diagnostic Center.',
    metrics: [
      { label: 'Laboratory', val: 'Automated Testing' },
      { label: 'Radiology', val: 'High-Speed CT' },
      { label: 'Oncology', val: 'Cancer Center' }
    ]
  }
];

export default function CampusTour() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { openTourModal, openApplyModal } = useModal();

  const currentSpot = tourSpots[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? tourSpots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === tourSpots.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="virtual-tour-section" id="tour" aria-label="Campus Walkthrough Experience">
      <div className="container">
        {/* Section Header */}
        <div className="virtual-tour-header">
          <div className="virtual-tour-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="4"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <span>VIRTUAL CAMPUS EXPERIENCE</span>
          </div>
          <h2 className="virtual-tour-heading">
            Explore Our Campus &amp; <span>Clinical Infrastructure</span>
          </h2>
          <p className="virtual-tour-subheading">
            Take an interactive visual walk-through of our 3-storey Naubad campus, advanced clinical demonstration labs, 50-bedded attached hospital, and modern diagnostic centers in Bidar.
          </p>
        </div>

        {/* Interactive Walkthrough Studio Card */}
        <div className="tour-studio-card">
          {/* Studio Top Control Strip */}
          <div className="tour-studio-topbar">
            <div className="tour-live-status">
              <span className="tour-live-dot" aria-hidden="true"></span>
              <span className="tour-live-text">INTERACTIVE CAMPUS PREVIEW</span>
              <span className="tour-live-divider" aria-hidden="true">•</span>
              <span className="tour-live-counter">
                Location {activeIndex + 1} of {tourSpots.length}: <strong className="tour-live-spot-name">{currentSpot.shortTitle}</strong>
              </span>
            </div>

            <div className="tour-nav-controls">
              <button
                type="button"
                className="tour-nav-btn"
                onClick={handlePrev}
                aria-label="Previous campus location"
                title="Previous location"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <span className="tour-nav-pager">
                {activeIndex + 1} / {tourSpots.length}
              </span>
              <button
                type="button"
                className="tour-nav-btn"
                onClick={handleNext}
                aria-label="Next campus location"
                title="Next location"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              <button
                type="button"
                className="tour-btn-modal-trigger"
                onClick={openTourModal}
                aria-label="Open full 360-degree tour modal"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M15 3h6v6"></path>
                  <path d="M9 21H3v-6"></path>
                  <path d="M21 3l-7 7"></path>
                  <path d="M3 21l7-7"></path>
                </svg>
                <span>Full Tour</span>
              </button>
            </div>
          </div>

          {/* Studio Body: Viewport (Left) + Interactive Deck (Right) */}
          <div className="tour-studio-body">
            {/* Main Stage Viewport */}
            <div
              className="tour-stage-viewport"
              onClick={openTourModal}
              role="button"
              tabIndex={0}
              title="Click to launch high-resolution interactive tour modal"
              aria-label="Open Interactive Campus Tour Modal"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openTourModal();
                }
              }}
            >
              <div className="tour-stage-image-wrap">
                <img
                  key={currentSpot.id}
                  src={currentSpot.image}
                  alt={currentSpot.title}
                  className="tour-stage-image"
                  loading="lazy"
                />
              </div>

              {/* Overlaid Badges */}
              <div className="tour-stage-top-overlay">
                <span className="tour-tag-location">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {currentSpot.category}
                </span>

                <span className="tour-tag-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  {currentSpot.badge}
                </span>
              </div>

              {/* Hover Fullscreen Prompt */}
              <div className="tour-stage-hover-hint">
                <span className="tour-hover-bubble">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  <span>Click to Explore All Facilities in High-Res</span>
                </span>
              </div>

              {/* Bottom Glassmorphic Info Panel */}
              <div className="tour-stage-info-panel">
                <h3 className="tour-stage-title">{currentSpot.title}</h3>
                <p className="tour-stage-desc">{currentSpot.description}</p>
                <div className="tour-stage-metrics-row">
                  {currentSpot.metrics.map((m, idx) => (
                    <div key={idx} className="tour-metric-chip">
                      <span className="tour-metric-val">{m.val}</span>
                      <span className="tour-metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Location Selector Deck */}
            <div className="tour-selector-deck" role="tablist" aria-label="Campus Tour Facility Selector">
              <div className="tour-deck-header">
                <span className="tour-deck-heading">SELECT CAMPUS DESTINATION</span>
                <span className="tour-deck-sub">Click any facility to view live preview</span>
              </div>

              <div className="tour-deck-list">
                {tourSpots.map((spot, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={spot.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`tour-deck-item ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveIndex(idx)}
                    >
                      <div className="tour-deck-thumb-wrap">
                        <img src={spot.image} alt={spot.shortTitle} className="tour-deck-thumb" loading="lazy" />
                        {isActive && <span className="tour-deck-active-dot" aria-hidden="true"></span>}
                      </div>

                      <div className="tour-deck-text">
                        <div className="tour-deck-title-row">
                          <span className="tour-deck-title">{spot.shortTitle}</span>
                          {isActive && <span className="tour-deck-active-badge">Active</span>}
                        </div>
                        <span className="tour-deck-category">{spot.category} • {spot.badge}</span>
                      </div>

                      <div className="tour-deck-arrow" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Studio Bottom Action Bar */}
          <div className="tour-studio-footer">
            <div className="tour-studio-ctas">
              <button
                className="btn-tour-primary"
                type="button"
                onClick={openTourModal}
                aria-label="Start full interactive campus walkthrough modal"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"></polygon>
                </svg>
                <span>Start Full Interactive Campus Tour</span>
              </button>

              <button
                className="btn-tour-secondary"
                type="button"
                onClick={() => openApplyModal('B.Sc. Nursing')}
                aria-label="Schedule an in-person campus visit and admission counseling"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>Book Guided Campus Visit</span>
              </button>
            </div>

            <div className="tour-studio-support">
              <span className="tour-support-tag">Counseling Helpline:</span>
              <a href="tel:+919448123456" className="tour-support-phone">
                +91 94481 23456
              </a>
              <span className="tour-support-note">• Mon – Sat, 9:00 AM – 5:30 PM</span>
            </div>
          </div>
        </div>

        {/* 4 Trust Metric Cards below Studio */}
        <div className="tour-trust-ribbon">
          <div className="tour-trust-card">
            <div className="tour-trust-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 21h18"></path>
                <path d="M5 21V7l8-4v18"></path>
                <path d="M19 21V11l-6-4"></path>
              </svg>
            </div>
            <div>
              <div className="tour-trust-card-title">Naubad Campus</div>
              <div className="tour-trust-card-desc">3-Storey modern health sciences educational complex in Bidar.</div>
            </div>
          </div>

          <div className="tour-trust-card">
            <div className="tour-trust-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div>
              <div className="tour-trust-card-title">50-Bed Attached Hospital</div>
              <div className="tour-trust-card-desc">Daily bedside clinical rotations at 50-bedded hospital attached with Vasantha College.</div>
            </div>
          </div>

          <div className="tour-trust-card">
            <div className="tour-trust-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <div>
              <div className="tour-trust-card-title">6 High-Fidelity Labs</div>
              <div className="tour-trust-card-desc">Full-body simulation manikins, ICU setup &amp; neonatal incubators.</div>
            </div>
          </div>

          <div className="tour-trust-card">
            <div className="tour-trust-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <div>
              <div className="tour-trust-card-title">Advanced Diagnostics</div>
              <div className="tour-trust-card-desc">Medical Laboratory, CT Scan Center &amp; Cancer Diagnostic Center.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
