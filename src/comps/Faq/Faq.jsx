import React from "react";
import TitleContainer from "../TitleContainer/TitleContainer";
import Accordition from "./Accordition/Accordition";
import faqs from "./faqs.png"
function Faq() {
  return (
    <div className="Faq" id="faq">
      <TitleContainer category="FAQS" title="Frequently Asked Questions" />
      <div className="faq-container">
        <div className="accorditions">
          <Accordition question="How To Buy The Products? #1" delay="100"/>
          <Accordition question="How Much Price Of The Product? #2" delay="200"/>
          <Accordition question="How Can I Get Refound? #3" delay="300"/> 
        </div>
        <img className="faq-img" src={faqs} alt="headset" data-aos="fade-left"/>
      </div>
     
    </div>
  );
}

export default Faq;
