import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ValueBar from '../components/sections/ValueBar';
import ProgramsSection from '../components/sections/ProgramsSection';
import LeadershipSection from '../components/sections/LeadershipSection';
import CollegeProfile from '../components/sections/CollegeProfile';
import ClinicalRoadmap from '../components/sections/ClinicalRoadmap';
import FacilitiesSection from '../components/sections/FacilitiesSection';
import HospitalPartners from '../components/sections/HospitalPartners';
import CareerSupport from '../components/sections/CareerSupport';
import ApprovalsSection from '../components/sections/ApprovalsSection';
import FaqSection from '../components/sections/FaqSection';
import FinalAdmissionsCta from '../components/sections/FinalAdmissionsCta';

export default function Home() {
  return (
    <main id="mainContent">
      {/* 3. Hero Section: Clean Two-Column Layout */}
      <HeroSection />

      {/* 4. Quick Statistics: Key Institutional Value Pillars */}
      <ValueBar />

      {/* 5. Academic Nursing Programs: B.Sc. Nursing & GNM Diploma */}
      <ProgramsSection />

      {/* 6. Leadership & Governance: Chairman & Principal Spotlight */}
      <LeadershipSection />

      {/* 7. About Our College & Trust: Institutional Profile & Heritage */}
      <CollegeProfile />

      {/* 8. Clinical Learning Roadmap: 4-Year B.Sc. Interactive Progression */}
      <ClinicalRoadmap />

      {/* 9. Campus Facilities & Clinical Infrastructure: Simulation & Labs */}
      <FacilitiesSection />

      {/* 10. Hospital Training & Hospital Partners: Affiliated Teaching Hospitals */}
      <HospitalPartners />

      {/* 11. Career & Placement Support: Dedicated Cell & Career Pathways */}
      <CareerSupport />

      {/* 12. Institutional Approvals & Recognitions: RGUHS, INC, KSNC, GOK */}
      <ApprovalsSection />

      {/* 13. Frequently Asked Questions: Comprehensive Candidate Guidance */}
      <FaqSection />

      {/* 14. Final Admissions CTA: 2026-27 Enrollment Callout */}
      <FinalAdmissionsCta />
    </main>
  );
}
