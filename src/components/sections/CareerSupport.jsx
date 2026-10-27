import React from 'react';
import { Link } from 'react-router-dom';

export default function CareerSupport() {
  const careerServices = [
    {
      title: 'Dedicated Placement Cell',
      desc: 'Active institutional cell organizing campus recruitment drives, hospital internships, and networking with premier healthcare networks.',
      color: 'blue',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      title: 'Clinical Skill & Interview Grooming',
      desc: 'Structured preparation covering bedside clinical viva, patient case presentations, communication etiquette, and mock hospital interviews.',
      color: 'pink',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
      )
    },
    {
      title: 'Overseas Licensing Support',
      desc: 'Academic guidance and exam orientation for international licensure credentials including NCLEX-RN (USA/Canada), UK NMC, and Gulf DHA.',
      color: 'yellow',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      title: 'Hospital Campus Recruitment',
      desc: 'Regular interaction and recruitment drives with multi-specialty hospitals, research institutes, and community healthcare organizations.',
      color: 'teal',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="career-support" className="section-career-support" aria-label="Career and Placement Support">
      <div className="container">
        {/* Distinction Banner: Career Support Services */}
        <div className="career-support-header-block">
          <div className="tag-red-caps">STUDENT SUCCESS &amp; EMPLOYABILITY</div>
          <h2 className="section-title-styled" style={{ marginBottom: '8px' }}>
            Comprehensive <span>Career &amp; Placement Support</span>
          </h2>
          <p className="career-support-subtitle">
            Our placement cell provides full career preparation and interview facilitation to bridge students from academic completion to hospital bedside employment.
          </p>
        </div>

        <div className="career-support-4">
          {careerServices.map((service, idx) => (
            <div key={idx} className={`career-card ${service.color}`}>
              <div className="career-icon-round">
                {service.icon}
              </div>
              <div>
                <h3 className="career-card-head">{service.title}</h3>
                <p className="career-card-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Placement Disclaimer / Institutional Integrity Notice */}
        <div className="placement-integrity-notice">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#64748B] shrink-0" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span>
            <strong>Note on Career Services:</strong> VASANTHA GROUP OF EDUCATION provides 100% placement assistance, rigorous clinical preparation, and recruitment coordination. Final selection and appointment remain subject to hospital eligibility criteria, licensing clearances, and student performance.
          </span>
        </div>
      </div>
    </section>
  );
}
