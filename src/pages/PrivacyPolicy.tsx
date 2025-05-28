import React from 'react';
import '../styles/LegalPages.css';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="legal-page">
      <div className="container">
        <h1 className="section-title">Privacy Policy</h1>
        <div className="legal-content">
          <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section className="legal-section">
            <h2>Introduction</h2>
            <p>
              Fresh Cleaning Luxe, LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our website or services.
            </p>
            <p>
              This Privacy Policy complies with applicable United States federal laws and Utah state laws, including 
              the Utah Consumer Privacy Act (UCPA) which became effective December 31, 2023.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Information We Collect</h2>
            <p>
              We collect minimal personal information through our quote request forms and contact forms, which may include:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address (for service location)</li>
              <li>Details about requested cleaning services</li>
            </ul>
          </section>
          
          <section className="legal-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect solely for the purpose of:</p>
            <ul>
              <li>Responding to your inquiries</li>
              <li>Providing quotes for requested services</li>
              <li>Scheduling and performing cleaning services</li>
              <li>Communicating with you about our services</li>
              <li>Fulfilling our contractual obligations to you</li>
              <li>Complying with legal requirements</li>
            </ul>
            <p>
              <strong>Important Note:</strong> When you submit a form on our website, your information is 
              transmitted via Web3Forms to Daniela Caraballo, owner of Fresh Cleaning Luxe, LLC, via email. 
              We do not store your personal information in a database. The information is used solely to contact you 
              and schedule appointments for cleaning services.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Form Submission and Data Handling</h2>
            <p>
              Our website uses Web3Forms for processing form submissions. When you submit information through our forms:
            </p>
            <ul>
              <li>Your data is securely transmitted through Web3Forms</li>
              <li>The information is sent directly to our email</li>
              <li>Your data is not stored in a database</li>
              <li>We do not sell or share your personal information with third parties</li>
            </ul>
            <p>
              Web3Forms serves only as a transmission service and does not store your data permanently.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Legal Basis for Processing</h2>
            <p>
              We process your personal information based on one or more of the following legal grounds:
            </p>
            <ul>
              <li>Performance of a contract when we provide you with services</li>
              <li>Your consent when you voluntarily provide information</li>
              <li>Legitimate business interests that are not overridden by your rights</li>
              <li>Compliance with legal obligations</li>
            </ul>
          </section>
          
          <section className="legal-section">
            <h2>Data Retention</h2>
            <p>
              Since we do not store your information in a database, your information is only retained in our 
              email communications. We keep email communications with clients for as long as necessary to 
              provide our services and as required by applicable laws.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information, including:
            </p>
            <ul>
              <li>Using secure email services</li>
              <li>Using Web3Forms for secure form transmission</li>
              <li>Limiting access to personal information to authorized personnel</li>
              <li>Maintaining physical, electronic, and procedural safeguards</li>
            </ul>
            <p>
              However, please be aware that no method of electronic transmission or storage is 100% secure, 
              and we cannot guarantee the absolute security of your data.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Your Rights Under the Utah Consumer Privacy Act</h2>
            <p>As a Utah resident, you have the following rights regarding your personal data:</p>
            <ul>
              <li>Right to confirm whether we are processing your personal data</li>
              <li>Right to access your personal data</li>
              <li>Right to delete the personal data you provided to us</li>
              <li>Right to obtain a copy of your personal data in a portable format</li>
              <li>Right to opt out of the processing of your personal data for targeted advertising or sale</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at book@freshcleaningluxe.com. We will respond to your request within 45 days.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13 years of age, and we do not knowingly 
              collect personal information from children under 13. If we learn that we have collected 
              personal information from a child under 13, we will promptly delete that information.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance your browsing experience. 
              For more information about how we use cookies, please see our <Link to="/cookie-policy">Cookie Policy</Link>.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising under this Privacy Policy will be governed by the laws of the State of Utah, 
              without regard to its conflict of law provisions. You agree to submit to the personal and exclusive 
              jurisdiction of the courts located within Utah County, Utah.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy; 