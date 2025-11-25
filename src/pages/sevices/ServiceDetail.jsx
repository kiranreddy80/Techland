

import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { servicesData } from './servicesData';

import {
    Smartphone,
    Code,
    Megaphone,
    Database,
    Palette,
    Users,
    Cog,
    CheckCircle,
    Star,
    ArrowRight,
    Sparkles,
    TrendingUp,
    Zap,
    Target
} from 'lucide-react';
import CTA from '../cta/CTA';

const iconComponents = {
    smartphone: Smartphone,
    code: Code,
    megaphone: Megaphone,
    database: Database,
    palette: Palette,
    users: Users
};

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [hoveredWorkflow, setHoveredWorkflow] = useState(null);

    const service = servicesData.find(s => s.id === serviceId);

    if (!service) {
        return <div className="text-center py-20 text-2xl">Service not found</div>;
    }

    // Get the correct icon component from the map
    const IconComponent = iconComponents[service.icon];

    return (
        <div>
            <style>
                {`
                    /* Simple Process Styles */
                    .simple-process-section {
                        background: #f8f9fa;
                        padding: 60px 0;
                    }
                    
                    .service12-boxarea {
                        background: white;
                        border-radius: 12px;
                        padding: 40px 30px;
                        box-shadow: 0 2px 15px rgba(0,0,0,0.1);
                        position: relative;
                        height: 100%;
                    }
                    
                    .step-number {
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        width: 45px;
                        height: 45px;
                        background: linear-gradient(135deg, #d400c9ff 0%, #0064a7ff 100%);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-size: 20px;
                        font-weight: bold;
                        box-shadow: 0 4px 10px rgba(0, 188, 212, 0.3);
                    }
                    
                    .icons {
                        text-align: center;
                        margin-bottom: 20px;
                        height: 150px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .process-lottie-icon {
                        width: 150px;
                        height: 150px;
                        border: none;
                    }
                    
                    .space20 {
                        height: 20px;
                    }
                    
                    .space16 {
                        height: 16px;
                    }
                    
                    .space24 {
                        height: 24px;
                    }
                    
                    .service12-boxarea .content a:first-child {
                        font-size: 22px;
                        font-weight: 600;
                        color: #333;
                        text-decoration: none;
                        display: block;
                    }
                   
                    
                    .service12-boxarea .content p {
                        color: #666;
                        font-size: 15px;
                        line-height: 1.7;
                        margin: 0;
                    }
                    
                  
                    .readmore:hover i {
                        transform: translateX(3px);
                    }
                `}
            </style>

            {/* Header Section */}
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
                                <h1>{service.title}</h1>
                                <Link to="/">
                                    Home <i className="fa-solid fa-angle-right"></i>{' '} Services <i className="fa-solid fa-angle-right"></i>{' '}
                                    <span>{service.title}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Details Section */}
            <div className="service-inner2-section-area sp2">
                <img src="../assets/img/elements/instagram1.png" alt="Instagram decorative element" className="instagram1" />
                <img src="../assets/img/elements/linkedin1.png" alt="LinkedIn decorative element" className="linkedin1" />
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Column for Image */}
                        <div className="col-lg-6">
                            <div className="service-images">
                                <img src="../assets/img/elements/facebook1.png" alt="Facebook decorative element" className="facebook1" />
                                <img src="../assets/img/elements/twitter1.png" alt="Twitter decorative element" className="twitter1" />
                                <img src="../assets/img/all-images/service-img11.png" alt={`${service.title} service illustration`} className="service-image" />
                                <img src="../assets/img/bg/inner-bg1.png" alt="Inner background element" className="inner-bg1" />
                            </div>
                        </div>
                        {/* Right Column for Content */}
                        <div className="col-lg-6">
                            <div className="service-content heading2">
                                <div className="flex items-center gap-4">
                                    <div className='heading20'>
                                        <div className="service-header d-flex">
                                            <h5 className='d-flex align-items-center gap-2'>
                                                <span>{IconComponent && <IconComponent size={20} />}</span> About Us
                                            </h5>
                                        </div>
                                    </div>
                                    <h5 className="text-lg font-semibold">{service.category}</h5>
                                </div>

                                <div>
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>
                                </div>

                                {/* Service Details List */}
                                <div className="space-y-4 mb-8 mt-3">
                                    {service.details.map((detail, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                                                <CheckCircle className="text-white" size={16} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                    {detail.subTitle}
                                                </h3>
                                                <p className="text-gray-600">
                                                    {detail.subDescription}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Additional Information */}
                                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/50 mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                        <Star className="text-amber-500" size={20} fill="currentColor" />
                                        Additional Information
                                    </h3>
                                    <p className="text-gray-700">
                                        {service.additionalInfo}
                                    </p>
                                </div>

                                <div className="btn-area1">
                                    <a href="#" className="header-btn1">
                                        View Our Services <span><i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Simple Process Section */}
            <section className="simple-process-section">
                <div className="container">
                    {/* Section Header */}
                    <div className="work11-header text-center heading20 mb-5">
                        <div className="service-header">
                            <h5>Journey of Excellence</h5>
                        </div>
                        <h2 className="text-anime-style-3 mt-3">Our Process</h2>
                        <div className="space16"></div>
                        <p className="text-muted">Follow our systematic approach to deliver excellence at every step</p>
                    </div>

                    {/* Process Cards - Row Layout */}
                    <div className="row">
                        {service.workflow.map((step, index) => {
                            // Lottie animation URLs for each step
                            const lottieUrls = [
                                'https://lottie.host/embed/a1c5c3e0-6f5d-4f3e-9c5e-1e9a3f3e0e4e/YvVXGqMFCp.json',
                                'https://lottie.host/embed/b2d6d4f1-7f6e-5f4f-ad6f-2fae4g4f1f5f/ZwWYHrNGDq.json',
                                'https://lottie.host/embed/c3e7e5g2-8g7f-6g5g-be7g-3gbf5h5g2g6g/AxXZIsOHEr.json',
                                'https://lottie.host/embed/d4f8f6h3-9h8g-7h6h-cf8h-4hcg6i6h3h7h/ByYaJtPIFs.json',
                                'https://lottie.host/embed/e5g9g7i4-ah9h-8i7i-dg9i-5idh7j7i4i8i/CzZbKuQJGt.json',
                                'https://lottie.host/embed/f6hah8j5-bi0i-9j8j-eh0j-6jei8k8j5j9j/DaAcLvRKHu.json'
                            ];

                            return (
                                <div key={index} className="col-lg-4 col-md-6 mb-4">
                                    <div className="service12-boxarea p-4">
                                        <div className="step-number" aria-label={`Step ${step.id}`}>{step.id}</div>
                                        
                                        <div className="content">
                                            <a href="#">{step.title}</a>
                                            <div className="space16"></div>
                                            <p>{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default ServiceDetail;