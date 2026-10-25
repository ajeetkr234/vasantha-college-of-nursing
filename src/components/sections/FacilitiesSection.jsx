import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { facilitiesData } from '../../data/facilitiesData';

export default function FacilitiesSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { openFacilityModal } = useModal();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = [
    { id: 'all', label: 'All Infrastructure' },
    { id: 'clinical_learning', label: 'Clinical Learning Labs' },
    { id: 'academic_resources', label: 'Academic Resources' },
    { id: 'student_facilities', label: 'Student Facilities' },
    { id: 'hospital_training', label: 'Hospital Postings' },
  ];

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setShowAll(false);
  };

  const filteredFacilities = activeCategory === 'all'
    ? facilitiesData
    : facilitiesData.filter(fac => fac.category === activeCategory);

  const initialLimit = isMobile ? 3 : 6;
  const visibleFacilities = showAll ? filteredFacilities : filteredFacilities.slice(0, initialLimit);

  return (
    <section id="facilities" className="section-home-facilities" aria-label="Clinical Training and Campus Facilities">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-with-badge">
          <div>
            <div className="tag-red-caps">INFRASTRUCTURE &amp; CLINICAL LABS</div>
            <h2 className="section-title-styled" style={{ margin: 0, textAlign: 'left' }}>
              Campus Facilities &amp; <span>Clinical Infrastructure</span>
            </h2>
          </div>
          <Link to="/clinical-training" className="section-explore-badge" aria-label="Explore comprehensive lab and posting breakdown">
            <span>Explore All 12 Labs &amp; Hospital Rotations</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Category Filters */}
        <div className="facilities-filter-row" role="tablist" aria-label="Facilities Category Filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`facilities-tab-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Consolidated Data-Driven Facility Grid */}
        <div className="facilities-consolidated-grid">
          {visibleFacilities.map((fac) => (
            <article key={fac.id} className="fac-item-card">
              <div className="fac-item-thumb">
                <img
                  src={fac.img}
                  alt={fac.title}
                  className="fac-thumb-img"
                  loading="lazy"
                />
                <span className="fac-tag-badge">{fac.categoryLabel}</span>
                {fac.specs && (
                  <span className="fac-spec-pill">{fac.specs}</span>
                )}
              </div>

              <div className="fac-item-body">
                <h3 className="fac-item-title">{fac.title}</h3>
                <p className="fac-item-desc">{fac.desc.substring(0, 95)}...</p>

                <div className="fac-item-footer">
                  <button
                    className="btn-fac-link"
                    type="button"
                    onClick={() => openFacilityModal(fac)}
                    aria-label={`View detailed specifications for ${fac.title}`}
                  >
                    <span>View Specifications</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Progressive Disclosure Toggle Button on Mobile (3 items) or if > 6 items on Desktop */}
        {filteredFacilities.length > initialLimit && (
          <div className="facilities-view-more-container" style={{ marginTop: '16px', marginBottom: '20px' }}>
            <button
              type="button"
              className="btn-view-more-facilities"
              onClick={() => setShowAll(prev => !prev)}
              aria-expanded={showAll}
            >
              <span>
                {showAll
                  ? 'Show Less Facilities'
                  : (isMobile ? 'View All 6 Facilities' : `View More Facilities (${filteredFacilities.length - 6} more)`)}
              </span>
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

        {/* Bottom Hospital Partnership Banner */}
        <div className="hospital-posting-callout-strip">
          <div className="callout-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="callout-text-col">
            <h4 className="callout-heading">750+ Bedded BRIMS District Teaching Hospital Affiliation</h4>
            <p className="callout-desc">
              All students undergo structured clinical postings across ICU, CCU, Emergency Trauma, OT, Maternal-Child Hospital (250+ Beds), and primary healthcare centers under senior clinical mentors.
            </p>
          </div>
          <Link to="/clinical-training" className="btn-callout-link" aria-label="View complete clinical rotation syllabus">
            <span>Clinical Postings Schedule →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
