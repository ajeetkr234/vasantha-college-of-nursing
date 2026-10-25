import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { alumniData } from '../../data/partnersData';

export default function AlumniSection() {
  const [showAllAlumni, setShowAllAlumni] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const hospitalLogos = {
    'Manipal Hospitals, Bengaluru': '/images/partners/manipal.svg',
    'Apollo Hospitals, Hyderabad': '/images/partners/apollo.svg',
    'Narayana Health City, Bengaluru': '/images/partners/narayana.svg',
  };

  const visibleAlumni = (isMobile && !showAllAlumni) ? alumniData.slice(0, 1) : alumniData;

  return (
    <section className="section-home-alumni" aria-label="Alumni Experiences and Graduate Outcomes">
      <div className="container">
        <div className="alumni-row-header">
          <div>
            <div className="tag-red-caps">GRADUATE OUTCOMES</div>
            <h2 className="section-title-styled" style={{ marginBottom: 0, textAlign: 'left' }}>
              Alumni <span>Experiences &amp; Placements</span>
            </h2>
          </div>
          <Link to="/placements" className="btn-view-more-outline" aria-label="View more alumni career outcomes">
            <span>View More Stories</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        <div className="alumni-3-grid">
          {visibleAlumni.map((alumnus, idx) => {
            const logoSrc = hospitalLogos[alumnus.hospital] || '/images/partners/apollo.svg';

            return (
              <article key={idx} className="alumni-card">
                <div className="alumni-avatar-box">
                  <img
                    src={alumnus.img}
                    alt={`${alumnus.name}`}
                    className="alumni-avatar-img"
                    loading="lazy"
                  />
                </div>
                <div className="alumni-info-col">
                  <p className="alumni-quote-text">
                    {alumnus.quote}
                  </p>
                  <div className="alumni-bottom-split">
                    <div className="alumni-author-block">
                      <h3 className="alumni-name">{alumnus.name}</h3>
                      <div className="alumni-batch">{alumnus.role} • {alumnus.batch}</div>
                      <div className="alumni-placement-meta">{alumnus.hospital}</div>
                    </div>
                    <div className="alumni-logo-stamp">
                      <img src={logoSrc} alt="Recruiting Hospital" loading="lazy" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile Progressive Disclosure Toggle */}
        {isMobile && alumniData.length > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '14px' }}>
            <button
              type="button"
              className="btn-view-more-facilities"
              onClick={() => setShowAllAlumni(prev => !prev)}
              aria-expanded={showAllAlumni}
            >
              <span>{showAllAlumni ? 'Show Less Stories' : 'Read More Alumni Stories (2 More)'}</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`view-more-icon ${showAllAlumni ? 'rotated' : ''}`}
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
