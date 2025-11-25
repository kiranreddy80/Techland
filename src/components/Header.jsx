

// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Header = () => {
//   const location = useLocation();
//   const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
//   const dropdownTimeout = useRef(null);

//   const toggleServicesDropdown = () => {
//     setIsServicesDropdownOpen(!isServicesDropdownOpen);
//   };

//   const openDropdown = () => {
//     // 清除任何现有的超时
//     if (dropdownTimeout.current) {
//       clearTimeout(dropdownTimeout.current);
//     }
//     setIsServicesDropdownOpen(true);
//   };

//   const closeDropdown = () => {
//     // 设置一个小的延迟，然后再关闭下拉菜单
//     dropdownTimeout.current = setTimeout(() => {
//       setIsServicesDropdownOpen(false);
//     }, 300); // 300毫秒的延迟，给用户足够的时间移动鼠标到菜单项
//   };

//   useEffect(() => {
//     setIsServicesDropdownOpen(false);
//   }, [location.pathname]);

//   useEffect(() => {
//     const loadScript = (src, id) => {
//       return new Promise((resolve, reject) => {
//         if (document.getElementById(id)) {
//           console.log(`${id} already exists`);
//           resolve();
//           return;
//         }
//         const script = document.createElement('script');
//         script.src = src;
//         script.id = id;
//         script.async = false;
//         script.onload = () => {
//           console.log(`✓ Loaded: ${id}`);
//           resolve();
//         };
//         script.onerror = () => {
//           console.error(`✗ Failed: ${id}`);
//           reject();
//         };
//         document.body.appendChild(script);
//       });
//     };

//     const loadCSS = (href, id) => {
//       if (document.getElementById(id)) return;
//       const link = document.createElement('link');
//       link.rel = 'stylesheet';
//       link.href = href;
//       link.id = id;
//       document.head.appendChild(link);
//     };

//     const init = async () => {
//       try {
//         console.log('Loading scripts...');
//         loadCSS('/assets/css/plugins/bootstrap.min.css', 'bootstrap-css');
//         loadCSS('/assets/css/plugins/fontawesome.css', 'fontawesome-css');
//         loadCSS('/assets/css/plugins/magnific-popup.css', 'magnific-css');
//         loadCSS('/assets/css/plugins/mobile.css', 'mobile-css');
//         loadCSS('/assets/css/plugins/owlcarousel.min.css', 'owl-css');
//         loadCSS('/assets/css/plugins/sidebar.css', 'sidebar-css');
//         loadCSS('/assets/css/plugins/slick-slider.css', 'slick-css');
//         loadCSS('/assets/css/plugins/nice-select.css', 'nice-css');
//         loadCSS('/assets/css/main.css', 'main-css');
//         loadCSS('/assets/css/plugins/aos.css', 'aos-css');

//         await loadScript('https://code.jquery.com/jquery-3.6.0.min.js', 'jquery');

//         await new Promise(resolve => {
//           const check = setInterval(() => {
//             if (window.jQuery) {
//               clearInterval(check);
//               console.log('✓ jQuery ready:', window.jQuery.fn.jquery);
//               resolve();
//             }
//           }, 50);
//         });

//         await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', 'bootstrap');

//         const plugins = [
//           '/assets/js/plugins/fontawesome.js',
//           '/assets/js/plugins/aos.js',
//           '/assets/js/plugins/counter.js',
//           '/assets/js/plugins/gsap.min.js',
//           '/assets/js/plugins/ScrollTrigger.min.js',
//           '/assets/js/plugins/Splitetext.js',
//           '/assets/js/plugins/sidebar.js',
//           '/assets/js/plugins/magnific-popup.js',
//           '/assets/js/plugins/mobilemenu.js',
//           '/assets/js/plugins/owlcarousel.min.js',
//           '/assets/js/plugins/gsap-animation.js',
//           '/assets/js/plugins/nice-select.js',
//           '/assets/js/plugins/waypoints.js',
//           '/assets/js/plugins/slick-slider.js',
//           '/assets/js/plugins/circle-progress.js'
//         ];

