
import React from 'react';
import ContactUs from './ContactUs';
import { Link } from 'react-router-dom';

const ContactUsDetailed = () => {
  return (
    <div>
      <div
        className="about-header-area"
        style={{
          backgroundImage: 'url(assets/img/bg/inner-header.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img
          src="assets/img/elements/elements1.png"
          alt="Decorative element"
          className="elements1 aniamtion-key-1"
        />
        <img
          src="assets/img/elements/star2.png"
          alt="Decorative star element"
          className="star2 keyframe5"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="about-inner-header heading9 text-center">
                <h1>Contact Us</h1>
                <Link to="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default ContactUsDetailed;