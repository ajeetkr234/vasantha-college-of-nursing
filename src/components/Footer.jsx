import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export default function Footer() {
  const { openApplyModal } = useModal();

  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="footer-grid-4">
          {/* Col 1 */}
          <div>
            <div className="footer-brand-lockup">
              <img src="/images/logo.png" alt="VASANTHA GROUP OF EDUCATION Logo" className="footer-logo" />
              <div>
                <span className="footer-brand-title">VASANTHA GROUP OF EDUCATION</span>
                <span className="footer-brand-sub">Group of Institutions • Estd. 1984</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Dedicated to sculpting compassionate, professionally skilled, and globally competent healthcare and educational leaders
              equipped with high-standard clinical expertise and moral integrity for over 43 years (ESTD. 1984).
            </p>
            <div className="footer-accreditation-pill">
              Govt. of Karnataka • KSNC • INC • PCI • NCTE • RGUHS Bangalore
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="footer-col-title">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/">➔ Home Overview</Link></li>
              <li><Link to="/about">➔ About the College &amp; Trust</Link></li>
              <li><Link to="/about#approvals">➔ Statutory Approvals &amp; Accreditations</Link></li>
              <li><Link to="/courses">➔ All Academic Programs (7)</Link></li>
              <li><Link to="/clinical-training">➔ Clinical Training &amp; Labs</Link></li>
              <li><Link to="/placements">➔ Placements &amp; Careers</Link></li>
              <li><Link to="/admissions">➔ Admissions 2026-27</Link></li>
              <li><Link to="/contact">➔ Contact Campus Desk</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="footer-col-title">Programs Offered</h4>
            <ul className="footer-links-list">
              <li>
                <button
                  type="button"
                  onClick={() => openApplyModal('B.Sc. Nursing')}
                  style={{ background: 'none', border: 'none', color: '#94a3b8', padding: 0, font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
                >
                  ➔ B.Sc. Nursing (4 Years Degree)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openApplyModal('GNM Nursing')}
                  style={{ background: 'none', border: 'none', color: '#94a3b8', padding: 0, font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
                >
                  ➔ GNM Nursing (3 Years Diploma)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openApplyModal('Post B.Sc. Nursing')}
                  style={{ background: 'none', border: 'none', color: '#94a3b8', padding: 0, font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
                >
                  ➔ Post B.Sc. Nursing (2 Years Post Basic)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openApplyModal('Diploma in Pharmacy (D.Pharm)')}
                  style={{ background: 'none', border: 'none', color: '#94a3b8', padding: 0, font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
                >
                  ➔ Diploma in Pharmacy - D.Pharm (2 Yrs)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openApplyModal('Bachelor of Pharmacy (B.Pharm)')}
                  style={{ background: 'none', border: 'none', color: '#94a3b8', padding: 0, font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
                >
                  ➔ Bachelor of Pharmacy - B.Pharm (4 Yrs)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openApplyModal('Bachelor of Physiotherapy (BPT)')}
                  style={{ background: 'none', border: 'none', color: '#94a3b8', padding: 0, font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
                >
                  ➔ Bachelor of Physiotherapy - BPT (4.5 Yrs)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openApplyModal('Bachelor of Education (B.Ed)')}
                  style={{ background: 'none', border: 'none', color: '#94a3b8', padding: 0, font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
                >
                  ➔ Bachelor of Education - B.Ed (2 Yrs)
                </button>
              </li>
              <li><Link to="/courses" style={{ color: '#e2e8f0', fontWeight: 600 }}>➔ View All Syllabi &amp; Curricula →</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="footer-col-title">Campus &amp; Admissions</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Naubad-bhalki Road, Naubad Karnataka 585402</span>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>
                  <a href="tel:9512592211" style={{ color: '#ffffff', fontWeight: 700 }}>9512592211</a> /{' '}
                  <a href="tel:8154968596" style={{ color: '#ffffff', fontWeight: 700 }}>8154968596</a>
                </span>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Office Hours: 9:00 AM – 5:30 PM (Mon – Sat)</span>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>admissions@vasanthagroup.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>© 2026-2027 VASANTHA GROUP OF EDUCATION, Bidar. All Rights Reserved.</div>
          <div style={{ fontWeight: 600, color: 'var(--gold-accent)' }}>Care • Compassion • Competence</div>
        </div>
      </div>
    </footer>
  );
}
