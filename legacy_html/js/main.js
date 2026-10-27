/**
 * VASANTHA GROUP OF EDUCATION
 * Interactive Application Scripts
 */

// Guarantee that upon reload / refresh, the page ALWAYS starts from the top
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('pageshow', () => {
  window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', () => {
  // Ensure body scroll is unlocked on initial page load and reset to top
  document.body.style.overflow = '';
  window.scrollTo(0, 0);

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

  // 2. Smart Sticky Navbar: Hide on scroll down, show on scroll up (backward)
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Shadow on scroll
          if (currentScrollY > 20) {
            siteHeader.classList.add('scrolled');
          } else {
            siteHeader.classList.remove('scrolled');
          }

          // If mobile drawer is open, keep navbar visible
          const isMobileOpen = document.getElementById('navLinks')?.classList.contains('mobile-open');
          if (isMobileOpen) {
            siteHeader.classList.remove('header-hidden');
            ticking = false;
            return;
          }

          // Always visible near top of page
          if (currentScrollY <= 80) {
            siteHeader.classList.remove('header-hidden');
          } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
            // Scrolling down towards bottom -> hide navbar
            siteHeader.classList.add('header-hidden');
          } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 6) {
            // Scrolling backward / up -> show navbar
            siteHeader.classList.remove('header-hidden');
          }

          lastScrollY = Math.max(0, currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

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

  // ==========================================================================
  // Form Validation Engine & Live Feedback Helpers
  // ==========================================================================
  function setFieldError(input, errorMsg) {
    if (!input) return;
    const parentGroup = input.closest('.form-group') || input.parentElement;
    clearFieldError(input);

    if (errorMsg) {
      input.classList.add('is-invalid');
      input.setAttribute('aria-invalid', 'true');
      if (parentGroup) parentGroup.classList.add('has-error');

      const errDiv = document.createElement('div');
      errDiv.className = 'form-error-msg';
      errDiv.setAttribute('role', 'alert');
      errDiv.innerHTML = `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg> <span>${errorMsg}</span>`;

      if (parentGroup) {
        parentGroup.appendChild(errDiv);
      } else {
        input.insertAdjacentElement('afterend', errDiv);
      }
    }
  }

  function clearFieldError(input) {
    if (!input) return;
    input.classList.remove('is-invalid');
    input.removeAttribute('aria-invalid');
    const parentGroup = input.closest('.form-group') || input.parentElement;
    if (parentGroup) {
      parentGroup.classList.remove('has-error');
      const existing = parentGroup.querySelector('.form-error-msg');
      if (existing) existing.remove();
    }
  }

  function validateNameVal(val, fieldLabel = 'Full Name', isRequired = true) {
    const trimmed = (val || '').trim();
    if (!trimmed) {
      return isRequired ? `${fieldLabel} is required.` : '';
    }
    if (/^\d/.test(trimmed)) {
      return `${fieldLabel} cannot start with a number. Please start with a letter.`;
    }
    if (!/^[a-zA-Z]/.test(trimmed)) {
      return `${fieldLabel} must begin with an alphabet letter.`;
    }
    if (/\d/.test(trimmed)) {
      return `${fieldLabel} cannot contain numbers. Only letters and spaces are allowed.`;
    }
    if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
      return `${fieldLabel} can only contain letters, spaces, and punctuation like dots or hyphens.`;
    }
    if (trimmed.length < 3) {
      return `${fieldLabel} must be at least 3 characters long.`;
    }
    if (trimmed.length > 60) {
      return `${fieldLabel} cannot exceed 60 characters.`;
    }
    return '';
  }

  function validatePhoneVal(val, isRequired = true) {
    const raw = (val || '').trim();
    if (!raw) return isRequired ? 'Mobile number is required.' : '';
    let cleaned = raw.replace(/[\s-]/g, '');
    if (cleaned.startsWith('+91')) cleaned = cleaned.slice(3);
    else if (cleaned.startsWith('91') && cleaned.length === 12) cleaned = cleaned.slice(2);
    else if (cleaned.startsWith('0') && cleaned.length === 11) cleaned = cleaned.slice(1);

    if (/[^\d]/.test(cleaned)) return 'Mobile number must contain digits only.';
    if (cleaned.length > 0 && !/^[6-9]/.test(cleaned)) return 'Mobile number must start with 6, 7, 8, or 9.';
    if (cleaned.length !== 10) return `Please enter a complete 10-digit mobile number (${cleaned.length}/10 entered).`;
    if (/^(\d)\1{9}$/.test(cleaned)) return 'Please enter a valid, active mobile number.';
    return '';
  }

  function validateEmailVal(val, isRequired = false) {
    const trimmed = (val || '').trim();
    if (!trimmed) return isRequired ? 'Email address is required.' : '';
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(trimmed)) return 'Please enter a valid email address (e.g. student@gmail.com).';
    const parts = trimmed.split('.');
    if (!parts[parts.length - 1] || parts[parts.length - 1].length < 2) return 'Please enter a valid email domain.';
    return '';
  }

  function validatePcbVal(val, isRequired = true) {
    const trimmed = (val || '').trim();
    if (!trimmed) return isRequired ? '12th / PUC PCB Marks are required.' : '';
    if (/^(result\s*awaited|appearing|awaiting|pending)/i.test(trimmed)) return '';
    const numMatch = trimmed.match(/^(\d{1,3}(?:\.\d{1,2})?)\s*%?$/) || trimmed.match(/(\d{1,3}(?:\.\d{1,2})?)/);
    if (numMatch) {
      const v = parseFloat(numMatch[1]);
      if (v < 35) return 'Minimum eligibility requires at least 35% in PCB.';
      if (v > 100) return 'PCB Marks percentage cannot exceed 100%.';
      return '';
    }
    return "Please enter PCB percentage (e.g. 70%) or 'Result Awaited'.";
  }

  function validateCityVal(val, isRequired = true) {
    const trimmed = (val || '').trim();
    if (!trimmed) return isRequired ? 'Permanent City & State is required.' : '';
    if (/^\d/.test(trimmed)) return 'City & State cannot start with a number.';
    if (!/^[a-zA-Z]/.test(trimmed)) return 'City & State must start with an alphabet letter.';
    if (trimmed.length < 3) return 'Please enter a valid City & State (e.g. Bidar, Karnataka).';
    return '';
  }

  function validateMsgVal(val, isRequired = false, minLen = 10) {
    const trimmed = (val || '').trim();
    if (!trimmed) return isRequired ? 'Message is required.' : '';
    if (trimmed.length < minLen) return `Message must be at least ${minLen} characters describing your enquiry.`;
    return '';
  }

  // ==========================================================================
  // WhatsApp & Email Lead Forwarding Engine
  // ==========================================================================
  const COLLEGE_WHATSAPP = '919512592211';
  const COLLEGE_EMAIL = 'admissions@vasanthagroup.edu.in';
  const WEB3FORMS_KEY = '7c6a0b98-0c66-41dc-908f-e18e803c73ce';

  function forwardLeadToWhatsApp(data, type) {
    const dateStr = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });
    let msg = '';
    if (type === 'admission') {
      msg = `🎓 *NEW ADMISSION APPLICATION (2026–27)*\n*VASANTHA GROUP OF EDUCATION, Bidar*\n------------------------------------\n👤 *Candidate Name:* ${data.fullName || 'N/A'}\n`;
      if (data.guardianName) msg += `👨‍👧 *Father/Guardian:* ${data.guardianName}\n`;
      msg += `📚 *Program:* ${data.course || 'B.Sc. Nursing'}\n📱 *Mobile Number:* ${data.phone || 'N/A'}\n`;
      if (data.email) msg += `✉️ *Email:* ${data.email}\n`;
      if (data.pcbScore) msg += `📊 *12th / PUC PCB Marks:* ${data.pcbScore}\n`;
      if (data.cityState) msg += `📍 *City & State:* ${data.cityState}\n`;
      msg += `------------------------------------\n⏰ *Submitted:* ${dateStr}\n🌐 *Source:* College Official Website`;
    } else {
      msg = `📩 *NEW CAMPUS ENQUIRY / MESSAGE*\n*VASANTHA GROUP OF EDUCATION, Bidar*\n------------------------------------\n👤 *Name:* ${data.name || 'N/A'}\n📱 *Mobile Number:* ${data.phone || 'N/A'}\n`;
      if (data.email) msg += `✉️ *Email:* ${data.email}\n`;
      msg += `📚 *Interested Course:* ${data.course || 'General Enquiry'}\n💬 *Query:* "${data.message || 'None'}"\n------------------------------------\n⏰ *Submitted:* ${dateStr}\n🌐 *Source:* College Contact Portal`;
    }

    try {
      const existing = JSON.parse(localStorage.getItem('vasantha_college_leads') || '[]');
      existing.unshift({ id: 'lead_' + Date.now(), type, data, timestamp: new Date().toISOString() });
      localStorage.setItem('vasantha_college_leads', JSON.stringify(existing.slice(0, 100)));
    } catch (e) {}

    try {
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: type === 'contact' ? `Campus Enquiry from ${data.name}` : `New Admission Application: ${data.fullName}`,
          to: COLLEGE_EMAIL,
          ...data
        })
      }).catch(() => {});
    } catch (e) {}

    const url = `https://wa.me/${COLLEGE_WHATSAPP}?text=${encodeURIComponent(msg)}`;
    try {
      const win = window.open(url, '_blank', 'noopener,noreferrer');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        setTimeout(() => { window.location.href = url; }, 500);
      }
    } catch (e) {
      window.location.href = url;
    }
  }

  // 4. Application Form Submission & Live Input Attachment
  const admissionForms = document.querySelectorAll('.admission-ajax-form');
  admissionForms.forEach(form => {
    const nameInput = form.querySelector('[name="full_name"]');
    const guardianInput = form.querySelector('[name="guardian_name"]');
    const phoneInput = form.querySelector('[name="phone"]');
    const emailInput = form.querySelector('[name="email"]');
    const pcbInput = form.querySelector('[name="pcb_score"]');
    const cityInput = form.querySelector('[name="city_state"]');

    // Attach real-time input sanitization & starting-digit prevention
    [nameInput, guardianInput].forEach(inp => {
      if (!inp) return;
      const label = inp.name === 'guardian_name' ? "Guardian's Name" : "Candidate Full Name";
      inp.addEventListener('input', () => {
        let val = inp.value;
        if (/^\d/.test(val)) {
          setFieldError(inp, `${label} cannot start with a number. Please start with a letter.`);
          inp.value = val.replace(/^\d+/, '');
          return;
        } else if (/\d/.test(val)) {
          setFieldError(inp, `${label} cannot contain numbers. Only letters and spaces are allowed.`);
          inp.value = val.replace(/\d/g, '');
          return;
        }
        const err = validateNameVal(inp.value, label, true);
        if (err) setFieldError(inp, err);
        else clearFieldError(inp);
      });
      inp.addEventListener('blur', () => {
        const err = validateNameVal(inp.value, label, true);
        if (err) setFieldError(inp, err);
        else clearFieldError(inp);
      });
    });

    if (phoneInput) {
      phoneInput.addEventListener('input', () => {
        phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 10);
        if (phoneInput.value.length > 0) {
          const err = validatePhoneVal(phoneInput.value, true);
          if (err) setFieldError(phoneInput, err);
          else clearFieldError(phoneInput);
        }
      });
      phoneInput.addEventListener('blur', () => {
        const err = validatePhoneVal(phoneInput.value, true);
        if (err) setFieldError(phoneInput, err);
        else clearFieldError(phoneInput);
      });
    }

    if (emailInput) {
      emailInput.addEventListener('blur', () => {
        if (emailInput.value.trim()) {
          const err = validateEmailVal(emailInput.value, false);
          if (err) setFieldError(emailInput, err);
          else clearFieldError(emailInput);
        } else {
          clearFieldError(emailInput);
        }
      });
    }

    if (pcbInput) {
      pcbInput.addEventListener('blur', () => {
        const err = validatePcbVal(pcbInput.value, true);
        if (err) setFieldError(pcbInput, err);
        else clearFieldError(pcbInput);
      });
    }

    if (cityInput) {
      cityInput.addEventListener('input', () => {
        let val = cityInput.value;
        if (/^\d/.test(val)) {
          setFieldError(cityInput, 'City & State cannot start with a number.');
          cityInput.value = val.replace(/^\d+/, '');
          return;
        }
      });
      cityInput.addEventListener('blur', () => {
        const err = validateCityVal(cityInput.value, true);
        if (err) setFieldError(cityInput, err);
        else clearFieldError(cityInput);
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;
      let firstInvalid = null;

      if (nameInput) {
        const err = validateNameVal(nameInput.value, 'Candidate Full Name', true);
        if (err) {
          setFieldError(nameInput, err);
          if (!firstInvalid) firstInvalid = nameInput;
          hasError = true;
        } else {
          clearFieldError(nameInput);
        }
      }

      if (guardianInput) {
        const err = validateNameVal(guardianInput.value, "Guardian's Name", true);
        if (err) {
          setFieldError(guardianInput, err);
          if (!firstInvalid) firstInvalid = guardianInput;
          hasError = true;
        } else {
          clearFieldError(guardianInput);
        }
      }

      if (phoneInput) {
        const err = validatePhoneVal(phoneInput.value, true);
        if (err) {
          setFieldError(phoneInput, err);
          if (!firstInvalid) firstInvalid = phoneInput;
          hasError = true;
        } else {
          clearFieldError(phoneInput);
        }
      }

      if (emailInput && emailInput.value.trim()) {
        const err = validateEmailVal(emailInput.value, false);
        if (err) {
          setFieldError(emailInput, err);
          if (!firstInvalid) firstInvalid = emailInput;
          hasError = true;
        } else {
          clearFieldError(emailInput);
        }
      }

      if (pcbInput) {
        const err = validatePcbVal(pcbInput.value, true);
        if (err) {
          setFieldError(pcbInput, err);
          if (!firstInvalid) firstInvalid = pcbInput;
          hasError = true;
        } else {
          clearFieldError(pcbInput);
        }
      }

      if (cityInput) {
        const err = validateCityVal(cityInput.value, true);
        if (err) {
          setFieldError(cityInput, err);
          if (!firstInvalid) firstInvalid = cityInput;
          hasError = true;
        } else {
          clearFieldError(cityInput);
        }
      }

      if (hasError) {
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const name = nameInput?.value?.trim() || 'Student';
      const course = form.querySelector('[name="course"]')?.value || 'Nursing Program';

      forwardLeadToWhatsApp({
        fullName: name,
        guardianName: guardianInput?.value?.trim() || '',
        course: course,
        phone: phoneInput?.value?.trim() || '',
        email: emailInput?.value?.trim() || '',
        pcbScore: pcbInput?.value?.trim() || '',
        cityState: cityInput?.value?.trim() || ''
      }, 'admission');

      closeAllModals();
      showToast(`Thank you, ${name}! Forwarding your application for ${course} to our WhatsApp Admission Desk (+91 9512592211)...`);
      form.reset();
      [nameInput, guardianInput, phoneInput, emailInput, pcbInput, cityInput].forEach(inp => clearFieldError(inp));
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
      desc: 'Peaceful, pollution-free, green campus setting situated at Naubad-bhalki Road, Naubad Karnataka 585402, providing a serene and focused educational environment for healthcare professionals.',
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
    const cName = contactForm.querySelector('[name="name"]');
    const cPhone = contactForm.querySelector('[name="phone"]');
    const cEmail = contactForm.querySelector('[name="email"]');
    const cMsg = contactForm.querySelector('[name="message"]');

    if (cName) {
      cName.addEventListener('input', () => {
        let val = cName.value;
        if (/^\d/.test(val)) {
          setFieldError(cName, 'Name cannot start with a number. Please start with a letter.');
          cName.value = val.replace(/^\d+/, '');
          return;
        } else if (/\d/.test(val)) {
          setFieldError(cName, 'Name cannot contain numbers. Only letters and spaces are allowed.');
          cName.value = val.replace(/\d/g, '');
          return;
        }
        const err = validateNameVal(cName.value, 'Your Full Name', true);
        if (err) setFieldError(cName, err);
        else clearFieldError(cName);
      });
      cName.addEventListener('blur', () => {
        const err = validateNameVal(cName.value, 'Your Full Name', true);
        if (err) setFieldError(cName, err);
        else clearFieldError(cName);
      });
    }

    if (cPhone) {
      cPhone.addEventListener('input', () => {
        cPhone.value = cPhone.value.replace(/\D/g, '').slice(0, 10);
        if (cPhone.value.length > 0) {
          const err = validatePhoneVal(cPhone.value, true);
          if (err) setFieldError(cPhone, err);
          else clearFieldError(cPhone);
        }
      });
      cPhone.addEventListener('blur', () => {
        const err = validatePhoneVal(cPhone.value, true);
        if (err) setFieldError(cPhone, err);
        else clearFieldError(cPhone);
      });
    }

    if (cEmail) {
      cEmail.addEventListener('blur', () => {
        if (cEmail.value.trim()) {
          const err = validateEmailVal(cEmail.value, false);
          if (err) setFieldError(cEmail, err);
          else clearFieldError(cEmail);
        } else {
          clearFieldError(cEmail);
        }
      });
    }

    if (cMsg) {
      cMsg.addEventListener('input', () => {
        if (cMsg.value.trim().length >= 10) {
          clearFieldError(cMsg);
        }
      });
      cMsg.addEventListener('blur', () => {
        const err = validateMsgVal(cMsg.value, true, 10);
        if (err) setFieldError(cMsg, err);
        else clearFieldError(cMsg);
      });
    }

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;
      let firstInvalid = null;

      if (cName) {
        const err = validateNameVal(cName.value, 'Your Full Name', true);
        if (err) {
          setFieldError(cName, err);
          if (!firstInvalid) firstInvalid = cName;
          hasError = true;
        } else {
          clearFieldError(cName);
        }
      }

      if (cPhone) {
        const err = validatePhoneVal(cPhone.value, true);
        if (err) {
          setFieldError(cPhone, err);
          if (!firstInvalid) firstInvalid = cPhone;
          hasError = true;
        } else {
          clearFieldError(cPhone);
        }
      }

      if (cEmail && cEmail.value.trim()) {
        const err = validateEmailVal(cEmail.value, false);
        if (err) {
          setFieldError(cEmail, err);
          if (!firstInvalid) firstInvalid = cEmail;
          hasError = true;
        } else {
          clearFieldError(cEmail);
        }
      }

      if (cMsg) {
        const err = validateMsgVal(cMsg.value, true, 10);
        if (err) {
          setFieldError(cMsg, err);
          if (!firstInvalid) firstInvalid = cMsg;
          hasError = true;
        } else {
          clearFieldError(cMsg);
        }
      }

      if (hasError) {
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const senderName = cName?.value?.trim() || 'Friend';
      forwardLeadToWhatsApp({
        name: senderName,
        phone: cPhone?.value?.trim() || '',
        email: cEmail?.value?.trim() || '',
        course: contactForm.querySelector('[name="course"]')?.value || 'B.Sc. Nursing',
        message: cMsg?.value?.trim() || ''
      }, 'contact');

      showToast(`Thank you, ${senderName}! Forwarding your message to our WhatsApp Admission Desk (+91 9512592211)...`);
      contactForm.reset();
      [cName, cPhone, cEmail, cMsg].forEach(inp => clearFieldError(inp));
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
      `VASANTHA GROUP OF EDUCATION\nVASANTHA GROUP OF EDUCATION\nRecognised by Govt. of Karnataka, KSNC & RGUHS Bangalore\n\nOfficial Document: ${title}\nAcademic Year: 2026-27\n\nCampus: College campus: Naubad-bhalki Road, Naubad Karnataka 585402\nHelpline: 9512592211 / 9913377195\n\nThank you for downloading this document.`
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

