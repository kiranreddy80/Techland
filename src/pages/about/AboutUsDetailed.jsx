
import React from 'react';
import OurMilestones from './OurMilestones';
import {
  Award,
  Lightbulb,
  Users,
  Globe,
  Briefcase
} from 'lucide-react';

// Fix the import statement for the image
import ourTeamImg from '../../../public/assets/media/Assets/OurTeam.jpg';
import { Link } from 'react-router-dom';
import CTA from '../cta/CTA';
import ProjectMilestones from './ProjectMilestones';
import webdevelopmentImg from '../../../public/assets/media/Assets/logo/webdevelpoment.png'
import mobileapp1 from '../../../public/assets/media/Assets/logo/mobile app1.png'
import Degital from '../../../public/assets/media/Assets/logo/Degital.png'
import custom from '../../../public/assets/media/Assets/logo/custom.png'
import Cloud from '../../../public/assets/media/Assets/logo/Cloud.png'

const AboutUsDetailed = () => {
  // Core values data
  const coreValues = [
    {
      icon: "assets/img/icons/service1-h15.svg",
      title: "Innovation",
      description: "We embrace creativity and leverage the latest technologies to deliver innovative solutions.",
      duration: "800"
    },
    {
      icon: "assets/img/icons/service2-h15.svg",
      title: "Integrity",
      description: "We operate with honesty and transparency in everything we do.",
      duration: "900"
    },
    {
      icon: "assets/img/icons/service3-h15.svg",
      title: "Customer-Centricity",
      description: "Our clients are at the center of our success, and their satisfaction is our top priority.",
      duration: "1000"
    },
    {
      icon: "assets/img/icons/service4-h15.svg",
      title: "Excellence",
      description: "We are committed to maintaining the highest quality standards in all our work.",
      duration: "1100"
    },
    {
      icon: "assets/img/icons/service5-h15.svg",
      title: "Collaboration",
      description: "We value teamwork and foster strong partnerships with our clients and stakeholders.",
      duration: "1200"
    }
  ];

  // Why Choose Us data
  const whyChooseUs = [
    {
      icon: <Award size={30} strokeWidth={1.5} />,
      title: "Proven Expertise",
      description: "With years of experience and a portfolio of successful projects, we bring unmatched expertise to every project.",
      duration: "800"
    },
    {
      icon: <Lightbulb size={30} strokeWidth={1.5} />,
      title: "Innovative Approach",
      description: "Leveraging the latest technologies and best practices to deliver solutions that meet your business needs.",
      duration: "900"
    },
    {
      icon: <Users size={30} strokeWidth={1.5} />,
      title: "Client-Centric Focus",
      description: "Building strong relationships with our clients and exceeding expectations.",
      duration: "1000"
    },
    {
      icon: <Globe size={30} strokeWidth={1.5} />,
      title: "Global Reach",
      description: "Trusted by businesses worldwide, enabling us to build a diverse and loyal client base.",
      duration: "1100"
    },
    {
      icon: <Briefcase size={30} strokeWidth={1.5} />,
      title: "Dedicated Team",
      description: "Our team of highly skilled developers, designers, and strategists work tirelessly to bring your ideas to life.",
      duration: "1200"
    }
  ];

  const journeyData = {
    title: "Our Guiding Principles",
    subtitle: "Core Values That Define Us",
    description: "These five fundamental values shape our culture, drive our decision-making, and guide how we deliver exceptional IT solutions to our clients. They represent the foundation of our commitment to excellence in every project we undertake."
  };

  // Services data
  const services = [
    {
      title: "Web Development",
      icon: webdevelopmentImg,
      description:
        "Creating responsive and engaging websites tailored to your business needs.",
      spaceClass: "space40",
    },
    {
      title: "Mobile App Development",
      icon: mobileapp1,
      description:
        "Building user-friendly mobile apps for iOS, Android, and cross-platform solutions.",
      spaceClass: "space40",
      boxClass: "box2",
    },
    {
      title: "Digital Marketing",
      icon: Degital,
      description:
        "Implementing strategies to enhance your brand's online visibility and reach.",
      spaceClass: "space40",
      boxClass: "box3",
    },
    {
      title: "Custom Software Development",
      icon: custom,
      description:
        "Tailored software solutions to address complex business challenges.",
      spaceClass: "space40",
      boxClass: "box4",
    },
    {
      title: "Cloud and IT Consulting",
      icon: Cloud,
      description:
        "Helping businesses migrate to the cloud and optimize their IT infrastructure.",
      spaceClass: "space40",
      boxClass: "box2",
    },
  ];

  return (
    <div>
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
                <h1>About Us</h1>
                <Link to="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>About Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="works-inner-section-area sp2">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="about-all-images-area">
                <img src="assets/img/elements/elements14.png" alt="Decorative element 14" class="elements12 keyframe5" />
                <img src="assets/img/elements/elements15.png" alt="Decorative element 15" class="elements13 keyframe5" />
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="img1 ">
                      <div className="space100"></div>
                      <img src="assets/img/all-images/about-img6.png" alt="Techland IT Solutions office workspace" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="img2 ">
                      <img src="assets/img/all-images/about-img10.png" alt="Techland IT Solutions team collaboration" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="works-header-area heading20 heading2 specing2">
                <div className="service-header">
                  <h5>About Us</h5>
                </div>
                <h2>About Techland IT Solutions | Leading IT Services in Hyderabad</h2>
                <div>
                  <p className='pb-1'>We are a "tech-cocktail" Entity enabling fast-track IT solutions powered with a perfect balance of technology innovation, software designing-development and business consultancy.</p>
                  <p className='pb-1'><b>Techland</b> is synonymous with a heady mix of enthusiastic, young and experienced engineering professionals and systems development tech wizards, adept at brewing innovative and dynamic e-solutions. Our value-added business services and solutions add a spring to your portfolio of services to enhance user satisfaction.</p>
                  <p className='pb-1'>Automation is our goal. We factor technology to take the service to a new high. Individually we have experience in variegated fields like designing and developing apt apps (both web and mobile) for start-ups, CRM, Attendance and payroll management, apart from providing seamless e-service platforms suitable across different segments of business and government.</p>
                </div>
              </div>
            </div>
          </div>
          <ProjectMilestones />
        </div>
        <OurMilestones />

        <div className='service2-section-area'>
          <div class="works-inner-section-area pt-lg-5">
            <div class="container">
              <div class="service-all-boxes">
                <div className="row d-flex align-items-stretch">
                  <div className="col-md-6 fade-left d-flex mb-3 mb-lg-0">
                    <div className="service2-auhtor-boxarea flex-fill">
                      <div className="arrow">
                        <a ><i className="fa-solid fa-arrow-right"></i></a>
                      </div>
                      <div className="content-area">
                        <h5>Our Mission</h5>
                        <p>
                          At Techland IT Solutions, our mission is to drive transformative growth for businesses by harnessing the power of innovative technology. We deliver scalable, customer-centric digital solutions designed to solve complex challenges and enhance operational efficiency. By focusing on long-term impact, we ensure our clients are not only equipped to overcome today's obstacles but are also empowered to seize new opportunities and thrive in the digital landscape of tomorrow.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 fade-right d-flex mb-3 mb-lg-0">
                    <div className="service2-auhtor2-boxarea mt-0 flex-fill">
                      <div className="arrow">
                        <a ><i className="fa-solid fa-arrow-right"></i></a>
                      </div>
                      <div className="content-area">
                        <h5>Our Vision</h5>
                        <p>
                          Our vision is to be a global leader in providing innovative and sustainable technology solutions that empower businesses to succeed in an ever-evolving digital world. We aim to bridge the gap between technology and business, creating tailored solutions that drive meaningful transformation, foster growth, and enable our clients to unlock their full potential in a rapidly changing marketplace.
                        </p>
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
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <div className="work11-header text-center heading20 space-margin60">
                  <div className="service-header">
                    <h5>{journeyData.title}</h5>
                  </div>
                  <div className="space24"></div>
                  <h2 className="text-anime-style-3">{journeyData.subtitle}</h2>
                  <div className="space16"></div>
                  <p>
                    {journeyData.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="service15-section-area">
            <div className="container-fluid">
              <div>
                <div className="service-grid-container d-lg-flex">
                  {coreValues.map((value, index) => (
                    <div
                      key={index}
                      className="service15-boxarea mx-2"
                      data-aos="zoom-in"
                      data-aos-duration={value.duration}
                    >
                      <div className="icons">
                        <div style={{ paddingTop: "10px", paddingLeft: "10px" }}>
                          <img src={value.icon} alt={`${value.title} icon`} />
                        </div>
                      </div>
                      <div className="space16"></div>
                      <a >{value.title}</a>
                      <div className="space10"></div>
                      <p>{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid sp2">
        <div class="works-header-area heading20 heading2 specing2 text-center">
          <div className="service-header">
            <h5>What We Do</h5>
          </div>
          <h2>Driving Digital Transformation Across Hyderabad</h2>
          <div>
            <p className='pb-1'>At Techland IT Solutions, we provide a diverse range of IT services tailored to meet the unique needs of our clients. Our services include:</p>
          </div>
        </div>
        <div className='service1-section-area sp2 pb-0'>

          <div className="col-lg-12">
            <div className="service-all-boxes-area">
              {services.map((service, index) => (
                <div key={index} className={`service-boxarea ${service.boxClass || ''}`} >
                  <a >{service.title}</a>
                  <div className={service.spaceClass}></div>

                  {/* Center image */}
                  <div className="service-icon-wrapper d-flex justify-content-center">
                    <img src={service.icon} alt={`${service.title} icon`} style={{height:"150px"}} />
                  </div>

                  <div className="space40"></div>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="work11-section-area sp2 pb-lg-4 service13-section-area">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <div className="work11-header text-center heading20 space-margin60">
                  <div className="service-header">
                    <h5>Quality. Experience. Innovation.</h5>
                  </div>
                  <div className="space24"></div>
                  <h2 className="text-anime-style-3">Why Choose Techland IT Solutions?</h2>
                  <div className="space16"></div>
                  <p>
                    We offer expert developers with extensive experience and a strong history of delivering exceptional AI and software development solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="service15-section-area">
            <div className="container-fluid">
              <div>
                <div className="service-grid-container d-lg-flex">
                  {whyChooseUs.map((item, index) => (
                    <div
                      key={index}
                      className="service15-boxarea mx-2"
                      data-aos="zoom-in"
                      data-aos-duration={item.duration}
                      
                    >
                      <div className="icons d-flex justify-content-center align-items-center" style={{ height: "50px", width: "50px" }}>
                        {item.icon}
                      </div>
                      <div className="space16"></div>
                      <a >{item.title}</a>
                      <div className="space10"></div>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="boost-section-area sp2 bg-white ">
        <div class="container ">
          <div class="row">
            <div class="col-lg-5">
              <div className="work11-header text-start heading20 space-margin60">
                <div className="service-header">
                  <h5>Quality. Experience. Innovation.</h5>
                </div>
                <div className="space24"></div>
                <h2 className="text-anime-style-3">Meet Our Team</h2>
                <div className="space16"></div>
                <p>
                  Our team is the backbone of our success. Comprising talented individuals with diverse expertise in <b> development,design, marketing,</b> and <b>strategy</b>, we are united by a passion for technology and a commitment to excellence. Every member of our team brings a unique perspective, allowing us to deliver solutions that are creative, effective, and innovative.


                </p>
                <div class="bnt-area1 mt-4" data-aos="fade-right" data-aos-duration="1200">
                  <Link to="/team" class="header-btn13">Our Team<i class="fa-solid fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="images image-anime" data-aos="fade-left" data-aos-duration="1000">
                <img src={ourTeamImg} alt="Techland IT Solutions team members collaborating in office" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="work11-section-area sp2 pb-lg-4 service13-section-area">
        <div>
          <div className="container">
            <div className="row">
              <div className="m-auto">
                <div className="work11-header text-center heading20 space-margin60">
                  <div className="service-header">
                    <h5>Our Journey
                    </h5>
                  </div>
                  <div className="space24"></div>
                  <h2 className="text-anime-style-3">Our Journey
                  </h2>
                  <div className="space16"></div>
                  <p className='text-black'>Techland IT Solutions was founded with a simple yet ambitious goal: to empower businesses by delivering innovative and reliable technology solutions. What began as a small team with a vision to drive digital transformation has evolved into a trusted partner for organizations around the globe. Through dedication, hard work, and a relentless pursuit of excellence, we have continuously expanded our expertise and service offerings. From our humble beginnings in Hyderabad, India, we have made significant strides in the fields of mobile app development, web solutions, e-commerce, and digital marketing. Each project we undertake is a testament to our commitment to excellence and our drive to provide the best possible solutions to our clients. As we continue to grow and innovate, our journey is not just about expanding our services but also about making a lasting impact—transforming businesses and helping them thrive in the digital age.

                  </p>
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

export default AboutUsDetailed;