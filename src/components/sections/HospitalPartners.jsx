import React from 'react';
import { Link } from 'react-router-dom';
import { partnersData } from '../../data/partnersData';

export default function HospitalPartners() {
  return (
    <section id="hospital-partners" className="section-home-placements" aria-label="Hospital Training and Recruiting Hospital Partners">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-with-badge">
          <div>
            <div className="tag-red-caps">CLINICAL AFFILIATIONS &amp; RECRUITMENT</div>
            <h2 className="section-title-styled" style={{ margin: 0, textAlign: 'left' }}>
              Hospital Training &amp; <span>Hospital Partners</span>
            </h2>
          </div>
          <Link to="/placements" className="section-explore-badge" aria-label="Explore placement assistance and hospital partner networks">
            <span>Explore Partner Network &amp; Records</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Partner Logos Grid with Consistent Responsive Containers */}
        <div className="hospital-partners-grid">
          {partnersData.map((partner, idx) => (
            <div key={idx} className="hospital-logo-card">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="hospital-logo-img"
                loading="lazy"
              />
              <div className="partner-name-hint">{partner.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
