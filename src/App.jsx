import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import ServicesPage from './components/ServicesPage';
import WebDevelopment from './components/services/WebDevelopment';
import MobileDevelopment from './components/services/MobileDevelopment';
import SEOMarketing from './components/services/SEOMarketing';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import CustomCursor from './components/CustomCursor';
import ChatBot from './components/ChatBot';
import { Helmet } from 'react-helmet-async';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Helmet>
        <title>Hanova Devs | Premium Web & App Development</title>
        <meta name="description" content="Hanova Devs is a premier development agency providing cutting-edge Web Development, App Development, SEO, and Social Media Marketing to elevate your online presence." />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-app-development" element={<MobileDevelopment />} />
          <Route path="/services/seo-marketing" element={<SEOMarketing />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
      <Footer />
      <ChatBot />
    </Router>
  );
}

export default App;
