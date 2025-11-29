import React, { useState } from 'react';
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.firstName || !formData.phone || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email.");
      setLoading(false);
      return;
    }

    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number (10-15 digits).");
      setLoading(false);
      return;
    }

    try {
      const API_URL = "https://formsubmit.co/ajax/info@techlanditsolutions.com";

      await axios.post(API_URL, {
        name: formData.firstName,
        phone: formData.phone,
        email: formData.email,
        message: formData.message
      });

      toast.success("Message sent successfully!");
      setFormData({ firstName: "", phone: "", email: "", message: "" });

    } catch (error) {
      toast.error("Failed to submit form. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      <div class="contact1-section-area sp2">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="header-area-service space-margin60">
                <div class="heading20">
                  <div class="service-header">
                    <h5>Contact Us</h5>
                  </div>
                  <div class="space16"></div>
                  <h2 class="text-anime-style-3">
                    Contact Techland IT Solutions | Hyderabad IT Services
                  </h2>
                  <p className='mt-3'>
                    Get in touch with Techland IT Solutions for expert digital marketing,
                    web development, and app development services in Hyderabad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FORM + MAP SECTION */}
        <div class="contact14-section-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="contact-author-boxarea">
                  <div class="row align-items-center">

                    {/* FORM */}
                    <div class="col-lg-6">
                      <div class="contact-input-area">
                        <h4>Send Us A Message</h4>
                        <div class="space16"></div>
                        <p>Our response time is within 30 minutes during business hours</p>
                        <div class="space8"></div>

                        <form onSubmit={handleSubmit}>
                          <div class="row">

                            <div class="col-12">
                              <div class="input-area">
                                <input type="text" name="firstName" className="contact-input"
                                  placeholder="Your Name" value={formData.firstName}
                                  onChange={handleChange} />
                                <label className="contact-label"> Name</label>
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="input-area">
                                <input type="tel" name="phone" className="contact-input"
                                  placeholder="Phone Number" value={formData.phone}
                                  onChange={handleChange} />
                                <label className="contact-label">Phone Number</label>
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="input-area">
                                <input type="email" name="email" className="contact-input"
                                  placeholder="Email Address" value={formData.email}
                                  onChange={handleChange} />
                                <label className="contact-label">Email Address</label>
                              </div>
                            </div>

                            <div class="col-lg-12">
                              <div class="input-area">
                                <textarea name="message" className="contact-input"
                                  placeholder="Message" value={formData.message}
                                  onChange={handleChange}></textarea>
                                <label className="contact-label">Message</label>
                              </div>
                            </div>

                            <div class="col-lg-12">
                              <div class="space12"></div>
                              <div class="input-area text-end">
                                <button type="submit" class="header-btn23" disabled={loading}>
                                  {loading ? "Submitting..." : "Submit Now"} <i class="fa-solid fa-angle-right"></i>
                                </button>
                              </div>
                            </div>

                          </div>
                        </form>
                      </div>
                    </div>

                    {/* MAP */}
                    <div class="col-lg-6">
                      <div class="mapouter" style={{ height: "100%", minHeight: "400px" }}>
                        <div class="gmap_canvas" style={{ height: "100%" }}>
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.263340846998!2d78.37701741037169!3d17.447105483381275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb938fa04b952d%3A0x2d0c448b127e06e3!2sTechland%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1737129743764!5m2!1sen!2sin"
                            width="100%" height="100%" style={{ border: 0, borderRadius: "8px" }}
                            loading="lazy" title="Techland IT Solutions location map">
                          </iframe>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
