
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { blogPosts } from '../pages/blogs/blogData';

// const Footer = () => {
//   const location = useLocation();
  
//   // Get top 2 blogs
//   const topBlogs = blogPosts.slice(0, 2);
  
//   const socialLinks = [
//     {
//       href: 'https://www.linkedin.com/company/techland-it-solutions/',
//       icon: 'fab fa-linkedin-in',
//       label: 'LinkedIn',
//     },
//     {
//       href: `https://wa.me/917842385604?text=${encodeURI(
//         "Hi Techland,\nI'm inquiring about the website development and mobile app development"
//       )}`,
//       icon: 'fab fa-whatsapp',
//       label: 'WhatsApp',
//     },
//     {
//       href: 'tel:+917842385604',
//       icon: 'fas fa-phone-alt',
//       label: 'Phone',
//     },
//     {
//       href: 'https://www.instagram.com/techlanditsolutions?igsh=MW1hemQ4YngxMWQ2aQ==',
//       icon: 'fab fa-instagram',
//       label: 'Instagram',
//     },
//   ];

//   // Locations data with country flags
//   const locations = [
//     {
//       name: 'Hyderabad, India',
//       flag: '🇮🇳',
//       address: 'Flat No. 101, Sirisampada Hitec Apartment, H. No. 1-63/C/8/2, Plot No. 2, Block No. 8, Kavuri Hills Madhapur, Hyderabad, Telangana 500081'
//     },
//     {
//       name: 'New York, USA',
//       flag: '🇺🇸',
//       address: '123 Tech Avenue, Silicon Valley, CA 94025'
//     },
//     {
//       name: 'London, UK',
//       flag: '🇬🇧',
//       address: '456 Innovation Street, London, EC1A 1BB'
//     },
//     {
//       name: 'Sydney, Australia',
//       flag: '🇦🇺',
//       address: '789 Digital Road, Sydney, NSW 2000'
//     }
//   ];

//   return (
//     <div className="footer9-section-area sp1 pb-0" style={{ backgroundColor: '#0a1e38', color: 'white' }}>
//       <div className="container">
//         {/* First Row */}
//         <div className="row">
//           {/* About Us */}
//           <div className="col-lg-3 col-md-6">
//             <div className="footer-logo-area">
//               <Link to="/">
//                 <img
//                   src="https://techlanditsolutions.com/static/media/image.c57c633deaff99e0cff6.png"
//                   alt=""
//                   style={{ height: '80px' }}
//                 />
//               </Link>
//               <p>
//                 We are expert designer team, There have a lot of designer and developer If you
//                 have any project you can hire Create a website.
//               </p>
//               <ul className="d-flex mt-3">
//                 {socialLinks.map((link) => (
//                   <li key={link.label} className="px-2">
//                     <a
//                       href={link.href}
//                       aria-label={link.label}
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <i className={`${link.icon} text-white fs-5`}></i>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Links */}
//           <div className="col-lg-2 col-md-6">
//             <div className="footer-logo-area1">
//               <h3>Links</h3>
//               <ul>
//                 <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
//                 <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About us</Link></li>
//                 <li><Link to="/services" className={location.pathname === '/services' || location.pathname.startsWith('/services/') ? 'active' : ''}>Services</Link></li>
//                 <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link></li>
//                 <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Our Team</Link></li>
//                 <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact us</Link></li>
//               </ul>
//             </div>
//           </div>

