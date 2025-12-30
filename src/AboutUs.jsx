import React, { useEffect, useRef } from "react";
import "./AboutUs.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Image animation
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Text animation
      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
      });

    }, sectionRef);

    return () => ctx.revert(); // cleanup for React StrictMode
  }, []);

  return (
    <section className="about-wrapper" ref={sectionRef}>
      <div className="about-section">

        {/* LEFT IMAGE */}
        <div className="about-media" ref={imageRef}>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="About Us"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content" ref={contentRef}>
          <h2>About Us</h2>

          <p>
            One skill can transform a life—at Anudip, we’ve empowered 500,000 and
            are committed to reaching millions more.
          </p>

          <p>
            Since 2007, we have been equipping youth and women in crisis with
            in-demand skills in coding, AI, and professional development.
          </p>

          <p>
            With 70% of graduates securing life-changing jobs, we uplift
            communities across India.
          </p>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
