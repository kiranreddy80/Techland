

import React, { useEffect } from "react";
// Import all the required project images
import abhisreeweb from '../../../public/assets/media/Assets/Projectimg/abhisreeweb.png';
import cashexbiteboxweb from '../../../public/assets/media/Assets/Projectimg/cashexbiteboxweb.png';
import cashexweb from '../../../public/assets/media/Assets/Projectimg/cashexweb.png';
import meatoweb from '../../../public/assets/media/Assets/Projectimg/meatoweb.jpeg';
import nudealweb from '../../../public/assets/media/Assets/Projectimg/nudealweb.png';
import templecityweb from '../../../public/assets/media/Assets/Projectimg/templecityweb.png';
import workoasisweb from '../../../public/assets/media/Assets/Projectimg/workoasisweb.png';
import primepantry from '../../../public/assets/media/Assets/Projectimg/primepantry.png';
import bigbag from '../../../public/assets/media/Assets/Projectimg/bigbagImage.png';
import activeitzone from '../../../public/assets/media/Assets/Projectimg/activeItzoneImage.png';
import eshop from '../../../public/assets/media/Assets/Projectimg/eshop.png';


const WebWork = () => {
  // Statically define the works array with the imported images and detailed project_overview
  const works = [
    {
      title: "Abhisree Foundation",
      // Using the detailed project_overview
      overview: "Abhisree Foundation is a registered social development organization committed to creating a better society by supporting underprivileged communities. The organization focuses on rural and urban youth, with special attention to women, persons with disabilities, and tribal communities. Through various initiatives, Abhisree Foundation works towards education, healthcare, skill development, and social welfare in Telangana and Andhra Pradesh.",
      img: abhisreeweb,
    },
    {
      title: "CashX BiteBox",
      overview: "BiteBox is a student-friendly food ordering platform that integrates with Cashex for secure and cashless transactions. Designed to offer convenience for students, it allows them to order food using a unique secure code or cash. The platform also includes parental controls for tracking expenses and setting spending limits, ensuring a hassle-free dining experience.",
      img: cashexbiteboxweb,
    },
    {
      title: "CashX Web",
      overview: "Cashex is a powerful digital wallet and financial management platform designed to provide secure, seamless transactions. Whether for students, businesses, or individuals, Cashex simplifies money management with smart spending controls, instant transactions, and real-time tracking. Integrated with multiple payment methods, it offers a hassle-free digital financial experience.",
      img: cashexweb,
    },
    {
      title: "MeatO",
      overview: "Meato is an on-demand fresh meat delivery platform that connects customers with trusted local meat providers. It ensures quality and freshness by sourcing meat directly from local stores and delivering it efficiently. With an easy-to-use platform, Meato offers seamless ordering, secure payments, and real-time delivery tracking.",
      img: meatoweb,
    },
    {
      title: "Nudeal",
      overview: "NR12 Brands Shop is a feature-rich e-commerce website designed to provide users with a seamless shopping experience. The platform offers a diverse range of premium brand products with a user-friendly interface, secure payment gateways, and a fully optimized SEO structure to improve search engine rankings. It is built using modern web technologies to ensure speed, scalability, and responsiveness across all devices.",
      img: nudealweb,
    },
    {
      title: "Temple City Web",
      overview: "Pujari App enables priests to handle their religious services digitally, ensuring smooth bookings, easy communication, and a better client experience. The app offers features such as profile customization, real-time booking management, and expertise listing to help Pujaris connect with devotees efficiently.",
      img: templecityweb,
    },
    {
      title: "Workoasis",
      overview: "Work Oasis is a job portal that bridges the gap between talented job seekers and hiring companies. It provides an intuitive platform for users to find job opportunities, apply seamlessly, and connect with potential employers. With a strong focus on transparency, fairness, and collaboration, Work Oasis ensures a positive recruitment experience for all.",
      img: workoasisweb,
    },
    // {
    //   title: "Prime Pantry",
    //   overview: "Prime Pantry is a feature-rich e-commerce platform designed for grocery and pantry shopping. It allows users to browse a wide range of products, add items to their cart, and complete secure transactions. The platform is optimized for high performance, offering a mobile-responsive design and SEO-friendly product pages. Built with React and Node.js, it provides a seamless user experience with real-time inventory management and a secure checkout process.",
    //   img: primepantry,
    // },
    // {
    //   title: "BigBag",
    //   overview: "BigBag is a feature-rich e-commerce platform designed to provide users with a seamless online shopping experience. It offers a wide range of products, a secure checkout process, and an intuitive user interface. The platform is built with React for a dynamic frontend, Node.js for a scalable backend, and MongoDB for efficient data management. It also integrates Stripe API for secure transactions and optimized performance for a smooth shopping experience.",
    //   img: bigbag,
    // },
    // {
    //   title: "Active Itzone Ecommerce Demo",
    //   overview: "Active eCommerce CMS is a robust multi-vendor platform designed for businesses looking to create an online marketplace. It supports digital and physical products, multiple payment gateways, and vendor management. The platform is built using Laravel for the backend, Vue.js for dynamic frontend components, and MySQL for data management. With an intuitive admin panel and seller dashboard, it allows seamless product listing, order management, and analytics tracking.",
    //   img: activeitzone,
    // },
    // {
    //   title: "Delivery Boy Login",
    //   overview: "Eshop Pro Delivery Boy is a specialized delivery management platform designed to streamline order deliveries for the Eshop Pro e-commerce ecosystem. The platform provides real-time order tracking, delivery status updates, and navigation assistance to optimize the efficiency of delivery personnel. Integrated with Firebase for seamless notifications and Google Maps API for route optimization, it ensures fast and reliable order fulfillment.",
    //   img: eshop,
    // },
  ];

  // 👇 Ensure layout resets on navigation
  useEffect(() => {
    // Force browser to reflow animation (safely refresh transitions)
    const cards = document.querySelectorAll(".cs_case_study");
    cards.forEach((card) => {
      card.classList.remove("ready");
      // trigger reflow
      void card.offsetWidth;
      card.classList.add("ready");
    });
  }, []);

  return (
    <div className="service13-section-area sp2">
      <div className="container">
        <div className="work11-header text-center heading20 space-margin60">
          <div className="service-header">
            <h5>Our Work</h5>
          </div>
          <div className="space24"></div>
          <h2 className="text-anime-style-3">Our Website Projects</h2>
          <div className="space16"></div>
        </div>

        <div className="cs_case_study_1_list">
          {works.map((work, index) => (
            <div
              key={index}
              className="cs_case_study ready"
              style={{ backgroundImage: `url(${work.img})` }}
            >
              <div className="overlay"></div>
              <div className="content-area">
                <h3>{work.title}</h3>
                {/* Now using the detailed 'overview' property */}
                <p>{work.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebWork;