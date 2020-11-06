import React from 'react'
import TitleContainer from "../../TitleContainer/TitleContainer"
import WhyUsCard from "./WhyUsCard/WhyUsCard"

function WhyUs() {
    return (
        <div className="whyUs">
        <TitleContainer
          category="WHY CHOOSE US"
          title="We Are Providing Best And High Quality Products."
        />
        <div className="why-cards">
          <WhyUsCard 
            theme="blue" 
            text="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
          mauris sit amet" 
            title="High Quality" />
          <WhyUsCard 
            theme="white"
            text="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
          mauris sit amet"  
            title="Fashionable Design" />
          <WhyUsCard 
            theme="white"
            text="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
          mauris sit amet"  
            title="Latest Technology" />
        </div>
      </div>
    )
}

export default WhyUs
