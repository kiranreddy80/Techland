import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [animationState, setAnimationState] = useState('hidden'); // hidden -> zigzag -> split
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    });

    // Intersection Observer to trigger animation when section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Section is in view - starting animation sequence');
            // Start zigzag animation immediately
            setAnimationState('zigzag');
            
            // Then move to split position after 3 seconds
            setTimeout(() => {
              setAnimationState('split');
            }, 3000);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    { id: 1, icon: "assets/img/icons/service-icons23.svg", title: "Mobile App Develoment", description: "Crafting high-performance Android & iOS applications." },
    { id: 2, icon: "assets/img/icons/service-icons24.svg", title: "Web Development", description: "Modern, scalable, and SEO-ready websites." },
    { id: 3, icon: "assets/img/icons/service-icons25.svg", title: "UI/UX Design", description: "Clean, intuitive, human-centered designs." },
    { id: 4, icon: "assets/img/icons/service-icons26.svg", title: "Custom Software Development", description: "Tailor-made software solutions for business workflows." },
  ];

  const getCardClass = (index) => {
    const baseClass = `service-card card-${index + 1}`;
    
    if (animationState === 'hidden') {
      return baseClass;
    } else if (animationState === 'zigzag') {
      return `${baseClass} visible`;
    } else if (animationState === 'split') {
      return `${baseClass} visible split-position`;
    }
    
    return baseClass;
  };

  return (
    <>
      <style>{`
        *{box-sizing:border-box}
        .services-map-wrapper{
          padding:80px 0 120px;
          background:linear-gradient(135deg,#0a0a0a,#120617);
          position:relative;
          overflow:hidden;
        }

        .services-subtitle{
          text-transform:uppercase;
          color:#ff2b70;
          font-weight:700;
          letter-spacing:3px;
          font-size:13px;
          text-align:center;
          margin-bottom:8px;
        }

        .network-container{
          position:relative;
          min-height:750px;
          margin-top:30px;
        }

        /* The fixed non-moving frame */
        .services-grid{
          position:absolute;
          inset:0;
          width:1200px;
          height:700px;
          margin:auto;
          pointer-events:none;
        }

        /* SERVICE CARDS */
        .service-card{
          position:absolute;
          width:280px;
          padding:28px;
          border-radius:20px;
          background:rgba(14,14,14,0.86);
          backdrop-filter:blur(12px);
          border:1px solid rgba(255,255,255,0.06);
          box-shadow:0 6px 30px rgba(0,0,0,0.6);
          transition:all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          pointer-events:auto;
          z-index: 2;
          opacity: 0;
          transform: scale(0.8);
        }

        /* Initial visible state */
        .service-card.visible {
          opacity: 1;
          transform: scale(1);
        }

        /* Card positions for zigzag animation */
        .card-1.visible:not(.split-position) { 
          top: 120px; 
          left: 210px; 
          animation: crossMove1 3s ease-in-out infinite;
        }

        .card-2.visible:not(.split-position) { 
          top: 120px; 
          left: 710px; 
          animation: crossMove2 3s ease-in-out infinite;
        }

        .card-3.visible:not(.split-position) { 
          top: 460px; 
          left: 710px; 
          animation: crossMove3 3s ease-in-out infinite;
        }

        .card-4.visible:not(.split-position) { 
          top: 460px; 
          left: 210px; 
          animation: crossMove4 3s ease-in-out infinite;
        }

        /* Cross movement animations */
        @keyframes crossMove1 {
          0%, 100% { 
            top: 120px; 
            left: 210px; 
          }
          50% { 
            top: 460px; 
            left: 710px; 
          }
        }

        @keyframes crossMove2 {
          0%, 100% { 
            top: 120px; 
            left: 710px; 
          }
          50% { 
            top: 460px; 
            left: 210px; 
          }
        }

        @keyframes crossMove3 {
          0%, 100% { 
            top: 460px; 
            left: 710px; 
          }
          50% { 
            top: 120px; 
            left: 210px; 
          }
        }

        @keyframes crossMove4 {
          0%, 100% { 
            top: 460px; 
            left: 210px; 
          }
          50% { 
            top: 120px; 
            left: 710px; 
          }
        }

        /* Final diamond positions with proper gaps */
        .card-1.split-position { 
          top: 80px; 
          left: 460px; 
          animation: none !important;
        }
        .card-2.split-position { 
          top: 290px; 
          left: 750px; 
          animation: none !important;
        }
        .card-3.split-position { 
          top: 500px; 
          left: 460px; 
          animation: none !important;
        }
        .card-4.split-position { 
          top: 290px; 
          left: 170px; 
          animation: none !important;
        }

        .service-card:hover{
          transform:translateY(-12px) scale(1.05) !important;
          box-shadow:0 18px 60px rgba(255,43,112,0.28);
          border-color:#ff2b70;
          z-index: 10;
        }

        .card-icon{
          width:60px;
          height:60px;
          border-radius:14px;
          background:linear-gradient(135deg,#ff2b70,#8a2be2);
          display:flex;
          align-items:center;
          justify-content:center;
          margin-bottom:16px;
        }

        .card-icon img{
          width:30px;
          height:30px;
          filter:brightness(0) invert(1);
        }

        .card-title{
          color:#fff;
          font-weight:700;
          margin-bottom:8px;
          font-size:18px;
        }

        .card-description{
          color:rgba(255,255,255,0.75);
          font-size:14px;
          line-height:1.5;
        }

        /* SVG LINES - Only show after split - Updated positions for new gaps */
        .connection-svg{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          pointer-events:none;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }

        .connection-svg.show-lines{
          opacity: 1;
        }

        .connection-line{
          stroke:url(#neonGradient);
          stroke-linecap:round;
          stroke-width:3;
          filter: drop-shadow(0 0 10px rgba(255,43,112,0.9));
        }

        .flowing{
          stroke-dasharray:12 24;
          stroke-dashoffset:0;
          animation: dashMove 1.8s linear infinite, neonGlow 1.6s ease-in-out infinite alternate;
        }

        @keyframes dashMove{
          0% { stroke-dashoffset:0; }
          100% { stroke-dashoffset:-400; }
        }

        @keyframes neonGlow{
          0% { opacity:.85; filter:drop-shadow(0 0 6px rgba(255,43,112,0.8)); }
          100% { opacity:1; filter:drop-shadow(0 0 18px rgba(255,43,112,1)); }
        }

        .particle{ filter:drop-shadow(0 0 8px #fff); }

        .node-point{
          fill:#ff2b70;
          stroke:#fff;
          stroke-width:2;
          filter:drop-shadow(0 0 8px rgba(255,43,112,0.9));
        }

        /* MOBILE */
        @media(max-width:992px){
          .service-card{
            position:relative !important;
            width:100%;
            max-width:420px;
            margin:18px auto;
            transform:none !important;
            top: auto !important;
            left: auto !important;
            animation: none !important;
            opacity: 1 !important;
          }
          
          .service-card.visible {
            animation: fadeInUp 0.8s ease-out forwards !important;
          }
          
          .connection-svg{ display:none; }
          .service-card.split-position {
            animation: none !important;
          }
          
          .services-grid {
            position: relative !important;
            width: 100% !important;
            height: auto !important;
            display: block !important;
          }
          
          .network-container {
            min-height: auto !important;
          }
        }

        /* Debug styles - remove in production */
        
      `}</style>

      {/* Debug info - remove in production */}
     

      <div className="services-map-wrapper" ref={sectionRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 text-center m-auto">
              <h2
                className="
                  services-subtitle 
                  !text-3xl md:!text-4xl 
                  !font-bold 
                  !text-center 
                  !mt-2 
                  !mb-10 
                  inline-block 
                  underline 
                  underline-offset-8 
                  decoration-2 
                  decoration-black
                "
                data-aos="fade-up"
              >
                Our Services
              </h2>
            </div>
          </div>

          <div className="network-container mt-20" data-aos="fade-up" data-aos-delay="120">

            {/* STATIC NEON LINES - Updated positions for new gaps */}
            <svg className={`connection-svg ${animationState === 'split' ? 'show-lines' : ''}`} viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff2b70" />
                  <stop offset="50%" stopColor="#8a2be2" />
                  <stop offset="100%" stopColor="#ff2b70" />
                </linearGradient>
              </defs>

              {/* Center to Top Card (Card 1) */}
              <line className="connection-line flowing" x1="600" y1="350" x2="600" y2="130" />
              <circle className="particle" r="4" fill="#fff">
                <animateMotion dur="1.6s" repeatCount="indefinite" path="M 600 350 L 600 130" />
              </circle>
              <circle className="node-point" cx="600" cy="130" r="6" />

              {/* Center to Right Card (Card 2) */}
              <line className="connection-line flowing" x1="600" y1="350" x2="820" y2="350" />
              <circle className="particle" r="4" fill="#fff">
                <animateMotion dur="1.8s" repeatCount="indefinite" path="M 600 350 L 820 350" />
              </circle>
              <circle className="node-point" cx="820" cy="350" r="6" />

              {/* Center to Bottom Card (Card 3) */}
              <line className="connection-line flowing" x1="600" y1="350" x2="600" y2="570" />
              <circle className="particle" r="4" fill="#fff">
                <animateMotion dur="2.0s" repeatCount="indefinite" path="M 600 350 L 600 570" />
              </circle>
              <circle className="node-point" cx="600" cy="570" r="6" />

              {/* Center to Left Card (Card 4) */}
              <line className="connection-line flowing" x1="600" y1="350" x2="380" y2="350" />
              <circle className="particle" r="4" fill="#fff">
                <animateMotion dur="1.8s" repeatCount="indefinite" path="M 600 350 L 380 350" />
              </circle>
              <circle className="node-point" cx="380" cy="350" r="6" />

            </svg>

            {/* CARDS */}
            <div className="services-grid">
              {services.map((s, i) => (
                <div
                  key={s.id}
                  className={getCardClass(i)}
                  data-aos="zoom-in"
                  data-aos-delay={220 + i * 120}
                >
                  <div className="card-icon"><img src={s.icon} alt={s.title} /></div>
                  <h4 className="card-title">{s.title}</h4>
                  <p className="card-description">{s.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Services;