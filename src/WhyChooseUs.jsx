import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./WhyChooseUs.css";
import {
  FaChalkboardTeacher,
  FaUserTie,
  FaBook,
  FaCertificate,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

const cardsData = [
  {
    title: "100% Practical Training",
    desc: "Our coaching programs are packed with 100% step by step practical training.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Professional Trainers",
    desc: "You will be trained by expert trainers who have worked for many clients.",
    icon: <FaUserTie />,
  },
  {
    title: "Free Study Material",
    desc: "You will get checklists, templates, worksheets & eBooks while your training.",
    icon: <FaBook />,
    dark: true,
  },
  {
    title: "ISO 9001:2015 Certified",
    desc: "We are an ISO certified institute delivering quality education.",
    icon: <FaCertificate />,
  },
  {
    title: "Interview Preparations",
    desc: "Complete interview preparation with mock interviews and guidance.",
    icon: <FaBriefcase />,
  },
  {
    title: "100% Quality Training",
    desc: "Industry standard training with guaranteed quality learning.",
    icon: <FaCheckCircle />,
  },
];

const WhyChooseUs = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      const overlay = card.querySelector(".fill-overlay");
      const icon = card.querySelector(".icon");

      gsap.set(overlay, { scaleX: 0 });
      gsap.set(icon, { rotate: 0, scale: 1 });

      card.addEventListener("mouseenter", () => {
        gsap.to(overlay, {
          scaleX: 1,
          duration: 0.45,
          ease: "power2.out",
        });

        gsap.to(card, {
          y: -10,
          boxShadow: "0 20px 45px rgba(6,23,75,0.25)",
          duration: 0.3,
        });

        gsap.to(icon, {
          rotate: 360,
          scale: 1.15,
          duration: 0.6,
          ease: "power3.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(overlay, {
          scaleX: 0,
          transformOrigin: "right",
          duration: 0.4,
          ease: "power2.inOut",
        });

        gsap.to(card, {
          y: 0,
          boxShadow: "none",
          duration: 0.3,
        });

        gsap.to(icon, {
          rotate: 0,
          scale: 1,
          duration: 0.4,
        });
      });
    });
  }, []);

  return (
    <section className="why-section">
      <h2>Why Choose Us</h2>
      <div className="underline"></div>

      <p className="subtitle">
        We have trained over 233+ students in different computer courses in past
        5 years & prepared them to get their 1st job in IT companies at good
        salary packages.
      </p>

      <div className="cards">
        {cardsData.map((item, index) => (
          <div
            key={index}
            className={`card ${item.dark ? "card-dark" : ""}`}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="fill-overlay"></div>

            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
