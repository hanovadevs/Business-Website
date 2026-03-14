import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Light Background Gradients */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0,180,216,0.15) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(144,224,239,0.2) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        filter: 'blur(30px)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          
          {/* Text Content */}
          <div style={{ paddingRight: '20px' }}>
            <AnimatedSection>
              <div style={{
                display: 'inline-block',
                padding: '8px 20px',
                background: 'rgba(0, 180, 216, 0.1)',
                border: '1px solid rgba(0, 180, 216, 0.2)',
                borderRadius: '30px',
                color: 'var(--primary)',
                fontWeight: '600',
                marginBottom: '20px',
                fontSize: '0.9rem',
                letterSpacing: '1px'
              }}>
                INNOVATIVE DIGITAL SOLUTIONS
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '20px',
                color: 'var(--text-primary)'
              }}>
                We Build The <br/>
                <span className="gradient-text">Future</span> Of Web.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                marginBottom: '40px',
                maxWidth: '500px',
                lineHeight: '1.8'
              }}>
                Hanova Devs is a specialized software team delivering premium Web & Mobile Development, 
                SEO strategies, and Marketing. We turn your ideas into digital reality.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <a href="#portfolio" className="btn-primary">
                  View Our Work
                </a>
                <a href="#contact" className="btn-outline">
                  Contact Us
                </a>
              </div>
            </AnimatedSection>
            
            {/* Quick Stats */}
            <AnimatedSection delay={0.8}>
              <div style={{ display: 'flex', gap: '30px', marginTop: '50px', borderTop: '1px solid var(--glass-border)', paddingTop: '30px' }}>
                <div>
                  <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>50+</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Projects Done</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>100%</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Satisfaction</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>24/7</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Support</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* 3D Graphic */}
          <AnimatedSection direction="left" delay={0.3}>
            <div style={{ height: '500px', width: '100%', position: 'relative' }}>
              <div className="glass-card" style={{
                position: 'absolute',
                inset: '20px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.4)',
                border: '1px solid rgba(0, 180, 216, 0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
              }}></div>
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={1.2} />
                <directionalLight position={[2, 5, 2]} intensity={2.5} color="#ffffff" />
                <directionalLight position={[-2, -5, -2]} intensity={1} color="#00b4d8" />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                <Sphere args={[1, 64, 64]}>
                  <MeshDistortMaterial
                    color="#00b4d8"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                  />
                </Sphere>
              </Canvas>
            </div>
          </AnimatedSection>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
