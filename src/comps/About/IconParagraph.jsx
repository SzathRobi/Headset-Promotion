import React from "react";

function IconParagraph({ text }) {
  return (
    <div className="IconParagraph" data-aos="fade-up">
      <i className="fas fa-check"></i>
      <p>{text}</p>
    </div>
  );
}

export default IconParagraph;
