import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from './AnimatedSection';
import { FaLaptopCode, FaMobileAlt, FaSearchDollar, FaHashtag, FaPaintBrush, FaServer, FaCheckCircle, FaChevronDown } from 'react-icons/fa';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    {
      id: "web-dev",
      slug: "web-development",
      icon: <FaLaptopCode size={40} />,
      title: 'Web Application Development',
      description: 'We engineer blazingly fast, highly scalable web applications using the latest modern architectures. From beautiful marketing sites to complex internal dashboards, we build solutions that drive efficiency.',
      features: ['React & Next.js Ecosystems', 'Custom API Integrations', 'Progressive Web Apps (PWAs)', 'Headless CMS Architectures'],
      technologies: ['React', 'Next.js', 'Node.js', 'WordPress', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: "app-dev",
      slug: "mobile-app-development",
      icon: <FaMobileAlt size={40} />,
      title: 'Mobile App Development',
      description: 'Reach your audience on their native devices. We build cross-platform mobile applications that offer native-level performance and fluid, intuitive user experiences.',
      features: ['iOS & Android Deployment', 'Offline Functionality', 'Push Notifications', 'App Store Optimization (ASO)'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      id: "seo-marketing",
      slug: "seo-marketing",
      icon: <FaSearchDollar size={40} />,
      title: 'SEO & Digital Marketing',
      description: 'Visibility is everything. Our data-driven marketing strategies and deep technical SEO optimizations ensure your brand is seen by the people who matter most.',
      features: ['Technical On-Page SEO', 'Link Building Strategies', 'Content Architecture', 'PPC & Targeted Ad Campaigns'],
      technologies: ['Google Analytics', 'Ahrefs', 'SEMrush', 'Meta Ads']
    }
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'We dive deep into your business goals, target audience, and current digital footprint.' },
    { step: '02', title: 'Strategy & Design', desc: 'Wireframing, UI/UX prototyping, and technical architecture planning.' },
    { step: '03', title: 'Development', desc: 'Agile sprints with weekly check-ins, ensuring the product evolves exactly as envisioned.' },
    { step: '04', title: 'Launch & Scale', desc: 'Rigorous QA testing, deployment, and ongoing post-launch maintenance strategies.' }
  ];

  const faqs = [
    { q: "How long does a typical web project take?", a: "A standard corporate website typically takes 4-6 weeks from discovery to launch. Complex web applications or e-commerce platforms can take 8-12 weeks depending on features." },
    { q: "Do you provide ongoing maintenance?", a: "Yes! We offer monthly retainer packages that cover hosting, security updates, regular content changes, and continuous SEO optimization." },
    { q: "Will I own the code once the project is done?", a: "Absolutely. Once the final invoice is paid, you retain full intellectual property rights to the final code and assets we produced for your project." },
    { q: "Do you work with startups?", a: "We love working with startups. We can help you build your initial MVP (Minimum Viable Product) rapidly to help you secure funding and test market fit." }
  ];

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Helmet>
        <title>Our Services | Hanova Devs</title>
        <meta name="description" content="Explore Hanova Devs' comprehensive digital services including Web Development, App Development, SEO, and Digital Marketing." />
      </Helmet>
      
      {/* Page Header */}
      <div style={{ background: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--glass-border)', marginBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,180,216,0.1) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <AnimatedSection>
            <span className="section-label">Capabilities</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: 'var(--text-primary)', marginTop: '10px' }}>
              Comprehensive <span className="gradient-text">Digital Services</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '20px auto 0', lineHeight: '1.8' }}>
              We provide end-to-end technology solutions designed to modernize workflows, accelerate growth, and capture market share.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container">
        {/* Detailed Services Listing */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginBottom: '100px' }}>
          {services.map((service, index) => (
            <AnimatedSection key={service.id} direction={index % 2 === 0 ? "left" : "right"}>
              <div className="glass-card" style={{ padding: '50px', display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center', background: 'white' }}>
                <div style={{ flex: '1 1 300px' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(0,180,216,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                    {service.icon}
                  </div>
                  <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '20px' }}>{service.title}</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                    {service.description}
                  </p>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <a href="/#contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>Start a Project</a>
                    <a href={`/services/${service.slug}`} className="btn-secondary" style={{ padding: '10px 24px', fontSize: '0.95rem', background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)', borderRadius: '30px', textDecoration: 'none', fontWeight: '600' }}>Learn More</a>
                  </div>
                </div>
                
                <div style={{ flex: '1 1 300px', background: 'var(--bg-secondary)', padding: '30px', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.2rem' }}>Key Deliverables</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-secondary)' }}>
                        <FaCheckCircle color="var(--primary)" /> {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '15px', fontSize: '1rem' }}>Technologies Used</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {service.technologies.map((tech, i) => (
                      <span key={i} style={{ background: 'rgba(0,0,0,0.05)', color: 'var(--text-primary)', padding: '5px 12px', borderRadius: '15px', fontSize: '0.85rem', fontWeight: '500' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Development Process Timeline */}
        <div style={{ marginBottom: '100px' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 className="section-title">Our <span className="gradient-text">Process</span></h2>
              <p className="section-desc" style={{ margin: '0 auto' }}>A transparent, agile workflow ensuring predictability and excellence from start to finish.</p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
            {processSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <div style={{ position: 'relative', padding: '30px', background: 'white', borderRadius: '20px', border: '1px solid var(--glass-border)', height: '100%' }}>
                  <div style={{ fontSize: '3rem', fontWeight: '800', color: 'rgba(0,180,216,0.1)', position: 'absolute', top: '20px', right: '20px', lineHeight: 1 }}>
                    {step.step}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '15px', position: 'relative', zIndex: 1 }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', position: 'relative', zIndex: 1 }}>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <AnimatedSection>
          <div className="glass-card" style={{ padding: '50px', background: 'white', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>Frequently Asked <span className="gradient-text">Questions</span></h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {faqs.map((faq, index) => (
                <div key={index} style={{ border: '1px solid var(--glass-border)', borderRadius: '15px', overflow: 'hidden' }}>
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    style={{ width: '100%', padding: '20px', background: activeFaq === index ? 'var(--bg-secondary)' : 'transparent', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left', transition: 'background 0.3s' }}
                  >
                    <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)' }}>{faq.q}</span>
                    <FaChevronDown style={{ color: 'var(--primary)', transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                  </button>
                  <div style={{ maxHeight: activeFaq === index ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out', background: 'var(--bg-secondary)' }}>
                    <div style={{ padding: '0 20px 20px 20px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default ServicesPage;
