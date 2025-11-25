

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
    faTools
} from '@fortawesome/free-solid-svg-icons';

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

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [categoryItems, setCategoryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoryTitle, setCategoryTitle] = useState('');

    useEffect(() => {
        const categoryMapping = {
            'e-commerce': 'E-Commerce',
            'food-delivery': 'Food Delivery',
            'job-search': 'Job Search',
            'financial': 'Financial',
            'non-profit': 'Non-Profit',
            'wedding-planning': 'Wedding Planning',
            'car-rental': 'Car Rental',
            'hr-and-recruitment': 'HR & Recruitment',
            'delivery': 'Delivery',
            'general-utilities': 'General Utilities',
            'education': 'Education',
            'hospitality': 'Hospitality'
        };

        const decodedCategoryName = decodeURIComponent(categoryName);

        const formattedCategoryName = categoryMapping[decodedCategoryName] ||
            decodedCategoryName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        setCategoryTitle(formattedCategoryName);

        const items = categories[formattedCategoryName] || [];
        setCategoryItems(items);
        setLoading(false);

        console.log('Category Name from URL:', categoryName);
        console.log('Decoded Category Name:', decodedCategoryName);
        console.log('Formatted Category Name:', formattedCategoryName);
        console.log('Available Categories:', Object.keys(categories));
        console.log('Found Items:', items);
    }, [categoryName]);

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

    const formatCategoryForUrl = (category) => {
        return category.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="spinner-border text-indigo-600" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3 text-gray-600">Loading projects...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div
                className="about-header-area"
                style={{
                    backgroundImage: 'url(../assets/img/bg/inner-header.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <img
                    src="../assets/img/elements/elements1.png"
                    alt="Decorative element"
                    className="elements1 aniamtion-key-1"
                />
                <img
                    src="../assets/img/elements/star2.png"
                    alt="Decorative star element"
                    className="star2 keyframe5"
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <h1 className="text-5xl md:text-6xl font-bold mb-6 flex items-center justify-center">
                                    <FontAwesomeIcon icon={categoryIcons[categoryTitle]} className="mr-4" />
                                    {categoryTitle} Projects
                                </h1>
                             
                                <div className="flex items-center justify-center gap-2 text-indigo-200">
                                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                                    <span><i className="fa-solid fa-angle-right" /></span>
                                    <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                                    <span><i className="fa-solid fa-angle-right" /></span>
                                    <span className="text-black font-semibold">{categoryTitle}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-md py-8 -mt-10 relative z-20 mx-4 rounded-xl">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-indigo-600">{categoryItems.length}</div>
                            <div className="text-gray-600 mt-1">Total Projects</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-green-600">
                                {categoryItems.filter(p => p.status === 'Live').length}
                            </div>
                            <div className="text-gray-600 mt-1">Live Projects</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-pink-600">
                                {categoryItems.filter(p => p.platform === 'Android').length}
                            </div>
                            <div className="text-gray-600 mt-1">Mobile Apps</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categoryItems.map((project, index) => (
                        <div
                            key={`${project.category || categoryTitle}-${project.id}-${index}`}
                            className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                        >
                            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={project.image}
                                    alt={`${project.title} project screenshot`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="absolute top-4 left-4">
                                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 ${getStatusColor(project.status)} text-white text-xs font-semibold rounded-full shadow-lg`}>
                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                        {project.status}
                                    </span>
                                </div>

                                <div className="absolute top-4 right-4">
                                    <span className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold rounded-full shadow-lg">
                                        {getPlatformIcon(project.platform)} {project.platform}
                                    </span>
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex gap-3">
                                        <Link
                                            to={`/portfolio/${formatCategoryForUrl(categoryTitle)}/${project.id}`}
                                            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300 hover:bg-indigo-600 hover:text-white flex items-center gap-2"
                                        >
                                            View Details
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </Link>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300 hover:bg-indigo-600 hover:text-white flex items-center gap-2"
                                            >
                                                View Live
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-1">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {project.technologies_used && project.technologies_used.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies_used.slice(0, 3).map((tech, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies_used.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                                +{project.technologies_used.length - 3}
                                            </span>
                                        )}
                                    </div>
                                )}

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1 group/link"
                                        >
                                            Visit Project
                                            <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    ) : (
                                        <span className="text-sm text-gray-400 font-medium">Coming Soon</span>
                                    )}

                                    <Link
                                        to={`/portfolio/${formatCategoryForUrl(categoryTitle)}/${project.id}`}
                                        className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1 group/link"
                                    >
                                        Details
                                        <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                        </div>
                    ))}
                </div>

                {categoryItems.length === 0 && (
                    <div className="text-center py-20">
                        <div className="inline-block p-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-6">
                            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">No Projects Found</h3>
                        <p className="text-gray-500">This category doesn't have any projects yet</p>
                        <Link to="/portfolio" className="mt-4 inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors">
                            Back to Portfolio
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;