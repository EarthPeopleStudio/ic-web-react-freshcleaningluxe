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
import SEO from './utils/SEO';
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
        <SEO />
        <NavBar />
        <div className="content">
          <PageTransition>
            <Routes>
              <Route path="/" element={
                <main>
                  <section id="home">
                    <Hero />
                  </section>
                  <Services />
                  <FAQ />
                  <Contact />
                </main>
              } />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/book" element={<QuotePage />} />
              <Route path="/journey" element={<HistoryPage />} />
              <Route path="/contact" element={
                <main>
                  <section id="contact-page" style={{ paddingTop: breakpoint === 'xs' || breakpoint === 'sm' ? '80px' : '120px' }}>
                    <Contact />
                  </section>
                </main>
              } />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
