import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../AnimatedSection';
import { FaSearchDollar, FaHashtag, FaChartPie, FaExternalLinkAlt, FaGoogle, FaBullhorn } from 'react-icons/fa';

const SEOMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const strategies = [
    { title: 'Technical SEO', desc: 'Optimizing site structure, speed, and mobile-friendliness for search engine dominance.', icon: <FaGoogle /> },
    { title: 'Content Marketing', desc: 'Crafting high-intent, authoritative content that resonates with your audience and earns backlinks.', icon: <FaExternalLinkAlt /> },
    { title: 'PPC & Ads', desc: 'High-ROI paid advertising across Google, Meta, and LinkedIn to capture immediate demand.', icon: <FaSearchDollar /> },
    { title: 'Social Strategy', desc: 'Cohesive brand presence and community building across major social platforms.', icon: <FaHashtag /> }
  ];

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Helmet>
        <title>SEO & Digital Marketing | Hanova Devs</title>
        <meta name="description" content="Data-driven SEO and Digital Marketing services by Hanova Devs. We help businesses rank higher and convert more." />
      </Helmet>

      <div className="container">
        {/* Header */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Service Detail</span>
            <h1 className="section-title">
              Data-Driven <span className="gradient-text">Growth Marketing</span>
            </h1>
            <p className="section-desc" style={{ maxWidth: '800px', margin: '20px auto' }}>
              We combine deep technical audits with creative content strategies to push your brand to the top of search results and drive measurable ROI.
            </p>
          </div>
        </AnimatedSection>

        {/* Strategy Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '80px' }}>
          {strategies.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card" style={{ padding: '40px', background: 'white' }}>
                 <div style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>{s.icon}</div>
                 <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{s.title}</h3>
                 <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ROI Focus */}
        <AnimatedSection direction="up">
           <div className="glass-card" style={{ padding: '60px', background: 'var(--bg-secondary)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
              <div>
                 <h2 style={{ fontSize: '2.5rem', marginBottom: '25px' }}>Measurable <span className="gradient-text">Success</span></h2>
                 <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                    We don't believe in vanity metrics. Our approach is purely results-oriented, focusing on <strong>Core Web Vitals</strong> (LCP, FID, CLS) to ensure search engines favor your site's performance.
                 </p>
                 <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
                    <div style={{ padding: '15px 25px', background: 'white', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                       <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)' }}>99%</div>
                       <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>SEO Score</div>
                    </div>
                    <div style={{ padding: '15px 25px', background: 'white', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                       <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)' }}>4.2x</div>
                       <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Avg. ROI</div>
                    </div>
                 </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                 <FaChartPie size={200} color="var(--primary)" style={{ opacity: 0.1, position: 'absolute' }} />
                 <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <FaBullhorn size={80} color="var(--primary)" style={{ marginBottom: '20px' }} />
                    <h3 style={{ fontSize: '1.5rem' }}>Amplified Conversion Tracking</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Full GA4 & Meta Pixel Integration</p>
                 </div>
              </div>
           </div>
        </AnimatedSection>

        {/* Detailed Tech */}
        <div style={{ marginTop: '100px', textAlign: 'center' }}>
           <AnimatedSection>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '50px' }}>Our Marketing <span className="gradient-text">Arsenal</span></h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
                 {['SEMrush', 'Ahrefs', 'Google Console', 'Meta Pixel', 'LinkedIn Insight', 'Screaming Frog', 'Moz Pro'].map((tool, i) => (
                    <span key={i} style={{ padding: '10px 20px', background: 'white', border: '1px solid var(--glass-border)', borderRadius: '10px', fontWeight: '600' }}>{tool}</span>
                 ))}
              </div>
           </AnimatedSection>
        </div>

      </div>
    </div>
  );
};

export default SEOMarketing;
