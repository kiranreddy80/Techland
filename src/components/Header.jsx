import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(prev => !prev);
  };

  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsServicesDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 300);
  };

  useEffect(() => {
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  /* -------------------------------------------------------
      CLOSE MOBILE MENU (React only)
      Removes ALL classes added by theme script
   ------------------------------------------------------- */
  const closeMobileMenu = () => {
    const sidebar = document.querySelector(".mobile-sidebar");
    const overlay = document.querySelector(".body-overlay");
    const html = document.querySelector("html");
    const closeBtn = document.querySelector(".menu-close");

    sidebar?.classList.remove("active");
    overlay?.classList.remove("active");
    html?.classList.remove("menu-open");
    html?.classList.remove("mobile-nav-active");

    closeBtn?.click(); // trigger built-in theme close animation
  };

  /* -------------------------------------------------------
      Script & CSS loader (same as your original)
   ------------------------------------------------------- */
  useEffect(() => {
    const loadScript = (src, id) => {
      return new Promise((resolve, reject) => {
        if (document.getElementById(id)) return resolve();
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.body.appendChild(script);
      });
    };

    const loadCSS = (href, id) => {
      if (document.getElementById(id)) return;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.id = id;
      document.head.appendChild(link);
    };

    const init = async () => {
      try {
        loadCSS('/assets/css/plugins/bootstrap.min.css', 'bootstrap-css');
        loadCSS('/assets/css/plugins/fontawesome.css', 'fontawesome-css');
        loadCSS('/assets/css/plugins/magnific-popup.css', 'magnific-css');
        loadCSS('/assets/css/plugins/mobile.css', 'mobile-css');
        loadCSS('/assets/css/plugins/owlcarousel.min.css', 'owl-css');
        loadCSS('/assets/css/plugins/sidebar.css', 'sidebar-css');
        loadCSS('/assets/css/plugins/slick-slider.css', 'slick-css');
        loadCSS('/assets/css/plugins/nice-select.css', 'nice-css');
        loadCSS('/assets/css/main.css', 'main-css');
        loadCSS('/assets/css/plugins/aos.css', 'aos-css');

        await loadScript('https://code.jquery.com/jquery-3.6.0.min.js', 'jquery');
        await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', 'bootstrap');

        const plugins = [
          '/assets/js/plugins/fontawesome.js',
          '/assets/js/plugins/aos.js',
          '/assets/js/plugins/counter.js',
          '/assets/js/plugins/gsap.min.js',
          '/assets/js/plugins/ScrollTrigger.min.js',
          '/assets/js/plugins/Splitetext.js',
          '/assets/js/plugins/sidebar.js',
          '/assets/js/plugins/magnific-popup.js',
          '/assets/js/plugins/mobilemenu.js',
          '/assets/js/plugins/owlcarousel.min.js',
          '/assets/js/plugins/gsap-animation.js',
          '/assets/js/plugins/nice-select.js',
          '/assets/js/plugins/waypoints.js',
          '/assets/js/plugins/slick-slider.js',
          '/assets/js/plugins/circle-progress.js'
        ];

        for (let i = 0; i < plugins.length; i++) {
          try { await loadScript(plugins[i], `plugin-${i}`); } catch {}
        }

        await loadScript('/assets/js/main.js', 'main-js');
      } catch (error) {}
    };

    init();
  }, []);

  return (
    <div>

      {/* ================= DESKTOP HEADER ================= */}
      <header className="homepage12-body">
        <div className="header-area homepage12 header header-sticky d-none d-lg-block" id="header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">

                <div className="header-elements d-flex justify-content-between align-items-center">

                  <div className="site-logo">
                    <Link to="/"><img src="https://techlanditsolutions.com/static/media/image.c57c633deaff99e0cff6.png" alt="" /></Link>
                  </div>

                  <div className="main-menu">
                    <ul className="d-flex">
                      <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                      <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>

                      <li
                        className={`dropdown ${isServicesDropdownOpen ? 'show' : ''}`}
                        onMouseEnter={openDropdown}
                        onMouseLeave={closeDropdown}
                      >
                        <a
                          href="#"
                          onClick={(e) => { e.preventDefault(); toggleServicesDropdown(); }}
                          className={`nav-link dropdown-toggle ${location.pathname.startsWith('/services') ? 'active' : ''}`}
                        >
                          Services <i className="fa-solid fa-angle-down"></i>
                        </a>

                        <ul style={{ top: "30px", width: "300px" }}
                            className={`dropdown-menu dropdown-padding ${isServicesDropdownOpen ? 'show' : ''}`}>
                          <li><Link to="/services/mobile-app-development">Mobile App Development</Link></li>
                          <li><Link to="/services/web-development">Web Development</Link></li>
                          <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
                          <li><Link to="/services/custom-software-development">Custom Software Development</Link></li>
                          <li><Link to="/services/ui-ux-design">UI/UX Design</Link></li>
                          <li><Link to="/services/staffing-services">Staffing Services</Link></li>
                        </ul>
                      </li>

                      <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link></li>
                      <li><Link to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link></li>
                      <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Our Team</Link></li>
                      <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
                    </ul>
                  </div>

                  <div className="btn-area1">
                    <Link to="/team" className="header-btn13">Get a Quote<i className="fa-solid fa-arrow-right"></i></Link>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE HEADER ================= */}
      <div className="mobile-header mobile-haeder12 d-block d-lg-none">
        <div className="container-fluid">

          <div className="mobile-header-elements d-flex justify-content-between align-items-center">

            <div className="mobile-logo">
              <Link to="/" onClick={closeMobileMenu}>
                <img src="https://techlanditsolutions.com/static/media/image.c57c633deaff99e0cff6.png" alt="Logo" />
              </Link>
            </div>

            {/* IMPORTANT FIX: Let theme JS handle menu opening */}
            <div
              className="mobile-nav-icon dots-menu"
              onClick={() => {
                // Trigger theme's built-in handler
                document.querySelector(".mobile-nav-icon")?.classList.add("active");
              }}
            >
              <i className="fa-solid fa-bars"></i>
            </div>

          </div>

        </div>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div className="mobile-sidebar mobile-sidebar12">

        <div className="logosicon-area">

          <div className="logos">
            <Link to="/" onClick={closeMobileMenu}>
              <img src="https://techlanditsolutions.com/static/media/image.c57c633deaff99e0cff6.png" alt="" />
            </Link>
          </div>

          {/* CLOSE BUTTON (theme expects this) */}
          <div className="menu-close" onClick={closeMobileMenu}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>

        <div className="mobile-nav mobile-nav1">
          <ul className="mobile-nav-list nav-list1">

            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>

            <li className="mobile-dropdown">
              <Link to="/services" onClick={closeMobileMenu}>
                Services <i className="fa-solid fa-angle-down"></i>
              </Link>

              <ul className="mobile-submenu">
                <li><Link to="/services/mobile-app-development" onClick={closeMobileMenu}>Mobile App Development</Link></li>
                <li><Link to="/services/web-development" onClick={closeMobileMenu}>Web Development</Link></li>
                <li><Link to="/services/digital-marketing" onClick={closeMobileMenu}>Digital Marketing</Link></li>
                <li><Link to="/services/custom-software-development" onClick={closeMobileMenu}>Custom Software Development</Link></li>
                <li><Link to="/services/ui-ux-design" onClick={closeMobileMenu}>UI/UX Design</Link></li>
                <li><Link to="/services/staffing-services" onClick={closeMobileMenu}>Staffing Services</Link></li>
              </ul>
            </li>

            <li><Link to="/portfolio" onClick={closeMobileMenu}>Portfolio</Link></li>
            <li><Link to="/blogs" onClick={closeMobileMenu}>Blogs</Link></li>
            <li><Link to="/team" onClick={closeMobileMenu}>Our Team</Link></li>
            <li><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>

          </ul>
        </div>

      </div>

    </div>
  );
};

export default Header;
