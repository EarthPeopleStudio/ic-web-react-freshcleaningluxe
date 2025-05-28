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

// TitleManager component to update page title based on current route
const TitleManager: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Set page title based on current route
    let pageTitle = 'Fresh Cleaning Luxe | Professional Cleaning Services';
    
    switch (location.pathname) {
      case '/':
        pageTitle = 'Home | Fresh Cleaning Luxe | Professional Cleaning Services';
        break;
      case '/services':
        pageTitle = 'Our Services | Fresh Cleaning Luxe | Professional Cleaning';
        break;
      case '/book':
        pageTitle = 'Book a Cleaning | Fresh Cleaning Luxe';
        break;
      case '/journey':
        pageTitle = 'Our Journey | Fresh Cleaning Luxe | About Us';
        break;
      case '/contact':
        pageTitle = 'Contact Us | Fresh Cleaning Luxe';
        break;
      case '/privacy-policy':
        pageTitle = 'Privacy Policy | Fresh Cleaning Luxe';
        break;
      case '/terms-conditions':
        pageTitle = 'Terms & Conditions | Fresh Cleaning Luxe';
        break;
      case '/cookie-policy':
        pageTitle = 'Cookie Policy | Fresh Cleaning Luxe';
        break;
      default:
        if (location.pathname.includes('/faq')) {
          pageTitle = 'FAQ | Fresh Cleaning Luxe';
        } else {
          pageTitle = 'Page Not Found | Fresh Cleaning Luxe';
        }
    }
    
    document.title = pageTitle;
  }, [location]);
  
  return null;
};

function App() {
  const breakpoint = useBreakpoint();
  
  return (
    <Router>
      <ScrollToTop />
      <TitleManager />
      <div className="App">
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
