import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaChartLine, FaUsers, FaArrowRight, FaSearchDollar, FaShieldAlt } from 'react-icons/fa';

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Design', 'App Dev', 'Marketing'];

  const projects = [
    { 
      id: 1, 
      title: 'E-Commerce Platform', 
      category: 'Web Design', 
      client: 'TechGear Solutions',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'A fully custom headless Shopify build for a high-volume electronics retailer. We improved their load times by 300% and increased checkout conversions by 45%.',
      metrics: [
        { label: 'Conversion Increase', value: '+45%', icon: <FaChartLine /> },
        { label: 'Load Time', value: '-300%', icon: <FaArrowRight /> }
      ],
      tags: ['Next.js', 'WordPress', 'Tailwind']
    },
    { 
      id: 2, 
      title: 'Fitness Tracker App', 
      category: 'App Dev', 
      client: 'FitLife Global',
      image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'A cross-platform mobile application providing real-time workout tracking, social leaderboards, and personalized diet plans based on health metrics.',
      metrics: [
        { label: 'Active Users', value: '+120k', icon: <FaUsers /> },
        { label: 'App Store Rating', value: '4.8/5', icon: <FaChartLine /> }
      ],
      tags: ['React Native', 'Firebase', 'Redux']
    },
    { 
      id: 3, 
      title: 'Corporate Rebranding', 
      category: 'Marketing', 
      client: 'Nexus Financials',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'A comprehensive digital rebranding campaign across social platforms, integrating a new visual identity with targeted B2B ad strategies.',
      metrics: [
        { label: 'Lead Generation', value: '+210%', icon: <FaChartLine /> },
        { label: 'Ad Spend ROI', value: '4.2x', icon: <FaSearchDollar /> }
      ],
      tags: ['Meta Ads', 'Brand Strategy', 'LinkedIn Ads']
    },
    { 
      id: 4, 
      title: 'Real Estate Portal', 
      category: 'Web Design', 
      client: 'Urban Living Realty',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeefa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'An interactive real estate map and property portal featuring 3D virtual tours and instant agent scheduling capabilities.',
      metrics: [
        { label: 'User Engagement', value: '+85%', icon: <FaUsers /> },
        { label: 'Bounce Rate', value: '-30%', icon: <FaArrowRight /> }
      ],
      tags: ['React', 'Mapbox GL', 'Node.js']
    },
    { 
      id: 5, 
      title: 'Global Logistics Dashboard', 
      category: 'Web Design', 
      client: 'SwiftStream Logistics',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'A real-time tracking and optimization dashboard for a global shipping provider, handling millions of data points daily.',
      metrics: [
        { label: 'Tracking Accuracy', value: '99.9%', icon: <FaChartLine /> },
        { label: 'Efficiency Gain', value: '+25%', icon: <FaArrowRight /> }
      ],
      tags: ['Next.js', 'Socket.io', 'PostgreSQL']
    },
    { 
      id: 6, 
      title: 'Healthcare Patient Portal', 
      category: 'App Dev', 
      client: 'Harmony Health',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'HIPAA-compliant mobile application for secure doctor-patient communication, medical records access, and appointment booking.',
      metrics: [
        { label: 'Patient Retention', value: '+60%', icon: <FaUsers /> },
        { label: 'Wait Times', value: '-40%', icon: <FaArrowRight /> }
      ],
      tags: ['React Native', 'Node.js', 'Auth0']
    },
    { 
      id: 7, 
      title: 'SEO Dominance Campaign', 
      category: 'Marketing', 
      client: 'PetSupplies Inc',
      image: 'https://images.unsplash.com/photo-1454165833767-1396b5b58ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'A technical SEO overhaul and content marketing strategy that pushed 150 keywords to the first page of Google within 6 months.',
      metrics: [
        { label: 'Organic Traffic', value: '+350%', icon: <FaChartLine /> },
        { label: 'Sales Growth', value: '3.5x', icon: <FaSearchDollar /> }
      ],
      tags: ['Technical SEO', 'Content Strategy', 'Link Building']
    },
    { 
      id: 8, 
      title: 'SaaS Analytics Platform', 
      category: 'Web Design', 
      client: 'DataFlow Systems',
      image: 'https://images.unsplash.com/photo-1551288049-bbda646ffc15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'An enterprise-level analytics platform providing deep insights into customer behavior using machine learning models.',
      metrics: [
        { label: 'Data Processing', value: '1PB/Mo', icon: <FaChartLine /> },
        { label: 'Client Count', value: '250+', icon: <FaUsers /> }
      ],
      tags: ['Next.js', 'Python', 'D3.js']
    },
    { 
      id: 9, 
      title: 'Crypto Wallet App', 
      category: 'App Dev', 
      client: 'EtherSafe',
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Secure, multi-currency cryptocurrency wallet featuring biometric security and instant atomic swaps.',
      metrics: [
        { label: 'Trusted Volume', value: '$500M+', icon: <FaSearchDollar /> },
        { label: 'Security Score', value: '100%', icon: <FaShieldAlt /> }
      ],
      tags: ['Flutter', 'Solidity', 'Web3.js']
    },
    { 
      id: 10, 
      title: 'Education Management System', 
      category: 'Web Design', 
      client: 'Global Scholar Academy',
      image: 'https://images.unsplash.com/photo-1523050335191-9136ca74b59b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'A comprehensive LMS for online learning, featuring live video classrooms, automated grading, and parent portals.',
      metrics: [
        { label: 'Student Users', value: '50k+', icon: <FaUsers /> },
        { label: 'Engagement', value: '+75%', icon: <FaChartLine /> }
      ],
      tags: ['WordPress', 'PHP', 'MySQL']
    },
    { 
      id: 11, 
      title: 'luxury watch eCommerce', 
      category: 'Web Design', 
      client: 'Horology House',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'A premium, high-visual-impact online boutique featuring 360-degree product views and virtual try-on.',
      metrics: [
        { label: 'Avg Order Value', value: '+40%', icon: <FaSearchDollar /> },
        { label: 'Mobile Sales', value: '+90%', icon: <FaChartLine /> }
      ],
      tags: ['React', 'Three.js', 'Stripe']
    },
    { 
      id: 12, 
      title: 'Social Net for Professionals', 
      category: 'App Dev', 
      client: 'IndustryLink',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'A niche social network focused on high-level executive networking and exclusive industry opportunities.',
      metrics: [
        { label: 'Executive Users', value: '15k+', icon: <FaUsers /> },
        { label: 'Daily Interactions', value: '25k+', icon: <FaChartLine /> }
      ],
      tags: ['React Native', 'GraphQL', 'Prisma']
    },
    { 
      id: 13, 
      title: 'Lead Gen for Law Firms', 
      category: 'Marketing', 
      client: 'Justice Associates',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Hyper-targeted PPC and Content strategy that secured top-tier personal injury leads in highly competitive markets.',
      metrics: [
        { label: 'Cost Per Lead', value: '-35%', icon: <FaSearchDollar /> },
        { label: 'Conversion Rate', value: '6.5%', icon: <FaChartLine /> }
      ],
      tags: ['Google Ads', 'Copywriting', 'SEO']
    },
    { 
      id: 14, 
      title: 'Smart Home Automation App', 
      category: 'App Dev', 
      client: 'Lumina Tech',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'IoT integration app for controlling home environment, security, and energy consumption with AI suggestions.',
      metrics: [
        { label: 'Energy Savings', value: '25%', icon: <FaChartLine /> },
        { label: 'Active Devices', value: '1M+', icon: <FaUsers /> }
      ],
      tags: ['Flutter', 'AWS IoT', 'Python']
    },
    { 
      id: 15, 
      title: 'Fintech Banking Solution', 
      category: 'Web Design', 
      client: 'NeoBank International',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Online banking platform for a next-gen fintech, featuring instant transfers and AI-powered budget tracking.',
      metrics: [
        { label: 'User Growth', value: '10x', icon: <FaUsers /> },
        { label: 'Trust Rating', value: '4.9/5', icon: <FaChartLine /> }
      ],
      tags: ['React', 'Node.js', 'Golang']
    },
    { 
      id: 16, 
      title: 'Global Travel Booking', 
      category: 'Web Design', 
      client: 'Wanderlust Pro',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'High-traffic travel portal with real-time flight, hotel, and car rental bookings using multi-API integration.',
      metrics: [
        { label: 'Wait Time Reduction', value: '70%', icon: <FaArrowRight /> },
        { label: 'Monthly Bookings', value: '100k+', icon: <FaChartLine /> }
      ],
      tags: ['Next.js', 'Redis', 'Multiple APIs']
    },
    { 
      id: 17, 
      title: 'Influencer Marketing Platform', 
      category: 'Marketing', 
      client: 'ViralLink',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Platform connecting brands with influencers, featuring automated campaign tracking and payment processing.',
      metrics: [
        { label: 'ROI Improvement', value: '3x', icon: <FaSearchDollar /> },
        { label: 'Matches Made', value: '10k+', icon: <FaUsers /> }
      ],
      tags: ['Meta API', 'Analytics', 'Stripe']
    },
    { 
      id: 18, 
      title: 'Automotive Configurator', 
      category: 'Web Design', 
      client: 'Veloce Motors',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Immersive 3D car configurator allowing customers to customize their vehicle in real-time with stunning resolution.',
      metrics: [
        { label: 'Sale Lead Boost', value: '+120%', icon: <FaChartLine /> },
        { label: 'Time on Page', value: '+500%', icon: <FaUsers /> }
      ],
      tags: ['React', 'Three.js', 'WebGL']
    },
    { 
      id: 19, 
      title: 'Modern Coffee Brand', 
      category: 'Marketing', 
      client: 'Brew & Bloom',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Social media growth and influencer strategy for a sustainable coffee brand, achieving viral success on TikTok.',
      metrics: [
        { label: 'TikTok Views', value: '5M+', icon: <FaUsers /> },
        { label: 'Sale Growth', value: '+300%', icon: <FaChartLine /> }
      ],
      tags: ['TikTok Ads', 'Influencer OutReach']
    },
    { 
      id: 20, 
      title: 'Enterprise CRM Solution', 
      category: 'Web Design', 
      client: 'Pivot Global',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Custom internal CRM designed for massive sales teams, focusing on UX to minimize data entry and maximize lead flow.',
      metrics: [
        { label: 'Internal Adoption', value: '98%', icon: <FaUsers /> },
        { label: 'Sales Velocity', value: '+30%', icon: <FaArrowRight /> }
      ],
      tags: ['Next.js', 'Supabase', 'Framer']
    },
    { 
      id: 21, 
      title: 'Restaurant Delivery Fleet', 
      category: 'App Dev', 
      client: 'QuickBite Delivery',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786486a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Logistics and driver app for a restaurant delivery network, featuring intelligent routing and real-time earnings.',
      metrics: [
        { label: 'Delivery Time', value: '-15min', icon: <FaArrowRight /> },
        { label: 'Driver Rating', value: '4.7/5', icon: <FaUsers /> }
      ],
      tags: ['React Native', 'Google Maps API']
    },
    { 
      id: 22, 
      title: 'Luxury Real Estate SEO', 
      category: 'Marketing', 
      client: 'Elite Mansions',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Hyper-local SEO strategy for luxury listings, ranking for "Miami Luxury Beachfront" and other high-value terms.',
      metrics: [
        { label: 'Search Visibility', value: '+400%', icon: <FaChartLine /> },
        { label: 'High-Value Leads', value: '50/mo', icon: <FaSearchDollar /> }
      ],
      tags: ['Local SEO', 'Content Marketing']
    },
    { 
      id: 23, 
      title: 'Personal Finance AI', 
      category: 'App Dev', 
      client: 'WealthWise',
      image: 'https://images.unsplash.com/photo-1579621970795-87f967b1658c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'AI-driven budget and investment assistant that analyzes spending habits and suggests savings strategies.',
      metrics: [
        { label: 'Savings Increase', value: '20%', icon: <FaChartLine /> },
        { label: 'App Installs', value: '500k+', icon: <FaUsers /> }
      ],
      tags: ['Flutter', 'OpenAI API', 'Firebase']
    },
    { 
      id: 24, 
      title: 'Manufacturing ERP', 
      category: 'Web Design', 
      client: 'Titan Industrial',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Cloud-based ERP for managing manufacturing workflows, inventory, and supply chain logistics.',
      metrics: [
        { label: 'Inventory Waste', value: '-22%', icon: <FaArrowRight /> },
        { label: 'Audit Speed', value: '10x', icon: <FaChartLine /> }
      ],
      tags: ['React', 'PostgreSQL', 'Docker']
    },
    { 
      id: 25, 
      title: 'B2B Tech PR Campaign', 
      category: 'Marketing', 
      client: 'CloudScale Inc',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Comprehensive digital PR and thought-leadership campaign using high-authority media placements.',
      metrics: [
        { label: 'Media Mentions', value: '80+', icon: <FaUsers /> },
        { label: 'Brand Awareness', value: '+150%', icon: <FaChartLine /> }
      ],
      tags: ['Digital PR', 'Content Strategy']
    },
    { 
      id: 26, 
      title: 'Eco-Friendly Fashion Shop', 
      category: 'Web Design', 
      client: 'Pure Vogue',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'A minimalist, eco-conscious Shopify store with advanced filtering and sustainable packaging tracker.',
      metrics: [
        { label: 'Sales Growth', value: '+280%', icon: <FaChartLine /> },
        { label: 'Customer LTV', value: '+35%', icon: <FaUsers /> }
      ],
      tags: ['WordPress', 'WooCommerce', 'Tailwind']
    },
    { 
      id: 27, 
      title: 'On-Demand Cleaning App', 
      category: 'App Dev', 
      client: 'Sparkle Service',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6954?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Uber-for-cleaning app with real-time tracking, background-checked pros, and automated scheduling.',
      metrics: [
        { label: 'Monthly Bookings', value: '12k+', icon: <FaChartLine /> },
        { label: 'Active Pros', value: '1500+', icon: <FaUsers /> }
      ],
      tags: ['React Native', 'Node.js', 'Google Pay']
    },
    { 
      id: 28, 
      title: 'Cybersecurity Awareness', 
      category: 'Marketing', 
      client: 'Fortify Defense',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Educational campaign and digital marketing strategy focusing on B2B data protection and compliance.',
      metrics: [
        { label: 'Course Enrolment', value: '25k+', icon: <FaUsers /> },
        { label: 'Qualified Leads', value: '200+', icon: <FaSearchDollar /> }
      ],
      tags: ['Email Marketing', 'Webinars']
    },
    { 
      id: 29, 
      title: 'Architecture 3D Walkthrough', 
      category: 'Web Design', 
      client: 'Skyline Architects',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Web-based architectural visualization portal featuring 360 virtual tours and interactive floor plans.',
      metrics: [
        { label: 'Pre-sales Boost', value: '60%', icon: <FaSearchDollar /> },
        { label: 'Client Satisfaction', value: '96%', icon: <FaUsers /> }
      ],
      tags: ['React', 'Unreal Engine', 'PixelStreaming']
    },
    { 
      id: 30, 
      title: 'Fitness Gear SEO Strategy', 
      category: 'Marketing', 
      client: 'Titan Strength',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Intense keyword strategy and link acquisition for a global fitness equipment brand.',
      metrics: [
        { label: 'Top 3 Keywords', value: '35+', icon: <FaChartLine /> },
        { label: 'Conversion ROI', value: '5.5x', icon: <FaSearchDollar /> }
      ],
      tags: ['SEO Marketing', 'Ahrefs']
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Helmet>
        <title>Portfolio & Case Studies | Hanova Devs</title>
        <meta name="description" content="View the in-depth case studies and portfolio of Hanova Devs. See how we drive results through web design, app dev, and marketing." />
      </Helmet>
      
      {/* Page Header */}
      <div style={{ background: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--glass-border)', marginBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,180,216,0.1) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <AnimatedSection>
            <span className="section-label">Our Work</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: 'var(--text-primary)', marginTop: '10px' }}>
              Proven <span className="gradient-text">Results</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '20px auto 0', lineHeight: '1.8' }}>
              Explore our detailed case studies showcasing how we transform complex business challenges into elegant, high-performing digital realities.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container">
        
        {/* Filter Buttons */}
        <AnimatedSection delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '60px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  background: filter === cat ? 'linear-gradient(135deg, var(--primary), #0077b6)' : 'transparent',
                  color: filter === cat ? 'white' : 'var(--text-primary)',
                  border: filter === cat ? 'none' : '1px solid rgba(0,0,0,0.1)',
                  padding: '10px 28px',
                  borderRadius: '30px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Detailed Case Studies List */}
        <motion.div layout style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={project.id}
              >
                <div className="glass-card" style={{ overflow: 'hidden', background: 'white', display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', flexWrap: 'wrap' }}>
                  
                  {/* Image Presentation */}
                  <div style={{ flex: '1 1 400px', position: 'relative', overflow: 'hidden' }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '350px' }}
                    />
                    <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(255,255,255,0.9)', padding: '5px 15px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)' }}>
                      {project.category}
                    </div>
                  </div>
                  
                  {/* Case Study Details */}
                  <div style={{ flex: '1 1 400px', padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Client: {project.client}</h4>
                    <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '20px' }}>{project.title}</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                      {project.description}
                    </p>
                    
                    {/* Metrics */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px', background: 'var(--bg-secondary)', padding: '20px', borderRadius: '15px' }}>
                      {project.metrics.map((metric, i) => (
                        <div key={i}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', marginBottom: '5px' }}>
                            {metric.icon}
                            <span style={{ fontSize: '1.5rem', fontWeight: '800' }}>{metric.value}</span>
                          </div>
                          <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '500' }}>{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags & Action */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {project.tags.map((tag, i) => (
                          <span key={i} style={{ background: 'rgba(0,180,216,0.1)', color: 'var(--primary)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a href={`/#contact`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}>
                        Discuss Similar Project <FaExternalLinkAlt size={14} />
                      </a>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default PortfolioPage;
