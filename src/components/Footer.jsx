import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.includes('#')) {
      const isHomePage = location.pathname === '/';
      const targetId = href.split('#')[1];

      if (isHomePage) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = href;
      }
    } else {
      navigate(href);
    }
  };

  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--glass-border)',
      padding: '80px 0 30px 0',
      position: 'relative',
      boxShadow: '0 -10px 40px rgba(0,0,0,0.02)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '50px',
          marginBottom: '60px'
        }}>
          
          {/* Brand */}
          <div>
            <a href="/" onClick={(e) => handleNavClick(e, '/')} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', textDecoration: 'none' }}>
              <img src="/logo-icon.png" alt="Hanova Devs Logo" style={{ height: '40px', filter: 'brightness(0) saturate(100%) invert(48%) sepia(87%) saturate(2256%) hue-rotate(156deg) brightness(98%) contrast(105%)' }} />
              <span style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '1px',
                color: 'var(--text-primary)'
              }}>
                Hanova<span style={{ color: 'var(--primary)' }}>Devs</span>
              </span>
            </a>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
              Empowering businesses with modern digital solutions. We build web and mobile applications that drive growth and maximize ROI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '25px', fontFamily: 'var(--font-heading)' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', listStyleType: 'none', padding: 0, margin: 0 }}>
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map(link => {
                let hrefPath = '/';
                if (link === 'Contact') hrefPath = '/#contact';
                else if (link !== 'Home') hrefPath = `/${link.toLowerCase()}`;
                return (
                <li key={link}>
                  <a href={hrefPath}
                  onClick={(e) => handleNavClick(e, hrefPath)}
                  style={{
                    color: 'var(--text-secondary)',
                    transition: 'color 0.3s, transform 0.3s',
                    display: 'inline-block',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = 'var(--primary)';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'var(--text-secondary)';
                    e.target.style.transform = 'translateX(0)';
                  }}
                  >
                    {link}
                  </a>
                </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '25px', fontFamily: 'var(--font-heading)' }}>Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', listStyleType: 'none', padding: 0, margin: 0 }}>
              {['Web Development', 'App Development', 'SEO Optimization', 'Social Media Marketing', 'UI/UX Design'].map(service => (
                <li key={service} style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--glass-border)',
          paddingTop: '30px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px'
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, fontWeight: '500' }}>
            &copy; {currentYear} Hanova Devs. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="https://www.linkedin.com/in/hanova-devs-8516073b2/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.3s', textDecoration: 'none', fontWeight: '500' }} onMouseOver={e=>e.target.style.color='var(--primary)'} onMouseOut={e=>e.target.style.color='var(--text-muted)'}>LinkedIn</a>
            <a href="https://www.instagram.com/hanovadevs/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.3s', textDecoration: 'none', fontWeight: '500' }} onMouseOver={e=>e.target.style.color='var(--primary)'} onMouseOut={e=>e.target.style.color='var(--text-muted)'}>Instagram</a>
            <a href="https://x.com/HonovaDevs" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.3s', textDecoration: 'none', fontWeight: '500' }} onMouseOver={e=>e.target.style.color='var(--primary)'} onMouseOut={e=>e.target.style.color='var(--text-muted)'}>Twitter (X)</a>
            <span style={{ color: 'var(--glass-border)' }}>|</span>
            <a href="/privacy" onClick={e => handleNavClick(e, '/privacy')} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.3s', textDecoration: 'none', fontWeight: '500' }} onMouseOver={e=>e.target.style.color='var(--primary)'} onMouseOut={e=>e.target.style.color='var(--text-muted)'}>Privacy Policy</a>
            <a href="/terms" onClick={e => handleNavClick(e, '/terms')} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.3s', textDecoration: 'none', fontWeight: '500' }} onMouseOver={e=>e.target.style.color='var(--primary)'} onMouseOut={e=>e.target.style.color='var(--text-muted)'}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
