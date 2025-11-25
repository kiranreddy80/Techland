// import React, { useEffect, useRef } from "react";

// const ClientReviews = () => {
//   const carouselRef = useRef(null);

//   const testimonials = [
//     {
//       client: "Boutique",
//       feedback:
//         "Techland IT Solutions gave our boutique a stunning online presence. The website and app look amazing!",
//     },
//     {
//       client: "Meat O",
//       feedback:
//         "The e-commerce platform they created for Meat O is top-notch. Fast and reliable service.",
//     },
//     {
//       client: "Temple City",
//       feedback:
//         "Techland IT Solutions truly understood our vision for Temple City. Our new site is a game-changer!",
//     },
//     {
//       client: "V News",
//       feedback:
//         "టెక్‌ల్యాండ్ IT సొల్యూషన్స్ మా న్యూస్ ప్లాట్‌ఫారమ్‌ను సులభంగా ఉపయోగపడేలా మరియు డైనామిక్‌గా మార్చింది. అద్భుతమైన పని!",
//     },
//     {
//       client: "Nudeal",
//       feedback:
//         "టెక్‌ల్యాండ్ IT సొల్యూషన్స్‌తో పని చేయడం చాలా సంతోషంగా ఉంది. వారు మా ఆలోచనలను అద్భుతంగా వాస్తవంగా మార్చారు.",
//     },
//     {
//       client: "Sapid",
//       feedback:
//         "The team at Techland delivered creative and effective solutions for our site. We couldn't be happier!",
//     },
//     {
//       client: "Work Oasis",
//       feedback:
//         "Techland IT Solutions designed our website with great attention to detail and professionalism. Very satisfied!",
//     },
//     {
//       client: "Trust Labs",
//       feedback:
//         "The Trust Labs team is thankful for Techland's exceptional service. Our website looks fantastic and works flawlessly!",
//     },
//   ];

//   useEffect(() => {
//     const $carousel = $(carouselRef.current);

//     if (typeof $ !== 'undefined' && typeof $.fn.owlCarousel !== 'undefined') {
//       $carousel.owlCarousel({
//         loop: true,
//         margin: 30,
//         nav: true,
//         dots: false,
//         mouseDrag: true,
//         items: 10,
//         autoplay: true,
//         navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
//         smartSpeed: 3000,
//         autoplayTimeout: 4000,
//         responsiveClass: true,
//         responsive: {
//           0: {
//             items: 1,
//             nav: true,
//           },
//           600: {
//             items: 2,
//           },
//           1000: {
//             items: 3,
//           }
//         }
//       });

//       return () => {
//         $carousel.owlCarousel('destroy');
//       };
//     } else {
//       console.warn("jQuery or Owl Carousel is not loaded.");
//     }
//   }, []);

//   return (
//     <div>
//       <div className="space100 d-lg-block d-none"></div>
//       <div className="space80 d-lg-block d-none"></div>
//       <div className="sp2 d-lg-block d-none"></div>

//       <div className="service13-section-area sp2 mt-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="header-area-service space-margin60">
//                 <div className="heading20">
//                   <div className="service-header">
//                     <h5>Reviews</h5>
//                   </div>
//                   <div className="space16"></div>
//                   <h2 className="text-anime-style-3">What Our Clients Say</h2>
//                   <p className="pt-3">We are proud to have partnered with exceptional clients across various industries.</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="testimonial4-section-area">
//             <div className="container">
//               <div className="row">
//                 <div
//                   className="col-lg-12"
//                   data-aos="zoom-out"
//                   data-aos-duration="1200"
//                 >
//                   {/* Add the ref to the carousel container */}
//                   <div ref={carouselRef} className="testimonial4-slider-area owl-carousel">
//                     {testimonials.map((t, index) => (
//                       <div className="testimonial-boxarea" key={index}>
//                         <p>{t.feedback}</p>
//                         <div className="space48"></div>
//                         <div className="auhtor-logo">
//                           <div className="text">
//                             <a href="#">{t.client}</a>
//                             <ul>
//                               {[...Array(5)].map((_, i) => (
//                                 <li key={i}>
//                                   <i className="fa-solid fa-star"></i>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                           <div className="logo">
//                             <img
//                               src="assets/img/icons/google1.svg"
//                               alt="Google"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientReviews;


