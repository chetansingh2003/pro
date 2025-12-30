import React, { useEffect, useRef } from "react";
import "./StatsCounter.css";

const StatsCounter = () => {
  const sectionRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const counters = section.querySelectorAll(".counter");

    /* ===== AUTO SCROLL TO SECTION ===== */
    const scrollTimer = setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth" });
    }, 800);

    /* ===== COUNTER FUNCTION ===== */
    const startCounters = () => {
      counters.forEach((counter) => {
        const target = Number(counter.dataset.target);
        let count = 0;
        const speed = target / 120;

        const update = () => {
          count += speed;
          if (count < target) {
            counter.innerText =
              target === 95
                ? Math.ceil(count) + "%"
                : Math.ceil(count) + "+";
            requestAnimationFrame(update);
          } else {
            counter.innerText =
              target === 95
                ? "95%"
                : target.toLocaleString() + "+";
          }
        };

        update();
      });
    };

    /* ===== START COUNTER ON SCROLL ===== */
    const onScroll = () => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight && !startedRef.current) {
        startCounters();
        startedRef.current = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      clearTimeout(scrollTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Dummy space for scroll */}
      {/* <div className="spacer"></div> */}

      <section className="stats-section" ref={sectionRef}>
        <div className="stats-container">
          <div className="stat-box">
            <h2 className="counter" data-target="20">
              0+
            </h2>
            <p>Years Experience</p>
          </div>

          <span className="divider"></span>

          <div className="stat-box">
            <h2 className="counter" data-target="15">
              0+
            </h2>
            <p>Courses</p>
          </div>

          <span className="divider"></span>

          <div className="stat-box">
            <h2 className="counter" data-target="95">
              0%
            </h2>
            <p>Job Success Rate</p>
          </div>

          <span className="divider"></span>

          <div className="stat-box">
            <h2 className="counter" data-target="5000">
              0+
            </h2>
            <p>Students</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsCounter;
