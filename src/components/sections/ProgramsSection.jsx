import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { coursesData } from '../../data/coursesData';

export default function ProgramsSection() {
  const { openApplyModal } = useModal();

  return (
    <section className="section-home-courses" id="programs" aria-label="Academic Nursing Programs">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-with-badge">
          <div>
            <div className="tag-red-caps">ACADEMIC EXCELLENCE</div>
            <h2 className="section-title-styled" style={{ margin: 0, textAlign: 'left' }}>
              Academic <span>Nursing Programs</span>
            </h2>
          </div>
          <Link to="/courses" className="section-explore-badge" aria-label="Explore full curricula and syllabi">
            <span>Explore Full Curricula &amp; Syllabi</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 col on tablet/desktop */}
        <div className="home-courses-grid">
          {coursesData.map((course) => {
            const isBsc = course.id === 'bsc-nursing';
            const imgPath = isBsc ? '/images/student_bsc_portrait.jpg' : '/images/simulation_training_group.jpg';
            const badgeClass = isBsc ? 'pink' : 'blue';

            return (
              <article key={course.id} className="home-course-card">
                <div className="home-course-thumb">
                  <img
                    src={imgPath}
                    alt={`${course.title} Students at Smt. M. C. Vasantha College`}
                    className="course-thumb-img"
                    loading="lazy"
                  />
                  <div className="course-thumb-badge">
                    {course.badge}
                  </div>
                </div>

                <div className="home-course-body">
                  <div className="course-card-head-row">
                    <div className={`circle-nurse-icon ${badgeClass}`}>
                      {isBsc ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                      ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <circle cx="12" cy="7" r="4"></circle>
                          <path d="M5.5 21a8.38 8.38 0 0 1 13 0"></path>
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="course-card-title">{course.title}</h3>
                      <div className="course-years">{course.duration}</div>
                    </div>
                  </div>

                  <p className="course-card-overview">
                    {course.overview}
                  </p>

                  <div className="course-eligibility-box">
                    <span className="font-bold text-[#102541]">Eligibility:</span> {course.eligibility}
                  </div>

                  <ul className="course-bullets">
                    {isBsc ? (
                      <>
                        <li><span className="red-check-bullet" aria-hidden="true">✔</span> Comprehensive 4-Year University Degree (RGUHS)</li>
                        <li><span className="red-check-bullet" aria-hidden="true">✔</span> 750+ Bedded Hospital Bedside Postings (BRIMS)</li>
                        <li><span className="red-check-bullet" aria-hidden="true">✔</span> High-Fidelity Simulation &amp; Childbirth Labs</li>
                        <li><span className="red-check-bullet" aria-hidden="true">✔</span> NCLEX, DHA, NHS &amp; Career Placement Support</li>
                      </>
                    ) : (
                      <>
                        <li><span className="red-check-bullet" aria-hidden="true">✔</span> 3-Year Diploma Recognized by KSNC &amp; Govt.</li>
                        <li><span className="red-check-bullet" aria-hidden="true">✔</span> Daily Bedside Nursing &amp; First Aid Training</li>
                        <li><span className="red-check-bullet" aria-hidden="true">✔</span> Maternal &amp; Community Health Field Postings</li>
                        <li><span className="red-check-bullet" aria-hidden="true">✔</span> Career Pathway to Post-Basic B.Sc. Nursing</li>
                      </>
                    )}
                  </ul>

                  <div className="course-card-actions">
                    <button
                      className="btn-card-apply-red"
                      type="button"
                      onClick={() => openApplyModal(course.title)}
                      aria-label={`Apply Now for ${course.title}`}
                    >
                      <span>Apply Now</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>

                    <Link
                      to={`/courses#${course.id}`}
                      className="btn-card-details"
                      aria-label={`View full details for ${course.title}`}
                    >
                      <span>View Details</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