import React, { useEffect, useRef } from "react";

const ClientReviews = () => {
  const carouselRef = useRef(null);

  const testimonials = [
    {
      client: "Boutique",
      feedback:
        "Techland IT Solutions gave our boutique a stunning online presence. The website and app look amazing!",
    },
    {
      client: "Meat O",
      feedback:
        "The e-commerce platform they created for Meat O is top-notch. Fast and reliable service.",
    },
    {
      client: "Temple City",
      feedback:
        "Techland IT Solutions truly understood our vision for Temple City. Our new site is a game-changer!",
    },
    {
      client: "V News",
      feedback:
        "టెక్‌ల్యాండ్ IT సొల్యూషన్స్ మా న్యూస్ ప్లాట్‌ఫారమ్‌ను సులభంగా ఉపయోగపడేలా మరియు డైనామిక్‌గా మార్చింది. అద్భుతమైన పని!",
    },
    {
      client: "Nudeal",
      feedback:
        "టెక్‌ల్యాండ్ IT సొల్యూషన్స్‌తో పని చేయడం చాలా సంతోషంగా ఉంది. వారు మా ఆలోచనలను అద్భుతంగా వాస్తవంగా మార్చారు.",
    },
    {
      client: "Sapid",
      feedback:
        "The team at Techland delivered creative and effective solutions for our site. We couldn't be happier!",
    },
    {
      client: "Work Oasis",
      feedback:
        "Techland IT Solutions designed our website with great attention to detail and professionalism. Very satisfied!",
    },
    {
      client: "Trust Labs",
      feedback:
        "The Trust Labs team is thankful for Techland's exceptional service. Our website looks fantastic and works flawlessly!",
    },
  ];

  useEffect(() => {
    const $carousel = $(carouselRef.current);

    if (typeof $ !== 'undefined' && typeof $.fn.owlCarousel !== 'undefined') {
      $carousel.owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        mouseDrag: true,
        items: 10,
        autoplay: true,
        navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
        smartSpeed: 3000,
        autoplayTimeout: 4000,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          }
        }
      });

      return () => {
        $carousel.owlCarousel('destroy');
      };
    } else {
      console.warn("jQuery or Owl Carousel is not loaded.");
    }
  }, []);

  return (
    <div>
      

      <div className="service13-section-area sp2 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-area-service space-margin60">
                <div className="heading20">
                  <div className="service-header">
                    <h5>Reviews</h5>
                  </div>
                  <div className="space16"></div>
                  <h2 className="text-anime-style-3">What Our Clients Say</h2>
                  <p className="pt-3">We are proud to have partnered with exceptional clients across various industries.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial4-section-area">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-12"
                  data-aos="zoom-out"
                  data-aos-duration="1200"
                >
                  {/* Add the ref to the carousel container */}
                  <div ref={carouselRef} className="testimonial4-slider-area owl-carousel">
                    {testimonials.map((t, index) => (
                      <div className="testimonial-boxarea" key={index}>
                        <p>{t.feedback}</p>
                        <div className="space48"></div>
                        <div className="auhtor-logo">
                          <div className="text">
                            <a href="#">{t.client}</a>
                            <ul>
                              {[...Array(5)].map((_, i) => (
                                <li key={i}>
                                  <i className="fa-solid fa-star"></i>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="logo">
                            <img
                              src="assets/img/icons/google1.svg"
                              alt="Google review logo"
                            />
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
      </div>
    </div>
  );
};

export default ClientReviews;