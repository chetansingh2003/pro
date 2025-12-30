import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      {/* CONTACT INFO */}
      <div className="contact-info">
        <span>
          <i className="fas fa-phone"></i> +123-456-7890
        </span>
        <span>
          <i className="fas fa-envelope"></i> info@example.com
        </span>
        <span>
          <i className="fas fa-clock"></i> Mon-Fri: 9:00 AM - 6:00 PM
        </span>
      </div>

      {/* SOCIAL ICONS */}
      <div className="social-icons">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
