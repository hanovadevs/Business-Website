import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', projectType: '', budget: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/hanovadevs@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            projectType: formData.projectType,
            budget: formData.budget,
            message: formData.message,
            _subject: "New Project Inquiry from " + formData.name
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again or email us directly at hanovadevs@gmail.com.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again or email us directly at hanovadevs@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" style={{ padding: 'var(--section-padding)', position: 'relative', background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <AnimatedSection>
            <span className="section-label">Get In Touch</span>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="section-title">
              Let's Start a <span className="gradient-text">Project</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Ready to transform your ideas into reality? Contact us today to discuss your next big digital venture.
            </p>
          </AnimatedSection>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '50px'
        }}>
          
          {/* Contact Info */}
          <AnimatedSection direction="right">
            <div className="glass-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '30px' }}>Contact Information</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(0,180,216,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    flexShrink: 0
                  }}>
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '5px', fontSize: '1.1rem' }}>Phone</h4>
                    <a href="tel:+923350007967" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s', textDecoration: 'none' }}
                       onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
                       onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                      +92 335 0007967
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(0,180,216,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    flexShrink: 0
                  }}>
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '5px', fontSize: '1.1rem' }}>Email</h4>
                    <a href="mailto:hanovadevs@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s', textDecoration: 'none' }}
                       onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
                       onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                      hanovadevs@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(0,180,216,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    flexShrink: 0
                  }}>
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '5px', fontSize: '1.1rem' }}>Location</h4>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                      Global Services<br />Available Remote
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div style={{ marginTop: '40px' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '15px', fontSize: '1.1rem' }}>Follow Us</h4>
                <div style={{ display: 'flex', gap: '15px' }}>
                  {[
                    { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/hanova-devs-8516073b2/' },
                    { Icon: FaInstagram, url: 'https://www.instagram.com/hanovadevs/' },
                    { Icon: FaTwitter, url: 'https://x.com/HonovaDevs' }
                  ].map((social, i) => (
                    <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.03)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(0,0,0,0.1)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'var(--primary)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(0,0,0,0.03)';
                      e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    >
                      <social.Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Calendar Integration */}
              <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid var(--glass-border)' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '15px', fontSize: '1.1rem' }}>Prefer a Meeting?</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: 1.6 }}>
                  Pick a time that works best for you and let's discuss your project in detail over a call.
                </p>
                <a href="mailto:hanovadevs@gmail.com?subject=Booking a Discovery Call" className="btn-outline" style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                  Schedule a Call
                </a>
              </div>

            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2} direction="left">
            <div className="glass-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '30px' }}>Send us a Message</h3>
              
              {submitted ? (
                <div style={{
                  padding: '20px',
                  background: 'rgba(0,180,216,0.1)',
                  border: '1px solid var(--primary)',
                  borderRadius: '10px',
                  color: 'var(--text-primary)',
                  textAlign: 'center'
                }}>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>Thank you!</h4>
                  <p>Your message has been sent successfully. We will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 15px',
                          background: 'rgba(255,255,255,0.5)',
                          border: '1px solid rgba(0,0,0,0.1)',
                          borderRadius: '8px',
                          color: 'var(--text-primary)',
                          fontSize: '0.95rem',
                          outline: 'none',
                          transition: 'border-color 0.3s'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
                      />
                    </div>
                    
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Your Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 15px',
                          background: 'rgba(255,255,255,0.5)',
                          border: '1px solid rgba(0,0,0,0.1)',
                          borderRadius: '8px',
                          color: 'var(--text-primary)',
                          fontSize: '0.95rem',
                          outline: 'none',
                          transition: 'border-color 0.3s'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Project Type</label>
                      <select 
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 15px',
                          background: 'rgba(255,255,255,0.5)',
                          border: '1px solid rgba(0,0,0,0.1)',
                          borderRadius: '8px',
                          color: 'var(--text-primary)',
                          fontSize: '0.95rem',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="" disabled>Select Type</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App">Mobile App Development</option>
                        <option value="SEO & Marketing">SEO & Digital Marketing</option>
                        <option value="Custom Software">Custom Software</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Est. Budget</label>
                      <select 
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 15px',
                          background: 'rgba(255,255,255,0.5)',
                          border: '1px solid rgba(0,0,0,0.1)',
                          borderRadius: '8px',
                          color: 'var(--text-primary)',
                          fontSize: '0.95rem',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="" disabled>Select Budget</option>
                        <option value="<5k">Under $5k</option>
                        <option value="5k-10k">$5k - $10k</option>
                        <option value="10k-20k">$10k - $20k</option>
                        <option value="20k+">$20k+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Project Description</label>
                    <textarea 
                      name="message"
                      required
                      placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '15px',
                        background: 'rgba(255,255,255,0.5)',
                        border: '1px solid rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                        resize: 'none',
                        transition: 'border-color 0.3s',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary" disabled={isSubmitting} style={{
                    marginTop: '10px',
                    width: '100%',
                    justifyContent: 'center',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    border: 'none'
                  }}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default Contact;
