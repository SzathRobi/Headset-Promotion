import React from "react";

function FeatureCard({title, icon, delay}) {
  return (
    <div className="FeatureCard" data-aos="fade-in" data-aos-delay={delay}>
      <div className="icon-container">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>
        Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris
        sit amet
      </p>
    </div>
  );
}

export default FeatureCard;
