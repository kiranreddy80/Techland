
import React from 'react';
import frontend from "../../../public/assets/media/Assets/FrontEnd.jpg";
import backend from "../../../public/assets/media/Assets/BackEnd.jpg"
import ourteam from "../../../public/assets/media/Assets/OurTeam.jpg";
import admin from "../../../public/assets/media/Assets/admin.jpg";
import env from "../../../public/assets/media/Assets/env1.jpg"
import fday from "../../../public/assets/media/Assets/fday1.jpg"
import bday from "../../../public/assets/media/Assets/bday.jpg"
import env5 from "../../../public/assets/media/Assets/env5.jpg"
import market from "../../../public/assets/media/Assets/market.jpg"
import testing from "../../../public/assets/media/Assets/test.jpg"
import CTA from '../cta/CTA'
import { Link } from 'react-router-dom';

// Team Groups Data
const teamGroups = [
    {
        teamName: "Our Team",
        image: ourteam,
        description:
            "At Techland IT Solutions, our skilled teams — from frontend and backend development to design and strategy — collaborate to deliver powerful, innovative digital solutions that drive results.",
    },
    {
        teamName: "Frontend Team",
        image: frontend,
        description:
            "Our frontend team ensures beautiful, responsive, and user-friendly web experiences using the latest technologies like React, Vue, and Tailwind CSS.",
    },
    {
        teamName: "Backend Team",
        image: backend,
        description:
            "Responsible for building secure, scalable, and high-performance server-side applications using Node.js, Express, Python, and databases.",
    },
    {
        teamName: "Admin Team",
        image: admin,
        description:
            "Our creative design team crafts intuitive UI/UX solutions that align with your brand identity and enhance customer engagement.",
    },
    {
        teamName: "Sales & Digital Marketing Team",
        image: market,
        description:
            "Expanding our reach and boosting growth through effective sales strategies and impactful digital marketing solutions tailored to connect with the right audience.",
    },
    {
        teamName: "Testing Team",
        image: testing,
        description:
            "Ensuring quality and reliability through rigorous testing processes that deliver flawless, high-performing solutions.",
    },
];

// Events Data - Added here
const events = [
    {
        id: 1,
        image: env,
    
        title: 'Environment Day',
        date: 'June 5, 2025',
        description: 'Tree plantation and eco-awareness campaign.',
    },
    {
        id: 2,
        image: fday,
        title: 'Funday Celebration',
        date: 'June 10, 2025',
        description: 'Explore amazing artworks from local talents.',
    },
    // {
    //     id: 3,
    //     image: bday,
    //     title: 'Birthday Celebrations',
    //     date: 'June 15, 2025',
    //     description: 'A joyful day of cake, laughter, and memories! 🎉',
    // },
    {
        id: 4,
        image: env5,
        title: 'Cricket Chronicles',
        date: 'June 21, 2025',
        description: 'Moments of teamwork, sportsmanship, and fun on the cricket field.',
    },
];

const Team = () => {
    return (
        <div>
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
                                <h1>Our Team</h1>
                                <Link to="/">
                                    Home <i className="fa-solid fa-angle-right"></i>{' '}
                                    <span>Our Team</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <div class=" sp2 pb-0">
                    <div className='col-lg-6 mx-auto'>
                        <div class="works-header-area heading20 heading2 specing2 text-center bg-white">
                            <div className="service-header">
                                <h5> Our Team</h5>
                            </div>
                            <h2>Meet Our Team | Expert Developers & Marketers in Hyderabad</h2>
                            <div>
                                <p className='pb-1'>Discover the skilled team behind Techland IT Solutions, delivering top-tier digital marketing, web development, and app development services in Hyderabad.</p>
                            </div>
                        </div>
                    </div>
                    <div className='service1-section-area sp2'>
                        <div class="case-single-section-area">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-10 mx-auto">
                                        <div class="case-auhtor-area">
                                            <div class="row align-items-center">
                                                <div class="col-lg-6">
                                                    <div class="case-single-hedaer heading2">
                                                        <h2>Madhu Kadali</h2>
                                                        <div className='about-header text-center heading12'>
                                                            <div className=''>
                                                                <h5>CEO & Founder  </h5>
                                                            </div>
                                                        </div>
                                                        <p>Under the visionary leadership of Madhu Kadali, Techland IT Solutions was founded in 2018 with a mission to create impactful digital solutions. The company quickly gained momentum, celebrating a major milestone in 2020 with the delivery of its 100th successful project across diverse industries. This early success demonstrated the company's versatility and set a strong foundation for future growth.
                                                        </p>
                                                        <p className='mt-2'>
                                                        Building on this momentum, Techland IT Solutions expanded its global reach in 2022, establishing a robust client base in the USA, Europe, and Asia. In 2024, the company further solidified its innovative edge by launching AI-driven solutions. These tools are designed to help businesses automate workflows and improve decision-making, positioning Techland as a forward-thinking industry leader.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-1"></div>
                                                <div class="col-lg-5">
                                                    <div class="case-images image-anime">
                                                        <img src="https://techlanditsolutions.com/static/media/ceo.36ef32889d8032fae328.jpg" alt="Madhu Kadali - CEO & Founder of Techland IT Solutions" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="work11-section-area sp2 service13-section-area">
                        <div className="container">
                            {/* Section Heading */}
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="work11-header text-center heading20 space-margin60">
                                        <div className="service-header">
                                            <h5>Our Team</h5>
                                        </div>
                                        <div className="space24"></div>
                                        <h2 className="text-anime-style-3">Our Experts at Techland IT Solutions</h2>
                                        <div className="space16"></div>
                                        <p>
                                            Experience, innovation, and technical excellence—meet the team behind our success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='service5-section-area'>
                                <div class="row">
                                    {teamGroups.map((team, index) => {
                                        const boxClass = `box${index + 1}`;
                                        return (
                                            <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={`${800 + (index * 200)}`} key={index}>
                                                <div class={`service-author-boxarea ${boxClass}`}>
                                                    <div class="space40"></div>
                                                    <div class="img1 image-anime">
                                                        <img src={team.image} alt={`${team.teamName} at Techland IT Solutions`} />
                                                    </div>
                                                    <div class="space40"></div>
                                                    <div class="content-area">
                                                        <a href="#">{team.teamName}</a>
                                                        <p>{team.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- OUR TEAM ACTIVITIES SECTION --- */}
                    <div className='service1-section-area sp2'>
                        <div class="blog11-section-area bg-white">
                            <div class="container">
                                <div class="row">
                                    <div className='col-lg-6 mx-auto'>
                                        <div class="works-header-area heading20 heading2 specing2 text-center bg-white">
                                            <div className="service-header">
                                                <h5> Activities</h5>
                                            </div>
                                            <h2>Our Team Activities</h2>
                                            <div className="space24"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    {/* --- MAPPING OVER EVENTS DATA --- */}
                                    {events.map((event) => (
                                        <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="800" key={event.id}>
                                            <div class="blog11-boxarea">
                                                <div class="img1">
                                                    <img src={event.image} alt={`${event.title} event at Techland IT Solutions`} />
                                                </div>
                                                <div class="content-area bg-gray">
                                                    <ul>
                                                        <li><i class="fa-regular fa-calendar-days"></i> {event.date}</li>
                                                    </ul>
                                                    <div class="space16"></div>
                                                    <a href="#" class="head d-flex align-items-center">
                                                        {event.icon && <span className="me-2">{event.icon}</span>}
                                                        {event.title}
                                                    </a>
                                                    <p className='text-black mt-2'>{event.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CTA />
        </div>
    );
};

export default Team;