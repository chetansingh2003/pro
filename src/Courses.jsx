import React, { useEffect } from "react";
import gsap from "gsap";
import "./Courses.css";

import typingImg from "./assets/typing.webp";
import webImg from "./assets/web.webp";
import tallyImg from "./assets/tallyprime.webp";
import graphicImg from "./assets/graphic.webp";
import basicImg from "./assets/basic.webp";
import adcaImg from "./assets/adca.webp";

const courseData = [
  {
    title: "Basic Computer Course",
    image: basicImg,
    rating: "★★★★★",
    score: "4.7",
    oldPrice: "₹2999",
    duration: "3 Months",
    mode: "Offline",
    level: "Beginner",
    desc: "Learn computer fundamentals, MS Office, internet & typing.",
    link: "basic-computer.html",
  },
  {
    title: "ADCA Course",
    image: adcaImg,
    rating: "★★★★★",
    score: "4.8",
    oldPrice: "₹20000",
    duration: "12 Months",
    mode: "Online / Offline",
    level: "Advanced",
    desc: "Advanced diploma covering software, accounting & programming.",
    link: "adca-course.html",
  },
  {
    title: "English Typing Course",
    image: typingImg,
    rating: "★★★★★",
    score: "4.7",
    oldPrice: "₹5999",
    duration: "2 Months",
    mode: "Offline",
    level: "Beginner",
    desc: "Increase typing speed with accuracy and real practice.",
    link: "english-typing.html",
  },
  {
    title: "DCA Course",
    image: graphicImg,
    rating: "★★★★★",
    score: "4.8",
    oldPrice: "₹12000",
    duration: "6 Months",
    mode: "Online / Offline",
    level: "Intermediate",
    desc: "Diploma course in computer applications with projects.",
    link: "dca-course.html",
  },
  {
    title: "Tally With GST",
    image: tallyImg,
    rating: "★★★★★",
    score: "4.6",
    oldPrice: "₹8000",
    duration: "3 Months",
    mode: "Offline",
    level: "Professional",
    desc: "Accounting, GST returns & real company practice.",
    link: "tally-gst.html",
  },
  {
    title: "MS Office Full Course",
    image: webImg,
    rating: "★★★★★",
    score: "4.9",
    oldPrice: "₹15000",
    duration: "2 Months",
    mode: "Offline",
    level: "Beginner",
    desc: "Word, Excel, PowerPoint with practical exercises.",
    link: "ms-office.html",
  },
];

const Courses = () => {
  useEffect(() => {
    document.querySelectorAll(".course-card").forEach((card) => {
      const overlay = card.querySelector(".card-btn");
      const btn = overlay.querySelector("button");

      card.addEventListener("mouseenter", () => {
        gsap.to(overlay, { opacity: 1, duration: 0.3 });
        gsap.fromTo(
          btn,
          { scale: 0.6, y: 20 },
          { scale: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
        );
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(overlay, { opacity: 0, duration: 0.25 });
      });
    });
  }, []);

  return (
    <>
      <h1 className="heading">Popular Courses</h1>

      <div className="course-grid">
        {courseData.map((course, i) => (
          <a
            key={i}
            href={course.link}
            target="_blank"
            rel="noreferrer"
            className="course-card"
          >
            <img
              src={course.image}
              className="card-img"
              alt={course.title}
            />

            {/* BUTTON OVERLAY */}
            <div className="card-btn">
              <button>Know More</button>
            </div>

            <div className="card-info">
              <h3 className="card-title">{course.title}</h3>

              <div className="rating">
                ({course.score}) {course.rating}
              </div>

              <p className="course-desc">{course.desc}</p>

              <div className="course-meta">
                <span>⏱ {course.duration}</span>
                <span>📍 {course.mode}</span>
                <span>🎓 {course.level}</span>
              </div>

              <div className="price-row">
                <span className="old-price">{course.oldPrice}</span>
                <span className="off-tag">| 100% OFF</span>
              </div>
            </div>
          </a>
        ))}
      </div>
        {/* MORE COURSES BUTTON */}
      <div className="more-courses-wrap">
        <a href="/courses" className="more-courses-btn">
          More Courses <span>→</span>
        </a>
      </div>
    </>
  );
};

export default Courses;
