import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from './AnimatedSection';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-secondary)' }}>
      <Helmet>
        <title>Privacy Policy | Hanova Devs</title>
        <meta name="description" content="Read the Privacy Policy for Hanova Devs to understand how we collect, use, and protect your data." />
      </Helmet>
      
      <div className="container" style={{ maxWidth: '900px' }}>
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Legal</span>
            <h1 className="section-title" style={{ marginTop: '10px' }}>
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontWeight: '500' }}>Last Updated: October 2023</p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2} direction="up">
          <div className="glass-card" style={{ padding: '50px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            
            <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem', fontWeight: '700' }}>1. Introduction</h2>
            <p style={{ marginBottom: '30px' }}>
              Hanova Devs ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
            </p>

            <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem', fontWeight: '700' }}>2. Information We Collect</h2>
            <p style={{ marginBottom: '15px' }}>We may collect several types of information from and about users of our website, including:</p>
            <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--primary)' }}>Personal Identification Information:</strong> Name, email address, phone number, and any other details you voluntarily provide via our contact forms.</li>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--primary)' }}>Technical Data:</strong> IP address, browser type, operating system, and access times, automatically collected via cookies and analytics tools.</li>
            </ul>

            <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem', fontWeight: '700' }}>3. How We Use Your Information</h2>
            <p style={{ marginBottom: '15px' }}>We use the information we collect to:</p>
            <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>Respond to your inquiries and provide customer support.</li>
              <li style={{ marginBottom: '10px' }}>Deliver the web development, app development, or marketing services you have requested.</li>
              <li style={{ marginBottom: '10px' }}>Improve our website functionality, user experience, and service offerings.</li>
              <li style={{ marginBottom: '10px' }}>Send important administrative communications regarding your ongoing projects.</li>
            </ul>

            <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem', fontWeight: '700' }}>4. Third-Party Services</h2>
            <p style={{ marginBottom: '30px' }}>
              We utilize third-party services such as <strong>FormSubmit.co</strong> to process contact form submissions securely. By submitting a message through our contact form, you acknowledge that your information will be processed by this third-party processor in accordance with their respective privacy policies. We do not sell, rent, or trade your personal information to external marketers.
            </p>

            <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem', fontWeight: '700' }}>5. Data Security</h2>
            <p style={{ marginBottom: '30px' }}>
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem', fontWeight: '700' }}>6. Contact Us</h2>
            <p style={{ marginBottom: '10px' }}>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p style={{ marginBottom: '0', fontWeight: '600', color: 'var(--text-primary)' }}>
              Email: <a href="mailto:hanovadevs@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>hanovadevs@gmail.com</a><br/>
              Phone: +92 335 0007967
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
