/**
 * SMT. M. C. VASANTHA COLLEGE OF NURSING
 * Interactive Application Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure body scroll is unlocked on initial page load
  document.body.style.overflow = '';

  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const isExpanded = navLinks.classList.contains('mobile-open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile menu on clicking any link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close mobile menu if clicked outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        navLinks.classList.remove('mobile-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. Header shadow on scroll
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  });

  // 3. Admission Application Modal Logic
  const applyModal = document.getElementById('applyModal');
  const openModalBtns = document.querySelectorAll('.open-apply-modal');
  const closeModalBtns = document.querySelectorAll('.close-modal');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const courseName = btn.getAttribute('data-course');
      if (courseName && document.getElementById('modalCourseSelect')) {
        document.getElementById('modalCourseSelect').value = courseName;
      }
      openModal(applyModal);
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Close modal when clicking outside dialog
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  function openModal(modal) {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = '';
  }

  // 4. Application Form Submission
  const admissionForms = document.querySelectorAll('.admission-ajax-form');
  admissionForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="full_name"]')?.value || 'Student';
      const course = form.querySelector('[name="course"]')?.value || 'Nursing Program';

      closeAllModals();
      showToast(`Thank you, ${name}! Your application for ${course} (2026-27) has been received. Our admission cell will contact you shortly.`);
      form.reset();
    });
  });

  // 5. Brochure Download Handler
  const brochureBtns = document.querySelectorAll('.download-brochure-btn');
  brochureBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      generateMockDownload('Smt_MC_Vasantha_College_of_Nursing_Brochure_2026-27.pdf', 'College Information Brochure (2026-27)');
    });
  });

  // 6. Syllabus Download Handler
  const syllabusBtns = document.querySelectorAll('.download-syllabus-btn');
  syllabusBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const course = btn.getAttribute('data-course') || 'B.Sc. Nursing';
      const filename = course.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_syllabus.pdf';
      generateMockDownload(filename, `${course} Official Syllabus`);
    });
  });

  // 7. Facility Details Modal Handler
  const facilityDetailBtns = document.querySelectorAll('.btn-fac-details, .btn-fac-link');
  const facilityModal = document.getElementById('facilityModal');
  const facilityModalTitle = document.getElementById('facilityModalTitle');
  const facilityModalDesc = document.getElementById('facilityModalDesc');
  const facilityModalImg = document.getElementById('facilityModalImg');

  const facilityData = {
    'Nursing Foundation Lab': {
      desc: 'Our Nursing Foundation Lab is equipped with advanced clinical adult and pediatric manikins, simulated patient hospital beds, medical charting units, and demonstration kits for mastering bed making, vital signs, aseptic techniques, injections, and patient hygiene.',
      img: 'images/hero_students.jpg'
    },
    'Maternity Simulation Lab': {
      desc: 'Dedicated to Obstetrics & Gynaecological Nursing, featuring advanced childbirth simulators, neonatal resuscitation warmers, fetal monitoring equipment, and delivery instruments for safe, realistic labor and postpartum clinical practice.',
      img: 'images/maternity_lab.jpg'
    },
    'Nutrition Lab': {
      desc: 'A modern food science and dietetics laboratory equipped with cooking stations, nutritional assessment charts, precision dietary scales, and food model displays for planning therapeutic and community diet plans.',
      img: 'images/nutrition_lab.jpg'
    },
    'Anatomy & Museum': {
      desc: 'Features life-sized human skeleton specimens, detailed anatomical organ models, preserved biological specimens, nervous and circulatory charts for deep conceptual learning of Human Anatomy and Physiology.',
      img: 'images/anatomy_museum.jpg'
    },
    'Computer Lab': {
      desc: 'High-speed internet-connected workstations loaded with healthcare informatics software, research journal portals, and medical database access to cultivate digital healthcare documentation and research proficiency.',
      img: 'images/computer_lab.jpg'
    },
    'Well Equipped Library': {
      desc: 'Extensive repository of over 3,000 nursing textbooks, international medical journals, national clinical publications, and an e-library section with digital access to Helinet RGUHS consortium databases.',
      img: 'images/library_room.jpg'
    },
    'Multi-Speciality Hospital Postings': {
      desc: 'Intensive clinical rotations at our 750+ bed affiliated BRIMS District Hospital and partner super-specialty hospitals, providing daily bedside learning in General Medicine, Surgery, ICU, Trauma, and Emergency Casualty.',
      img: 'images/hospital_postings.jpg'
    },
    'Community Health Training': {
      desc: 'Direct field postings in urban (UHTC) and rural (RHTC) public healthcare centers, conducting school screenings, immunization drives, maternal-child nutrition surveys, and free community medical camps.',
      img: 'images/community_health.jpg'
    },
    'Hostel & Mess': {
      desc: 'Safe, secure on-campus accommodation for girls with CCTV surveillance, resident warden supervision, hygienic dining mess providing wholesome nutrition, study halls, and 24/7 security.',
      img: 'images/hostel.jpg'
    },
    'Classrooms': {
      desc: 'Spacious, well-ventilated academic lecture halls equipped with modern audio-visual projection systems, ergonomic seating, and digital demonstration facilities for interactive conceptual learning.',
      img: 'images/classrooms.jpg'
    },
    'Transportation Facility': {
      desc: 'College bus fleet ensuring comfortable, punctual transport for students between the campus, clinical hospital postings, urban health centers, rural community camps, and key residential pick-up points.',
      img: 'images/college_bus.jpg'
    },
    'Campus & Surroundings': {
      desc: 'Peaceful, pollution-free, green campus setting situated at Shahpur Gate Gunnalli Road, Bidar, providing a serene and focused educational environment for healthcare professionals.',
      img: 'images/college_building.jpg'
    }
  };

  facilityDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.getAttribute('data-facility') || btn.closest('.fac-detail-card, .fac-item-card')?.querySelector('.fac-card-title, .fac-item-title')?.innerText?.trim();
      if (title && facilityData[title]) {
        if (facilityModalTitle) facilityModalTitle.innerText = title;
        if (facilityModalDesc) facilityModalDesc.innerText = facilityData[title].desc;
        if (facilityModalImg) facilityModalImg.src = facilityData[title].img;
        openModal(facilityModal);
      }
    });
  });

  // Facility Category Filtering
  const facFilterBtns = document.querySelectorAll('.fac-filter-btn');
  const facDetailCards = document.querySelectorAll('.fac-detail-card');
  if (facFilterBtns.length > 0 && facDetailCards.length > 0) {
    facFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        facFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        facDetailCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 8. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you for contacting Smt. M. C. Vasantha College of Nursing! We will respond within 24 hours.');
      contactForm.reset();
    });
  }

  // Toast Function
  function showToast(message) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalToast';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M8 12l2.5 2.5L16 9"/></svg> <span>${message}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  function generateMockDownload(filename, title) {
    const blob = new Blob([
      `SMT. M. C. VASANTHA COLLEGE OF NURSING\nSabah Education Trust (R)\nRecognised by Govt. of Karnataka, KSNC & RGUHS Bangalore\n\nOfficial Document: ${title}\nAcademic Year: 2026-27\n\nCampus: Shahpur Gate Gunnalli Road, Bidar - 585 403, Karnataka, India\nHelpline: 9512592211 / 9913377195\n\nThank you for downloading this document.`
    ], { type: 'text/plain' });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast(`Downloading: ${title}...`);
  }

  // 9. Floating Back-to-Top Button
  const backTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backTopBtn?.classList.add('visible');
    } else {
      backTopBtn?.classList.remove('visible');
    }
  });

  backTopBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 10. FAQ Accordion Logic
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parentItem = trigger.closest('.faq-item');
      const isOpen = parentItem.classList.contains('open');

      // Close other open FAQ items for accordion behavior
      const parentList = trigger.closest('.faq-list');
      if (parentList) {
        parentList.querySelectorAll('.faq-item').forEach(item => {
          if (item !== parentItem) {
            item.classList.remove('open');
            item.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
          }
        });
      }

      parentItem.classList.toggle('open');
      trigger.setAttribute('aria-expanded', !isOpen);
    });
  });

  // 11. Campus Photo Gallery Filter Tabs
  const galleryTabBtns = document.querySelectorAll('.gallery-tab-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  galleryTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      galleryTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      galleryCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 12. Gallery Lightbox Modal Logic
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxTag = document.getElementById('lightboxTag');

  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img')?.src;
      const title = card.querySelector('.gallery-card-title')?.innerText;
      const tag = card.querySelector('.gallery-tag-pill')?.innerText;

      if (lightboxModal && lightboxImg) {
        lightboxImg.src = img || '';
        if (lightboxTitle) lightboxTitle.innerText = title || 'Campus Facility';
        if (lightboxTag) lightboxTag.innerText = tag || 'Vasantha Campus';
        openModal(lightboxModal);
      }
    });
  });

  // 13. 4-Year Clinical Roadmap Tab Switcher
  const roadmapTabBtns = document.querySelectorAll('.roadmap-tab-btn');
  const roadmapYearCards = document.querySelectorAll('.roadmap-year-card');

  roadmapTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetYear = btn.getAttribute('data-year');

      roadmapTabBtns.forEach(b => b.classList.remove('active'));
      roadmapYearCards.forEach(card => card.classList.remove('active'));

      btn.classList.add('active');
      const targetCard = document.getElementById(`roadmapYear${targetYear}`);
      if (targetCard) {
        targetCard.classList.add('active');
      }
    });
  });

  // 14. Sticky Quick Nav In-Page Smooth Scroll & Active Highlighter
  const quickNavPills = document.querySelectorAll('.quick-nav-pill');
  quickNavPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      const targetId = pill.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          const headerOffset = 130;
          const elementPosition = targetElem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          quickNavPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
        }
      }
    });
  });

  // 15. Virtual Campus Tour Modal Walkthrough
  const tourModal = document.getElementById('tourModal');
  const startTourBtns = document.querySelectorAll('.open-tour-modal');
  startTourBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(tourModal);
    });
  });
});