//         for (let i = 0; i < plugins.length; i++) {
//           try {
//             await loadScript(plugins[i], `plugin-${i}`);
//           } catch (err) {
//             console.warn(`Could not load ${plugins[i]}`);
//           }
//         }

//         try {
//           await loadScript('/assets/js/main.js', 'main-js');
//         } catch (err) {
//           console.warn('main.js not found');
//         }

//         setTimeout(() => {
//           if (window.jQuery) {
//             window.jQuery(document).ready(function () {
//               console.log('✓ Document ready fired');
//             });
//           }
//         }, 300);

//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     init();

//     // 组件卸载时清除超时
//     return () => {
//       if (dropdownTimeout.current) {
//         clearTimeout(dropdownTimeout.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <header className="homepage12-body">
//         <div className="header-area homepage12 header header-sticky d-none d-lg-block" id="header">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-lg-12">
//                 <div className="header-elements d-flex justify-content-between align-items-center">
//                   <div className="site-logo">
//                     <Link to="/"><img src="https://techlanditsolutions.com/static/media/image.c57c633deaff99e0cff6.png" alt="Logo" /></Link>
//                   </div>
//                   <div className="main-menu">
//                     <ul className="d-flex">
//                       <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
//                       <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>

//                       <li
//                         className={`dropdown ${isServicesDropdownOpen ? 'show' : ''}`}
//                         onMouseEnter={openDropdown}
//                         onMouseLeave={closeDropdown}
//                       >
//                         <a href="#" onClick={(e) => { e.preventDefault(); toggleServicesDropdown(); }}>
//                           Services <i className="fa-solid fa-angle-down"></i>
//                         </a>
//                         <ul
//                           style={{ top: "30px", border: "0", width: "300px" }}
//                           className={`dropdown-menu dropdown-padding ${isServicesDropdownOpen ? 'show' : ''}`}
//                           onMouseEnter={openDropdown}
//                           onMouseLeave={closeDropdown}
//                         >
//                           <li><Link to="/services/mobile-app-development" className={location.pathname === '/services/mobile-app-development' ? 'active' : ''}>Mobile App Development</Link></li>
//                           <li><Link to="/services/web-development" className={location.pathname === '/services/web-development' ? 'active' : ''}>Web Development</Link></li>
//                           <li><Link to="/services/digital-marketing" className={location.pathname === '/services/digital-marketing' ? 'active' : ''}>Digital Marketing</Link></li>
//                           <li><Link to="/services/custom-software-development" className={location.pathname === '/services/custom-software-development' ? 'active' : ''}>Custom Software Development</Link></li>
//                           <li><Link to="/services/ui-ux-design" className={location.pathname === '/services/ui-ux-design' ? 'active' : ''}>UI/UX Design</Link></li>
//                           <li><Link to="/services/staffing-services" className={location.pathname === '/services/staffing-services' ? 'active' : ''}>Staffing Services</Link></li>
//                         </ul>
//                       </li>
//                       <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link></li>

//                       <li><Link to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link></li>
//                       <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Our Team</Link></li>

//                       <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
//                     </ul>
//                   </div>
//                   <div className="btn-area1">
//                     <Link to="/team" className="header-btn13">Get a Quote<i className="fa-solid fa-arrow-right"></i></Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="mobile-header mobile-haeder12 d-block d-lg-none">
//         <div className="container-fluid">
//           <div className="col-12">
//             <div className="mobile-header-elements d-flex justify-content-between align-items-center">
//               <div className="mobile-logo">
//                 <Link to="/"><img src="https://techlanditsolutions.com/static/media/image.c57c633deaff99e0cff6.png" alt="Logo" /></Link>
//               </div>
//               <div className="mobile-nav-icon dots-menu">
//                 <i className="fa-solid fa-bars"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mobile-sidebar mobile-sidebar12">
//         <div className="logosicon-area">
//           <div className="logos">
//             <Link to="/"><img src="https://techlanditsolutions.com/static/media/image.c57c633deaff99e0cff6.png" alt="Logo" /></Link>
//           </div>
//           <div className="menu-close">
//             <i className="fa-solid fa-xmark"></i>
//           </div>
//         </div>
//         <div className="mobile-nav mobile-nav1">
//           <ul className="mobile-nav-list nav-list1">
//             <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
//             <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>

