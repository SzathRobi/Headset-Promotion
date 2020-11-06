import React, { useState } from "react";
import aboutSlider1 from "./aboutSlider1.png";
import aboutSlider2 from "./aboutSlider2.png";
import aboutSlider3 from "./aboutSlider3.png";

import AliceCarousel from "react-alice-carousel";

function AboutSlider() {
  
  return (
    <div className="AboutSlider">
      <AliceCarousel infinite className="alice-carousel">
        <div className="alice-div">
           <img className="slider-img" src={aboutSlider1} alt="headset" />
        </div>
        <div className="alice-div">
           <img className="slider-img" src={aboutSlider2} alt="headset" />
        </div>
        <div className="alice-div">
           <img className="slider-img" src={aboutSlider3} alt="headset" />
        </div>
         
      </AliceCarousel>
    </div>
  );
}

export default AboutSlider;
