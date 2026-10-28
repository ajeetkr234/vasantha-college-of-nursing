import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { coursesData, facultiesData } from '../../data/coursesData';

export default function ProgramsSection() {
  const { openApplyModal } = useModal();
  const [activeTab, setActiveTab] = useState('all');
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMode, setMobileMode] = useState('swipe'); // 'swipe' or 'stack'
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [activeSwipeIdx, setActiveSwipeIdx] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setShowAllMobile(false);
    setActiveSwipeIdx(0);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const filteredCourses = activeTab === 'all'
    ? coursesData
    : coursesData.filter(c => c.category === activeTab);

  // In List View, display all items in a clean vertical layout
  const displayedCourses = filteredCourses;

  const handleTrackScroll = () => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const firstSlide = track.children[0];
    if (firstSlide) {
      const gap = 12;
      const slideDistance = firstSlide.offsetWidth + gap;
      if (slideDistance > 0) {
        const newIdx = Math.round(track.scrollLeft / slideDistance);
        const boundedIdx = Math.min(Math.max(0, newIdx), filteredCourses.length - 1);
        if (boundedIdx !== activeSwipeIdx) {
          setActiveSwipeIdx(boundedIdx);
        }
      }
    }
  };

  const scrollToSlide = (index) => {
    if (trackRef.current && trackRef.current.children[index]) {
      const targetChild = trackRef.current.children[index];
      targetChild.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
      setActiveSwipeIdx(index);
    }
  };

  const renderCourseCard = (course, isSwipeSlide = false) => {
    const shortAffiliation = course.affiliation.includes('RGUHS')
      ? 'RGUHS Bangalore'
      : course.affiliation.includes('PCI')
      ? 'PCI Approved'
      : course.affiliation.includes('Gulbarga')
      ? 'Gulbarga Univ'
      : 'KSNC Approved';

    return (
      <article
        key={course.id}
        className={`course-card-horizontal ${isSwipeSlide ? 'course-card-swipe-slide' : ''}`}
        id={`home-${course.id}`}
      >
        {/* 1. Course Image */}
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

        {/* 2-7. Course Information */}
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
            <span className="spec-mini-chip"><strong>Intake:</strong> {course.seats.replace(' per Academic Year', '').trim()}</span>
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

          {/* 7. Actions */}
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

            <Link
              to={`/courses#${course.id}`}
              className="btn-course-details"
              aria-label={`View full details and syllabus for ${course.title}`}
            >
              <span>View Details</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className="section-home-courses" id="programs" aria-label="Academic Programs">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-with-badge">
          <div>
            <div className="tag-red-caps">ACADEMIC EXCELLENCE • MULTIDISCIPLINARY EDUCATION</div>
            <h2 className="section-title-styled">
              Academic <span>Programs &amp; Disciplines</span>
            </h2>
          </div>
          <Link to="/courses" className="section-explore-badge" aria-label="Explore full curricula and syllabi">
            <span>Explore All 7 Curricula &amp; Syllabi</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Category Filter Tabs */}
        <div className="course-filter-tabs-wrapper" style={{ margin: '18px 0 16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {facultiesData.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`faculty-tab-pill ${activeTab === f.id ? 'active' : ''}`}
              onClick={() => handleTabChange(f.id)}
              style={{
                padding: '7px 14px',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: activeTab === f.id ? '1.5px solid #be123c' : '1px solid #e2e8f0',
                background: activeTab === f.id ? '#be123c' : '#ffffff',
                color: activeTab === f.id ? '#ffffff' : '#334155',
                boxShadow: activeTab === f.id ? '0 2px 8px rgba(190, 18, 60, 0.25)' : 'none'
              }}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Mobile View Toggle Bar: Switch between horizontal swipe & vertical stack */}
        {isMobile && (
          <div className="mobile-carousel-control-bar">
            <div className="carousel-mode-toggle" role="group" aria-label="Academic programs display mode">
              <button
                type="button"
                className={`mode-toggle-btn ${mobileMode === 'swipe' ? 'active' : ''}`}
                onClick={() => setMobileMode('swipe')}
                aria-pressed={mobileMode === 'swipe'}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M17 11l4-4-4-4M21 7H9M7 13l-4 4 4 4M3 17h12" />
                </svg>
                <span>Swipe View</span>
              </button>
              <button
                type="button"
                className={`mode-toggle-btn ${mobileMode === 'stack' ? 'active' : ''}`}
                onClick={() => setMobileMode('stack')}
                aria-pressed={mobileMode === 'stack'}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <circle cx="4" cy="6" r="1.5" fill="currentColor"></circle>
                  <circle cx="4" cy="12" r="1.5" fill="currentColor"></circle>
                  <circle cx="4" cy="18" r="1.5" fill="currentColor"></circle>
                </svg>
                <span>List View</span>
              </button>
            </div>

            {mobileMode === 'swipe' && (
              <div className="carousel-counter-group" aria-live="polite">
                <span className="carousel-helper-text">Swipe to explore</span>
                <span className="carousel-counter-badge">
                  {activeSwipeIdx + 1} of {filteredCourses.length}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Card Presentation: Swipe Track on Mobile (when swipe mode) OR Two-Col Grid */}
        {isMobile && mobileMode === 'swipe' ? (
          <div className="courses-swipe-container">
            <div
              className="courses-mobile-swipe-track"
              ref={trackRef}
              onScroll={handleTrackScroll}
            >
              {filteredCourses.map((course) => renderCourseCard(course, true))}
            </div>

            {/* Swipe Navigation Dots & Arrows */}
            <div className="carousel-swipe-nav-row">
              <button
                type="button"
                className="carousel-nav-btn prev"
                disabled={activeSwipeIdx === 0}
                onClick={() => scrollToSlide(activeSwipeIdx - 1)}
                aria-label="Previous Course"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <div className="carousel-nav-dots" role="tablist" aria-label="Course slides">
                {filteredCourses.map((c, i) => (
                  <button
                    key={c.id}
                    type="button"
                    role="tab"
                    aria-selected={activeSwipeIdx === i}
                    className={`carousel-nav-dot ${activeSwipeIdx === i ? 'active' : ''}`}
                    onClick={() => scrollToSlide(i)}
                    aria-label={`Go to program ${i + 1}: ${c.title}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="carousel-nav-btn next"
                disabled={activeSwipeIdx === filteredCourses.length - 1}
                onClick={() => scrollToSlide(activeSwipeIdx + 1)}
                aria-label="Next Course"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="courses-two-col-grid">
            {displayedCourses.map((course) => renderCourseCard(course, false))}
          </div>
        )}
      </div>
    </section>
  );
}

