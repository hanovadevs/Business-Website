import { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Hanova Devs transformed our digital presence completely. Their attention to detail and ability to deliver a complex web application on time was incredibly impressive. Highly recommended!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthMarketer",
      content: "The SEO strategies implemented by the team yielded a 150% increase in organic traffic within just three months. They truly understand the modern digital landscape.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager, RetailFlow",
      content: "Building our mobile app with Hanova Devs was a seamless experience. They communicated transparently at every step and the final product exceeded our expectations.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="testimonials" style={{ padding: 'var(--section-padding)', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <AnimatedSection>
            <span className="section-label">Client Feedback</span>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="section-title">
              What People <span className="gradient-text">Say</span>
            </h2>
          </AnimatedSection>
        </div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', height: '400px' }}>
          
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              background: 'white',
              border: '1px solid rgba(0,0,0,0.1)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
             }}
             onMouseOver={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
             onMouseOut={(e) => e.currentTarget.style.background = 'white'}
             aria-label="Previous Testimonial"
          >
            <FaChevronLeft />
          </button>

          <button 
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              background: 'white',
              border: '1px solid rgba(0,0,0,0.1)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
             }}
             onMouseOver={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
             onMouseOut={(e) => e.currentTarget.style.background = 'white'}
             aria-label="Next Testimonial"
          >
            <FaChevronRight />
          </button>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const wipe = swipePower(offset.x, velocity.x);
                if (wipe < -swipeConfidenceThreshold) {
                  handleNext();
                } else if (wipe > swipeConfidenceThreshold) {
                  handlePrev();
                }
              }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <div className="glass-card" style={{ 
                padding: '50px', 
                textAlign: 'center', 
                position: 'relative',
                width: '100%',
                maxWidth: '700px',
                cursor: 'grab'
              }}>
                <FaQuoteLeft style={{ 
                  position: 'absolute', 
                  top: '30px', 
                  left: '30px', 
                  color: 'rgba(0, 180, 216, 0.1)', 
                  fontSize: '4rem' 
                }} />
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '25px' }}>
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} color="#fb8500" size={20} />
                  ))}
                </div>
                
                <p style={{ 
                  fontSize: '1.2rem', 
                  color: 'var(--text-primary)', 
                  lineHeight: '1.8', 
                  fontStyle: 'italic',
                  marginBottom: '30px',
                  position: 'relative',
                  zIndex: 1
                }}>
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    style={{ 
                      width: '60px', 
                      height: '60px', 
                      borderRadius: '50%', 
                      border: '2px solid var(--primary)',
                      objectFit: 'cover'
                    }} 
                  />
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '5px' }}>{testimonials[currentIndex].name}</h4>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{testimonials[currentIndex].role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Pagination Dots */}
          <div style={{
            position: 'absolute',
            bottom: '-40px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px'
          }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: index === currentIndex ? 'var(--primary)' : 'rgba(0,0,0,0.1)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