//           {/* Our Services */}
//           <div className="col-lg-3 col-md-6">
//             <div className="footer-logo-area1">
//               <h3>Our Services</h3>
//               <ul>
//                 <li><Link to="/services/mobile-app-development" className={location.pathname === '/services/mobile-app-development' ? 'active' : ''}>Mobile App Development</Link></li>
//                 <li><Link to="/services/web-development" className={location.pathname === '/services/web-development' ? 'active' : ''}>Web Development</Link></li>
//                 <li><Link to="/services/digital-marketing" className={location.pathname === '/services/digital-marketing' ? 'active' : ''}>Digital Marketing</Link></li>
//                 <li><Link to="/services/custom-software-development" className={location.pathname === '/services/custom-software-development' ? 'active' : ''}>Custom Software Development</Link></li>
//                 <li><Link to="/services/ui-ux-design" className={location.pathname === '/services/ui-ux-design' ? 'active' : ''}>UI/UX Design</Link></li>
//                 <li><Link to="/services/staffing-services" className={location.pathname === '/services/staffing-services' ? 'active' : ''}>Staffing Services</Link></li>
//               </ul>
//             </div>
//           </div>

//           {/* Locations */}
//           {/* <div className="col-lg-2 col-md-6">
//             <div className="footer-logo-area2">
//               <h3>Locations</h3>
//               <ul>
//                 {locations.map((location, index) => (
//                   <li key={index}>
//                     <div className="d-flex align-items-start">
//                       <span className="me-2" style={{ fontSize: '18px' }}>{location.flag}</span>
//                       <div>
//                         <div className="fw-bold">{location.name}</div>
//                         <div className="small">{location.address}</div>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div> */}

//           {/* Recent Posts */}
//           <div className="col-lg-4 col-md-6">
//             <div className="footer-logo-area2">
//               <h3>Recent Posts</h3>
//               <div className="posts-area mt-4">
//                 {topBlogs.map((blog, index) => (
//                   <div className={`post-auhtor-area ${index % 2 === 1 ? 'box2' : ''} d-flex align-items-center mb-2`} key={index}>
//                     <div className="img1">
//                       <img src={blog.imageUrl} height={100} width={100} alt={blog.title} />
//                     </div>
//                     <div className="content ps-2">
//                       <a href="#" className="date d-flex">
//                         <img src="../assets/img/icons/calender1.svg" alt="" className='pe-1'/>
//                         {blog.date}
//                       </a>
//                       <Link to={`/blogs/${blog.id}`} className="head">
//                         {blog.title.length > 40 
//                           ? `${blog.title.substring(0, 40)}...` 
//                           : blog.title}
//                       </Link>
//                     </div>
//                   </div>
//                 ))}
//                 <div className="mt-3">
//                   <Link to="/blogs" className="btn btn-sm btn-outline-light">
//                     View All Blogs
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="space40 d-lg-block d-none mt-1"></div>

//         {/* Contact Info & Working Hours */}
//         <div className="row mt-3">
//           <div className="col-lg-6 col-md-6">
//             <div className="footer-logo-area1 ps-0">
//               <h3>Contact Us</h3>
//               <ul>
//                 <li>
//                   <a href="tel:+917842385604" className="d-flex align-items-start">
//                     <i className="fas fa-phone-alt me-2 text-white"></i>
//                     <span>+91 78423 85604</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="mailto:info@techlanditsolutions.com" className="d-flex align-items-start">
//                     <i className="fas fa-envelope me-2 text-white"></i>
//                     <span>info@techlanditsolutions.com</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://maps.app.goo.gl/N13ixNnC7UHf7nwT9"
//                     rel="noreferrer"
//                     target="_blank"
//                     className="d-flex align-items-start"
//                   >
//                     <i className="fas fa-map-marker-alt me-2 text-white"></i>
//                     <span>
//                       Flat No. 101, Sirisampada Hitec Apartment, H. No. 1-63/C/8/2, Plot No. 2,
//                       Block No. 8, Kavuri Hills Madhapur, Hyderabad, Telangana 500081
//                     </span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="col-lg-5 col-md-6 mt-3 mt-lg-0">
//             <div className="footer-logo-area1">
//               <h3>Working Hours</h3>
//               <p className="text-white pt-3 pb-2">
//                 <i className="fas fa-clock me-2"></i> Monday - Saturday: 9:30 AM - 7:00 PM
//               </p>
//               <p className="text-white">
//                 <i className="fas fa-clock me-2"></i> Sunday: Closed
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="space40 d-lg-block d-none"></div>

