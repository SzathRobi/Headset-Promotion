import React from "react";

function ContactCard({ title,text, theme }) {
  return (
    <div className="ContactCard">
      <div className="contactIcon-container">
        <i className="fas fa-medal"></i>
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

