import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../AnimatedSection';
import { FaMobileAlt, FaCloudUploadAlt, FaSync, FaShieldAlt, FaApple, FaAndroid } from 'react-icons/fa';

const MobileDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    { name: 'React Native', desc: 'Native-level performance with the agility of React.', icon: <FaMobileAlt /> },
    { name: 'Flutter', desc: 'Beautiful, natively compiled applications from a single codebase.', icon: <FaMobileAlt /> },
    { name: 'iOS (Swift)', desc: 'Purely native performance for the Apple ecosystem.', icon: <FaApple /> },
    { name: 'Android (Kotlin)', desc: 'Robust, native capabilities for Android devices.', icon: <FaAndroid /> }
  ];

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Helmet>
        <title>Mobile App Development | Hanova Devs</title>
        <meta name="description" content="Premium Mobile App Development services. We build high-performance iOS and Android apps using React Native and Flutter." />
      </Helmet>

      <div className="container">
        {/* Header */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Service Detail</span>
            <h1 className="section-title">
              Next-Gen <span className="gradient-text">Mobile Apps</span>
            </h1>
            <p className="section-desc" style={{ maxWidth: '800px', margin: '20px auto' }}>
              We transform your ideas into fluid, high-performance mobile experiences that users love. 
              Our apps are designed for impact, engagement, and cross-platform perfection.
            </p>
          </div>
        </AnimatedSection>

        {/* Tech Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', marginBottom: '80px' }}>
          {technologies.map((tech, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card" style={{ padding: '30px', background: 'white', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '15px' }}>{tech.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{tech.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{tech.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Detailed Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
          
          <AnimatedSection direction="right">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
               <div style={{ background: 'var(--bg-secondary)', padding: '40px', borderRadius: '30px', border: '1px solid var(--glass-border)' }}>
                  <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Mobile UI" style={{ width: '100%', borderRadius: '20px', boxShadow: 'var(--glass-shadow)' }} />
               </div>
               <div>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Native Performance, <span className="gradient-text">Cross-Platform Efficiency</span></h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '25px' }}>
                    We specialize in <strong>React Native</strong> and <strong>Flutter</strong>, allowing us to build apps for both iOS and Android simultaneously without compromising on the smooth, native feel that users expect.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <FaSync color="var(--primary)" />
                      <span style={{ fontWeight: '500' }}>Live Hot Reloading for Rapid Development</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <FaShieldAlt color="var(--primary)" />
                      <span style={{ fontWeight: '500' }}>Secure Biometric & Data Encryption</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <FaCloudUploadAlt color="var(--primary)" />
                      <span style={{ fontWeight: '500' }}>Seamless Cloud Synchronization</span>
                    </div>
                  </div>
               </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left">
             <div className="glass-card" style={{ padding: '60px', background: 'var(--primary)', color: 'white' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                   <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '20px' }}>Offline-First Experience</h2>
                   <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.9 }}>
                      Users aren't always connected. We architect our mobile solutions using <strong>SQLite</strong> and <strong>MMKV</strong> to ensure your app remains fully functional, fast, and responsive even without an active internet connection, syncing data seamlessly once back online.
                   </p>
                </div>
             </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
};

export default MobileDevelopment;
