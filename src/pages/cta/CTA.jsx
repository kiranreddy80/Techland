// import React from 'react'
// import { Link } from 'react-router-dom'


// const CTA = () => {
//     return (
//         <div>
//             <div class="cta8-section-area sp1" style={{ backgroundColor: "#0d47a1" }}>
//                 <img src="../../assets/img/bg/cta-bg1.png" alt="" class="cta-bg1 aniamtion-key-2" />
//                 <img src="../../assets/img/bg/cta-bg2.png" alt="" class="cta-bg2 aniamtion-key-1" />
//                 <div class="container">
//                     <div class="row">
//                         <div class="col-lg-12 m-auto">
//                             <div class="cta-header-area text-center heading2">
//                                 <h2 class="text-anime-style-3">Start Your Journey To Online Success Today</h2>
//                                 <p data-aos="fade-up" data-aos-duration="1000">Your business deserves to shine in the digital world. SEOC is here to make that happen. Our proven <br class="d-lg-block d-none" /> strategies and personalized approach ensure that your unique needs are met.</p>
//                                 <div class="btn-area text-center" data-aos="fade-up" data-aos-duration="1200">
//                                     <a href="tel:78423 85604" class="header-btn1 me-2">Get in Touch <span><i class="fa-solid fa-arrow-right"></i></span></a>
//                                     <Link to="/contact" class="header-btn1 btn2">Request a Consultation <span><i class="fa-solid fa-arrow-right"></i></span></Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CTA

import React from 'react'
import { Link } from 'react-router-dom'


const CTA = () => {
    return (
        <div>
            <div class="cta8-section-area sp1" style={{ backgroundColor: "#0d47a1" }}>
                <img src="../../assets/img/bg/cta-bg1.png" alt="CTA background decorative element 1" class="cta-bg1 aniamtion-key-2" />
                <img src="../../assets/img/bg/cta-bg2.png" alt="CTA background decorative element 2" class="cta-bg2 aniamtion-key-1" />
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 m-auto">
                            <div class="cta-header-area text-center heading2">
                                <h2 class="text-anime-style-3">Start Your Journey To Online Success Today</h2>
                                <p data-aos="fade-up" data-aos-duration="1000">Your business deserves to shine in the digital world. SEOC is here to make that happen. Our proven <br class="d-lg-block d-none" /> strategies and personalized approach ensure that your unique needs are met.</p>
                                <div class="btn-area text-center" data-aos="fade-up" data-aos-duration="1200">
                                    <a href="tel:78423 85604" class="header-btn1 me-2">Get in Touch <span><i class="fa-solid fa-arrow-right"></i></span></a>
                                    <Link to="/contact" class="header-btn1 btn2">Request a Consultation <span><i class="fa-solid fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA