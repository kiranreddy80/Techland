import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { categories } from './Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faUtensils,
  faBriefcase,
  faCoins,
  faHandHoldingHeart,
  faRing,
  faCarSide,
  faUsers,
  faTruck,
  faTools,
  faArrowRight,
  faExternalLinkAlt,
  faMobile,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const categoryIcons = {
  "E-Commerce": faShoppingCart,
  "Food Delivery": faUtensils,
  "Job Search": faBriefcase,
  "Financial": faCoins,
  "Non-Profit": faHandHoldingHeart,
  "Wedding Planning": faRing,
  "Car Rental": faCarSide,
  "HR & Recruitment": faUsers,
  "Delivery": faTruck,
  "General Utilities": faTools,
};

// Main project type tabs
const projectTypeTabs = [
  { id: 'all', label: 'All Projects', icon: faGlobe },
  { id: 'mobile', label: 'Mobile Projects', icon: faMobile },
  { id: 'web', label: 'Web Projects', icon: faGlobe }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeProjectType, setActiveProjectType] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesData, setCategoriesData] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });

    const loadData = async () => {
      setIsLoading(true);
      try {
        if (categories && Object.keys(categories).length > 0) {
          setCategoriesData(categories);
        } else {
          setCategoriesData(categories);
        }
      } catch (error) {
        console.error("Error loading categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const allProjects = useMemo(() => {
    if (!categoriesData || typeof categoriesData !== 'object') return [];
    
    return Object.entries(categoriesData).reduce((projects, [category, items]) => {
      if (Array.isArray(items)) {
        return [
          ...projects,
          ...items.map(item => ({
            id: item.id || `${category}-${Math.random().toString(36).substr(2, 9)}`,
            ...item,
            category
          }))
        ];
      }
      return projects;
    }, []);
  }, [categoriesData]);

  // Single filtering logic - filter only once based on both project type and category
  const filteredProjects = useMemo(() => {
    let projects = allProjects;

    // First filter by project type
    if (activeProjectType === 'mobile') {
      projects = projects.filter(project => 
        project.platform === 'Android' || project.platform === 'iOS'
      );
    } else if (activeProjectType === 'web') {
      projects = projects.filter(project => 
        project.platform === 'Web'
      );
    }

    // Then filter by category if not 'All'
    if (activeFilter !== 'All') {
      projects = projects.filter(project => project.category === activeFilter);
    }

    return projects;
  }, [allProjects, activeProjectType, activeFilter]);

  useEffect(() => {
    if (!isLoading) {
      AOS.refresh();
    }
  }, [isLoading, filteredProjects]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-emerald-500';
      case 'In Progress': return 'bg-amber-500';
      case 'In Development': return 'bg-sky-500';
      default: return 'bg-slate-500';
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

  const formatCategoryForUrl = (category) => {
    return category.toLowerCase().replace(/ /g, '-');
  };

  // Get projects count for current project type (without category filter)
  const getProjectsByType = (type) => {
    switch (type) {
      case 'mobile':
        return allProjects.filter(project => 
          project.platform === 'Android' || project.platform === 'iOS'
        );
      case 'web':
        return allProjects.filter(project => 
          project.platform === 'Web'
        );
      case 'all':
      default:
        return allProjects;
    }
  };

  // Count projects for each type
  const projectTypeCounts = useMemo(() => ({
    all: allProjects.length,
    mobile: allProjects.filter(p => p.platform === 'Android' || p.platform === 'iOS').length,
    web: allProjects.filter(p => p.platform === 'Web').length
  }), [allProjects]);

  // Handle project type change
  const handleProjectTypeChange = (type) => {
    setActiveProjectType(type);
    setActiveFilter('All'); // Reset category filter when changing project type
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          <p className="mt-4 text-slate-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div
        className="about-header-area"
        style={{
          backgroundImage: 'url(assets/img/bg/inner-header.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img
          src="assets/img/elements/elements1.png"
          alt="Decorative element"
          className="elements1 aniamtion-key-1"
        />
        <img
          src="assets/img/elements/star2.png"
          alt="Decorative star element"
          className="star2 keyframe5"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="about-inner-header heading9 text-center">
                <h1>Portfolio | Successful Projects in Web & App Development</h1>
                <Link to="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>Portfolio</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-20 mb-5">
        <div className="bg-white rounded-2xl shadow-xl p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {allProjects.length}
              </div>
              <div className="text-slate-600 font-medium">Total Projects</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                {allProjects.filter(p => p.status === 'Live').length}
              </div>
              <div className="text-slate-600 font-medium">Live Projects</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                {Object.keys(categoriesData).length}
              </div>
              <div className="text-slate-600 font-medium">Categories</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {allProjects.filter(p => p.platform === 'Android').length}
              </div>
              <div className="text-slate-600 font-medium">Mobile Apps</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Project Type Tabs */}
      <div className=" z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            {projectTypeTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleProjectTypeChange(tab.id)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-3 ${
                  activeProjectType === tab.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <FontAwesomeIcon icon={tab.icon} className="text-sm" />
                <span className="text-sm font-semibold">{tab.label}</span>
                <span className="text-xs opacity-75 bg-white/20 px-2 py-1 rounded-full">
                  ({projectTypeCounts[tab.id]})
                </span>
              </button>
            ))}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === 'All'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200 text-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs'
              }`}
            >
              All ({getProjectsByType(activeProjectType).length})
            </button>
            {Object.entries(categoriesData).map(([category, items]) => {
              // Count items in this category for the current project type
              const categoryProjects = getProjectsByType(activeProjectType);
              const categoryCount = categoryProjects.filter(project => project.category === category).length;
              
              if (categoryCount === 0) return null;
              
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <FontAwesomeIcon size={12} icon={categoryIcons[category]} />
                  <span className="hidden text-xs sm:inline">{category}</span>
                  <span className="sm:hidden">{category.split(' ')[0]}</span>
                  <span className="text-xs opacity-75">({categoryCount})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 py-12 bg-gray-50">
        <div className='container'>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {filteredProjects.map((project, index) => (
                <div
                  key={`${project.category}-${project.id || index}`}
                  className="bg-white rounded-md shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-easing="ease-out-cubic"
                  data-aos-delay={index * 100}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || 'assets/img/default-project.jpg'}
                      alt={`${project.title || 'Project'} screenshot`}
                      className="w-full h-[358px] object-fill transition-transform duration-700 group-hover:scale-110 "
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'assets/img/default-project.jpg';
                      }}
                    />

                    <div className="absolute top-4 left-4">
                      <span className={`${getStatusColor(project.status)} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5`}>
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                        {project.status || 'Unknown'}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="bg-white/95 backdrop-blur-sm text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                        {getPlatformIcon(project.platform)} {project.platform || 'Web'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <Link
                      to={`/portfolio/${formatCategoryForUrl(project.category)}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full hover:bg-indigo-100 transition-colors mb-3"
                    >
                      <FontAwesomeIcon icon={categoryIcons[project.category]} className="text-xs" />
                      {project.category}
                    </Link>

                    <Link
                      to={`/portfolio/${formatCategoryForUrl(project.category)}/${project.id || index}`}
                      className="block text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-tight"
                    >
                      {project.title || 'Untitled Project'}
                    </Link>

                    <p className="text-slate-600 text-sm leading-relaxed mb-2 line-clamp-3">
                      {project.description || 'No description available.'}
                    </p>

                    {project.technologies_used && project.technologies_used.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.technologies_used.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                            {tech}
                          </span>
                        ))}
                        {project.technologies_used.length > 3 && (
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                            +{project.technologies_used.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <Link
                        to={`/portfolio/${formatCategoryForUrl(project.category)}/${project.id || index}`}
                        className="text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors flex items-center gap-2"
                      >
                        Learn More
                        <FontAwesomeIcon icon={faArrowRight} className="text-xs transition-transform group-hover:translate-x-1" />
                      </Link>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors text-slate-600"
                          title="View Live"
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20" data-aos="fade-up">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
                <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-700 mb-2">No Projects Found</h3>
              <p className="text-slate-500">
                {activeProjectType !== 'all' && activeFilter === 'All'
                  ? `No ${projectTypeTabs.find(tab => tab.id === activeProjectType)?.label.toLowerCase()} found`
                  : activeFilter !== 'All'
                  ? `No projects found in ${activeFilter} category`
                  : 'No projects found'
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;