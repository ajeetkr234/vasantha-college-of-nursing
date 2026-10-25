import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  // Apply Modal state
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('B.Sc. Nursing');

  // Facility Modal state
  const [facilityModalOpen, setFacilityModalOpen] = useState(false);
  const [currentFacility, setCurrentFacility] = useState({
    title: 'Nursing Foundation Lab',
    desc: 'Our Nursing Foundation Lab is equipped with advanced clinical adult and pediatric manikins, simulated patient hospital beds, medical charting units, and demonstration kits for mastering bed making, vital signs, aseptic techniques, injections, and patient hygiene.',
    img: '/images/hero_students.jpg'
  });

  // Tour Modal state
  const [tourModalOpen, setTourModalOpen] = useState(false);

  // Lightbox Modal state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState({
    img: '',
    title: '',
    tag: ''
  });

  // Toast notification state
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const openApplyModal = (course = 'B.Sc. Nursing') => {
    setSelectedCourse(course);
    setApplyModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeApplyModal = () => {
    setApplyModalOpen(false);
    document.body.style.overflow = '';
  };

  const openFacilityModal = (facility) => {
    if (facility) {
      setCurrentFacility(facility);
      setFacilityModalOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeFacilityModal = () => {
    setFacilityModalOpen(false);
    document.body.style.overflow = '';
  };

  const openTourModal = () => {
    setTourModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeTourModal = () => {
    setTourModalOpen(false);
    document.body.style.overflow = '';
  };

  const openLightbox = (img, title = 'Campus Facility', tag = 'Campus Facilities') => {
    setLightboxData({ img, title, tag });
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const downloadBrochure = (filename = 'Smt_MC_Vasantha_College_of_Nursing_Brochure_2026-27.pdf', title = 'College Information Brochure (2026-27)') => {
    const textContent = `SMT. M. C. VASANTHA COLLEGE OF NURSING\nShri Shivaling Vidhya Vardhak Education Society (R) • ESTD. 1991\nRecognised by Govt. of Karnataka, KSNC & RGUHS Bangalore\n\nOfficial Document: ${title}\nAcademic Year: 2026-27\n\nCampus: Shahpur Gate Gunnalli Road, Bidar - 585 403, Karnataka, India\nHelpline: 9512592211 / 9913377195\n\nThank you for downloading this document.`;
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Downloading: ${title}...`);
  };

  return (
    <ModalContext.Provider
      value={{
        applyModalOpen,
        selectedCourse,
        openApplyModal,
        closeApplyModal,
        facilityModalOpen,
        currentFacility,
        openFacilityModal,
        closeFacilityModal,
        tourModalOpen,
        openTourModal,
        closeTourModal,
        lightboxOpen,
        lightboxData,
        openLightbox,
        closeLightbox,
        toastMessage,
        showToast,
        downloadBrochure
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
