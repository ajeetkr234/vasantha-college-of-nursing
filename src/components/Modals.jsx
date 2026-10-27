import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import { validateName, validatePhone, validateEmail } from '../utils/validators';
import { processFormSubmission } from '../utils/formNotifier';

export default function Modals() {
  const {
    applyModalOpen,
    selectedCourse,
    closeApplyModal,
    facilityModalOpen,
    currentFacility,
    closeFacilityModal,
    tourModalOpen,
    closeTourModal,
    lightboxOpen,
    lightboxData,
    closeLightbox,
    toastMessage,
    showToast,
    openApplyModal
  } = useModal();

  const [formData, setFormData] = useState({
    fullName: '',
    course: selectedCourse || 'B.Sc. Nursing',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Sync course when prop changes
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, course: selectedCourse || 'B.Sc. Nursing' }));
  }, [selectedCourse]);

  // Real-time input handlers
  const handleNameChange = (e) => {
    let val = e.target.value;

    // Check if starting character is a digit
    if (/^\d/.test(val)) {
      setErrors(prev => ({
        ...prev,
        fullName: 'Name cannot start with a number. Please start with a letter.'
      }));
      val = val.replace(/^\d+/, '');
    } else if (/\d/.test(val)) {
      setErrors(prev => ({
        ...prev,
        fullName: 'Name cannot contain numbers. Only letters and spaces are allowed.'
      }));
      val = val.replace(/\d/g, '');
    } else if (touched.fullName) {
      const res = validateName(val, 'Candidate Full Name', true);
      setErrors(prev => ({ ...prev, fullName: res.isValid ? '' : res.error }));
    }

    setFormData(prev => ({ ...prev, fullName: val }));
  };

  const handlePhoneChange = (e) => {
    // Only allow digits, max 10
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, phone: val }));

    if (touched.phone || val.length > 0) {
      const res = validatePhone(val, true);
      setErrors(prev => ({ ...prev, phone: res.isValid ? '' : res.error }));
    }
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setFormData(prev => ({ ...prev, email: val }));

    if (touched.email && val.trim()) {
      const res = validateEmail(val, false);
      setErrors(prev => ({ ...prev, email: res.isValid ? '' : res.error }));
    } else if (!val.trim()) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    if (field === 'fullName') {
      const res = validateName(formData.fullName, 'Candidate Full Name', true);
      setErrors(prev => ({ ...prev, fullName: res.isValid ? '' : res.error }));
    } else if (field === 'phone') {
      const res = validatePhone(formData.phone, true);
      setErrors(prev => ({ ...prev, phone: res.isValid ? '' : res.error }));
    } else if (field === 'email') {
      if (formData.email.trim()) {
        const res = validateEmail(formData.email, false);
        setErrors(prev => ({ ...prev, email: res.isValid ? '' : res.error }));
      } else {
        setErrors(prev => ({ ...prev, email: '' }));
      }
    }
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({ fullName: true, phone: true, email: true });

    const nameRes = validateName(formData.fullName, 'Candidate Full Name', true);
    const phoneRes = validatePhone(formData.phone, true);
    const emailRes = validateEmail(formData.email, false);

    const newErrors = {
      fullName: nameRes.isValid ? '' : nameRes.error,
      phone: phoneRes.isValid ? '' : phoneRes.error,
      email: emailRes.isValid ? '' : emailRes.error
    };

    setErrors(newErrors);

    if (!nameRes.isValid || !phoneRes.isValid || !emailRes.isValid) {
      // Focus first error field
      if (!nameRes.isValid) {
        document.getElementById('modalFullName')?.focus();
      } else if (!phoneRes.isValid) {
        document.getElementById('modalPhone')?.focus();
      } else if (!emailRes.isValid) {
        document.getElementById('modalEmail')?.focus();
      }
      return;
    }

    const applicantName = formData.fullName.trim();
    const chosenCourse = formData.course || 'B.Sc. Nursing';

    // 1. Process WhatsApp Forwarding + Email Notification
    processFormSubmission({
      type: 'admission',
      data: {
        fullName: applicantName,
        course: chosenCourse,
        phone: formData.phone,
        email: formData.email
      }
    });

    closeApplyModal();
    showToast(
      `Thank you, ${applicantName}! Forwarding your application for ${chosenCourse} to our WhatsApp Admission Desk (+91 9512592211)...`
    );
    setFormData({
      fullName: '',
      course: 'B.Sc. Nursing',
      phone: '',
      email: ''
    });
    setErrors({});
    setTouched({});
  };

  return (
    <>
      {/* Toast Notice */}
      {toastMessage && (
        <div className="toast-notice show" id="globalToast">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l2.5 2.5L16 9" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Facility Details Modal */}
      {facilityModalOpen && (
        <div
          className="modal-overlay active"
          id="facilityModal"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target.id === 'facilityModal') closeFacilityModal();
          }}
        >
          <div className="modal-dialog" style={{ maxWidth: '600px' }}>
            <button className="modal-close-btn" aria-label="Close dialog" onClick={closeFacilityModal}>
              ✕
            </button>
            <div style={{ width: '100%', height: '220px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '16px' }}>
              <img
                src={currentFacility.img || '/images/hero_students.jpg'}
                alt={currentFacility.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h3 className="modal-title">{currentFacility.title}</h3>
            <p className="modal-sub" style={{ lineHeight: 1.6, fontSize: '0.88rem', color: 'var(--text-dark)', marginBottom: '20px' }}>
              {currentFacility.desc}
            </p>
            {currentFacility.keyPoints && (
              <ul style={{ marginBottom: '20px', paddingLeft: '18px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                {currentFacility.keyPoints.map((pt, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{pt}</li>
                ))}
              </ul>
            )}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                className="btn-pill-navy"
                type="button"
                style={{ width: 'auto', padding: '8px 18px', fontSize: '0.84rem' }}
                onClick={() => {
                  closeFacilityModal();
                  openApplyModal('B.Sc. Nursing');
                }}
              >
                Enquire Admissions →
              </button>
              <button
                className="btn-card-apply-red"
                type="button"
                style={{ width: 'auto', padding: '8px 22px' }}
                onClick={closeFacilityModal}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admission Application Modal */}
      {applyModalOpen && (
        <div
          className="modal-overlay active"
          id="applyModal"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target.id === 'applyModal') closeApplyModal();
          }}
        >
          <div className="modal-dialog">
            <button className="modal-close-btn" aria-label="Close" onClick={closeApplyModal}>
              ✕
            </button>
            <h3 className="modal-title">Apply for Admission 2026-27</h3>
            <p className="modal-sub">VASANTHA GROUP OF EDUCATION, Bidar. Recognised by Govt. of Karnataka, KSNC &amp; RGUHS.</p>
            <form className="admission-ajax-form" onSubmit={handleApplySubmit} noValidate>
              <div className={`form-group ${errors.fullName ? 'has-error' : touched.fullName && formData.fullName && !errors.fullName ? 'is-valid' : ''}`}>
                <label htmlFor="modalFullName">Full Name *</label>
                <input
                  id="modalFullName"
                  type="text"
                  name="full_name"
                  placeholder="Enter full name"
                  required
                  value={formData.fullName}
                  onChange={handleNameChange}
                  onBlur={() => handleBlur('fullName')}
                  className={errors.fullName ? 'is-invalid' : ''}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'modalFullNameError' : undefined}
                />
                {errors.fullName && (
                  <div className="form-error-msg" id="modalFullNameError" role="alert">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{errors.fullName}</span>
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="modalCourseSelect">Program *</label>
                <select
                  name="course"
                  id="modalCourseSelect"
                  required
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                >
                  <option value="B.Sc. Nursing">B.Sc. Nursing (4 Years Degree)</option>
                  <option value="GNM Nursing">GNM Nursing (3 Years Diploma)</option>
                  <option value="Post B.Sc. Nursing">Post B.Sc. Nursing (2 Years Degree)</option>
                  <option value="Diploma in Pharmacy (D.Pharm)">Diploma in Pharmacy - D.Pharm (2 Years)</option>
                  <option value="Bachelor of Pharmacy (B.Pharm)">Bachelor of Pharmacy - B.Pharm (4 Years)</option>
                  <option value="Bachelor of Physiotherapy (BPT)">Bachelor of Physiotherapy - BPT (4.5 Years)</option>
                  <option value="Bachelor of Education (B.Ed)">Bachelor of Education - B.Ed (2 Years)</option>
                </select>
              </div>
              <div className={`form-group ${errors.phone ? 'has-error' : touched.phone && formData.phone.length === 10 && !errors.phone ? 'is-valid' : ''}`}>
                <label htmlFor="modalPhone">Mobile Number *</label>
                <input
                  id="modalPhone"
                  type="tel"
                  name="phone"
                  placeholder="10-digit mobile number"
                  required
                  maxLength={10}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  onBlur={() => handleBlur('phone')}
                  className={errors.phone ? 'is-invalid' : ''}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'modalPhoneError' : undefined}
                />
                {errors.phone && (
                  <div className="form-error-msg" id="modalPhoneError" role="alert">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{errors.phone}</span>
                  </div>
                )}
              </div>
              <div className={`form-group ${errors.email ? 'has-error' : touched.email && formData.email && !errors.email ? 'is-valid' : ''}`}>
                <label htmlFor="modalEmail">Email Address</label>
                <input
                  id="modalEmail"
                  type="email"
                  name="email"
                  placeholder="email@domain.com"
                  value={formData.email}
                  onChange={handleEmailChange}
                  onBlur={() => handleBlur('email')}
                  className={errors.email ? 'is-invalid' : ''}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'modalEmailError' : undefined}
                />
                {errors.email && (
                  <div className="form-error-msg" id="modalEmailError" role="alert">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>
              <button type="submit" className="btn-form-submit">
                Submit Application →
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Gallery Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="modal-overlay lightbox-modal active"
          id="lightboxModal"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target.id === 'lightboxModal') closeLightbox();
          }}
        >
          <div className="lightbox-dialog">
            <button className="lightbox-close-btn" aria-label="Close Lightbox" onClick={closeLightbox}>
              ✕
            </button>
            <div className="lightbox-image-box">
              <img id="lightboxImg" src={lightboxData.img} alt={lightboxData.title} />
            </div>
            <div className="lightbox-footer-bar">
              <div>
                <span className="lightbox-footer-tag" id="lightboxTag">
                  {lightboxData.tag}
                </span>
                <div className="lightbox-footer-title" id="lightboxTitle">
                  {lightboxData.title}
                </div>
              </div>
              <button
                className="btn-card-apply-red"
                style={{ width: 'auto', padding: '7px 18px', fontSize: '0.8rem' }}
                onClick={() => {
                  closeLightbox();
                  openApplyModal('B.Sc. Nursing');
                }}
              >
                Enquire Now →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Virtual Campus Tour Walkthrough Modal */}
      {tourModalOpen && (
        <div
          className="modal-overlay active"
          id="tourModal"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target.id === 'tourModal') closeTourModal();
          }}
        >
          <div className="modal-dialog" style={{ maxWidth: '780px' }}>
            <button className="modal-close-btn" aria-label="Close Tour" onClick={closeTourModal}>
              ✕
            </button>
            <div className="tag-red-caps">VIRTUAL CAMPUS WALKTHROUGH</div>
            <h3 className="modal-title">Welcome to VASANTHA GROUP OF EDUCATION</h3>
            <p className="modal-sub">Naubad-bhalki Road, Naubad Karnataka 585402</p>

            <div className="tour-modal-grid">
              <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-card)' }}>
                <img src="/images/hero_students.jpg" alt="Foundation Lab" style={{ width: '100%', height: '110px', objectFit: 'cover' }} />
                <div style={{ padding: '6px 8px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy-main)' }}>
                  Foundation Simulation Lab
                </div>
              </div>
              <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-card)' }}>
                <img src="/images/maternity_lab.jpg" alt="Maternity Lab" style={{ width: '100%', height: '110px', objectFit: 'cover' }} />
                <div style={{ padding: '6px 8px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy-main)' }}>
                  Maternity Sim Lab
                </div>
              </div>
              <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-card)' }}>
                <img src="/images/hospital_postings.jpg" alt="Hospital Wards" style={{ width: '100%', height: '110px', objectFit: 'cover' }} />
                <div style={{ padding: '6px 8px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy-main)' }}>
                  BRIMS Hospital Postings (750 Beds)
                </div>
              </div>
              <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-card)' }}>
                <img src="/images/anatomy_museum.jpg" alt="Anatomy Museum" style={{ width: '100%', height: '110px', objectFit: 'cover' }} />
                <div style={{ padding: '6px 8px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy-main)' }}>
                  Anatomy &amp; Physiology Museum
                </div>
              </div>
              <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-card)' }}>
                <img src="/images/hostel.jpg" alt="Hostel" style={{ width: '100%', height: '110px', objectFit: 'cover' }} />
                <div style={{ padding: '6px 8px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy-main)' }}>
                  Safe Girls Hostel &amp; Mess
                </div>
              </div>
              <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-card)' }}>
                <img src="/images/college_bus.jpg" alt="College Bus Fleet" style={{ width: '100%', height: '110px', objectFit: 'cover' }} />
                <div style={{ padding: '6px 8px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy-main)' }}>
                  Daily Clinical Bus Fleet
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '14px',
                flexWrap: 'wrap',
                borderTop: '1px solid #e2e8f0',
                paddingTop: '16px'
              }}
            >
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Want to see our campus in person? Schedule a tour with our admission counselors.
              </div>
              <button
                className="btn-card-apply-red"
                style={{ width: 'auto', padding: '9px 20px' }}
                onClick={() => {
                  closeTourModal();
                  openApplyModal('B.Sc. Nursing');
                }}
              >
                Book In-Person Campus Visit →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
