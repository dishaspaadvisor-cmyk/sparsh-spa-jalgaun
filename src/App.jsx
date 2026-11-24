// import React from 'react'
// import SpaWebsite from './components/SpaWebsite';
// import './index.css';
// const App = () => {
//   return (
//     <div> <SpaWebsite /></div>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';  // Your existing Footer
import OfferPopup from './components/OfferPopup';
import FloatingContact from './components/FloatingContact';
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
// import OffersPage from './pages/OffersPage';

const Layout = () => (
  <div className="min-h-screen bg-white text-gray-900">
    <Header />
    <main className="pt-[100px] md:pt-[118px]">  {/* Offset for fixed header */}
      <Outlet />  {/* Renders the current page */}
    </main>
    <Footer />
    <OfferPopup />
    <FloatingContact />
  </div>
);

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            {/* <Route path="/offers" element={<OffersPage />} /> */}
            {/* Add 404 if needed: <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;