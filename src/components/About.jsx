import AnimatedSection from './AnimatedSection';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';

const AbstractNode = () => {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial 
          color="#00b4d8" 
          wireframe 
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <mesh scale={0.8}>
         <octahedronGeometry args={[1.5, 0]} />
         <meshStandardMaterial 
          color="#ffffff" 
          transparent
          opacity={0.7}
          roughness={0}
          metalness={0.5}
        />
      </mesh>
    </Float>
  );
};

const About = () => {
  return (
    <section id="about" style={{ padding: 'var(--section-padding)', position: 'relative', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          
          {/* Image/Visual Graphic */}
          <AnimatedSection direction="right">
            <div style={{ position: 'relative', height: '500px', width: '100%' }}>
              <div className="glass-card" style={{ 
                height: '100%', 
                width: '100%',
                borderRadius: '30px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
               }}>
                 {/* Lighter canvas background */}
                 <div style={{
                   position: 'absolute',
                   inset: 0,
                   background: 'linear-gradient(135deg, rgba(0,180,216,0.1) 0%, rgba(255,255,255,0) 100%)',
                   zIndex: 0
                 }}/>
                 <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
                   <Canvas camera={{ position: [0, 0, 4] }}>
                     <ambientLight intensity={1.5} />
                     <pointLight position={[10, 10, 10]} intensity={2} color="#00b4d8" />
                     {/* Using dark stars for light mode */}
                     <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} color="#0f172a" />
                     <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
                     <AbstractNode />
                   </Canvas>
                 </div>
              </div>
              
              {/* Floating Badge */}
              <div className="glass-card" style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                padding: '20px 30px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', margin: 0 }}>5+</h2>
                <p style={{ margin: 0, color: 'var(--text-primary)', fontWeight: '600', lineHeight: 1.2 }}>Years of<br/>Experience</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text Content */}
          <div style={{ paddingLeft: '20px' }}>
            <AnimatedSection>
              <span className="section-label">About Us</span>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="section-title">
                Driven By <span className="gradient-text">Innovation</span> & Passion.
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '25px', lineHeight: 1.8 }}>
                At Hanova Devs, we believe in the power of technology to transform businesses. 
                We are a dedicated team of developers, designers, and marketers who specialize in crafting 
                bespoke digital solutions tailored exactly to your business goals.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.8 }}>
                Whether you are a startup needing a complete brand presence, or an established enterprise 
                looking to optimize your workflow with a custom application, we have the precise expertise 
                to elevate you to the next level.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Agile Development</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Data-Driven SEO</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Modern UI/UX</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Scalable Solutions</span>
                </div>
              </div>
            </AnimatedSection>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
