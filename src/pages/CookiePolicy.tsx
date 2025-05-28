import React from 'react';
import '../styles/LegalPages.css';
import { Link } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
  return (
    <main className="legal-page">
      <div className="container">
        <h1 className="section-title">Cookie Policy</h1>
        <div className="legal-content">
          <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section className="legal-section">
            <h2>Introduction</h2>
            <p>
              This Cookie Policy explains how Fresh Cleaning Luxe, LLC ("we," "our," or "us") uses cookies and similar 
              technologies on our website. This Cookie Policy should be read together with our <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/terms-conditions">Terms and Conditions</Link>.
            </p>
            <p>
              This policy complies with the Utah Consumer Privacy Act (UCPA), which became effective December 31, 2023.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit 
              websites. They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>How We Use Cookies</h2>
            <p>Our website uses very limited cookies for the following purposes:</p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. 
                They enable basic functions like page navigation and access to secure areas of the website.
              </li>
              <li>
                <strong>Functional Cookies:</strong> These cookies help us recognize you when you return to our website 
                and remember your preferences.
              </li>
            </ul>
            <p>
              We do not use advertising or tracking cookies, and we do not allow third parties to place cookies on our 
              website for advertising purposes.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Third-Party Services</h2>
            <p>
              Our website uses third-party services that may use their own cookies or similar technologies:
            </p>
            <ul>
              <li>
                <strong>Web3Forms:</strong> We use Web3Forms to process our contact and quote forms. Web3Forms may use temporary cookies to improve functionality but does not use cookies for tracking or advertising purposes.
              </li>
              <li>
                <strong>Other Services:</strong> We may occasionally use services like Google Maps or payment processors that use their own cookies. These third-party services have their own privacy policies and cookie policies over which we have no control.
              </li>
            </ul>
          </section>
          
          <section className="legal-section">
            <h2>Your Rights Under the Utah Consumer Privacy Act</h2>
            <p>
              Under the Utah Consumer Privacy Act (UCPA), you have the right to opt out of the processing of your personal data for targeted advertising. 
              Since our website does not use cookies for targeted advertising, this right does not apply to our use of cookies. 
              However, you still have the right to manage cookies as described below.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can usually find these settings in the 
              "Options" or "Preferences" menu of your browser. You can:
            </p>
            <ul>
              <li>Delete all cookies</li>
              <li>Block all cookies</li>
              <li>Allow all cookies</li>
              <li>Block third-party cookies</li>
              <li>Clear cookies when browser closes</li>
              <li>Open a 'private browsing' session</li>
              <li>Install add-ons and plugins to extend browser privacy features</li>
            </ul>
            <p>
              Please note that restricting cookies may impact the functionality of our website.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Children's Privacy</h2>
            <p>
              Our website is not directed to children under the age of 13, and we do not knowingly collect personal 
              information from children under 13. If we learn that we have collected personal information from a child 
              under 13, we will promptly delete that information.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting 
              the new Cookie Policy on this page and updating the "Last Updated" date.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
            </p>
            <p>
              Fresh Cleaning Luxe, LLC<br />
              Email: book@freshcleaningluxe.com<br />
              Phone: 385-565-4128
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CookiePolicy; 