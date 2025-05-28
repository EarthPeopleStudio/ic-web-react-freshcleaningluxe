import React from 'react';
import '../styles/LegalPages.css';
import { Link } from 'react-router-dom';

const TermsConditions: React.FC = () => {
  return (
    <main className="legal-page">
      <div className="container">
        <h1 className="section-title">Terms and Conditions</h1>
        <div className="legal-content">
          <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section className="legal-section">
            <h2>Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the Fresh Cleaning Luxe, LLC website and services. By using our website
              or engaging our services, you agree to these Terms and Conditions in full. If you disagree with these Terms and Conditions 
              or any part of them, you must not use our website or services.
            </p>
            <p>
              These Terms and Conditions are governed by the laws of the State of Utah, United States, including the Utah Consumer Privacy Act 
              (UCPA) which became effective December 31, 2023.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Service Description</h2>
            <p>
              Fresh Cleaning Luxe, LLC provides professional cleaning services for residential and commercial properties 
              throughout Utah.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Booking and Appointments</h2>
            <p>
              When you request a quote or book a service through our website, you agree to provide accurate and complete information.
              We will contact you to confirm appointments, pricing, and service details. Appointments are subject to availability.
            </p>
            <p>
              Please note that we require a 24-hour notice for cancellations. Cancellations made less than 24 hours before a scheduled 
              appointment may be subject to a cancellation fee of up to 50% of the service cost.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Data Collection and Processing</h2>
            <p>
              When you submit information through our website forms:
            </p>
            <ul>
              <li>Your data is securely transmitted via Web3Forms to our email</li>
              <li>We do not store your personal information in any database</li>
              <li>Your information is used solely for the purpose of providing our services</li>
              <li>Web3Forms is used only as a transmission service and does not permanently store your data</li>
            </ul>
            <p>
              For more details on how we handle your personal information, please see our <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Payment Terms</h2>
            <p>
              Payment terms will be discussed and agreed upon when booking your service. We accept various payment methods, 
              which will be communicated to you during the booking process. Prices are subject to change based on the specific 
              requirements of each job.
            </p>
            <p>
              All prices are in US Dollars and do not include applicable sales tax, which will be added to the final invoice 
              as required by Utah state law.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Service Guarantee</h2>
            <p>
              We strive to provide high-quality cleaning services. If you are not completely satisfied with our service, 
              please contact us within 24 hours of service completion, and we will address your concerns promptly. We offer 
              a 100% satisfaction guarantee and will return to fix any areas that do not meet your expectations at no additional charge.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Property Access and Preparation</h2>
            <p>
              You are responsible for providing access to the property on the scheduled service date. We recommend securing 
              or removing valuable or fragile items before our arrival. While we take the utmost care, we cannot be held 
              responsible for damage to such items if they were not properly secured or if we were not informed about them.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by Utah state law and federal laws, Fresh Cleaning Luxe, LLC shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
              or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
            </p>
            <p>
              Our total liability for any claims under these Terms and Conditions shall not exceed the amount paid by you for the 
              services that are the subject of the claim.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Insurance</h2>
            <p>
              Fresh Cleaning Luxe, LLC is fully insured in accordance with Utah state requirements. However, we recommend that you maintain appropriate insurance coverage 
              for your property and possessions.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Website Use</h2>
            <p>
              The content on our website is for general information and use only. It is subject to change without notice. 
              Our website uses cookies to enhance user experience. By using our website, you consent to our use of cookies 
              in accordance with our <Link to="/cookie-policy">Cookie Policy</Link>.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Privacy and Your Rights</h2>
            <p>
              Your use of our website and services is also governed by our <Link to="/privacy-policy">Privacy Policy</Link>. 
              Under the Utah Consumer Privacy Act (UCPA), you have specific rights regarding your personal data, including:
            </p>
            <ul>
              <li>The right to confirm whether we are processing your personal data</li>
              <li>The right to access your personal data</li>
              <li>The right to delete personal data you provided to us</li>
              <li>The right to data portability</li>
              <li>The right to opt out of the processing of your personal data for targeted advertising or sale</li>
            </ul>
            <p>
              We respect these rights and are committed to complying with all applicable privacy laws.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Fresh Cleaning Luxe, LLC, its officers, directors, employees, agents, 
              and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including 
              reasonable attorneys' fees) that such parties may incur as a result of or arising from your violation of these 
              Terms and Conditions.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Dispute Resolution</h2>
            <p>
              Any dispute arising under these Terms and Conditions shall be resolved through negotiation in good faith. If the dispute 
              cannot be resolved through negotiation, it shall be submitted to binding arbitration in accordance with the rules of the 
              American Arbitration Association, with the arbitration to take place in Utah County, Utah.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Utah, 
              without giving effect to any principles of conflicts of law. Any legal action or proceeding related to these 
              Terms and Conditions shall be brought exclusively in the state or federal courts located in Utah County, Utah.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Changes to Terms and Conditions</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon 
              posting on the website. Your continued use of our website or services after any changes indicates your acceptance 
              of the modified Terms and Conditions.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
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

export default TermsConditions; 