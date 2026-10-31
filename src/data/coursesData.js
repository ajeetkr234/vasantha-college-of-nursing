export const facultiesData = [
  { id: 'all', name: 'All Programs (8)' },
  { id: 'nursing', name: 'Nursing (4)' },
  { id: 'pharmacy', name: 'Pharmacy (2)' },
  { id: 'physiotherapy', name: 'Physiotherapy (1)' },
  { id: 'education', name: 'Education (1)' }
];

export const coursesData = [
  {
    id: 'bsc-nursing',
    title: 'B.Sc. Nursing',
    subtitle: 'Bachelor of Science in Nursing',
    category: 'nursing',
    faculty: 'Faculty of Nursing & Health Sciences',
    duration: '4 Years (Full-Time Degree)',
    affiliation: 'Affiliated to RGUHS Bangalore • Recognised by KSNC, INC & Govt. of Karnataka',
    eligibility: '10+2 / PUC passed with minimum 45% aggregate in Physics, Chemistry & Biology (PCB) with English (40% for SC/ST). Minimum age: 17 years.',
    seats: '60 Seats per Academic Year',
    badge: 'Undergraduate Degree',
    image: '/images/student_bsc_portrait.jpg',
    overview: 'A comprehensive 4-year undergraduate degree program designed to prepare high-caliber nursing professionals capable of delivering advanced clinical care, participating in medical research, and assuming leadership responsibilities in hospital and community environments.',
    curriculum: [
      {
        year: 'Year 1: Foundations of Healthcare',
        subjects: ['Applied Anatomy & Applied Physiology', 'Applied Biochemistry & Biophysics', 'Applied Nutrition & Dietetics', 'Nursing Foundations I & II (Simulation Lab)', 'Health / Nursing Informatics & Technology', 'Communicative English']
      },
      {
        year: 'Year 2: Clinical Specializations & Pathologies',
        subjects: ['Applied Microbiology & Infection Control', 'Pharmacology I & II', 'Pathology & Genetics', 'Adult Health (Medical-Surgical) Nursing I', 'Professional Values & Professional Ethics']
      },
      {
        year: 'Year 3: Maternal, Child & Mental Health',
        subjects: ['Child Health (Pediatric) Nursing', 'Mental Health (Psychiatric) Nursing', 'Nursing Management & Leadership', 'Midwifery / Obstetrics & Gynaecology (OBG) I']
      },
      {
        year: 'Year 4: Intensive Care, Research & Clinical Internship',
        subjects: ['Community Health Nursing I & II', 'Nursing Research & Statistics', 'Midwifery & Obstetrical Nursing II', '6-Month Mandatory Hospital Clinical Internship Rotation (ICU, Trauma, OT, Ward)']
      }
    ],
    careers: [
      'Staff Nurse in Multi-Specialty Hospitals',
      'Critical Care / ICU Specialist Nurse',
      'Nurse Educator / Clinical Instructor in Nursing Colleges',
      'Community Health Officer (CHO)',
      'International Nursing Licensure (NCLEX-RN, DHA, HAAD, Prometric, OET, IELTS)'
    ]
  },
  {
    id: 'gnm-nursing',
    title: 'GNM Nursing',
    subtitle: 'General Nursing & Midwifery Diploma',
    category: 'nursing',
    faculty: 'Faculty of Nursing & Health Sciences',
    duration: '3 Years (Full-Time Diploma)',
    affiliation: 'Recognised by Karnataka State Nursing Council (KSNC) & Govt. of Karnataka',
    eligibility: '10+2 / PUC passed in Science / Arts / Commerce with minimum 40% aggregate (35% for SC/ST) and English as compulsory subject. Minimum age: 17 years.',
    seats: '60 Seats per Academic Year',
    badge: 'Professional Diploma',
    image: '/images/simulation_training_group.jpg',
    overview: 'A practice-oriented 3-year diploma curriculum focused on developing foundational clinical acumen, bedside patient management, maternity nursing, and rural healthcare delivery.',
    curriculum: [
      {
        year: 'Year 1: Basic Health & Nursing Essentials',
        subjects: ['Bio-Sciences (Anatomy, Physiology, Microbiology)', 'Behavioral Sciences (Psychology, Sociology)', 'Nursing Foundations (Fundamental Skills & First Aid)', 'Community Health Nursing I & Environmental Hygiene']
      },
      {
        year: 'Year 2: Specialized Medical-Surgical Practice',
        subjects: ['Medical-Surgical Nursing I (Adult Patient Care)', 'Medical-Surgical Nursing II (Specialties, OT, Ophthalmology, ENT)', 'Mental Health & Psychiatric Nursing', 'Child Health / Pediatric Nursing']
      },
      {
        year: 'Year 3: Midwifery, Community & Mandatory Internship',
        subjects: ['Midwifery & Gynecological Nursing', 'Community Health Nursing II', 'Health Economics & Nursing Administration', 'Integrated Bedside Clinical Hospital Internship']
      }
    ],
    careers: [
      'Staff Nurse in Government & Private Hospitals',
      'Maternal & Child Health Field Nurse',
      'Industrial & Corporate Occupational Health Nurse',
      'Bridge program pathway to Post-Basic B.Sc. Nursing'
    ]
  },
  {
    id: 'post-bsc-nursing',
    title: 'Post B.Sc. Nursing',
    subtitle: 'Post Basic Bachelor of Science in Nursing (P.B.B.Sc.)',
    category: 'nursing',
    faculty: 'Faculty of Nursing & Health Sciences',
    duration: '2 Years (Full-Time Degree)',
    affiliation: 'Affiliated to RGUHS Bangalore • Approved by KSNC, INC & Govt. of Karnataka',
    eligibility: 'Passed GNM (General Nursing & Midwifery) Diploma course and registered as RN/RM with State Nursing Council.',
    seats: '40 Seats per Academic Year',
    badge: 'Post-Basic Degree',
    image: '/images/course_post_bsc_nursing.jpg',
    overview: 'A 2-year undergraduate bridge program enabling registered GNM diploma nurses to upgrade their qualifications to a full Bachelor of Science degree, equipping them with advanced clinical, pedagogical, and administrative leadership competencies.',
    curriculum: [
      {
        year: 'Year 1: Advanced Clinical Sciences & Practice',
        subjects: ['Nursing Foundation & Applied Sciences', 'Biochemistry & Biophysics', 'Nutrition & Dietetics', 'Maternal Nursing Practice', 'Child Health Nursing Specialization', 'Microbiology & Infection Control']
      },
      {
        year: 'Year 2: Leadership, Pedagogy & Community Research',
        subjects: ['Sociology & Human Behaviour', 'Community Health Nursing & Epidemiology', 'Mental Health Nursing Practice', 'Introduction to Nursing Education', 'Introduction to Nursing Administration', 'Research Project & Clinical Thesis']
      }
    ],
    careers: [
      'Nursing Supervisor / Floor In-Charge in Tertiary Hospitals',
      'Clinical Tutor / Lecturer in Nursing Colleges',
      'Senior Critical Care Nurse Specialist',
      'Direct Eligibility for M.Sc. Nursing & Healthcare MBA',
      'Fast-Track International Registered Nurse (USA, UK, Canada, Gulf)'
    ]
  },
  {
    id: 'msc-nursing',
    title: 'M.Sc. Nursing',
    subtitle: 'Master of Science in Nursing (M.Sc. Nursing)',
    category: 'nursing',
    faculty: 'Faculty of Nursing & Health Sciences',
    duration: '2 Years (Full-Time Postgraduate Degree)',
    affiliation: 'Affiliated to RGUHS Bangalore • Recognised by KSNC, INC & Govt. of Karnataka',
    eligibility: 'Passed B.Sc. Nursing / Post Basic B.Sc. Nursing with minimum 55% aggregate (50% for SC/ST) from an institution recognized by INC, registered as RN/RM with State Nursing Council, with minimum 1 year of work experience.',
    seats: '25 Seats per Academic Year',
    badge: 'Postgraduate Degree (M.Sc.)',
    image: '/images/simulation_training_group.jpg',
    overview: 'A distinguished 2-year master’s degree program designed to prepare expert clinical specialists, nurse researchers, nurse educators, and hospital administrators capable of delivering advanced evidence-based healthcare and academic leadership.',
    curriculum: [
      {
        year: 'Year 1: Advanced Practice & Clinical Specialization',
        subjects: [
          'Advanced Nursing Practice & Applied Pathophysiology',
          'Clinical Speciality - I (Medical-Surgical / OBG / Pediatric / Community / Psychiatric Nursing)',
          'Nursing Education & Curriculum Design',
          'Clinical Assessment, Diagnostics & Pharmacology',
          'Nursing Research & Applied Biostatistics (Thesis Phase I)'
        ]
      },
      {
        year: 'Year 2: Super-Specialty Practicum & Master’s Dissertation',
        subjects: [
          'Nursing Management, Hospital Leadership & Quality Assurance',
          'Clinical Speciality - II (Super-Specialty Practicum & Critical Care Rotations)',
          'Master’s Research Dissertation & Scientific Publication Defense',
          'Healthcare Informatics & Continuous Quality Improvement (CQI)'
        ]
      }
    ],
    careers: [
      'Assistant Professor / Lecturer / Reader in Nursing Colleges',
      'Clinical Nurse Specialist (CNS) in ICU / Cardiology / Oncology / OBG',
      'Chief Nursing Officer (CNO) / Nursing Superintendent in Tertiary Hospitals',
      'Clinical Research Coordinator & Healthcare Quality Director',
      'Global Advanced Practice Registered Nurse (APRN in USA, UK, Canada, Australia, Gulf)'
    ]
  },
  {
    id: 'd-pharm',
    title: 'Diploma in Pharmacy (D.Pharm)',
    subtitle: 'Diploma in Pharmaceutical Sciences',
    category: 'pharmacy',
    faculty: 'Faculty of Pharmaceutical Sciences',
    duration: '2 Years (Full-Time Diploma)',
    affiliation: 'Approved by Pharmacy Council of India (PCI) & Govt. of Karnataka / Board of Examining Authority (BEA)',
    eligibility: '10+2 / 2nd PUC passed with Physics, Chemistry and Biology (PCB) or Mathematics (PCM) from a recognized board. Minimum age: 17 years.',
    seats: '60 Seats per Academic Year',
    badge: 'Pharmacy Diploma',
    image: '/images/course_pharmacy_lab.jpg',
    overview: 'A comprehensive 2-year technical diploma program that qualifies graduates as Registered Pharmacists, covering pharmaceutics, pharmacology, pharmaceutical chemistry, pharmacognosy, and clinical community pharmacy management.',
    curriculum: [
      {
        year: 'Year 1: Pharmaceutical Foundations & Chemistry',
        subjects: ['Pharmaceutics I (Theory & Practical)', 'Pharmaceutical Chemistry I', 'Pharmacognosy & Herbal Formulations', 'Biochemistry & Clinical Pathology', 'Human Anatomy & Physiology', 'Health Education & Community Pharmacy']
      },
      {
        year: 'Year 2: Pharmacology, Dispensing & Retail Management',
        subjects: ['Pharmaceutics II (Prescription Compounding)', 'Pharmaceutical Chemistry II (Medicinal Drugs)', 'Pharmacology & Toxicology', 'Pharmaceutical Jurisprudence & Drug Law', 'Drug Store & Business Management', 'Hospital & Clinical Pharmacy Practice (500 Hours Practical Training)']
      }
    ],
    careers: [
      'Registered Pharmacist (R.Ph.) in Govt. & Private Hospitals',
      'Licensed Retail & Wholesale Pharmacy Owner / Entrepreneur',
      'Pharmaceutical Manufacturing & Packaging Quality Trainee',
      'Medical Representative (MR) & Healthcare Product Specialist',
      'Direct Lateral Entry to 2nd Year B.Pharm (Bachelor of Pharmacy)'
    ]
  },
  {
    id: 'b-pharm',
    title: 'Bachelor of Pharmacy (B.Pharm)',
    subtitle: 'Bachelor of Pharmaceutical Sciences',
    category: 'pharmacy',
    faculty: 'Faculty of Pharmaceutical Sciences',
    duration: '4 Years (8 Semesters Full-Time Degree)',
    affiliation: 'Approved by Pharmacy Council of India (PCI New Delhi) & Affiliated to RGUHS Bangalore',
    eligibility: '10+2 / 2nd PUC passed with minimum 45% aggregate in Physics & Chemistry with Biology or Mathematics (40% for SC/ST/OBC).',
    seats: '60 Seats per Academic Year',
    badge: 'Pharmacy Degree',
    image: '/images/course_pharmacy_lab.jpg',
    overview: 'A prestigious 4-year professional undergraduate degree program exploring the entire spectrum of pharmaceutical science from drug discovery, formulation development, pharmacokinetics, and molecular pharmacology to regulatory compliance and industrial pharmaceutical manufacturing.',
    curriculum: [
      {
        year: 'Year 1 (Sem 1 & 2): Core Pharma Sciences',
        subjects: ['Human Anatomy & Physiology I & II', 'Pharmaceutical Analysis & Remedial Biology/Math', 'Pharmaceutics & Pharmaceutical Inorganic Chemistry', 'Pharmaceutical Organic Chemistry I & Biochemistry', 'Pathophysiology & Computer Applications in Pharmacy']
      },
      {
        year: 'Year 2 (Sem 3 & 4): Medicinal Formulations & Microbiology',
        subjects: ['Pharmaceutical Organic Chemistry II & III', 'Physical Pharmaceutics I & II', 'Pharmaceutical Microbiology & Biotechnology', 'Pharmaceutical Engineering & Unit Operations', 'Medicinal Chemistry I & Pharmacology I', 'Pharmacognosy & Phytochemistry I']
      },
      {
        year: 'Year 3 (Sem 5 & 6): Advanced Pharmacology & Quality',
        subjects: ['Medicinal Chemistry II & III', 'Industrial Pharmacy I', 'Pharmacology II & III', 'Herbal Drug Technology', 'Biopharmaceutics & Pharmacokinetics', 'Pharmaceutical Quality Assurance']
      },
      {
        year: 'Year 4 (Sem 7 & 8): Industrial Practice & Research',
        subjects: ['Instrumental Methods of Chemical Analysis', 'Industrial Pharmacy II', 'Pharmacy Practice & Clinical Pharmacokinetics', 'Novel Drug Delivery Systems (NDDS)', 'Biostatistics & Research Methodology', 'Social & Preventive Pharmacy & Industrial Project Work']
      }
    ],
    careers: [
      'Formulation & R&D Scientist in Global Pharmaceutical MNCs',
      'Quality Assurance & Quality Control (QA/QC) Specialist',
      'Drug Regulatory Affairs (DRA) & Clinical Research Associate (CRA)',
      'Government Drug Inspector / Analytical Food & Drug Chemist',
      'Hospital Clinical Pharmacist & Therapeutic Drug Monitor',
      'Higher Studies: M.Pharm, Pharm.D (Post-Baccalaureate), MBA Pharma'
    ]
  },
  {
    id: 'bpt',
    title: 'Bachelor of Physiotherapy (BPT)',
    subtitle: 'Bachelor of Physiotherapy & Rehabilitation Sciences',
    category: 'physiotherapy',
    faculty: 'Faculty of Allied Health & Physiotherapy',
    duration: '4.5 Years (4 Years Academic + 6 Months Rotatory Internship)',
    affiliation: 'Affiliated to RGUHS Bangalore & Recognised by Govt. of Karnataka / Indian Association of Physiotherapists (IAP)',
    eligibility: '10+2 / PUC passed with min 45% aggregate in Physics, Chemistry & Biology (PCB) with English as compulsory subject (40% for SC/ST/OBC). Minimum age: 17 years.',
    seats: '40 Seats per Academic Year',
    badge: 'Physiotherapy Degree',
    image: '/images/course_physiotherapy_rehab.jpg',
    overview: 'A premier 4.5-year clinical degree preparing healthcare specialists in physical diagnosis, neuromuscular rehab, orthopedic manual therapy, sports injury rehabilitation, pediatric physiotherapy, and cardio-respiratory critical care recovery.',
    curriculum: [
      {
        year: 'Year 1: Basic Medical Sciences & Movement',
        subjects: ['Human Anatomy & Histology', 'Human Physiology', 'Biochemistry', 'Biomechanics & Kinesiology', 'Psychology & Sociology in Health']
      },
      {
        year: 'Year 2: Therapeutic Modalities & Pathologies',
        subjects: ['Pathology & Microbiology', 'Pharmacology for Physiotherapists', 'Exercise Therapy & Therapeutic Gymnasium', 'Electrotherapy I (Low & Medium Frequency)', 'Electrotherapy II (High Frequency & Radiation Therapy)', 'Research Methodology & Biostatistics']
      },
      {
        year: 'Year 3: Clinical Specializations & Surgery',
        subjects: ['General Medicine & General Surgery', 'Orthopedics & Traumatology', 'Musculoskeletal & Sports Physiotherapy', 'Cardio-Respiratory & Thoracic Physiotherapy', 'Community Medicine & Ergonomics']
      },
      {
        year: 'Year 4: Neurology & Advanced Rehabilitation',
        subjects: ['Neurology & Neurosurgery', 'Neuro-Physiotherapy (Stroke, Spinal Cord, Parkinson\'s)', 'Community-Based Rehabilitation (CBR)', 'Pediatric & Geriatric Physiotherapy', 'Ethics, Administration & Evidence-Based Practice', '6-Month Mandatory Rotatory Clinical Hospital Internship']
      }
    ],
    careers: [
      'Consultant Physiotherapist in Multi-Specialty Hospitals',
      'Sports Team & Athletic Performance Physiotherapist',
      'Neuro-Rehabilitation & Stroke Recovery Specialist',
      'Cardiopulmonary ICU Physiotherapist',
      'Private Clinic & Physical Rehab Center Director',
      'International Licensure (NPTE USA, HCPC UK, AHPRA Australia, Canada)'
    ]
  },
  {
    id: 'b-ed',
    title: 'Bachelor of Education (B.Ed)',
    subtitle: 'Teacher Training & Pedagogical Sciences',
    category: 'education',
    faculty: 'Faculty of Education & Teacher Training',
    duration: '2 Years (4 Semesters Full-Time Degree)',
    affiliation: 'Approved by National Council for Teacher Education (NCTE New Delhi) & Affiliated to Gulbarga University',
    eligibility: 'Bachelor\'s Degree (B.A., B.Sc., B.Com, B.C.A., B.E.) or Master\'s Degree with minimum 50% aggregate marks (45% for SC/ST/Cat-1/OBC candidates).',
    seats: '100 Seats per Academic Year',
    badge: 'Teacher Training Degree',
    image: '/images/course_bed_teaching.jpg',
    overview: 'A 2-year professional degree empowering prospective educators with contemporary pedagogical methodologies, educational psychology, digital ICT classroom integration, curriculum design, inclusive education, and school leadership.',
    curriculum: [
      {
        year: 'Semester 1: Child Development & Philosophies',
        subjects: ['Childhood and Growing Up', 'Contemporary India and Education', 'Language Across the Curriculum', 'Understanding Disciplines and School Subjects', 'EPC 1: Reading and Reflecting on Texts']
      },
      {
        year: 'Semester 2: Learning Theories & Subject Pedagogy',
        subjects: ['Learning and Teaching Methodologies', 'Pedagogy of School Subject I (Science / Math / Social / Languages)', 'Knowledge and Curriculum Framework', 'Assessment for Learning & Test Construction', 'EPC 2: Drama and Art in Education']
      },
      {
        year: 'Semester 3: School Internship & Micro-Teaching',
        subjects: ['16-Week Immersive School Internship Rotation', 'Pedagogy of School Subject II (Advanced)', 'Micro-Teaching & Simulated Classroom Lessons', 'Preparation of Digital Teaching Aids & Lesson Plans', 'Reflective Journaling & Portfolio Assessment']
      },
      {
        year: 'Semester 4: Society, ICT & Action Research',
        subjects: ['Gender, School and Society', 'Creating an Inclusive Classroom', 'Health, Yoga and Physical Education', 'Guidance and Counseling in Schools', 'EPC 3: Critical Understanding of ICT', 'Action Research Project']
      }
    ],
    careers: [
      'Secondary & Senior Secondary School Teacher (Govt., CBSE, ICSE, International)',
      'Government Teacher (Qualified through KARTET, CTET & KPSC)',
      'Educational Consultant & EdTech Curriculum Content Creator',
      'School Principal / Vice Principal / Academic Coordinator',
      'Higher Studies: Master of Education (M.Ed), M.Phil & Ph.D. in Education'
    ]
  }
];

