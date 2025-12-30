import React from "react";
import "./CourseTicker.css";

const CourseTicker = () => {
  return (
    <div className="course-bar">
      <div className="course-track">

        {/* ORIGINAL ITEMS */}
        <div className="course-item">
          <i className="fa-solid fa-calculator"></i>
          Tally and GST Course in Patiala
        </div>

        <div className="course-item">
          <i className="fa-solid fa-keyboard"></i>
          Data Entry Course in Patiala
        </div>

        <div className="course-item">
          <i className="fa-solid fa-code"></i>
          Data Structures & Algorithms Course
        </div>

        <div className="course-item">
          <i className="fa-solid fa-desktop"></i>
          Diploma in Computer Applications
        </div>

        {/* CLONE ITEMS FOR SMOOTH LOOP */}
        <div className="course-item">
          <i className="fa-solid fa-calculator"></i>
          Tally and GST Course in Patiala
        </div>

        <div className="course-item">
          <i className="fa-solid fa-keyboard"></i>
          Data Entry Course in Patiala
        </div>

        <div className="course-item">
          <i className="fa-solid fa-code"></i>
          Data Structures & Algorithms Course
        </div>

        <div className="course-item">
          <i className="fa-solid fa-desktop"></i>
          Diploma in Computer Applications
        </div>

      </div>
    </div>
  );
};

export default CourseTicker;
