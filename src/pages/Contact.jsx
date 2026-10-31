import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import {
  validateName,
  validatePhone,
  validateEmail,
  validateMessage
} from '../utils/validators';
import { processFormSubmission } from '../utils/formNotifier';

export default function Contact() {
  const { showToast, openApplyModal } = useModal();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'B.Sc. Nursing',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleNameChange = (e) => {
    let val = e.target.value;
    if (/^\d/.test(val)) {
      setErrors(prev => ({
        ...prev,
        name: 'Name cannot start with a number. Please start with a letter.'
      }));
      val = val.replace(/^\d+/, '');
    } else if (/\d/.test(val)) {
      setErrors(prev => ({
        ...prev,
        name: 'Name cannot contain numbers. Only letters and spaces are allowed.'
      }));
      val = val.replace(/\d/g, '');
    } else if (touched.name) {
      const res = validateName(val, 'Your Full Name', true);
      setErrors(prev => ({ ...prev, name: res.isValid ? '' : res.error }));
    }
    setForm(prev => ({ ...prev, name: val }));
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setForm(prev => ({ ...prev, phone: val }));
    if (touched.phone || val.length > 0) {
      const res = validatePhone(val, true);
      setErrors(prev => ({ ...prev, phone: res.isValid ? '' : res.error }));
    }
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setForm(prev => ({ ...prev, email: val }));
    if (touched.email && val.trim()) {
      const res = validateEmail(val, false);
      setErrors(prev => ({ ...prev, email: res.isValid ? '' : res.error }));
    } else if (!val.trim()) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handleMessageChange = (e) => {
    const val = e.target.value;
    setForm(prev => ({ ...prev, message: val }));
    if (touched.message) {
      const res = validateMessage(val, true, 10);
      setErrors(prev => ({ ...prev, message: res.isValid ? '' : res.error }));
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    let res = { isValid: true, error: '' };
    if (field === 'name') res = validateName(form.name, 'Your Full Name', true);
    else if (field === 'phone') res = validatePhone(form.phone, true);
    else if (field === 'email') res = validateEmail(form.email, false);
    else if (field === 'message') res = validateMessage(form.message, true, 10);
    setErrors(prev => ({ ...prev, [field]: res.isValid ? '' : res.error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({ name: true, phone: true, email: true, message: true });

    const nameRes = validateName(form.name, 'Your Full Name', true);
    const phoneRes = validatePhone(form.phone, true);
    const emailRes = validateEmail(form.email, false);
    const msgRes = validateMessage(form.message, true, 10);

    const newErrors = {
      name: nameRes.isValid ? '' : nameRes.error,
      phone: phoneRes.isValid ? '' : phoneRes.error,
      email: emailRes.isValid ? '' : emailRes.error,
      message: msgRes.isValid ? '' : msgRes.error
    };

    setErrors(newErrors);

    if (!nameRes.isValid || !phoneRes.isValid || !emailRes.isValid || !msgRes.isValid) {
      if (!nameRes.isValid) document.getElementById('contactName')?.focus();
      else if (!phoneRes.isValid) document.getElementById('contactPhone')?.focus();
      else if (!emailRes.isValid) document.getElementById('contactEmail')?.focus();
      else if (!msgRes.isValid) document.getElementById('contactMessage')?.focus();
      return;
    }

    processFormSubmission({
      type: 'contact',
      data: {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        course: form.course,
        message: form.message.trim()
      }
    });

    showToast(
      `Thank you, ${form.name.trim()}! Forwarding your enquiry to our WhatsApp Admission Desk (+91 9512592211)...`
    );
    setForm({
      name: '',
      phone: '',
      email: '',
      course: 'B.Sc. Nursing',
      message: ''
    });
    setErrors({});
    setTouched({});
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
              <img
                src="/images/college_building.jpg"
                alt="VASANTHA GROUP OF EDUCATION Campus Building & Admission Office in Bidar"
                className="img-pos-building"
                loading="eager"
              />
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
                  VASANTHA GROUP OF EDUCATION<br />
                  Naubad-bhalki Road, Naubad Karnataka 585402
                </p>
                <div className="contact-card-highlight red">
                  Naubad-Bhalki Road, Naubad
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
                  <a href="tel:9913377195" className="contact-phone-link">
                    +91 9913377195
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
                  <a href="mailto:sarvgnya25@gmail.com">sarvgnya25@gmail.com</a>
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
                Have questions about eligibility, course fees, or hospital postings? Send us a message below.
              </p>

              <form id="contactForm" onSubmit={handleSubmit} noValidate>
                <div className={`form-group ${errors.name ? 'has-error' : touched.name && form.name && !errors.name ? 'is-valid' : ''}`}>
                  <label htmlFor="contactName">Your Full Name *</label>
                  <input
                    id="contactName"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    className={`contact-input ${errors.name ? 'is-invalid' : ''}`}
                    value={form.name}
                    onChange={handleNameChange}
                    onBlur={() => handleBlur('name')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'contactNameError' : undefined}
                  />
                  {errors.name && (
                    <div className="form-error-msg" id="contactNameError" role="alert">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div className="contact-form-row-2">
                  <div className={`form-group ${errors.phone ? 'has-error' : touched.phone && form.phone.length === 10 && !errors.phone ? 'is-valid' : ''}`}>
                    <label htmlFor="contactPhone">Mobile Number *</label>
                    <input
                      id="contactPhone"
                      type="tel"
                      name="phone"
                      placeholder="10-digit mobile"
                      required
                      maxLength={10}
                      className={`contact-input ${errors.phone ? 'is-invalid' : ''}`}
                      value={form.phone}
                      onChange={handlePhoneChange}
                      onBlur={() => handleBlur('phone')}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'contactPhoneError' : undefined}
                    />
                    {errors.phone && (
                      <div className="form-error-msg" id="contactPhoneError" role="alert">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>
                  <div className={`form-group ${errors.email ? 'has-error' : touched.email && form.email && !errors.email ? 'is-valid' : ''}`}>
                    <label htmlFor="contactEmail">Email Address</label>
                    <input
                      id="contactEmail"
                      type="email"
                      name="email"
                      placeholder="email@domain.com"
                      className={`contact-input ${errors.email ? 'is-invalid' : ''}`}
                      value={form.email}
                      onChange={handleEmailChange}
                      onBlur={() => handleBlur('email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'contactEmailError' : undefined}
                    />
                    {errors.email && (
                      <div className="form-error-msg" id="contactEmailError" role="alert">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contactCourse">Interested Academic Program</label>
                  <select
                    id="contactCourse"
                    name="course"
                    className="contact-select"
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                  >
                    <option value="B.Sc. Nursing">B.Sc. Nursing (4 Years Degree)</option>
                    <option value="GNM Nursing">GNM Nursing (3 Years Diploma)</option>
                    <option value="Post B.Sc. Nursing">Post Basic B.Sc. Nursing (2 Years Degree)</option>
                    <option value="M.Sc. Nursing">M.Sc. Nursing (2 Years Postgraduate Degree)</option>
                    <option value="Diploma in Pharmacy (D.Pharm)">Diploma in Pharmacy - D.Pharm (2 Years Diploma)</option>
                    <option value="Bachelor of Pharmacy (B.Pharm)">Bachelor of Pharmacy - B.Pharm (4 Years Degree)</option>
                    <option value="Bachelor of Physiotherapy (BPT)">Bachelor of Physiotherapy - BPT (4.5 Years Degree)</option>
                    <option value="Bachelor of Education (B.Ed)">Bachelor of Education - B.Ed (2 Years Degree)</option>
                    <option value="General Enquiry">General Campus Visit / Enquiry</option>
                  </select>
                </div>

                <div className={`form-group ${errors.message ? 'has-error' : touched.message && form.message && !errors.message ? 'is-valid' : ''}`}>
                  <label htmlFor="contactMessage">Your Message / Query *</label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    rows="4"
                    placeholder="How can we assist you with admissions or campus visits?"
                    required
                    className={`contact-textarea ${errors.message ? 'is-invalid' : ''}`}
                    value={form.message}
                    onChange={handleMessageChange}
                    onBlur={() => handleBlur('message')}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'contactMsgError' : undefined}
                  ></textarea>
                  {errors.message && (
                    <div className="form-error-msg" id="contactMsgError" role="alert">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{errors.message}</span>
                    </div>
                  )}
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
                      <strong>From Bidar Central Bus Stand:</strong> Just 3.5 km away. Frequent auto-rickshaws, city buses, and college transport buses are available directly to Naubad-bhalki Road, Naubad.
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
                  Experience our high-fidelity simulation labs, classrooms, anatomy museum, and 50-bedded attached hospital in person. Parents and guardians are warmly welcomed.
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
                  <div className="map-header-title">VASANTHA GROUP OF EDUCATION Campus Location</div>
                  <div className="map-header-sub">Naubad-bhalki Road, Naubad Karnataka 585402</div>
                </div>
              </div>
              <a
                href="https://maps.google.com/maps?q=Naubad-Bhalki+Road+Naubad+Karnataka+585402"
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
              src="https://maps.google.com/maps?q=Naubad-Bhalki%20Road,%20Naubad,%20Karnataka%20585402&t=&z=14&ie=UTF8&iwloc=&output=embed"
              title="VASANTHA GROUP OF EDUCATION Campus Location Map"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
