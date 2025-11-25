import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../Assets/logo/image.png";
import "./Navbar.css";
import QuickContact from "../../Pages/Contact/QuickContact";

const Navbar = () => {
  const [showgetQuote, setShowgetQuote] = useState(false);
  const [scrolltoTop, setscrolltoTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current path

  useEffect(() => {
    if (showgetQuote) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }

    return () => (document.documentElement.style.overflow = "");
  }, [showgetQuote]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [scrolltoTop]);

  // Function to check if link is active
  const getActiveClass = (path) => (location.pathname === path ? "nav-link active" : "nav-link");

  return (
    <>
      <div style={{ height: "76px" }}></div>
      <header className="header">
        <div className="navbar-area">
          <nav className="navbarcontainer">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Logo" />
            </a>

            <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen((prev) => !prev)}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>

            <ul id="nav" className={`navbar-nav ms-auto ${isMenuOpen ? "open" : ""}`}>
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/services", label: "Services" },
                { path: "/portfolio", label: "Portfolio" },
                { path: "/team", label: "Our Team" },
                { path: "/blogs", label: "Blogs" },
                { path: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li className="nav-item" key={item.path} onClick={() => setscrolltoTop((prev) => !prev)}>
                  <a href={item.path} className={getActiveClass(item.path)}>
                    {item.label}
                  </a>
                </li>
              ))}

              <li>
                <button
                  className="custom-button"
                  style={{ "--clr": "#7808d0" }}
                  onClick={() => setShowgetQuote(true)}
                >
                  <span className="custom-button__icon-wrapper">
                    <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="custom-button__icon-svg" width="10">
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="10"
                      xmlns="http://www.w3.org/2000/svg"
                      className="custom-button__icon-svg custom-button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  Get a Quote
                </button>
              </li>
            </ul>
          </nav>
          <div id="progressBar" className="progress-bar"></div>
        </div>
      </header>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#c6c2f5", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#b554ff", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "#f9c4f6", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5" fill="url(#grad3)"></path>
        <path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z" fill="url(#grad3)"></path>
      </svg>

      {showgetQuote && <QuickContact close={() => setShowgetQuote(false)} />}
    </>
  );
};

export default Navbar;
