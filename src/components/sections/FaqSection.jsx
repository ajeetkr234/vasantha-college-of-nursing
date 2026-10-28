import React, { useState } from 'react';
import { faqsData } from '../../data/coursesData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq" aria-label="Frequently Asked Questions">
      <div className="container">
        <div className="faq-container">
          <div style={{ textAlign: 'center' }}>
            <div className="tag-red-caps">HAVE QUESTIONS?</div>
            <h2 className="section-title-styled" style={{ marginBottom: '8px' }}>
              Frequently Asked <span>Questions</span>
            </h2>
            <p className="faq-intro-sub">
              Essential guidance regarding recognized courses, clinical hospital postings, diagnostics, and 2026-27 admissions.
            </p>
          </div>

          <div className="faq-list">
            {faqsData.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                    type="button"
                    onClick={() => toggleFaq(idx)}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div
                      className="faq-body"
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      style={{ display: 'block' }}
                    >
                      <div className="faq-content">
                        {faq.a}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
