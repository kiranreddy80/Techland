import React from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AppWork = () => {
  const projects = [
    {
      id: 1,
      image: "https://www.analogueitsolutions.com/carousel-images/allonimg.webp",
      title: "Nudeal",
      description:
        "NR12 Brands Shop is a feature-rich e-commerce website designed to provide users with a seamless shopping experience. The platform offers a diverse range of premium brand products with a user-friendly interface, secure payment gateways, and a fully optimized SEO structure to improve search engine rankings. It is built using modern web technologies to ensure speed, scalability, and responsiveness across all devices.",
      reverse: false,
    },
    {
      id: 2,
      image: "https://www.analogueitsolutions.com/carousel-images/healrimg.webp",
      step: "Meat O",
      title: "Meat O",
      description:
        "Meato is an on-demand fresh meat delivery platform that connects customers with trusted local meat providers. It ensures quality and freshness by sourcing meat directly from local stores and delivering it efficiently. With an easy-to-use platform, Meato offers seamless ordering, secure payments, and real-time delivery tracking.",
      reverse: true,
    },
    {
      id: 3,
      image: "https://www.analogueitsolutions.com/carousel-images/healrimg.webp",
      step: "Sapid",
      title: "Sapid",
      description:
        "A modern e-commerce store offering a seamless shopping experience with a wide range of high-quality products. Designed for speed, security, and convenience, it ensures easy navigation and quick checkout. Enjoy personalized recommendations and exclusive deals tailored to your preferences. Shop smarter, faster, and effortlessly with our cutting-edge platform.",
      reverse: false,
    },
    {
      id: 4,
      image: "https://www.analogueitsolutions.com/carousel-images/healrimg.webp",
      step: "Temple City",
      title: "Temple City",
      description:
        "Pujari App enables priests to handle their religious services digitally, ensuring smooth bookings, easy communication, and a better client experience. The app offers features such as profile customization, real-time booking management, and expertise listing to help Pujaris connect with devotees efficiently.",
      reverse: true,
    },
  ];

  // Initialize AOS when the component mounts
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div className="solution9-section-area sp2 bg-white" id="solution">
      <div className="container">
        {/* Header Section */}
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="work11-header text-center heading20 space-margin60">
              <div className="service-header" data-aos="fade-down" data-aos-duration="800">
                <h5>Projects</h5>
              </div>
              <div className="space24"></div>
              <h2 className="text-anime-style-3" data-aos="fade-down" data-aos-duration="900" data-aos-delay="100">
                Our Mobile Projects
              </h2>
              <div className="space16"></div>
              <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
                We are proud to have partnered with exceptional clients across
                various industries.
              </p>
            </div>
          </div>
        </div>

        {/* Projects Loop */}
        <div className="row">
          <div className="col-lg-12 m-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`solution-boxarea${project.reverse ? "2" : "3"}`}
                
              >
                <div
                  className={`row align-items-center ${project.reverse ? "flex-row-reverse" : ""
                    }`}
                >
                  <div className="col-lg-5">
                    <div className="img1">
                      <img src={project.image} alt={`Mobile app screenshot for ${project.title} project`} style={{ height: "500px" }} />
                    </div>
                  </div>

                  <div className="col-lg-1"></div>

                  <div className="col-lg-6">
                    <div className="step-header">
                      <div className="space16"></div>
                      <h2>
                        {project.title}
                      </h2>
                      <div className="space16"></div>
                      <p>
                        {project.description}
                      </p>
                      <div className="space32"></div>
                      <div>
                        <Link to="/portfolio" className="header-btn16">
                          View More Projects{" "}
                          <span>
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space32"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWork;