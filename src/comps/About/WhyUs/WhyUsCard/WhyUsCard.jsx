import React from "react";

function WhyUsCard({ title,text, theme }) {
  return (
    <div className="WhyUsCard">
      <div className="whyIcon-container">
        <i className="fas fa-medal"></i>
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
