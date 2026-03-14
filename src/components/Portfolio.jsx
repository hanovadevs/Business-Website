import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Design', 'App Dev', 'Marketing'];

  const projects = [
    { id: 1, title: 'E-Commerce Platform', category: 'Web Design', image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Fitness Tracker App', category: 'App Dev', image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Corporate Branding', category: 'Marketing', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Real Estate Portal', category: 'Web Design', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeefa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Luxury watch eCommerce', category: 'Web Design', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Modern Coffee Brand', category: 'Marketing', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 7, title: 'Healthcare Patient Portal', category: 'App Dev', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 8, title: 'Crypto Wallet App', category: 'App Dev', image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" style={{ padding: 'var(--section-padding)', position: 'relative', background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <AnimatedSection>
            <span className="section-label">Our Work</span>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Filter Buttons */}
        <AnimatedSection delay={0.3}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '15px', 
            marginBottom: '50px',
            flexWrap: 'wrap'
          }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  background: filter === cat ? 'linear-gradient(135deg, var(--primary), #0077b6)' : 'transparent',
                  color: filter === cat ? 'white' : 'var(--text-primary)',
                  border: filter === cat ? 'none' : '1px solid rgba(0,0,0,0.1)',
                  padding: '8px 24px',
                  borderRadius: '30px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div 
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '30px'
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={project.id}
              >
                <div 
                  className="glass-card" 
                  style={{ 
                    overflow: 'hidden', 
                    borderRadius: '20px',
                    position: 'relative',
                    background: 'white' // solid white for image cards
                  }}
                >
                  <div style={{ 
                    width: '100%', 
                    height: '240px', 
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{
                       position: 'absolute',
                       top: '15px',
                       right: '15px',
                       background: 'rgba(255,255,255,0.9)',
                       color: 'var(--primary)',
                       padding: '5px 15px',
                       borderRadius: '20px',
                       fontSize: '0.8rem',
                       fontWeight: '600',
                       backdropFilter: 'blur(5px)'
                    }}>
                      {project.category}
                    </div>
                  </div>
                  <div style={{ padding: '25px' }}>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '10px' }}>{project.title}</h3>
                    <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      View Details →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;
