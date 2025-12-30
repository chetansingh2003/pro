import React from "react";
import "./TopRated.css";
import aboutImg from "./assets/1.jpg";

const TopRated = () => {
  return (
    <>
      {/* ===== ABOUT SECTION ===== */}
      <section className="about">
        <div className="about-container">
          {/* LEFT IMAGE */}
          <div className="about-img">
            <img src={aboutImg} alt="About Us" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content">
            <span className="tag">ABOUT US</span>
            <h2>
              Top Rated Computer Institute In <br /> Ghaziabad
            </h2>
            <div className="line"></div>

            <p>
              At <strong>Disha Computer Center</strong>, we are dedicated to
              empowering individuals with the skills and knowledge needed to
              excel in today’s digital world. Established with a mission to
              provide top-notch computer education, we specialize in delivering
              industry-relevant courses in programming, typing, and software
              applications.
            </p>

            <p>
              We pride ourselves on our student-centered approach, offering
              flexible timings, personalized guidance, and a supportive learning
              environment.
            </p>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <div className="e-con-inner">
        {/* VISION */}
        <div className="e-con-child">
          <h2 className="elementor-heading-title">OUR VISION</h2>
          <div className="elementor-widget-text-editor">
            <p>
              At Punjab Computer Centre, our vision is to establish ourselves as
              a leading institution in skill-based education, empowering
              individuals to excel in the fast-evolving world of technology,
              including <strong>IoT</strong> (Internet of Things).
            </p>
          </div>
        </div>

        {/* MISSION */}
        <div className="e-con-child">
          <h2 className="elementor-heading-title">OUR MISSION</h2>
          <div className="elementor-widget-text-editor">
            <p>
              Our mission is to deliver high-quality, industry-relevant education
              that transforms lives and drives career success.
              <strong>
                We focus on building a strong foundation of knowledge that
                enables students to adapt to emerging technologies.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRated;
