import React from "react";

function WhyUsCard({ title,text, icon }) {
  return (
    <div className="WhyUsCard" data-aos="fade-right" data-aos-offset="300">
      <div className="whyIcon-container">
        <i className={icon}></i>
      </div>
      <div className="why-content">
        <h3>{title}</h3>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

export default WhyUsCard;