//             <li className="mobile-dropdown">
//               <Link to="/services" className={location.pathname === '/services' || location.pathname.startsWith('/services/') ? 'active' : ''}>
//                 Services <i className="fa-solid fa-angle-down"></i>
//               </Link>
//               <ul className="mobile-submenu">
//                 <li><Link to="/services/mobile-app-development" className={location.pathname === '/services/mobile-app-development' ? 'active' : ''}>Mobile App Development</Link></li>
//                 <li><Link to="/services/web-development" className={location.pathname === '/services/web-development' ? 'active' : ''}>Web Development</Link></li>
//                 <li><Link to="/services/digital-marketing" className={location.pathname === '/services/digital-marketing' ? 'active' : ''}>Digital Marketing</Link></li>
//                 <li><Link to="/services/custom-software-development" className={location.pathname === '/services/custom-software-development' ? 'active' : ''}>Custom Software Development</Link></li>
//                 <li><Link to="/services/ui-ux-design" className={location.pathname === '/services/ui-ux-design' ? 'active' : ''}>UI/UX Design</Link></li>
//                 <li><Link to="/services/staffing-services" className={location.pathname === '/services/staffing-services' ? 'active' : ''}>Staffing Services</Link></li>
//               </ul>
//             </li>
//             <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link></li>
//             <li><Link to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link></li>
//             <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Our Team</Link></li>
//             <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
//           </ul>

//           <div className="allmobilesection">
//             <div className="single-footer">
//               <h3>Contact Info</h3>
//               <div className="footer1-contact-info">
//                 <div className="contact-info-single">
//                   <div className="contact-info-icon">
//                     <i className="fa-solid fa-phone-volume"></i>
//                   </div>
//                   <div className="contact-info-text">
//                     <a href="tel:+917842385604">+917842385604</a>
//                   </div>
//                 </div>

//                 <div className="contact-info-single">
//                   <div className="contact-info-icon">
//                     <i className="fa-solid fa-envelope"></i>
//                   </div>
//                   <div className="contact-info-text">
//                     <a href="mailto:info@techlanditsolutions.com">info@techlanditsolutions.com</a>
//                   </div>
//                 </div>

//                 <div className="single-footer">
//                   <h3>Our Location</h3>
//                   <div className="contact-info-single">
//                     <div className="contact-info-icon">
//                       <i className="fa-solid fa-location-dot"></i>
//                     </div>
//                     <div className="contact-info-text">
//                       <a href="https://maps.app.goo.gl/N13ixNnC7UHf7nwT9" target="_blank" rel="noopener noreferrer">Flat No. 101, Sirisampada Hitec Apartment, H. No. 1-63/C/8/2,Plot No. 2, Block No. 8, Kavuri Hills Madhapur, Serilingampally, Hyderabad, Telangana 500081</a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="single-footer">
//                   <h3>Social Links</h3>
//                   <div className="social-links-mobile-menu">
//                     <ul>
//                       <li><a href="https://www.linkedin.com/company/techland-it-solutions/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
//                       <li><a href={`https://wa.me/917842385604?text=${encodeURI("Hi Techland, \nI'm inquiring about the website development and mobile app development")}`} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a></li>
//                       <li><a href="https://www.instagram.com/techlanditsolutions?igsh=MW1hemQ4YngxMWQ2aQ==" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
//                       <li><a href="tel:+917842385604"><i className="fa-solid fa-phone"></i></a></li>
//                     </ul>
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

// export default Header;


