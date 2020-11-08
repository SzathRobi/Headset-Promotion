import React from "react";

function ContactCard({ icon, title, text, delay }) {
  return (
    <div className="ContactCard" data-aos="fade-up" data-aos-delay={delay}>
      <div className="contactIcon-container">
        <i className={icon}></i>
      </div>
      <div className="contact-content">
        <h3>{title}</h3>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

export default ContactCard;

