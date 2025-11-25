

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const OurMilestones = () => {
//   // Initialize AOS when component mounts
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false, 
//       easing: 'ease-out-cubic'
//     });
    
//     // Refresh AOS to detect new elements
//     AOS.refresh();
    
//     // Clean up AOS when component unmounts
//     return () => {
//       AOS.refreshHard();
//     };
//   }, []);

//   const milestones = [
//     {
//       year: '2018',
//       icon: 'assets/img/icons/work-icon10.svg',
//       bg: 'assets/img/elements/elements23.png',
//       title: 'Our Beginning',
//       description:
//         'Techland IT Solutions was founded with a vision to deliver meaningful digital experiences for businesses worldwide.',
//       duration: 800,
//     },
//     {
//       year: '2020',
//       icon: 'assets/img/icons/work-icon11.svg',
//       bg: 'assets/img/elements/elements24.png',
//       title: '100+ Projects Delivered',
//       description:
//         'Achieved our first major milestone by successfully completing 100+ projects across diverse industries like healthcare, retail, and education.',
//       duration: 1000,
//     },
//     {
//       year: '2022',
//       icon: 'assets/img/icons/work-icon10.svg',
//       bg: 'assets/img/elements/elements23.png',
//       title: 'Global Expansion',
//       description:
//         'Expanded our global presence with clients across the USA, Europe, and Asia, strengthening our position as a trusted technology partner.',
//       duration: 1200,
//     },
//     {
//       year: '2024',
//       icon: 'assets/img/icons/work-icon11.svg',
//       bg: '',
//       title: 'AI-Driven Innovation',
//       description:
//         'Launched AI-powered business automation tools that streamline operations and enable data-driven decision-making for enterprises.',
//       duration: 1400,
//     },
//   ];

//   return (
//     <div>
//       <div className="work11-section-area sp2 service13-section-area">
//         <div className="container">
//           {/* Section Heading */}
//           <div className="row">
//             <div className="col-lg-8 m-auto">
//               <div className="work11-header text-center heading20 space-margin60">
//                 <div className="service-header">
//                   <h5>Journey of Excellence</h5>
//                 </div>
//                 <div className="space24"></div>
//                 <h2 className="text-anime-style-3">Our Milestones</h2>
//                 <div className="space16"></div>
//                 <p>
//                   From our humble beginnings to becoming a global technology partner, each milestone marks a step
//                   forward in our mission to innovate, inspire, and deliver excellence.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Milestones Loop */}
//           <div className="row">
//             {milestones.map((item, index) => (
//               <div
//                 key={index}
//                 className="col-lg-3 col-md-6"
//                 data-aos="zoom-in"
//                 data-aos-duration={item.duration}
//               >
//                 <div className="work11-boxarea">
//                   {item.bg && (
//                     <img
//                       src={item.bg}
//                       alt={`Milestone background ${item.year}`}
//                       className="elements23"
//                     />
//                   )}
//                   <div className="icons ">
//                     <div className='our-milestones' style={{marginLeft:"12px", paddingTop:"10px"}}>
//                       <img src={item.icon} alt={`${item.title} icon`} />
//                     </div>
//                   </div>
//                   <div className="space24"></div>
//                   <div className="textarea">
//                     <a href={`#milestone-${item.year}`}>{item.year}</a>
//                     <div className="space16"></div>
//                     <h5 className='mb-2'>{item.title}</h5>
//                     <p>{item.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurMilestones;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurMilestones = () => {
  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
      easing: 'ease-out-cubic'
    });
    
    // Refresh AOS to detect new elements
    AOS.refresh();
    
    // Clean up AOS when component unmounts
    return () => {
      AOS.refreshHard();
    };
  }, []);

  const milestones = [
    {
      year: '2018',
      icon: 'assets/img/icons/work-icon10.svg',
      bg: 'assets/img/elements/elements23.png',
      title: 'Our Beginning',
      description:
        'Techland IT Solutions was founded with a vision to deliver meaningful digital experiences for businesses worldwide.',
      duration: 800,
    },
    {
      year: '2020',
      icon: 'assets/img/icons/work-icon11.svg',
      bg: 'assets/img/elements/elements24.png',
      title: '100+ Projects Delivered',
      description:
        'Achieved our first major milestone by successfully completing 100+ projects across diverse industries like healthcare, retail, and education.',
      duration: 1000,
    },
    {
      year: '2022',
      icon: 'assets/img/icons/work-icon10.svg',
      bg: 'assets/img/elements/elements23.png',
      title: 'Global Expansion',
      description:
        'Expanded our global presence with clients across the USA, Europe, and Asia, strengthening our position as a trusted technology partner.',
      duration: 1200,
    },
    {
      year: '2024',
      icon: 'assets/img/icons/work-icon11.svg',
      bg: '',
      title: 'AI-Driven Innovation',
      description:
        'Launched AI-powered business automation tools that streamline operations and enable data-driven decision-making for enterprises.',
      duration: 1400,
    },
  ];

  return (
    <div>
      <div className="work11-section-area sp2 service13-section-area">
        <div className="container">
          {/* Section Heading */}
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="work11-header text-center heading20 space-margin60">
                <div className="service-header">
                  <h5>Journey of Excellence</h5>
                </div>
                <div className="space24"></div>
                <h2 className="text-anime-style-3">Our Milestones</h2>
                <div className="space16"></div>
                <p>
                  From our humble beginnings to becoming a global technology partner, each milestone marks a step
                  forward in our mission to innovate, inspire, and deliver excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Milestones Loop */}
          <div className="row">
            {milestones.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-duration={item.duration}
              >
                <div className="work11-boxarea">
                  {item.bg && (
                    <img
                      src={item.bg}
                      alt={`${item.title} milestone background`}
                      className="elements23"
                    />
                  )}
                  <div className="icons ">
                    <div className='our-milestones' style={{marginLeft:"12px", paddingTop:"10px"}}>
                      <img src={item.icon} alt={`${item.title} milestone icon`} />
                    </div>
                  </div>
                  <div className="space24"></div>
                  <div className="textarea">
                    <a href={`#milestone-${item.year}`}>{item.year}</a>
                    <div className="space16"></div>
                    <h5 className='mb-2'>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMilestones;