import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./RegisterNow.css";
import bgImage from "./assets/bg_register_now.jpg";

gsap.registerPlugin(ScrollTrigger);

const RegisterNow = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ================= SCROLL ANIMATION ================= */

      gsap.from(".sub-heading", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 70%",
        },
      });

      gsap.from(".main-heading", {
        x: -150,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 70%",
        },
      });

      gsap.from(".stat-box", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        scrollTrigger: {
          trigger: ".stats",
          start: "top 75%",
        },
      });

      gsap.from(".form-box", {
        x: 200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".form-box",
          start: "top 80%",
        },
      });

      /* ================= COUNTER ON SCROLL ================= */

      document.querySelectorAll(".num").forEach((el) => {
        const target = Number(el.dataset.target);
        let count = 0;

        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () => {
            const update = () => {
              if (count < target) {
                count += Math.ceil(target / 120);
                el.innerText = `+${count}`;
                requestAnimationFrame(update);
              } else {
                el.innerText = `+${target}`;
              }
            };
            update();
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="hero-section"
      ref={sectionRef}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${bgImage})`,
      }}
    >
      {/* LEFT CONTENT */}
      <div className="left-content">
        <h4 className="sub-heading">
          ONLINE / OFFLINE <span>COMPUTER COURSES</span>
        </h4>

        <h1 className="main-heading">REGISTER NOW</h1>

        <div className="stats">
          <div className="stat-box">
            <h2 className="num" data-target="17">+0</h2>
            <p>Years of excellence</p>
          </div>

          <div className="stat-box">
            <h2 className="num" data-target="5000">+0</h2>
            <p>Students successfully placed</p>
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="form-box">
        <div className="curve-top">
          <h3>
            We’ll call you back
            <br />
            please fill this form...
          </h3>
        </div>

        <form>
          <input type="text" placeholder="Your Name *" required />
          <input type="email" placeholder="Email *" required />
          <input type="text" placeholder="Phone *" required />
          <input type="text" placeholder="Qualification *" required />

          <select required>
            <option value="">Select Course *</option>
            <option>DCA</option>
            <option>ADCA</option>
            <option>Web Development</option>
            <option>Tally</option>
          </select>

          <button type="submit">REQUEST YOUR DEMO</button>
        </form>
      </div>
    </section>
  );
};

export default RegisterNow;
