import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from './AnimatedSection';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-secondary)' }}>
      <Helmet>
        <title>Terms of Service | Hanova Devs</title>
        <meta name="description" content="Read the Terms of Service for engaging with Hanova Devs for digital development solutions." />
      </Helmet>
      
      <div className="container" style={{ maxWidth: '900px' }}>
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Legal</span>
            <h1 className="section-title" style={{ marginTop: '10px' }}>
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontWeight: '500' }}>Last Updated: October 2023</p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2} direction="up">
          <div className="glass-card" style={{ padding: '50px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            
            <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem', fontWeight: '700' }}>1. Acceptance of Terms</h2>
            <p style={{ marginBottom: '30px' }}>
              By accessing our website or retaining the services of Hanova Devs, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you must not access the website or use our services.
            </p>

            <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem', fontWeight: '700' }}>2. Description of Services</h2>
            <p style={{ marginBottom: '30px' }}>
              Hanova Devs provides digital solutions including but not limited to custom web development, mobile application development, search engine optimization (SEO), and social media marketing. Specific deliverables, timelines, and costs will be agreed upon in writing via a separate project contract or statement of work before the commencement of any service.
            </p>

            <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem', fontWeight: '700' }}>3. Project Terms & Intellectual Property</h2>
            <p style={{ marginBottom: '15px' }}>Upon full payment of all invoices related to a specific project:</p>
            <ul style={{ marginBottom: '30px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>The client assumes full ownership of the final delivered code, designs, and assets created specifically for their project.</li>
              <li style={{ marginBottom: '10px' }}>Hanova Devs retains the right to display the completed project in our portfolio, case studies, and marketing materials unless a specific Non-Disclosure Agreement (NDA) is signed to the contrary.</li>
              <li style={{ marginBottom: '10px' }}>Hanova Devs retains ownership of any pre-existing proprietary tools, libraries, or frameworks used to build the final product.</li>
            </ul>

            <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem', fontWeight: '700' }}>4. Payment Terms</h2>
            <p style={{ marginBottom: '30px' }}>
              Payments are required according to the schedule outlined in your specific project contract. Typical structured payments include an initial deposit before work commences, followed by milestone payments. All invoices are due upon receipt unless otherwise stated. Failure to make payments may result in the suspension of project work.
            </p>

            <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem', fontWeight: '700' }}>5. Limitation of Liability</h2>
            <p style={{ marginBottom: '30px' }}>
              In no event shall Hanova Devs, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use our services; (ii) any conduct or content of any third party; or (iii) unauthorized access or alteration of your transmissions or content.
            </p>

            <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem', fontWeight: '700' }}>6. Modifications</h2>
            <p style={{ marginBottom: '30px' }}>
              We reserve the right to modify or replace these Terms at any time. Material changes will be communicated via the email address we have on file for active clients.
            </p>

             <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem', fontWeight: '700' }}>7. Contact Information</h2>
             <p style={{ marginBottom: '0' }}>
              For any legal inquiries regarding these Terms of Service, contact us at <a href="mailto:hanovadevs@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>hanovadevs@gmail.com</a>.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TermsOfService;