import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const openDropdown = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
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

  useEffect(() => {
    const loadScript = (src, id) => {
      return new Promise((resolve, reject) => {
        if (document.getElementById(id)) {
          console.log(`${id} already exists`);
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.async = false;
        script.onload = () => {
          console.log(`✓ Loaded: ${id}`);
          resolve();
        };
        script.onerror = () => {
          console.error(`✗ Failed: ${id}`);
          reject();
        };
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
        console.log('Loading scripts...');
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

        await new Promise(resolve => {
          const check = setInterval(() => {
            if (window.jQuery) {
              clearInterval(check);
              console.log('✓ jQuery ready:', window.jQuery.fn.jquery);
              resolve();
            }
          }, 50);
        });

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
          try {
            await loadScript(plugins[i], `plugin-${i}`);
          } catch (err) {
            console.warn(`Could not load ${plugins[i]}`);
          }
        }

        try {
          await loadScript('/assets/js/main.js', 'main-js');
        } catch (err) {
          console.warn('main.js not found');
        }

        setTimeout(() => {
          if (window.jQuery) {
            window.jQuery(document).ready(function () {
              console.log('✓ Document ready fired');
            });
          }
        }, 300);

      } catch (error) {
        console.error('Error:', error);
      }
    };

    init();

    return () => {
      if (dropdownTimeout.current) {
        clearTimeout(dropdownTimeout.current);
      }
    };
  }, []);

  return (
    <div>
      <header className="homepage12-body">
        <div className="header-area homepage12 header header-sticky d-none d-lg-block" id="header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="header-elements d-flex justify-content-between align-items-center">
                  <div className="site-logo">
                    <Link to="/"><img src="https://techlanditsolutions.com/static/media/image.c57c633deaff99e0cff6.png" alt="Logo" /></Link>
                  </div>
                  <div className="main-menu">
                    <ul className="d-flex">
                      <li>
                        <Link 
                          to="/" 
                          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/about" 
                          className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                        >
                          About
                        </Link>
                      </li>

                      <li
                        className={`dropdown ${isServicesDropdownOpen ? 'show' : ''}`}
                        onMouseEnter={openDropdown}
                        onMouseLeave={closeDropdown}
                      >
                        <a 
                          href="#" 
                          className={`nav-link dropdown-toggle ${location.pathname.startsWith('/services') ? 'active' : ''}`}
                          onClick={(e) => { e.preventDefault(); toggleServicesDropdown(); }}
                        >
                          Services 
                        </a>
                        <ul
                          style={{ top: "30px", border: "0", width: "300px" }}
                          className={`dropdown-menu dropdown-padding ${isServicesDropdownOpen ? 'show' : ''}`}
                          onMouseEnter={openDropdown}
                          onMouseLeave={closeDropdown}
                        >
                          <li>
                            <Link 
                              to="/services/mobile-app-development" 
                              className={`dropdown-item ${location.pathname === '/services/mobile-app-development' ? 'active' : ''}`}
                            >
                              Mobile App Development
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/services/web-development" 
                              className={`dropdown-item ${location.pathname === '/services/web-development' ? 'active' : ''}`}
                            >
                              Web Development
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/services/digital-marketing" 
                              className={`dropdown-item ${location.pathname === '/services/digital-marketing' ? 'active' : ''}`}
                            >
                              Digital Marketing
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/services/custom-software-development" 
                              className={`dropdown-item ${location.pathname === '/services/custom-software-development' ? 'active' : ''}`}
                            >
                              Custom Software Development
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/services/ui-ux-design" 
                              className={`dropdown-item ${location.pathname === '/services/ui-ux-design' ? 'active' : ''}`}
                            >
                              UI/UX Design
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/services/staffing-services" 
                              className={`dropdown-item ${location.pathname === '/services/staffing-services' ? 'active' : ''}`}
                            >
                              Staffing Services
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link 
                          to="/portfolio" 
                          className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
                        >
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/blogs" 
                          className={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`}
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/team" 
                          className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}
                        >
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/contact" 
                          className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                        >
                          Contact Us
                        </Link>
                      </li>
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

      <div className="mobile-header mobile-haeder12 d-block d-lg-none">
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements d-flex justify-content-between align-items-center">
              <div className="mobile-logo">
                <Link to="/"><img src="https://techlanditsolutions.com/static/media/image.c57c633deaff99e0cff6.png" alt="Logo" /></Link>
              </div>
              <div className="mobile-nav-icon dots-menu">
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-sidebar mobile-sidebar12">
        <div className="logosicon-area">
          <div className="logos">
            <Link to="/"><img src="https://techlanditsolutions.com/static/media/image.c57c633deaff99e0cff6.png" alt="Logo" /></Link>
          </div>
          <div className="menu-close">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="mobile-nav mobile-nav1">
          <ul className="mobile-nav-list nav-list1">
            <li>
              <Link 
                to="/" 
                className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
            <li className="mobile-dropdown">
              <Link 
                to="/services" 
                className={`mobile-nav-link ${location.pathname === '/services' || location.pathname.startsWith('/services/') ? 'active' : ''}`}
              >
                Services <i className="fa-solid fa-angle-down"></i>
              </Link>
              <ul className="mobile-submenu">
                <li>
                  <Link 
                    to="/services/mobile-app-development" 
                    className={`mobile-submenu-link ${location.pathname === '/services/mobile-app-development' ? 'active' : ''}`}
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/web-development" 
                    className={`mobile-submenu-link ${location.pathname === '/services/web-development' ? 'active' : ''}`}
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/digital-marketing" 
                    className={`mobile-submenu-link ${location.pathname === '/services/digital-marketing' ? 'active' : ''}`}
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/custom-software-development" 
                    className={`mobile-submenu-link ${location.pathname === '/services/custom-software-development' ? 'active' : ''}`}
                  >
                    Custom Software Development
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/ui-ux-design" 
                    className={`mobile-submenu-link ${location.pathname === '/services/ui-ux-design' ? 'active' : ''}`}
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/staffing-services" 
                    className={`mobile-submenu-link ${location.pathname === '/services/staffing-services' ? 'active' : ''}`}
                  >
                    Staffing Services
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link 
                to="/portfolio" 
                className={`mobile-nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to="/blogs" 
                className={`mobile-nav-link ${location.pathname === '/blogs' ? 'active' : ''}`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link 
                to="/team" 
                className={`mobile-nav-link ${location.pathname === '/team' ? 'active' : ''}`}
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`mobile-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* <div className="allmobilesection">
            <div className="single-footer">
              <h3>Contact Info</h3>
              <div className="footer1-contact-info">
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className="contact-info-text">
                    <a href="tel:+917842385604">+917842385604</a>
                  </div>
                </div>

                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <a href="mailto:info@techlanditsolutions.com">info@techlanditsolutions.com</a>
                  </div>
                </div>

                <div className="single-footer">
                  <h3>Our Location</h3>
                  <div className="contact-info-single">
                    <div className="contact-info-icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="contact-info-text">
                      <a href="https://maps.app.goo.gl/N13ixNnC7UHf7nwT9" target="_blank" rel="noopener noreferrer">Flat No. 101, Sirisampada Hitec Apartment, H. No. 1-63/C/8/2,Plot No. 2, Block No. 8, Kavuri Hills Madhapur, Serilingampally, Hyderabad, Telangana 500081</a>
                    </div>
                  </div>
                </div>

                <div className="single-footer">
                  <h3>Social Links</h3>
                  <div className="social-links-mobile-menu">
                    <ul>
                      <li><a href="https://www.linkedin.com/company/techland-it-solutions/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                      <li><a href={`https://wa.me/917842385604?text=${encodeURI("Hi Techland, \nI'm inquiring about the website development and mobile app development")}`} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a></li>
                      <li><a href="https://www.instagram.com/techlanditsolutions?igsh=MW1hemQ4YngxMWQ2aQ==" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a href="tel:+917842385604"><i className="fa-solid fa-phone"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;