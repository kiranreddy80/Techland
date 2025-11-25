import React, { useEffect, useRef, useState } from 'react'; 
import Nudeal from "../../public/assets/media/Assets/logo/nudeal.png";
import Newes from "../../public/assets/media/Assets/logo/poolpal.png";
import Abhi from "../../public/assets/media/Assets/logo/abhisree.png";
import Yuva from "../../public/assets/media/Assets/logo/yuvaride.png";
import Zenfoo from "../../public/assets/media/Assets/logo/zenfoo.png";
import Zest from "../../public/assets/media/Assets/logo/zestfindz.png";
import Best from "../../public/assets/media/Assets/logo/bestseeds.png";
import Boutique from "../../public/assets/media/Assets/logo/boutique.png";
import Carclean from "../../public/assets/media/Assets/logo/gocarclean.png";
import Market from "../../public/assets/media/Assets/logo/marketyatra.png";
import Meato from "../../public/assets/media/Assets/logo/meatoo.png";
import Vnews from "../../public/assets/media/Assets/logo/vnews.png";
import Paywallet from "../../public/assets/media/Assets/logo/paywallet.png";
import Sapid from "../../public/assets/media/Assets/logo/sapid.png";
import Temple from "../../public/assets/media/Assets/logo/Templecity.png";
import Trust from "../../public/assets/media/Assets/logo/trustlab.png";
import Work from "../../public/assets/media/Assets/logo/work.png";
import Mydeal from "../../public/assets/media/Assets/logo/mydeal.png";

import { Link } from 'react-router-dom';

const Home = () => {

  // ---- Auto Scroll Logic ----
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const logos = [
    Yuva, Zenfoo, Zest, Meato, Carclean, Boutique, Best, Paywallet, Newes,
    Market, Temple, Work, Trust, Abhi, Nudeal, Mydeal,Sapid, Vnews
  ];

  useEffect(() => {
    const container = scrollRef.current;
    let speed = 2;

    let interval = setInterval(() => {
      if (!isPaused) {
        container.scrollLeft += speed;

        // When actual scroll reaches end, reset
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div>

      {/* ================= HERO SECTION RESTORED ================= */}
      <div
        className="hero1-section-area"
        style={{ backgroundImage: "url(assets/img/bg/header-bg1.png)" }}
      >
        <img
          src="assets/img/elements/elements1.png"
          alt="Decorative element"
          className="elements1 aniamtion-key-1"
        />

        <div className="container">
          <div className="row align-items-center">

            {/* ===== LEFT CONTENT ===== */}
            <div className="col-lg-6">
              <div className="header-main-content heading1">
                <h5></h5>

                <h1 className="text-anime-style-2">
                  Mobile, Web Development & Digital Marketing in Hyderabad | Techland IT
                </h1>

                <p data-aos="fade-left" data-aos-duration="1000">
                  Techland IT Solutions offers top-notch digital marketing, web development, e-commerce,
                  app development, and UI/UX services in Hyderabad.
                </p>

                <div className="btn-area" data-aos="fade-left" data-aos-duration="1200">
                  <Link to="/services/mobile-app-development" className="header-btn1">
                    Explore Our Services <span><i className="fa-solid fa-arrow-right"></i></span>
                  </Link>

                  <Link to="/contact" className="header-btn2">
                    Get in Touch <span><i className="fa-solid fa-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* ===== RIGHT IMAGES ===== */}
            <div className="col-lg-6">
              <div className="header-images-area">
                <div className="main-images-area">

                  <div className="img1">
                    <img
                      src="assets/img/all-images/header-img1.png"
                      alt="SEO marketing professionals"
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    />
                  </div>

                  <div className="img2">
                    <img
                      src="assets/img/bg/header-imgbg.png"
                      alt="Background decoration"
                    />
                  </div>

                  <div className="icons-area">
                    <img
                      src="assets/img/icons/sound-icons1.svg"
                      alt="Sound wave icon"
                      className="sound-icons1 aniamtion-key-1"
                    />
                    <img
                      src="assets/img/icons/lite-icons1.svg"
                      alt="Light icon"
                      className="lite-icons1 aniamtion-key-1"
                    />
                  </div>

                  <div className="auhtor-icons">
                    <img
                      src="assets/img/elements/elements2.png"
                      alt="Decorative element 2"
                      className="elements2"
                    />
                    <img
                      src="assets/img/elements/elements3.png"
                      alt="Decorative element 3"
                      className="elements3"
                    />
                  </div>

                  <div className="auhtor-images">
                    <img
                      src="assets/img/all-images/header-author-img1.png"
                      alt="Marketing professional"
                      className="header-author-img1 aniamtion-key-2"
                    />
                    <img
                      src="assets/img/all-images/header-author-img2.png"
                      alt="SEO expert"
                      className="header-author-img2 aniamtion-key-2"
                    />
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/* ================= END HERO SECTION ================= */}



      {/* ================= CLIENT SLIDER SECTION ================= */}
      <div className="slider-section-area sp5">
        <div className="container">

          <div className="w-full mb-4">
            <p className="text-2xl font-semibold text-black text-center md:text-left">
              OUR CLIENTS
            </p>
          </div>

          <div className="row">
            <div className="col-lg-12">

              <div
                ref={scrollRef}
                className="w-full flex gap-6 overflow-x-auto scrollbar-hide py-5"
                style={{
                  minHeight: "140px",
                  cursor: "grab"
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >

                {/* Original logos */}
                {logos.map((logo, i) => (
                  <div key={i} className="company-card flex-shrink-0">
                    <div className="logo-box">
                      <img src={logo} alt="company-logo" className="object-contain" />
                    </div>
                  </div>
                ))}

                {/* Cloned logos */}
                {logos.map((logo, i) => (
                  <div key={i + "-clone"} className="company-card flex-shrink-0">
                    <div className="logo-box">
                      <img src={logo} alt="company-logo" className="object-contain" />
                    </div>
                  </div>
                ))}

              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
