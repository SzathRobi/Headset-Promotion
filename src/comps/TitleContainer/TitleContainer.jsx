import React from "react";

function AnimatedBar({ category, title }) {
  return (
    <div className="title-container" data-aos="fade-up">
      <p>{category}</p>
      <h2>{title}</h2>
      <div className="animated-bar"></div>
    </div>
  );
}

export default AnimatedBar;
