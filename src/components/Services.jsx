import AnimatedSection from './AnimatedSection';
import { FaLaptopCode, FaMobileAlt, FaSearchDollar, FaHashtag, FaPaintBrush } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode size={30} />,
      title: 'Web Development',
      desc: 'Custom, responsive websites built with modern frameworks like React and Next.js ensuring blazing fast performance.'
    },
    {
      icon: <FaMobileAlt size={30} />,
      title: 'App Development',
      desc: 'Native and cross-platform mobile applications for iOS and Android that users love engaging with.'
    },
    {
      icon: <FaSearchDollar size={30} />,
      title: 'SEO Optimization',
      desc: 'Rank higher on search engines and drive organic traffic with our data-driven on-page and off-page SEO strategies.'
    },
    {
      icon: <FaHashtag size={30} />,
      title: 'Social Media Marketing',
      desc: 'Build your brand presence across all major platforms with engaging content and targeted ad campaigns.'
    },
    {
      icon: <FaPaintBrush size={30} />,
      title: 'UI/UX Design',
      desc: 'Intuitive and aesthetically pleasing designs that provide seamless user experiences and higher conversion rates.'
    }
  ];

  return (
    <section id="services" style={{ padding: 'var(--section-padding)', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <AnimatedSection>
            <span className="section-label">Our Expertise</span>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="section-title">
              What We <span className="gradient-text">Do</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Comprehensive digital solutions to modernize your workflow, expand your reach, and accelerate your business growth.
            </p>
          </AnimatedSection>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
              <div 
                className="glass-card"
                style={{
                  padding: '40px 30px',
                  height: '100%',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = 'rgba(0, 180, 216, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '15px',
                  background: 'rgba(0, 180, 216, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  marginBottom: '20px'
                }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '15px', fontWeight: '700' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {service.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
