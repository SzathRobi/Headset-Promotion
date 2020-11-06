import React from "react";
import TitleContainer from "../TitleContainer/TitleContainer";
import IconParagraph from "./IconParagraph";
import aboutBg from "./aboutBg.jpg";
import about from "./about.png";
import AboutSlider from "./AboutSlider/AboutSlider";
import WhyUs from "./WhyUs/WhyUs";

function About() {
  return (
    <div className="About" id="about">
      <div className="desktop-container">
        <img className="desktop-img" src={about} alt="headset"/>
         <div className="layer">
        <TitleContainer
          category="ABOUT PRODUCT"
          title="Awesome Digital Product Can Make Your Life Easier"
        />
        <div className="About-content">
          <div className="texts">
            <p>
              Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
              mauris sit amet orci.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis.Donec nec justo eget felis facilisis fermentum.
            </p>
          </div>
          <div>
            <IconParagraph text="Wireless Connection Headphones" />
            <IconParagraph text="High-quality audio with DSEE HX™ and LDAC." />
            <IconParagraph text="Noise Cancelling without distractions." />
            <IconParagraph text="Wireless freedom with BLUETOOTH" />
          </div>
        </div>
      </div>
    </div>
     
      <div className="transparent-container">
        <div className="transparent">
          <div className="video-container">
            <div className="round-container">
              <i className="fas fa-play"></i>
            </div>
            <TitleContainer title="Best Product For You. Check The Demo Video." />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.
            </p>
          </div>
        </div>
        <img src={aboutBg} alt="aboutBg" />
      </div>

      <div className="whyUs-aboutSlider">
         <WhyUs />
      <AboutSlider />
      </div>
     
    </div>
  );
}

export default About;
