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
            <div className="tag-red-caps">CLINICAL AFFILIATIONS &amp; IN-CAMPUS HOSPITAL</div>
            <h2 className="section-title-styled">
              Hospital Training &amp; <span>Attached Healthcare Centers</span>
            </h2>
          </div>
          <Link to="/clinical-training" className="section-explore-badge" aria-label="Explore all hospital postings and clinical facilities">
            <span>Explore Clinical Training &amp; Postings</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Attached Hospital & Advanced Diagnostics Highlight Card */}
        <div className="attached-hospital-featured-card">
          <div className="attached-hosp-top-banner">
            <span className="attached-hosp-badge">
              <span className="live-indicator-dot"></span>
              IN-CAMPUS CLINICAL ROTATIONS
            </span>
            <span className="attached-hosp-beds-tag">50 Beds Attached</span>
          </div>

          <div className="attached-hosp-header-row">
            <div className="attached-hosp-icon-bubble">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M3 21h18"></path>
                <path d="M5 21V7l8-4v18"></path>
                <path d="M19 21V11l-6-4"></path>
                <path d="M9 9h1"></path>
                <path d="M9 13h1"></path>
                <path d="M9 17h1"></path>
              </svg>
            </div>
            <div className="attached-hosp-title-group">
              <h3 className="attached-hosp-main-title">
                50-Bedded Hospital Attached with Vasantha College
              </h3>
              <p className="attached-hosp-desc">
                Students benefit from immediate bedside patient care and advanced diagnostic exposure directly within the Vasantha educational campus.
              </p>
            </div>
          </div>

          {/* 3 Core Diagnostic Centers: Medical Laboratory, CT Scan Center, Cancer Diagnostic Center */}
          <div className="attached-diagnostic-grid">
            <div className="diagnostic-unit-pill">
              <div className="diag-icon-bubble lab">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path d="M10 2v7.31L4.1 19.4A2 2 0 0 0 5.8 22h12.4a2 2 0 0 0 1.7-2.6L14 9.31V2"></path>
                  <line x1="8" y1="2" x2="16" y2="2"></line>
                  <line x1="9" y1="12" x2="15" y2="12"></line>
                </svg>
              </div>
              <div className="diag-text">
                <strong className="diag-name">Medical Laboratory</strong>
                <span className="diag-sub">Pathology, Biochemistry &amp; Hematology Testing</span>
              </div>
            </div>

            <div className="diagnostic-unit-pill">
              <div className="diag-icon-bubble scan">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <div className="diag-text">
                <strong className="diag-name">CT Scan Center</strong>
                <span className="diag-sub">High-Resolution Computed Tomography Imaging</span>
              </div>
            </div>

            <div className="diagnostic-unit-pill">
              <div className="diag-icon-bubble cancer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z"></path>
                  <circle cx="12" cy="9" r="2.5"></circle>
                </svg>
              </div>
              <div className="diag-text">
                <strong className="diag-name">Cancer Diagnostic Center</strong>
                <span className="diag-sub">Oncology Screening &amp; Early Diagnostics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Sub-heading for Recruiting Partners */}
        <div style={{ margin: '28px 0 14px' }}>
          <div className="tag-red-caps" style={{ marginBottom: '4px' }}>PREMIER HOSPITAL NETWORKS</div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-dark)', margin: 0 }}>
            Associated Clinical &amp; Placement Partners
          </h3>
        </div>

        {/* Partner Logos Continuous Marquee - Logos Only */}
        <div className="hospital-partners-marquee-container" aria-label="Associated Clinical & Placement Partners Marquee">
          <div className="hospital-partners-marquee-track">
            {/* Primary Set */}
            <div className="hospital-partners-marquee-group">
              {partnersData.map((partner, idx) => (
                <div key={`hp1-${idx}`} className="hospital-marquee-card" title={partner.name}>
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="hospital-marquee-logo"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Seamless Duplicated Set for Infinite Smooth Loop */}
            <div className="hospital-partners-marquee-group" aria-hidden="true">
              {partnersData.map((partner, idx) => (
                <div key={`hp2-${idx}`} className="hospital-marquee-card" title={partner.name}>
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="hospital-marquee-logo"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
