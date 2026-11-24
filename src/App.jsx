import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, useLocation, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import OffersPage from './pages/OffersPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import { ROUTES } from './config/siteConfig';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
};

const NotFoundPage = () => (
  <section className="py-24 px-4 text-center bg-[#FAF8F4] text-[#1B2620]">
    <div className="max-w-lg mx-auto">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A741F] mb-2">
        Page Not Found
      </p>
      <h1 className="font-display text-4xl font-semibold mb-4">We could not find that page</h1>
      <p className="text-sm text-[#4A554E] mb-8">
        Explore our treatments, wellness packages, or return to the Sparsh Spa homepage.
      </p>
      <Link
        to={ROUTES.HOME}
        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#1B2620] text-[#FAF8F4] text-sm font-semibold hover:bg-[#2A3B32] transition-colors"
      >
        Return Home
      </Link>
    </div>
  </section>
);

const Layout = () => (
  <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#1B2620]">
    <Header />
    <main className="flex-1 pt-16 md:pt-[72px]">
      <Outlet />
    </main>
    <Footer />
    <FloatingContact />
  </div>
);

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
            <Route path={ROUTES.OFFERS} element={<OffersPage />} />
            <Route path={ROUTES.CONTACT} element={<ContactPage />} />
            <Route path={ROUTES.PRIVACY} element={<PrivacyPolicyPage />} />
            <Route path={ROUTES.TERMS} element={<TermsAndConditionsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;