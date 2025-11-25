// import React from 'react'

// const OurClients = () => {
//   const images = [
//     "https://www.analogueitsolutions.com/carousel-images/aarishimg.webp",
//     "https://www.analogueitsolutions.com/carousel-images/flythimg.webp",
//     "https://www.analogueitsolutions.com/carousel-images/jseimg.webp",
//     "https://www.analogueitsolutions.com/carousel-images/zipckimg.webp",
//     "https://www.analogueitsolutions.com/carousel-images/poshanaimg.webp",
//   ];

//   return (
//     <div>
//       <div class="space100 d-lg-block d-none"></div>
//       <div class="space80 d-lg-block d-none"></div>

//       <div className="service13-section-area project12-section-area bg-white sp2 mt-5">
        
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="header-area-service space-margin60">
//                 <div className="heading20">
//                   <div className="service-header">
//                     <h5>Our Work</h5>
//                   </div>
//                   <div className="space16"></div>
//                   <h2 className="text-anime-style-3">Our Mobile Projects</h2>
//                 </div>
//                 <div className="btn-area1">
//                   <a href="#" className="header-btn21">
//                     View All Service <i className="fa-solid fa-arrow-right"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="solution-section-slider-area">
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="solution-slider-area owl-carousel">
//                     {images.map((img, index) => (
//                       <div className="images-content-area" key={index}>
//                         <div className="img1">
//                           <img src={img} alt={`Project ${index + 1}`} />
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
// }

// export default OurClients


import React from 'react'

const OurClients = () => {
  const images = [
    "https://www.analogueitsolutions.com/carousel-images/aarishimg.webp",
    "https://www.analogueitsolutions.com/carousel-images/flythimg.webp",
    "https://www.analogueitsolutions.com/carousel-images/jseimg.webp",
    "https://www.analogueitsolutions.com/carousel-images/zipckimg.webp",
    "https://www.analogueitsolutions.com/carousel-images/poshanaimg.webp",
  ];

  return (
    <div>
      <div class="space100 d-lg-block d-none"></div>
      <div class="space80 d-lg-block d-none"></div>

      <div className="service13-section-area project12-section-area bg-white sp2 mt-5">
        
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-area-service space-margin60">
                <div className="heading20">
                  <div className="service-header">
                    <h5>Our Work</h5>
                  </div>
                  <div className="space16"></div>
                  <h2 className="text-anime-style-3">Our Mobile Projects</h2>
                </div>
                <div className="btn-area1">
                  <a href="#" className="header-btn21">
                    View All Service <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="solution-section-slider-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="solution-slider-area owl-carousel">
                    {images.map((img, index) => (
                      <div className="images-content-area" key={index}>
                        <div className="img1">
                          <img src={img} alt={`Mobile project screenshot ${index + 1} - Techland IT Solutions portfolio`} />
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
}

export default OurClients