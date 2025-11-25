

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from './Accordion';

const PortfolioDetails = () => {
  const { categoryName, itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categoryTitle, setCategoryTitle] = useState('');

  useEffect(() => {
    

    const formatCategoryName = (name) => {
      switch (name) {
        case 'hr-recruitment':
          return 'HR & Recruitment';
        case 'e-commerce':
          return 'E-Commerce';
        case 'food-delivery':
          return 'Food Delivery';
        case 'job-search':
          return 'Job Search';
        case 'non-profit':
          return 'Non-Profit';
        case 'wedding-planning':
          return 'Wedding Planning';
        case 'car-rental':
          return 'Car Rental';
        case 'general-utilities':
          return 'General Utilities';
        case 'education':
          return 'Education';
        case 'hospitality':
          return 'Hospitality';
        default:
          // Fallback for any other categories
          return name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
      }
    };

    const formattedCategoryName = formatCategoryName(categoryName);
    setCategoryTitle(formattedCategoryName);

    // Get items for the specified category
    const categoryItems = categories[formattedCategoryName] || [];

    // Find the specific item by ID
    const foundItem = categoryItems.find(item => item.id === parseInt(itemId));

    setItem(foundItem);
    setLoading(false);
  }, [categoryName, itemId]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'In Progress': return 'bg-yellow-500';
      case 'In Development': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'Web': return '🌐';
      case 'Android': return '📱';
      case 'iOS': return '🍎';
      default: return '💻';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="spinner-border text-indigo-600" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Header */}
        <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Project Not Found
              </h1>
              <div className="flex items-center justify-center gap-2 text-indigo-200">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                <span>/</span>
                <span className="text-white font-semibold">Not Found</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-6">
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Project Not Found</h3>
            <p className="text-gray-500">The requested project could not be found</p>
            <div className="mt-6 flex justify-center gap-4">
              <Link to="/portfolio" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors">
                Back to Portfolio
              </Link>
              <Link to={`/portfolio/${categoryName}`} className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-full border border-indigo-600 hover:bg-indigo-50 transition-colors">
                Back to {categoryTitle}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">


      <div
        className="about-header-area"
        style={{
          backgroundImage: 'url(../../assets/img/bg/inner-header.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img
          src="../../assets/img/elements/elements1.png"
          alt="Decorative element"
          className="elements1 aniamtion-key-1"
        />
        <img
          src="../../assets/img/elements/star2.png"
          alt="Decorative star element"
          className="star2 keyframe5"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="about-inner-header heading9 text-center">
             
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  {item.title}
                </h1>
                <div className="flex items-center justify-center gap-2 text-indigo-200">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  <span>/</span>
                  <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                  <span>/</span>
                  <Link to={`/portfolio/${categoryName}`} className="hover:text-white transition-colors">{categoryTitle}</Link>
                  <span>/</span>
                  <span className="text-black font-semibold">{item.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-50'>
        <div className="container mx-auto px-4 py-16 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Project Image */}
              <div className="bg-white rounded-md shadow-md overflow-hidden mb-4">
                <div className="relative h-[580px]">
                  <img
                     src={item.details_image || item.image}
                    alt={`${item.title} project screenshot`}
                    className="w-full h-full object-fill"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 ${getStatusColor(item.status)} text-white text-xs font-semibold rounded-full shadow-md`}>
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      {item.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold rounded-full shadow-md">
                      {getPlatformIcon(item.platform)} {item.platform}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Overview */}
              <div className="bg-white rounded-md shadow-md p-8 mb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.project_overview || item.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies_used && item.technologies_used.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features */}
              {item.features && item.features.length > 0 && (
                <div className="bg-white rounded-md shadow-md p-8 mb-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges & Solutions */}
              {item.challenges && item.challenges.length > 0 && (
                <div className="bg-white rounded-md shadow-md p-8 mb-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Challenges & Solutions</h2>
                  <div className="space-y-6">
                    {item.challenges.map((challenge, index) => (
                      <div key={index} className="border-l-4 border-indigo-500 pl-4 py-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Challenge: {challenge.problem}</h3>
                        <p className="text-gray-600"><strong>Solution:</strong> {challenge.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Timeline */}
              {item.timeline && (
                <div className="bg-white rounded-md shadow-md p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Timeline</h2>
                  <div className="space-y-4">
                    {Object.entries(item.timeline).map(([phase, duration], index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-indigo-600 font-semibold">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800">{phase}</h3>
                          <p className="text-gray-600">{duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Info */}
              <div className="bg-white rounded-md shadow-md p-6 mb-8 sticky top-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Project Information</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Title</h3>
                    <p className="text-gray-800 font-medium">{item.title}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Category</h3>
                    <Link
                      to={`/portfolio/${categoryName}`}
                      className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      {categoryTitle}
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Status</h3>
                    <span className={`inline-flex items-center gap-2 px-3 py-1 ${getStatusColor(item.status)} text-white text-xs font-semibold rounded-full`}>
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      {item.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Platform</h3>
                    <p className="text-gray-800 font-medium">{getPlatformIcon(item.platform)} {item.platform}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Technologies</h3>
                    <p className="text-gray-800 font-medium">
                      {item.technologies_used && item.technologies_used.join(', ')}
                    </p>
                  </div>
                </div>

                {/* Project Link */}
                {item.link && (
                  <div className="mt-6">
                    {/* <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors text-center"
                    >
                      
                    </a> */}
                    <a href={item.link} class="header-btn1 ">Visit Project <span><i class="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                )}

                {/* Navigation */}
                <div className="mt-6 space-y-3">
                  <Link
                    to={`/portfolio/${categoryName}`}
                    className="header-btn2"
                  >
                    <a href={item.link} class="header-btn">Back to {categoryTitle} <span><i class="fa-solid fa-arrow-right"></i></span></a>


                  </Link>
                  <Link
                    to="/portfolio"
                    className="header-btn2"
                  >
                    <a href={item.link} class="header-btn">Back to Portfolio <span><i class="fa-solid fa-arrow-right"></i></span></a>

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PortfolioDetails;