//         {/* Footer bottom */}
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="copyright-area">
//               <div className="pera">
//                 <p>Copyright by @Techland - 2025</p>
//               </div>
//               <ul>
//                 <li><Link to="/terms" className={location.pathname === '/terms' ? 'active' : ''}>Terms & Conditions</Link></li>
//                 <li><Link to="/privacy" className={`m-0 ${location.pathname === '/privacy' ? 'active' : ''}`}>Privacy Policy</Link></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { blogPosts } from '../pages/blogs/blogData';

const Footer = () => {
  const location = useLocation();
  
  // Get top 2 blogs
  const topBlogs = blogPosts.slice(0, 2);
  
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/company/techland-it-solutions/',
      icon: 'fab fa-linkedin-in',
      label: 'LinkedIn',
    },
    {
      href: `https://wa.me/917842385604?text=${encodeURI(
        "Hi Techland,\nI'm inquiring about the website development and mobile app development"
      )}`,
      icon: 'fab fa-whatsapp',
      label: 'WhatsApp',
    },
    {
      href: 'tel:+917842385604',
      icon: 'fas fa-phone-alt',
      label: 'Phone',
    },
    {
      href: 'https://www.instagram.com/techlanditsolutions?igsh=MW1hemQ4YngxMWQ2aQ==',
      icon: 'fab fa-instagram',
      label: 'Instagram',
    },
  ];

  // Locations data with country flags
  const locations = [
    {
      name: 'Hyderabad, India',
      flag: '🇮🇳',
      address: 'Flat No. 101, Sirisampada Hitec Apartment, H. No. 1-63/C/8/2, Plot No. 2, Block No. 8, Kavuri Hills Madhapur, Hyderabad, Telangana 500081'
    },
    {
      name: 'New York, USA',
      flag: '🇺🇸',
      address: '123 Tech Avenue, Silicon Valley, CA 94025'
    },
    {
      name: 'London, UK',
      flag: '🇬🇧',
      address: '456 Innovation Street, London, EC1A 1BB'
    },
    {
      name: 'Sydney, Australia',
      flag: '🇦🇺',
      address: '789 Digital Road, Sydney, NSW 2000'
    }
  ];

  return (
    <div className="footer9-section-area sp1 pb-0" style={{ backgroundColor: '#0a1e38', color: 'white' }}>
      <div className="container">
        {/* First Row */}
        <div className="row">
          {/* About Us */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-logo-area">
              <Link to="/">
                <img
                  src="https://techlanditsolutions.com/static/media/image.c57c633deaff99e0cff6.png"
                  alt="Techland IT Solutions Logo"
                  style={{ height: '80px' }}
                />
              </Link>
              <p>
                We are expert designer team, There have a lot of designer and developer If you
                have any project you can hire Create a website.
              </p>
              <ul className="d-flex mt-3">
                {socialLinks.map((link) => (
                  <li key={link.label} className="px-2">
                    <a
                      href={link.href}
                      aria-label={link.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className={`${link.icon} text-white fs-5`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Links */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-logo-area1">
              <h3>Links</h3>
              <ul>
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About us</Link></li>
                <li><Link to="/services" className={location.pathname === '/services' || location.pathname.startsWith('/services/') ? 'active' : ''}>Services</Link></li>
                <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link></li>
                <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Our Team</Link></li>
                <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact us</Link></li>
              </ul>
            </div>
          </div>

          {/* Our Services */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-logo-area1">
              <h3>Our Services</h3>
              <ul>
                <li><Link to="/services/mobile-app-development" className={location.pathname === '/services/mobile-app-development' ? 'active' : ''}>Mobile App Development</Link></li>
                <li><Link to="/services/web-development" className={location.pathname === '/services/web-development' ? 'active' : ''}>Web Development</Link></li>
                <li><Link to="/services/digital-marketing" className={location.pathname === '/services/digital-marketing' ? 'active' : ''}>Digital Marketing</Link></li>
                <li><Link to="/services/custom-software-development" className={location.pathname === '/services/custom-software-development' ? 'active' : ''}>Custom Software Development</Link></li>
                <li><Link to="/services/ui-ux-design" className={location.pathname === '/services/ui-ux-design' ? 'active' : ''}>UI/UX Design</Link></li>
                <li><Link to="/services/staffing-services" className={location.pathname === '/services/staffing-services' ? 'active' : ''}>Staffing Services</Link></li>
              </ul>
            </div>
          </div>

          {/* Locations */}
          {/* <div className="col-lg-2 col-md-6">
            <div className="footer-logo-area2">
              <h3>Locations</h3>
              <ul>
                {locations.map((location, index) => (
                  <li key={index}>
                    <div className="d-flex align-items-start">
                      <span className="me-2" style={{ fontSize: '18px' }}>{location.flag}</span>
                      <div>
                        <div className="fw-bold">{location.name}</div>
                        <div className="small">{location.address}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}

          {/* Recent Posts */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo-area2">
              <h3>Recent Posts</h3>
              <div className="posts-area mt-4">
                {topBlogs.map((blog, index) => (
                  <div className={`post-auhtor-area ${index % 2 === 1 ? 'box2' : ''} d-flex align-items-center mb-2`} key={index}>
                    <div className="img1">
                      <img src={blog.imageUrl} height={100} width={100} alt={blog.title} />
                    </div>
                    <div className="content ps-2">
                      <a href="#" className="date d-flex">
                        <img src="../assets/img/icons/calender1.svg" alt="Calendar icon" className='pe-1'/>
                        {blog.date}
                      </a>
                      <Link to={`/blogs/${blog.id}`} className="head">
                        {blog.title.length > 40 
                          ? `${blog.title.substring(0, 40)}...` 
                          : blog.title}
                      </Link>
                    </div>
                  </div>
                ))}
                <div className="mt-3">
                  <Link to="/blogs" className="btn btn-sm btn-outline-light">
                    View All Blogs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space40 d-lg-block d-none mt-1"></div>

        {/* Contact Info & Working Hours */}
        <div className="row mt-3">
          <div className="col-lg-6 col-md-6">
            <div className="footer-logo-area1 ps-0">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a href="tel:+917842385604" className="d-flex align-items-start">
                    <i className="fas fa-phone-alt me-2 text-white"></i>
                    <span>+91 78423 85604</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@techlanditsolutions.com" className="d-flex align-items-start">
                    <i className="fas fa-envelope me-2 text-white"></i>
                    <span>info@techlanditsolutions.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/N13ixNnC7UHf7nwT9"
                    rel="noreferrer"
                    target="_blank"
                    className="d-flex align-items-start"
                  >
                    <i className="fas fa-map-marker-alt me-2 text-white"></i>
                    <span>
                      Flat No. 101, Sirisampada Hitec Apartment, H. No. 1-63/C/8/2, Plot No. 2,
                      Block No. 8, Kavuri Hills Madhapur, Hyderabad, Telangana 500081
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-5 col-md-6 mt-3 mt-lg-0">
            <div className="footer-logo-area1">
              <h3>Working Hours</h3>
              <p className="text-white pt-3 pb-2">
                <i className="fas fa-clock me-2"></i> Monday - Saturday: 9:30 AM - 7:00 PM
              </p>
              <p className="text-white">
                <i className="fas fa-clock me-2"></i> Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="space40 d-lg-block d-none"></div>

        {/* Footer bottom */}
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright-area">
              <div className="pera">
                <p>Copyright by @Techland - 2025</p>
              </div>
              <ul>
                <li><Link to="/terms" className={location.pathname === '/terms' ? 'active' : ''}>Terms & Conditions</Link></li>
                <li><Link to="/privacy" className={`m-0 ${location.pathname === '/privacy' ? 'active' : ''}`}>Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;