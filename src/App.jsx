import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import ScrollToTop from './components/ScrollToTop';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Modals from './components/Modals';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import ClinicalTraining from './pages/ClinicalTraining';
import Placements from './pages/Placements';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';

export default function App() {
  return (
    <ModalProvider>
      <ScrollToTop />
      <TopBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/clinical-training" element={<ClinicalTraining />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        {/* Support .html extensions if user or bookmarks visit /index.html etc. */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/about.html" element={<Navigate to="/about" replace />} />
        <Route path="/courses.html" element={<Navigate to="/courses" replace />} />
        <Route path="/clinical-training.html" element={<Navigate to="/clinical-training" replace />} />
        <Route path="/placements.html" element={<Navigate to="/placements" replace />} />
        <Route path="/admissions.html" element={<Navigate to="/admissions" replace />} />
        <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
      <FloatingActions />
      <Modals />
    </ModalProvider>
  );
}
