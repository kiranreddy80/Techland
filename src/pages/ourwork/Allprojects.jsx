import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// images (keep your imports)
import abhisreeweb from "../../../public/assets/media/Assets/Projectimg/abhisreeweb.png";
import cashexbiteboxweb from "../../../public/assets/media/Assets/Projectimg/cashexbiteboxweb.png";
import cashexweb from "../../../public/assets/media/Assets/Projectimg/cashexweb.png";
import meatoweb from "../../../public/assets/media/Assets/Projectimg/meatoweb.jpeg";
import nudealweb from "../../../public/assets/media/Assets/Projectimg/nudealweb.png";
import templecityweb from "../../../public/assets/media/Assets/Projectimg/templecityweb.png";
import workoasisweb from "../../../public/assets/media/Assets/Projectimg/workoasisweb.png";

const ProjectsShowcase = () => {
  const scrollContainerRef = useRef(null);

  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
    const touch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    setIsTouchDevice(touch);
  }, []);

  const allProjects = [
    { id: 1, image: nudealweb, title: "Nudeal", description: "NR12 Brands Shop is a feature-rich e-commerce website designed to provide users with a seamless shopping experience.", type: "mobile", shortDesc: "Premium e-commerce platform with seamless shopping experience" },
    { id: 2, image: meatoweb, title: "Meat O", description: "Meato is an on-demand fresh meat delivery platform that connects customers with trusted local meat providers.", type: "mobile", shortDesc: "On-demand fresh meat delivery platform" },

    { id: 4, image: templecityweb, title: "Temple City", description: "Pujari App enables priests to handle their religious services digitally with smooth bookings and communication.", type: "mobile", shortDesc: "Digital platform for religious services" },

    { id: 5, image: abhisreeweb, title: "Abhisree Foundation", description: "Abhisree Foundation is a registered social development organization committed to creating a better society.", type: "web", shortDesc: "Social development organization platform" },
    { id: 6, image: cashexbiteboxweb, title: "CashX BiteBox", description: "BiteBox is a student-friendly food ordering platform with secure payments.", type: "web", shortDesc: "Student food ordering with secure payments" },
    { id: 7, image: cashexweb, title: "CashX Web", description: "Cashex is a digital wallet and financial management platform for secure transactions.", type: "web", shortDesc: "Digital wallet and financial management" },
    { id: 8, image: meatoweb, title: "MeatO Web", description: "Meato is a fresh meat delivery platform connecting customers with trusted local providers.", type: "web", shortDesc: "Fresh meat delivery web platform" },
    { id: 9, image: nudealweb, title: "Nudeal Web", description: "Premium e-commerce website with seamless user shopping experience.", type: "web", shortDesc: "Premium brand e-commerce website" },
    { id: 10, image: templecityweb, title: "Temple City Web", description: "A digital platform for priests to manage religious service bookings.", type: "web", shortDesc: "Digital religious services platform" },
    { id: 11, image: workoasisweb, title: "Workoasis", description: "A job portal bridging the gap between talented job seekers and recruiters.", type: "web", shortDesc: "Job portal connecting seekers & employers" },
  ];

  const dragStartRef = useRef(0);
  const draggingRef = useRef(false);
  const dragThreshold = 10;

  function handlePointerDown(e) {
    if (showAll) return;
    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    dragStartRef.current = pageX;
    draggingRef.current = false;
  }
  function handlePointerMove(e) {
    if (showAll) return;
    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    if (Math.abs(pageX - dragStartRef.current) > dragThreshold) draggingRef.current = true;
  }
  function handlePointerUp() {}

  function handleCardClickTouch(projectId) {
    if (!isTouchDevice) return;
    if (draggingRef.current) {
      draggingRef.current = false;
      return;
    }
    setExpandedCard(prev => (prev === projectId ? null : projectId));
  }

  function scrollLeft() {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
  }
  function scrollRight() {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
  }

  return (
    <div className="projects-showcase-section sp2 bg-white" id="projects">
      <div className="container">

        {/* Redesigned Header */}
       <div className="projects-header w-full mb-12 relative flex items-center justify-center">

  {/* Centered Heading + Description */}
  <div className="text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">Our Projects</h2>
    <p className="text-gray-600 text-base md:text-lg">
      Explore the work we've crafted for our clients
    </p>
  </div>

  {/* View All Button Exactly at Right End */}
  <button
    className="px-5 py-2 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-all shadow-md absolute right-0"
    onClick={() => setShowAll(s => !s)}
  >
    {showAll ? "View Less" : "View All"}
  </button>

</div>


        {/* Scroll Wrapper */}
        <div className={`projects-scroll-container-wrapper relative ${showAll ? "grid-mode" : ""}`}>

          {!showAll && (
            <>
              <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
            </>
          )}

          <button className="scroll-nav-btn scroll-left-btn" onClick={scrollLeft} aria-label="Scroll left" type="button">
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <div
            ref={scrollContainerRef}
            className={`projects-scroll-container ${showAll ? "grid-layout" : ""}`}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
          >
            {allProjects.map(project => {
              const isExpanded = (!isTouchDevice && hoveredCard === project.id) || (isTouchDevice && expandedCard === project.id);
              return (
                <div
                  key={project.id}
                  className={`project-card ${isExpanded ? "expanded redesigned-card" : "redesigned-card"}`}
                  onMouseEnter={() => { if (!isTouchDevice) setHoveredCard(project.id); }}
                  onMouseLeave={() => { if (!isTouchDevice) setHoveredCard(null); }}
                  onClick={() => handleCardClickTouch(project.id)}
                >
                  <div className="project-image-container">
                    <img src={project.image} alt={`${project.title} project`} className="project-image" />
                    <div className="project-type-badge">{project.type === "mobile" ? "📱 Mobile" : "🌐 Web"}</div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>

                    {isExpanded ? (
                      <div className="project-details">
                        <p className="project-description">{project.description}</p>
                        <div className="project-actions">
                          <Link to="/portfolio" className="view-project-btn">View Project <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                      </div>
                    ) : (
                      <p className="project-short-desc">{project.shortDesc}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <button className="scroll-nav-btn scroll-right-btn" onClick={scrollRight} aria-label="Scroll right" type="button">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
