import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';

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
    course: selectedCourse,
    phone: '',
    email: ''
  });

  // Sync course when prop changes
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, course: selectedCourse }));
  }, [selectedCourse]);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const applicantName = formData.fullName || 'Student';
    const chosenCourse = formData.course || 'Nursing Program';

    closeApplyModal();
    showToast(
      `Thank you, ${applicantName}! Your application for ${chosenCourse} (2026-27) has been received. Our admission cell will contact you shortly.`
    );
    setFormData({
      fullName: '',
      course: 'B.Sc. Nursing',
      phone: '',
      email: ''
    });
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
            <p className="modal-sub">Smt. M. C. Vasantha College of Nursing, Bidar. Recognised by Govt. of Karnataka, KSNC &amp; RGUHS.</p>
            <form className="admission-ajax-form" onSubmit={handleApplySubmit}>
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Enter full name"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Program *</label>
                <select
                  name="course"
                  id="modalCourseSelect"
                  required
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                >
                  <option value="B.Sc. Nursing">B.Sc. Nursing (4 Years)</option>
                  <option value="GNM Nursing">GNM Nursing (3 Years)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="10-digit mobile number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
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
            <h3 className="modal-title">Welcome to Smt. M. C. Vasantha College of Nursing</h3>
            <p className="modal-sub">Shahpur Gate Gunnalli Road, Bidar - 585 403, Karnataka</p>

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
