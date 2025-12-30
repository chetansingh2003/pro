import React, { useEffect, useRef } from "react";
import "./Contact.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const lineRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        {
          scaleX: 0,
          transformOrigin: "left",
        },
        {
          scaleX: 1,
          duration: 1,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play pause resume pause",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-section" ref={sectionRef}>
      {/* HEADER */}
      <div className="contact-header">
        <span>GET IN TOUCH WITH US</span>
        <h2>CONTACT US</h2>

        <div className="title-underline">
          <span className="line" ref={lineRef}></span>
        </div>
      </div>

      <div className="contact-container">
        {/* LEFT FORM */}
        <div className="contact-left">
          <h3>Send Us A Message</h3>

          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Your Message"></textarea>

          <button>Submit »</button>
          {/* SOCIAL MEDIA BOX */}
<div className="social-box">
  <p className="social-title">Follow Us On</p>

  <div className="social-icons">
    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noreferrer"
      className="social-icon facebook"
    >
      <i className="fab fa-facebook-f"></i>
    </a>

    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noreferrer"
      className="social-icon instagram"
    >
      <i className="fab fa-instagram"></i>
    </a>
     <a
      href="https://www.youtube.com/"
      target="_blank"
      rel="noreferrer"
      className="social-icon youtube"
    >
      <i className="fab fa-youtube"></i>
    </a>

    <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noreferrer"
      className="social-icon linkedin"
    >
      <i className="fab fa-linkedin-in"></i>
    </a>

    <a
      href="https://wa.me/919988571313"
      target="_blank"
      rel="noreferrer"
      className="social-icon whatsapp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  </div>
</div>

        </div>

        {/* RIGHT DETAILS */}
        <div className="contact-right">
          <h3>Contact Details</h3>

          <p>
            📍 <strong>Address:</strong><br />
            Scf 98, First Floor, Near Lakshya Institute (Above IBT), Patiala, Punjab
          </p>

          {/* CALL DETAILS */}
          <div className="detail-row">
            <span className="icon">📞</span>
            <div>
              <p className="label">Call Us</p>
              <a href="tel:+919988571313" className="detail-link">
                +91 99 88 57 1313
              </a>
            </div>
          </div>

          {/* EMAIL DETAILS */}
          <div className="detail-row">
            <span className="icon">✉️</span>
            <div>
              <p className="label">Email Us</p>
              <a
                href="mailto:punjabcomputercentre@gmail.com"
                className="detail-link"
              >
                punjabcomputercentre@gmail.com
              </a>
            </div>
          </div>

          {/* GOOGLE MAP */}
          <div className="map">
            <iframe
              title="Punjab Computer Centre Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.769279867005!2d77.4561018739205!3d28.666626182534504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1ed7de3d475%3A0x28f299c3d8d73ab8!2sDisha%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1766409489327!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
