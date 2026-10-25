import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export default function Contact() {
  const { showToast, openApplyModal } = useModal();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'B.Sc. Nursing',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast(
      `Thank you, ${form.name || 'Friend'}! Your enquiry regarding ${form.course} has been received. Our campus admission desk will call you shortly.`
    );
    setForm({
      name: '',
      phone: '',
      email: '',
      course: 'B.Sc. Nursing',
      message: ''
    });
  };

  return (
    <main>
      {/* PAGE BANNER */}
      <section className="page-banner-strip" aria-label="Contact Us Banner">
        <div className="container">
          <div className="page-banner-inner">
            <div className="banner-left-text">
              <div className="banner-breadcrumb-link">
                <Link to="/">Home</Link> &gt; <span>Contact Us</span>
              </div>
              <h1 className="banner-main-title">
                Contact &amp; <span className="gold-text">Campus Visit</span>
              </h1>
              <p className="banner-sub-p">
                We welcome prospective students and parents to visit our campus in Bidar. Get in touch for admission enquiries, syllabus details and campus visits.
              </p>
            </div>

            <div className="banner-right-visual">
              <img src="/images/college_building.jpg" alt="Smt. M. C. Vasantha College Campus Building" />
            </div>
            <div className="banner-ribbon-swoosh">
              <div className="ribbon-script-stack">
                Care<br />
                Skill<br />
                Success
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS & ENQUIRY FORM */}
      <section className="section-contact-content" aria-label="Contact Information and Enquiries">
        <div className="container">
          {/* 3 Contact Cards */}
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon-box crimson">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="contact-card-title">Campus Address</h3>
                <p className="contact-card-desc">
                  Smt. M. C. Vasantha College of Nursing<br />
                  Shahpur Gate Gunnalli Road, Bidar - 585 403, Karnataka, India
                </p>
                <div className="contact-card-highlight red">
                  Near Shahpur Gate Junction
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon-box blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 className="contact-card-title">Phone &amp; Admissions</h3>
                <p className="contact-card-desc">
                  <a href="tel:9512592211" className="contact-phone-link">
                    +91 9512592211
                  </a>
                  <br />
                  <a href="tel:8154968596" className="contact-phone-link">
                    +91 8154968596
                  </a>
                </p>
                <div className="contact-card-highlight green">
                  Lines Open: 9:00 AM – 5:30 PM
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon-box amber">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="contact-card-title">Email Support</h3>
                <p className="contact-card-desc">
                  <a href="mailto:admissions@smtmcvasanthanursing.com">admissions@smtmcvasanthanursing.com</a>
                  <br />
                  <a href="mailto:info@smtmcvasanthanursing.com">info@smtmcvasanthanursing.com</a>
                </p>
                <div className="contact-card-highlight gray">
                  Response within 24 hours
                </div>
              </div>
            </div>
          </div>

          {/* Form + Directions */}
          <div className="contact-form-transit-layout">
            {/* Contact Enquiry Form */}
            <div className="contact-form-card">
              <div className="tag-red-caps">SEND US A MESSAGE</div>
              <h3 className="contact-form-heading">
                Admission &amp; General Enquiries
              </h3>
              <p className="contact-form-sub">
                Have questions about eligibility, course fees, hostel or hospital postings? Send us a message below.
              </p>

              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    className="contact-input"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="contact-form-row-2">
                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="10-digit mobile"
                      required
                      pattern="[0-9]{10}"
                      className="contact-input"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email@domain.com"
                      className="contact-input"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Interested Course</label>
                  <select
                    name="course"
                    className="contact-select"
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                  >
                    <option value="B.Sc. Nursing">B.Sc. Nursing (4 Years Degree)</option>
                    <option value="GNM Nursing">GNM Nursing (3 Years Diploma)</option>
                    <option value="General Enquiry">General Campus Visit / Enquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Your Message / Query *</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="How can we assist you with admissions or campus visits?"
                    required
                    className="contact-textarea"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-form-submit">
                  Send Message →
                </button>
              </form>
            </div>

            {/* Transportation & Campus Location Guide */}
            <div>
              <div className="transit-guide-card">
                <div className="tag-red-caps">CAMPUS ACCESSIBILITY</div>
                <h3 className="transit-guide-heading">
                  How to Reach Our Campus
                </h3>

                <ul className="transit-steps-list">
                  <li className="transit-step-item">
                    <div className="transit-step-num">1</div>
                    <div>
                      <strong>From Bidar Central Bus Stand:</strong> Just 3.5 km away. Frequent auto-rickshaws, city buses, and college transport buses are available directly to Shahpur Gate Gunnalli Road.
                    </div>
                  </li>
                  <li className="transit-step-item">
                    <div className="transit-step-num">2</div>
                    <div>
                      <strong>From Bidar Railway Station:</strong> Approximately 4.2 km. Direct taxi and auto connections via Mailoor - Shahpur road.
                    </div>
                  </li>
                  <li className="transit-step-item">
                    <div className="transit-step-num">3</div>
                    <div>
                      <strong>College Bus Fleet:</strong> Dedicated college buses run daily across all key residential neighborhoods and rural feeder points in Bidar district for day scholars.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Campus Tour Box */}
              <div className="campus-tour-card-dark">
                <h4 className="campus-tour-title">
                  Schedule a Personal Campus Tour
                </h4>
                <p className="campus-tour-desc">
                  Experience our high-fidelity simulation labs, classrooms, anatomy museum, and girls hostel in person. Parents and guardians are warmly welcomed.
                </p>
                <button
                  className="btn-card-apply-red"
                  type="button"
                  style={{ width: 'auto', padding: '10px 24px' }}
                  onClick={() => openApplyModal('B.Sc. Nursing')}
                >
                  <span>Book Campus Visit</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Location Section */}
          <div className="map-embed-wrapper section-title-spacing" aria-label="Campus Location Map">
            <div className="map-header">
              <div className="map-header-info">
                <div className="map-pin-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div className="map-header-title">Smt. M. C. Vasantha College of Nursing Campus Location</div>
                  <div className="map-header-sub">Shahpur Gate Gunnalli Road, Bidar - 585 403, Karnataka, India</div>
                </div>
              </div>
              <a
                href="https://maps.google.com/maps?q=Shahpur+Gate+Gunnalli+Road+Bidar+Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-open-maps"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span>Get Driving Directions</span>
              </a>
            </div>
            <iframe
              className="map-iframe"
              src="https://maps.google.com/maps?q=Shahpur%20Gate%20Gunnalli%20Road,%20Bidar,%20Karnataka&t=&z=14&ie=UTF8&iwloc=&output=embed"
              title="Smt. M. C. Vasantha College of Nursing Campus Location Map"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
