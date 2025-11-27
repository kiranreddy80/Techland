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

  const filteredProjects = useMemo(() => {
    let projects = allProjects;

    if (activeProjectType === 'mobile') {
      projects = projects.filter(project => 
        project.platform === 'Android' || project.platform === 'iOS'
      );
    } else if (activeProjectType === 'web') {
      projects = projects.filter(project => 
        project.platform === 'Web'
      );
    }

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
      case 'Live': return 'from-emerald-400 to-teal-500';
      case 'In Progress': return 'from-amber-400 to-orange-500';
      case 'In Development': return 'from-blue-400 to-indigo-500';
      default: return 'from-gray-400 to-gray-500';
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

  const projectTypeCounts = useMemo(() => ({
    all: allProjects.length,
    mobile: allProjects.filter(p => p.platform === 'Android' || p.platform === 'iOS').length,
    web: allProjects.filter(p => p.platform === 'Web').length
  }), [allProjects]);

  const handleProjectTypeChange = (type) => {
    setActiveProjectType(type);
    setActiveFilter('All');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="text-center">
          <div className="relative inline-block">
            <div className="w-20 h-20 border-4 border-indigo-100 rounded-full"></div>
            <div className="w-20 h-20 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
          </div>
          <p className="mt-6 text-slate-600 font-medium">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Premium Hero Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg4djJoLTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <img
          src="assets/img/elements/elements1.png"
          alt="Decorative element"
          className="elements1 aniamtion-key-1 opacity-20"
        />
        <img
          src="assets/img/elements/star2.png"
          alt="Decorative star element"
          className="star2 keyframe5 opacity-30"
        />
        
        <div className="container relative z-10">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="py-20 md:py-32 text-center">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <Link to="/" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                    Home
                  </Link>
                  <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                  <span className="text-white text-sm font-medium">Portfolio</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Our Creative Portfolio
                </h1>
                <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                  Showcasing excellence in Web & Mobile App Development
                </p>
                <div className="mt-8 flex justify-center">
                  <div className="h-1 w-24 bg-gradient-to-r from-white/0 via-white to-white/0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-slate-50" preserveAspectRatio="none" viewBox="0 0 1440 54" fill="currentColor">
            <path d="M0 22L60 16.7C120 11 240 1 360 0.3C480 1 600 11 720 16.7C840 22 960 22 1080 18.3C1200 15 1320 7 1380 3.3L1440 0V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z"/>
          </svg>
        </div>
      </div>

      {/* Premium Stats Cards */}
     <div className="container mx-auto px-4 -mt-20 relative z-20 mb-20">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">

    {/* CARD */}
    <div
      data-aos="zoom-in"
      data-aos-delay="100"
      className="group relative bg-white/70 backdrop-blur-2xl border border-white/40 rounded-3xl p-6 shadow-xl
                 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
        <div className="absolute -inset-14 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 blur-2xl"></div>
      </div>

      <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        {allProjects.length}
      </div>

      <div className="text-slate-600 font-medium mt-1 tracking-wide">
        Total Projects
      </div>
    </div>

    {/* CARD */}
    <div
      data-aos="zoom-in"
      data-aos-delay="200"
      className="group relative bg-white/70 backdrop-blur-2xl border border-white/40 rounded-3xl p-6 shadow-xl
                 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
        <div className="absolute -inset-14 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 blur-2xl"></div>
      </div>

      <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
        {allProjects.filter(p => p.status === 'Live').length}
      </div>

      <div className="text-slate-600 font-medium mt-1 tracking-wide">
        Live Projects
      </div>
    </div>

    {/* CARD */}
    <div
      data-aos="zoom-in"
      data-aos-delay="300"
      className="group relative bg-white/70 backdrop-blur-2xl border border-white/40 rounded-3xl p-6 shadow-xl
                 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
        <div className="absolute -inset-14 bg-gradient-to-r from-pink-500/20 to-rose-600/20 blur-2xl"></div>
      </div>

      <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
        {Object.keys(categoriesData).length}
      </div>

      <div className="text-slate-600 font-medium mt-1 tracking-wide">
        Categories
      </div>
    </div>

    {/* CARD */}
    <div
      data-aos="zoom-in"
      data-aos-delay="400"
      className="group relative bg-white/70 backdrop-blur-2xl border border-white/40 rounded-3xl p-6 shadow-xl
                 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
        <div className="absolute -inset-14 bg-gradient-to-r from-amber-500/20 to-orange-600/20 blur-2xl"></div>
      </div>

      <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
        {allProjects.filter(p => p.platform === 'Android').length}
      </div>

      <div className="text-slate-600 font-medium mt-1 tracking-wide">
        Mobile Apps
      </div>
    </div>

  </div>
</div>


      {/* Premium Filters */}
     <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-indigo-100">
  <div className="container mx-auto px-4 py-6">

    {/* PROJECT TYPE TABS */}
    <div className="flex flex-wrap gap-4 justify-center mb-6">
      {projectTypeTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleProjectTypeChange(tab.id)}
          className={`
            relative group px-8 py-3 rounded-xl font-semibold text-sm
            overflow-hidden transition-all duration-500 flex items-center gap-3
            border
            ${
              activeProjectType === tab.id
                ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600 border-transparent shadow-lg scale-[1.04]"
                : "text-slate-700 bg-white border-slate-300 hover:shadow-xl"
            }
          `}
        >

          {/* LEFT + RIGHT HOVER FILL */}
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 
            translate-x-[-100%] group-hover:translate-x-0 opacity-10
            transition-all duration-500"></span>

          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 
            translate-x-[100%] group-hover:translate-x-0 opacity-10
            transition-all duration-500"></span>

          {/* CONTENT */}
          <FontAwesomeIcon icon={tab.icon} className="text-lg relative z-10" />

          <span className="relative z-10">{tab.label}</span>

          <span
            className={`text-xs px-3 py-1 rounded-full relative z-10 ${
              activeProjectType === tab.id
                ? "bg-white/20 text-white"
                : "bg-indigo-50 text-indigo-600"
            }`}
          >
            {projectTypeCounts[tab.id]}
          </span>
        </button>
      ))}
    </div>

    {/* CATEGORY FILTERS */}
    <div className="flex flex-wrap gap-3 justify-center">
      <button
        onClick={() => setActiveFilter("All")}
        className={`
          px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300
          border
          ${
            activeFilter === "All"
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-lg"
              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:shadow-md"
          }
        `}
      >
        All <span className="opacity-70 ml-2">({getProjectsByType(activeProjectType).length})</span>
      </button>

      {Object.entries(categoriesData).map(([category, items]) => {
        const categoryProjects = getProjectsByType(activeProjectType);
        const categoryCount = categoryProjects.filter(
          (p) => p.category === category
        ).length;

        if (categoryCount === 0) return null;

        return (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`
              px-5 py-3 rounded-xl font-semibold text-sm flex items-center gap-2
              border transition-all duration-300
              ${
                activeFilter === category
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-lg"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:shadow-md"
              }
            `}
          >
            <FontAwesomeIcon icon={categoryIcons[category]} className="text-xs" />
            <span className="hidden sm:inline">{category}</span>
            <span className="sm:hidden">{category.split(" ")[0]}</span>
            <span className="opacity-75">({categoryCount})</span>
          </button>
        );
      })}
    </div>
  </div>
