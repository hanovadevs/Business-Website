import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../AnimatedSection';
import { FaLaptopCode, FaCheckCircle, FaRocket, FaShieldAlt, FaServer } from 'react-icons/fa';

const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: 'Performance Optimization',
      desc: 'Blazingly fast load times using Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR).',
      icon: <FaRocket size={30} />
    },
    {
      title: 'Security First',
      desc: 'Robust protection with JWT authentication, HTTPS, and advanced sanitization techniques.',
      icon: <FaShieldAlt size={30} />
    },
    {
      title: 'Scalable Architecture',
      desc: 'Future-proof designs ranging from high-performance monoliths to modular microservices.',
      icon: <FaServer size={30} />
    }
  ];

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Helmet>
        <title>Web Development | Hanova Devs</title>
        <meta name="description" content="Expert Web Development services by Hanova Devs. We build scalable, secure, and high-performance web applications." />
      </Helmet>

      <div className="container">
        {/* Header */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Service Detail</span>
            <h1 className="section-title">
              Pro-Grade <span className="gradient-text">Web Development</span>
            </h1>
            <p className="section-desc" style={{ maxWidth: '800px', margin: '20px auto' }}>
              We don't just build websites; we engineer digital powerhouses designed for speed, security, and infinite scalability.
            </p>
          </div>
        </AnimatedSection>

        {/* Feature Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '80px' }}>
          {features.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card" style={{ padding: '40px', background: 'white', height: '100%' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '20px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tech Stack Section */}
        <AnimatedSection direction="up">
          <div className="glass-card" style={{ padding: '50px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)' }}>
            <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>Our <span className="gradient-text">Web Stack</span></h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
              {['Next.js 14', 'React', 'TypeScript', 'Node.js', 'WordPress', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'AWS'].map((tech, i) => (
                <div key={i} style={{ 
                  padding: '12px 24px', 
                  background: 'white', 
                  borderRadius: '30px', 
                  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                  fontWeight: '600',
                  color: 'var(--text-primary)'
                }}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Detailed Explanation */}
        <div style={{ marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <AnimatedSection direction="left">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '25px' }}>Core Excellence</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              In today's digital landscape, a millisecond could be the difference between a conversion and a bounce. We leverage modern patterns such as <strong>Server-Side Rendering (SSR)</strong> to ensure your content is delivered instantly to users and search engines alike.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Using <strong>Edge Computing</strong>, we bring your application's logic closer to your users, reducing latency and providing a globally consistent, premium experience.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div style={{ background: 'var(--primary)', padding: '60px', borderRadius: '40px', color: 'white' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'white' }}>Why Next.js?</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Automatic Image Optimization', 'Integrated Metadata API', 'Blazing Fast Routing', 'Zero-Config Deployments'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <FaCheckCircle color="white" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
