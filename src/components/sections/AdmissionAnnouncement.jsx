import React from 'react';
import { Link } from 'react-router-dom';

export default function AdmissionAnnouncement() {
  const announcementText = (
    <>
      <span className="ticker-badge-live">
        <span className="ticker-pulse-dot" aria-hidden="true"></span>
        ADMISSIONS 2026–27
      </span>
      <span className="ticker-item-text">
        Applications Open for <strong>B.Sc. Nursing (4 Yrs Degree)</strong>, <strong>GNM Diploma (3 Yrs)</strong>, <strong>P.B.B.Sc.</strong>, <strong>Pharmacy (D.Pharm &amp; B.Pharm)</strong> &amp; <strong>BPT</strong> • KSNC, INC, PCI &amp; RGUHS Affiliated • Helpline: <strong>+91 9512592211</strong>
      </span>
      <span className="ticker-action-chip">Apply Online ➔</span>
    </>
  );

  return (
    <div
      className="homepage-admission-marquee-bar"
      role="region"
      aria-label="Admissions 2026-27 Continuous Announcement"
    >
      <Link to="/admissions" className="marquee-content-link" aria-label="Admissions Open 2026-27 - Click to explore courses and apply online">
        <div className="marquee-track">
          <div className="marquee-group" aria-hidden="false">
            {announcementText}
          </div>
          <div className="marquee-group" aria-hidden="true">
            {announcementText}
          </div>
        </div>
      </Link>
    </div>
  );
}

