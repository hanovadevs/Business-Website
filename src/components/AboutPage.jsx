import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from './AnimatedSection';
import { FaBullseye, FaHeart, FaLightbulb, FaRocket, FaSearch, FaCogs, FaChartBar, FaGlobe, FaCertificate, FaHandshake } from 'react-icons/fa';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const methodology = [
    { icon: <FaSearch size={28} />, title: '01. Discovery', desc: 'We dive deep into your business ecosystem to identify bottlenecks and untapped opportunities for digital growth.' },
    { icon: <FaRocket size={28} />, title: '02. Blueprinting', desc: 'Our architects design a comprehensive roadmap, choosing the exact tech stack to ensure long-term scalability and performance.' },
    { icon: <FaCogs size={28} />, title: '03. Agile Build', desc: 'Rapid, iterative development with continuous integration, keeping you involved and the project on track at every sprint.' },
    { icon: <FaChartBar size={28} />, title: '04. Optimization', desc: 'Post-launch, we monitor data and optimize performance to ensure your solution delivers maximum ROI and user engagement.' }
  ];

  const metrics = [
    { icon: <FaGlobe size={30} />, value: '15+', label: 'Countries Reached', color: '#00b4d8' },
    { icon: <FaCertificate size={30} />, value: '99.9%', label: 'Solution Uptime', color: '#0077b6' },
    { icon: <FaHandshake size={30} />, value: '250+', label: 'Global Partners', color: '#03045e' }
  ];

  const values = [
    { icon: <FaBullseye size={30} />, title: 'Precision Execution', desc: 'We do not just write code; we architect solutions designed specifically for your precise business objectives.' },
    { icon: <FaLightbulb size={30} />, title: 'Constant Innovation', desc: 'The digital landscape evolves daily. We inherently adopt cutting-edge technologies to keep you ahead of the curve.' },
    { icon: <FaHeart size={30} />, title: 'Client Centricity', desc: 'Your success is our success. We prioritize transparent communication and build lasting, impactful partnerships.' }
  ];

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Helmet>
        <title>About Us | Hanova Devs</title>
        <meta name="description" content="Learn about the story, strategic approach, and global impact driving Hanova Devs to deliver premium digital solutions." />
      </Helmet>
      
       {/* Page Header */}
       <div style={{ background: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--glass-border)', marginBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '20%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0,180,216,0.1) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <AnimatedSection>
            <span className="section-label">Who We Are</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: 'var(--text-primary)', marginTop: '10px' }}>
              We Are <span className="gradient-text">Hanova Devs</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '750px', margin: '20px auto 0', lineHeight: '1.8' }}>
              We are more than just a development agency. We are a strategic technology partner dedicated to engineering high-impact digital solutions that drive global business growth.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container">
        
        {/* Our Story with Side Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginBottom: '100px', alignItems: 'center' }}>
          <AnimatedSection direction="right">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {metrics.map((m, i) => (
                <div key={i} className="glass-card" style={{ padding: '25px', textAlign: 'center', background: 'white', border: `1px solid ${m.color}22`, gridColumn: i === 2 ? 'span 2' : 'span 1' }}>
                  <div style={{ color: m.color, marginBottom: '10px' }}>{m.icon}</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-primary)' }}>{m.value}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: '800' }}>Our Story</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
              Hanova Devs was founded on the principle that technical excellence and business strategy are inseparable. We saw a gap in the market: agencies were either purely creative or purely technical, often losing sight of the underlying business goals.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              We built Hanova Devs to bridge that gap. By combining senior-level engineering with rigorous market analysis, we ensure that every line of code we write contributes directly to our clients' bottom line and competitive advantage.
            </p>
          </AnimatedSection>
        </div>

        {/* Strategic Approach */}
        <div style={{ marginBottom: '100px', background: 'var(--bg-secondary)', padding: '80px 40px', borderRadius: '30px', border: '1px solid var(--glass-border)' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="section-label">How We Work</span>
              <h2 className="section-title">The <span className="gradient-text">Strategic</span> Approach</h2>
              <p className="section-desc" style={{ margin: '0 auto' }}>A data-driven methodology designed for predictable, scalable success.</p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px' }}>
            {methodology.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div style={{ position: 'relative' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px', boxShadow: '0 10px 20px rgba(0,180,216,0.3)' }}>
                    {step.icon}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '15px', fontWeight: '700' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>{step.desc}</p>
                  {index < methodology.length - 1 && (
                    <div style={{ display: 'none' }} className="step-arrow">
                       {/* Arrow logic could be added here for desktop */}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div style={{ marginBottom: '40px' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 className="section-title">Our <span className="gradient-text">Values</span></h2>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {values.map((v, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <div className="glass-card" style={{ padding: '40px', background: 'white', height: '100%', textAlign: 'center' }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(0,180,216,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                    {v.icon}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '15px' }}>{v.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