</div>


    
{/* Premium Projects Grid */}
<div className="mx-auto px-4 py-16">
  <div className="container">
    {filteredProjects.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project, index) => (
          <div
            key={`${project.category}-${project.id || index}`}
            className="group"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={index * 50}
            style={{ perspective: "1000px" }}
          >
            <div className="relative w-full h-full transition-all duration-700" style={{ transformStyle: "preserve-3d" }}>
              
              {/* CARD */}
              <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-100/70 backdrop-blur-xl 
                              transition-all duration-500 overflow-hidden group-hover:-translate-y-2 group-hover:shadow-indigo-200/40">

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 
                                group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 
                                transition-all duration-700 -z-10"></div>

                {/* IMAGE – FIXED HEIGHT (same for all) */}
                <div className="relative w-full h-58 sm:h-60 md:h-64 overflow-hidden rounded-b-none">
                  <img
                    src={project.image || "assets/img/default-project.jpg"}
                    className="absolute inset-0 w-full h-full object-fill"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "assets/img/default-project.jpg";
                    }}
                  />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span
                      className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${getStatusColor(
                        project.status
                      )} text-white text-[11px] font-semibold px-4 py-1.5 rounded-full shadow-lg`}
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                      {project.status}
                    </span>
                  </div>

                  {/* Platform Badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <span className="bg-white/90 backdrop-blur-xl text-slate-800 text-[11px] font-semibold px-4 py-1.5 rounded-full shadow-md border border-white">
                      {getPlatformIcon(project.platform)} {project.platform}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="px-6 pt-5 pb-6">

                  {/* Category */}
                  <Link
                    to={`/portfolio/${formatCategoryForUrl(project.category)}`}
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900 text-white text-[11px] 
                               font-semibold rounded-full shadow mb-4 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600 transition-all"
                  >
                    <FontAwesomeIcon icon={categoryIcons[project.category]} className="text-xs" />
                    {project.category}
                  </Link>

                  {/* Title – tighter spacing */}
                  <Link
                    to={`/portfolio/${formatCategoryForUrl(project.category)}/${project.id || index}`}
                    className="block"
                  >
                    <h3 className="text-xl font-black text-slate-900 leading-tight mb-2 group-hover:bg-gradient-to-r 
                                   group-hover:from-indigo-600 group-hover:to-pink-600 group-hover:bg-clip-text 
                                   group-hover:text-transparent transition-all">
                      {project.title}
                    </h3>
                  </Link>

                  {/* Description – fixed padding & spacing */}
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* FULL TECH STACK (NOT cut) */}
                  {project.technologies_used?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies_used.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-slate-100 text-slate-700 text-[11px] rounded-lg font-semibold 
                                     border border-slate-200 hover:bg-slate-200 hover:border-slate-300 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* ACTIONS */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                    <Link
                      to={`/portfolio/${formatCategoryForUrl(project.category)}/${project.id || index}`}
                      className="flex items-center gap-2 flex-1 justify-center px-5 py-2.5 bg-slate-900 text-white 
                                 text-xs font-bold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-indigo-600 
                                 hover:to-purple-600 transition-all"
                    >
                      Explore
                      <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                    </Link>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 flex items-center justify-center bg-slate-100 rounded-lg shadow border 
                                   border-slate-200 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 
                                   hover:text-white hover:scale-110 transition-all"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="text-center py-32">
        <h3 className="text-3xl font-bold text-slate-800 mb-4">No Projects Found</h3>
      </div>
    )}
  </div>
</div>


    </div>
  );
};

export default Portfolio;