export const faqsData = [
  {
    q: 'What programs are offered under VASANTHA GROUP OF EDUCATION?',
    a: 'VASANTHA GROUP OF EDUCATION offers multidisciplinary degree and diploma programs across healthcare and education: M.Sc. Nursing (2 Years), B.Sc. Nursing (4 Years), GNM Nursing (3 Years), Post B.Sc. Nursing (2 Years), Diploma in Pharmacy (D.Pharm - 2 Years), Bachelor of Pharmacy (B.Pharm - 4 Years), Bachelor of Physiotherapy (BPT - 4.5 Years), and Bachelor of Education (B.Ed - 2 Years).'
  },
  {
    q: 'Are all courses officially recognized and affiliated?',
    a: 'Yes, absolutely. Nursing programs are approved by KSNC, INC, and affiliated to RGUHS Bangalore. Pharmacy courses are approved by the Pharmacy Council of India (PCI) and affiliated to RGUHS / BEA. Physiotherapy (BPT) is affiliated to RGUHS Bangalore and recognized by Govt. of Karnataka. B.Ed is recognized by the National Council for Teacher Education (NCTE) and affiliated to Gulbarga University.'
  },
  {
    q: 'Is NEET mandatory for B.Sc. Nursing, Pharmacy, or BPT admission?',
    a: 'No, NEET is not mandatory. Admissions for 2026-27 are conducted strictly on merit basis based on your 10+2 / PUC marks (PCB/PCM) with English as a compulsory subject, in accordance with state statutory council guidelines.'
  },
  {
    q: 'Where do students undergo clinical hospital training and rotations?',
    a: 'Health sciences students (Nursing, Pharmacy, Physiotherapy) undergo comprehensive clinical training at our 50-Bedded Hospital attached directly with Vasantha College, equipped with an advanced Medical Laboratory, CT Scan Center, and Cancer Diagnostic Center, along with bedside rotations across ICU/CCU, Emergency & Trauma, Operation Theatres, Pediatrics, and Outpatient Clinics.'
  },
  {
    q: 'What clinical facilities and diagnostic centers are available on campus?',
    a: 'VASANTHA GROUP OF EDUCATION features a 50-Bedded Hospital directly attached with the college campus, along with a fully automated Medical Laboratory for pathology and biochemistry, a high-speed CT Scan Center, and a dedicated Cancer Diagnostic Center for immediate bedside learning and patient care.'
  },
  {
    q: 'What placement and career support does the group provide?',
    a: 'Our active Placement & Career Guidance Cell conducts regular mock clinical interviews, soft skill and communication workshops, aptitude grooming, and hospital campus recruitment drives with leading healthcare networks including Shalby Hospital, Niramaya Hospital, Life Care Hospital, Surya Hospital, Hariya Hospital, Rotary Club Hospital, Healfirst Hospital, Lotus Hospital, and Parvarish Hospital, as well as top pharmaceutical MNCs and educational institutions.'
  },
  {
    q: 'How can I apply for admission for the 2026-27 academic session?',
    a: 'You can apply online directly through our website by clicking the "Apply Online" or "Apply Now" buttons, or by visiting our campus at Naubad-bhalki Road, Naubad Karnataka 585402. You can also contact our direct admission counseling desk at 9512592211 or 9913377195 for immediate eligibility assessment and seat reservation.'
  }
];
