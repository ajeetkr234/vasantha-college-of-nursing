import React, { useState, useEffect } from 'react';
import { useModal } from '../context/ModalContext';

export default function FloatingActions() {
  const [showBackTop, setShowBackTop] = useState(false);
  const { openApplyModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: isReducedMotion ? 'auto' : 'smooth'
    });
  };

  return (
    <>
      {/* Desktop Floating Actions Bar (WhatsApp, Call, Back to Top) */}
      <aside className="floating-actions-bar desktop-floating-actions" aria-label="Desktop Quick Actions">
        <a
          href="https://wa.me/919512592211?text=Hello%20Smt.%20M.%20C.%20Vasantha%20College%20of%20Nursing,%20I%20would%20like%20to%20enquire%20about%20admissions%20for%202026-27."
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn float-whatsapp"
          title="Chat on WhatsApp (9512592211)"
          aria-label="Chat on WhatsApp with Admissions Office (Opens in new window)"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.677.15-.201.301-.778.979-.954 1.18-.176.2-.351.226-.652.075s-1.272-.469-2.424-1.496c-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.135-.136.301-.351.452-.527.15-.176.2-.301.301-.502.1-.201.05-.376-.025-.527s-.677-1.632-.928-2.235c-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.23 3.111c.15.201 2.123 3.242 5.143 4.547.718.311 1.279.497 1.716.636.721.23 1.377.197 1.896.12.578-.087 1.78-.727 2.031-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351zM12.04 2C6.549 2 2.083 6.463 2.083 11.954c0 1.758.459 3.473 1.332 4.989L2 22l5.228-1.371a9.92 9.92 0 0 0 4.812 1.238c5.491 0 9.957-4.463 9.957-9.954C21.997 6.463 17.531 2 12.04 2zm0 18.232c-1.523 0-3.016-.409-4.322-1.183l-.31-.184-3.21.842.857-3.13-.202-.321a8.19 8.19 0 0 1-1.257-4.402c0-4.526 3.682-8.208 8.244-8.208 4.561 0 8.243 3.682 8.243 8.208 0 4.526-3.682 8.208-8.255 8.208z" />
          </svg>
          <span>WhatsApp</span>
        </a>

        <a
          href="tel:9512592211"
          className="float-btn float-call"
          title="Call Admission Helpline 9512592211"
          aria-label="Call Admissions on 9512592211"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>Call Desk</span>
        </a>

        <button
          className={`float-back-top ${showBackTop ? 'visible' : ''}`}
          id="backToTopBtn"
          aria-label="Scroll back to top of page"
          title="Back to top"
          type="button"
          onClick={scrollToTop}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </aside>

      {/* Mobile Floating Back To Top Button */}
      <button
        type="button"
        className={`mobile-float-back-top ${showBackTop ? 'visible' : ''}`}
        aria-label="Scroll back to top"
        onClick={scrollToTop}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      {/* Feature 3: Mobile Sticky Action Dock (WhatsApp • Call • Apply) */}
      <nav className="mobile-sticky-action-dock" aria-label="Mobile Quick Action Dock">
        <a
          href="https://wa.me/919512592211?text=Hello%20Smt.%20M.%20C.%20Vasantha%20College%20of%20Nursing,%20I%20would%20like%20to%20enquire%20about%20admissions%20for%202026-27."
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item dock-whatsapp"
          aria-label="WhatsApp Admission Enquiry"
        >
          <div className="dock-icon-circle whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.677.15-.201.301-.778.979-.954 1.18-.176.2-.351.226-.652.075s-1.272-.469-2.424-1.496c-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.135-.136.301-.351.452-.527.15-.176.2-.301.301-.502.1-.201.05-.376-.025-.527s-.677-1.632-.928-2.235c-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.23 3.111c.15.201 2.123 3.242 5.143 4.547.718.311 1.279.497 1.716.636.721.23 1.377.197 1.896.12.578-.087 1.78-.727 2.031-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351zM12.04 2C6.549 2 2.083 6.463 2.083 11.954c0 1.758.459 3.473 1.332 4.989L2 22l5.228-1.371a9.92 9.92 0 0 0 4.812 1.238c5.491 0 9.957-4.463 9.957-9.954C21.997 6.463 17.531 2 12.04 2zm0 18.232c-1.523 0-3.016-.409-4.322-1.183l-.31-.184-3.21.842.857-3.13-.202-.321a8.19 8.19 0 0 1-1.257-4.402c0-4.526 3.682-8.208 8.244-8.208 4.561 0 8.243 3.682 8.243 8.208 0 4.526-3.682 8.208-8.255 8.208z" />
            </svg>
          </div>
          <span className="dock-label">WhatsApp</span>
        </a>

        <a
          href="tel:9512592211"
          className="dock-item dock-call"
          aria-label="Call Admissions Helpline 9512592211"
        >
          <div className="dock-icon-circle call">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <span className="dock-label">Call Now</span>
        </a>

        <button
          type="button"
          className="dock-item dock-apply"
          onClick={() => openApplyModal('B.Sc. Nursing')}
          aria-label="Open Admissions 2026-27 Application Form"
        >
          <div className="dock-icon-circle apply">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </div>
          <span className="dock-label">Apply 2026–27</span>
        </button>
      </nav>
    </>
  );
}
