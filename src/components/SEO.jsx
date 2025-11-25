import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO_DATA = {
  '/': {
    title: 'Techland IT Solutions - Innovative Software Development & IT Consulting',
    description: 'Techland IT Solutions - Innovative software development, IT consulting, and digital solutions to drive your business forward.',
    keywords: 'IT solutions, software development, web development, consulting'
  },
  '/about': {
    title: 'About Us - Techland IT Solutions',
    description: 'Learn about Techland IT Solutions, our mission, vision, and the expert team delivering cutting-edge technology solutions.',
    keywords: 'about techland, IT company, software company'
  },
  '/blogs': {
    title: 'Blog - Techland IT Solutions',
    description: 'Read the latest articles, insights, and tech news from Techland IT Solutions experts.',
    keywords: 'tech blog, IT articles, software development blog'
  },
  '/portfolio': {
    title: 'Portfolio - Techland IT Solutions',
    description: 'Explore our portfolio of successful projects and innovative solutions delivered to clients worldwide.',
    keywords: 'portfolio, projects, case studies'
  },
  '/contact': {
    title: 'Contact Us - Techland IT Solutions',
    description: 'Get in touch with Techland IT Solutions for your next project. We\'re here to help transform your ideas into reality.',
    keywords: 'contact, get in touch, IT consultation'
  }
};

function SEO() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const seoData = SEO_DATA[path] || SEO_DATA['/'];

    document.title = seoData.title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = seoData.description;

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = seoData.keywords;
  }, [location]);

  return null;
}

export default SEO;
