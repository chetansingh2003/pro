import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./HeroSlider.css";

const slidesData = [
  {
    img: "https://picsum.photos/id/1015/1600/900",
    title: "Welcome to Disha Institute",
    subtitle: "Learn modern technology with industry experts.",
  },
  {
    img: "https://picsum.photos/id/1021/1600/900",
    title: "Build Your Career",
    subtitle: "Professional training with real-world projects.",
  },
  {
    img: "https://picsum.photos/id/1035/1600/900",
    title: "100% Placement Support",
    subtitle: "We guide you from learning to job placement.",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  /* ---------------- AUTO SLIDE ---------------- */
  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slidesData.length);
    }, 4000);
  };

  const stopAuto = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  /* ---------------- GSAP TEXT ANIMATION ---------------- */
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".slide.active .content h1",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" }
    ).fromTo(
      ".slide.active .content h2",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power4.out" },
      "-=0.4"
    );

    return () => tl.kill();
  }, [current]);

  /* ---------------- CONTROLS ---------------- */
  const nextSlide = () => {
    stopAuto();
    setCurrent((prev) => (prev + 1) % slidesData.length);
    startAuto();
  };

  const prevSlide = () => {
    stopAuto();
    setCurrent((prev) =>
      prev === 0 ? slidesData.length - 1 : prev - 1
    );
    startAuto();
  };

  /* ---------------- SWIPE SUPPORT ---------------- */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 60) {
      nextSlide();
    }
    if (touchEndX.current - touchStartX.current > 60) {
      prevSlide();
    }
  };

  return (
    <div
      className="slider"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slidesData.map((slide, index) => (
        <div
          className={`slide ${index === current ? "active" : ""}`}
          key={index}
        >
          <img src={slide.img} alt="Slide" />

          <div className="overlay">
            <div className="content">
              <h1>{slide.title}</h1>
              <h2>{slide.subtitle}</h2>
            </div>
          </div>
        </div>
      ))}

      {/* ARROWS */}
      <button className="arrow prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="arrow next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default HeroSlider;
