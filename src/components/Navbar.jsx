import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu on click
    
    if (href.includes('#')) {
      const isHomePage = location.pathname === '/';
      const targetId = href.split('#')[1];

      if (isHomePage) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If not on homepage, navigate to home then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.4s ease',
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
      padding: isScrolled ? '15px 0' : '25px 0',
    }}>
      <div className="container" style={{
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
      }}>
        <a href="/" onClick={(e) => handleNavClick(e, '/')} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/logo-icon.png" alt="Hanova Devs Logo" style={{ height: '40px' }} />
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

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{
          display: 'none',
          alignItems: 'center'
        }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} style={{
              margin: '0 15px',
              fontSize: '0.95rem',
              fontWeight: '600',
              color: location.pathname === link.href ? 'var(--primary)' : 'var(--text-primary)',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              borderBottom: location.pathname === link.href ? '2px solid var(--primary)' : '2px solid transparent',
              paddingBottom: '5px'
            }}
            onMouseOver={(e) => {
              if (location.pathname !== link.href) e.target.style.color = 'var(--primary)';
            }}
            onMouseOut={(e) => {
              if (location.pathname !== link.href) e.target.style.color = 'var(--text-primary)';
            }}
            >
              {link.name}
            </a>
          ))}
          <a href="/#contact" onClick={(e) => handleNavClick(e, '/#contact')} className="btn-primary" style={{ padding: '10px 24px', marginLeft: '15px', textDecoration: 'none' }}>
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'block' }}>
           <style>{`
            @media (min-width: 992px) {
              .desktop-nav { display: flex !important; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ background: 'transparent', color: 'var(--text-primary)', fontSize: '1.5rem', padding: '5px', border: 'none', cursor: 'pointer', zIndex: 1100, position: 'relative' }}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div style={{
          position: 'fixed',
          top: 0,
          right: isMenuOpen ? 0 : '-100%',
          width: '100%',
          height: '100vh',
          background: 'var(--bg-primary)',
          transition: 'all 0.4s ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} style={{
              margin: '15px 0',
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              textDecoration: 'none'
            }}>
              {link.name}
            </a>
          ))}
          <a href="/#contact" onClick={(e) => handleNavClick(e, '/#contact')} className="btn-primary" style={{ padding: '14px 40px', marginTop: '30px', textDecoration: 'none', width: '100%', textAlign: 'center' }}>
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

