import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { openApplyModal } = useModal();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close mobile navigation menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-inner">
            {/* Elegant, Uncluttered Brand Area */}
            <Link
              to="/"
              className="header-brand"
              onClick={closeMobile}
              aria-label="Smt. M. C. Vasantha College of Nursing Homepage"
            >
              <img
                src="/images/logo.png"
                alt="Smt. M. C. Vasantha College of Nursing Emblem"
                className="header-logo"
                width="46"
                height="46"
              />
              <div className="brand-info">
                <div className="brand-name">SMT. M. C. VASANTHA COLLEGE OF NURSING</div>
                <div className="brand-tagline">
                  Recognised by KSNC, INC &amp; Govt. of Karnataka • Affiliated to RGUHS Bangalore
                </div>
              </div>
            </Link>

            {/* Clean Desktop Navigation Bar */}
            <nav className="desktop-nav" aria-label="Main Navigation">
              <ul className="nav-links">
                <li>
                  <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/courses" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/clinical-training" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Clinical Training
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/placements" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Placements
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admissions" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Admissions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Right Action: Clean Apply Button & Mobile Toggle */}
            <div className="header-actions">
              <button
                className="btn-header-apply"
                type="button"
                aria-label="Apply Now for 2026-27 Session"
                onClick={() => openApplyModal('B.Sc. Nursing')}
              >
                <span className="apply-text-full">Apply Now 2026–27</span>
                <span className="apply-text-med">Apply 2026–27</span>
                <span className="apply-text-tiny">Apply</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <button
                className="mobile-toggle"
                id="mobileToggle"
                type="button"
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobileDrawer"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

      </header>

      {/* Mobile Navigation Drawer rendered via Portal at document.body root */}
      {mobileOpen && typeof document !== 'undefined' && createPortal(
        <>
          <div className="mobile-nav-backdrop" onClick={closeMobile} aria-hidden="true" />
          <div className="mobile-nav-drawer" id="mobileDrawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
            <div className="mobile-drawer-inner">
              <div className="mobile-drawer-brand">
                <div className="mobile-drawer-title">
                  <span className="font-extrabold text-[#102541]">Quick Navigation</span>
                  <span className="mobile-adm-pill">Admissions 2026-27</span>
                </div>
                <button
                  type="button"
                  className="mobile-drawer-close"
                  onClick={closeMobile}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <nav className="mobile-drawer-nav" aria-label="Mobile Drawer Navigation">
                <ul className="mobile-drawer-links">
                  <li>
                    <NavLink to="/" end onClick={closeMobile} className={({ isActive }) => (isActive ? 'active' : '')}>
                      <span>🏠 Home Overview</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" onClick={closeMobile} className={({ isActive }) => (isActive ? 'active' : '')}>
                      <span>🏛 About College &amp; Trust</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/courses" onClick={closeMobile} className={({ isActive }) => (isActive ? 'active' : '')}>
                      <span>🎓 Academic Courses (B.Sc &amp; GNM)</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/clinical-training" onClick={closeMobile} className={({ isActive }) => (isActive ? 'active' : '')}>
                      <span>🏥 Clinical Training &amp; Hospital</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/placements" onClick={closeMobile} className={({ isActive }) => (isActive ? 'active' : '')}>
                      <span>💼 Placements &amp; Careers</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admissions" onClick={closeMobile} className={({ isActive }) => (isActive ? 'active' : '')}>
                      <span>📋 Admissions &amp; Scholarships</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" onClick={closeMobile} className={({ isActive }) => (isActive ? 'active' : '')}>
                      <span>📞 Contact &amp; Campus Visit</span>
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <div className="mobile-drawer-cta-cluster">
                <button
                  type="button"
                  className="btn-mobile-apply-primary"
                  onClick={() => {
                    closeMobile();
                    openApplyModal('B.Sc. Nursing');
                  }}
                >
                  <span>Apply Now for 2026–27 Session →</span>
                </button>

                <div className="mobile-drawer-contact-bar">
                  <a href="tel:9512592211" className="mobile-contact-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span>9512592211</span>
                  </a>
                  <a
                    href="https://wa.me/919512592211?text=Hello%20Smt.%20M.%20C.%20Vasantha%20College%20of%20Nursing,%20I%20would%20like%20to%20enquire%20about%20admissions%20for%202026-27."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-contact-pill whatsapp"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}
