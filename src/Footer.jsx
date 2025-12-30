import React, { useEffect } from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import gsap from "gsap";

const Footer = () => {
  useEffect(() => {
    gsap.from(".footer-col", {
      // opacity: 0,
      // y: 40,
      // duration: 0.8,
      // stagger: 0.2,
      // ease: "power3.out",
    });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-col">
          <h2 className="logo">
            Disha <span>COMPUTER CENTRE</span>
          </h2>
          <p>
            Punjab Computer Centre is an ISO Certified 9001:2015 and a
            Government-approved institute, providing high-quality computer
            education and skill development.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>› Home</li>
            <li>› About Us</li>
            <li>› Courses</li>
            <li>› Gallery</li>
            <li>› Contact Us</li>
          </ul>
        </div>

        {/* COURSES */}
        <div className="footer-col">
          <h3>Courses</h3>
          <ul>
            <li>› Basic Computer Courses</li>
            <li>› Digital Marketing in Patiala</li>
            <li>› Coding Courses</li>
          </ul>

          <h3 className="mt">Contact Us</h3>
          <p><FaPhoneAlt /> +91 9988571313</p>
          <p><FaEnvelope /> punjabcomputercentre@gmail.com</p>
        </div>

        {/* MAP */}
        {/* <div className="footer-col map">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Punjab%20Computer%20Centre%20Patiala&output=embed"
            loading="lazy"
          ></iframe>
        </div> */}
      </div>

      {/* SOCIAL + CERTIFICATIONS */}
      <div className="footer-bottom">
        <div className="social">
          <span>Follow Us:</span>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaLinkedinIn /></a>
        </div>

        <p>© Copyright 2023 Punjab Computer Centre. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
