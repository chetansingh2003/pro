import React from "react";
import "./Associations.css";

const logos = [
  "https://nipswebtech.com/wp-content/uploads/2023/03/art-shala.jpg",
  "https://nipswebtech.com/wp-content/uploads/2023/03/babu-banarasi-das.jpg",
  "https://nipswebtech.com/wp-content/uploads/2023/03/hcl.jpg",
  "https://nipswebtech.com/wp-content/uploads/2023/03/loginworks.jpg",
  "https://nipswebtech.com/wp-content/uploads/2023/03/quantam.jpg",
  "https://nipswebtech.com/wp-content/uploads/2023/03/viva-technology.jpg",
];

const Associations = () => {
  return (
    <section className="association-section">
      <h2>Associations</h2>

      <div className="marquee">
        <div className="marquee-track">
          {/* FIRST SET */}
          {logos.map((src, index) => (
            <div className="marquee-item" key={`logo-${index}`}>
              <img src={src} alt="Association Logo" />
            </div>
          ))}

          {/* DUPLICATE SET (for infinite loop) */}
          {logos.map((src, index) => (
            <div className="marquee-item" key={`logo-dup-${index}`}>
              <img src={src} alt="Association Logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associations;
