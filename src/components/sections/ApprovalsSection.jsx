import React from 'react';
import { approvalsData } from '../../data/approvalsData';

export default function ApprovalsSection() {

  return (
    <section className="section-approvals" id="approvals" aria-label="Approvals and Statutory Recognitions">
      <div className="container">
        {/* Header Block */}
        <div className="approvals-header-center">
          <div className="tag-red-caps">OFFICIAL STATUTORY APPROVALS</div>
          <h2 className="section-title-styled" style={{ margin: '8px 0 12px' }}>
            Institutional <span>Approvals &amp; Recognitions</span>
          </h2>
          <p className="approvals-sub-p">
            VASANTHA GROUP OF EDUCATION operates with full statutory approvals, legal authorizations,
            and academic affiliations from Rajiv Gandhi University of Health Sciences (RGUHS), Indian Nursing Council (INC),
            Karnataka State Nursing Council (KSNC), and the Government of Karnataka.
          </p>
        </div>

        {/* Approvals Cards Grid (Clean 2x2 presentation) */}
        <div className="approvals-cards-grid">
          {approvalsData.map((item) => (
            <article key={item.id} className={`approval-card-item accent-${item.badgeColor}`}>
              <div className="approval-card-top">
                <div className="approval-abbr-badge">
                  <span className="abbr-text">{item.abbr}</span>
                </div>
                <div className="approval-status-pill">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{item.badgeType}</span>
                </div>
              </div>

              <div className="approval-card-content">
                <div className="approval-category-tag">{item.categoryLabel}</div>
                <h3 className="approval-card-title">{item.name}</h3>

                {item.kannadaName && (
                  <div className="approval-kannada-text">
                    <span className="kannada-badge">ಕನ್ನಡ:</span>
                    <span className="kannada-font">{item.kannadaName}</span>
                  </div>
                )}

                <p className="approval-card-desc">{item.description}</p>

                {item.sanctionDetail && (
                  <div className="approval-sanction-box">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="sanction-icon">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <span>{item.sanctionDetail}</span>
                  </div>
                )}
              </div>

              <div className="approval-card-footer">
                <span className="approval-scope-label">Regulatory Scope:</span>
                <span className="approval-scope-val">{item.scope}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
