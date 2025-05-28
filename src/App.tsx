import React, { useEffect } from 'react';
import './styles/App.css';
import './styles/Animations.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import QuotePage from './pages/QuotePage';
import ServicesPage from './pages/ServicesPage';
import HistoryPage from './pages/HistoryPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CookiePolicy from './pages/CookiePolicy';
import NotFound from './pages/NotFound';
import PageTitle from './utils/PageTitle';
import { useBreakpoint } from './utils/ResponsiveUtils';

// Page transition wrapper component
const PageTransition: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Add fade-in animation to the main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.classList.add('page-transition');
      setTimeout(() => {
        mainContent.classList.add('page-visible');
      }, 50);
    }
    
    return () => {
      // Cleanup for next navigation
      if (mainContent) {
        mainContent.classList.remove('page-visible');
      }
    };
  }, [location]);
  
  return <>{children}</>;
};

// ScrollToTop component to reset scroll position on page change
const ScrollToTop: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
};

function App() {
  const breakpoint = useBreakpoint();
  
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <NavBar />
        <div className="content">
          <PageTransition>
            <Routes>
              <Route path="/" element={
                <main>
                  <PageTitle title="Home | Fresh Cleaning Luxe | Professional Cleaning Services" />
                  <section id="home">
                    <Hero />
                  </section>
                  <Services />
                  <FAQ />
                  <Contact />
                </main>
              } />
              <Route path="/services" element={
                <>
                  <PageTitle title="Our Services | Fresh Cleaning Luxe | Professional Cleaning" />
                  <ServicesPage />
                </>
              } />
              <Route path="/book" element={
                <>
                  <PageTitle title="Book a Cleaning | Fresh Cleaning Luxe" />
                  <QuotePage />
                </>
              } />
              <Route path="/journey" element={
                <>
                  <PageTitle title="Our Journey | Fresh Cleaning Luxe | About Us" />
                  <HistoryPage />
                </>
              } />
              <Route path="/contact" element={
                <main>
                  <PageTitle title="Contact Us | Fresh Cleaning Luxe" />
                  <section id="contact-page" style={{ paddingTop: breakpoint === 'xs' || breakpoint === 'sm' ? '80px' : '120px' }}>
                    <Contact />
                  </section>
                </main>
              } />
              <Route path="/privacy-policy" element={
                <>
                  <PageTitle title="Privacy Policy | Fresh Cleaning Luxe" />
                  <PrivacyPolicy />
                </>
              } />
              <Route path="/terms-conditions" element={
                <>
                  <PageTitle title="Terms & Conditions | Fresh Cleaning Luxe" />
                  <TermsConditions />
                </>
              } />
              <Route path="/cookie-policy" element={
                <>
                  <PageTitle title="Cookie Policy | Fresh Cleaning Luxe" />
                  <CookiePolicy />
                </>
              } />
              <Route path="*" element={
                <>
                  <PageTitle title="Page Not Found | Fresh Cleaning Luxe" />
                  <NotFound />
                </>
              } />
            </Routes>
          </PageTransition>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
