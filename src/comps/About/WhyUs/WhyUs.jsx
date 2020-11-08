import React, { useEffect } from 'react'
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
            icon="fas fa-medal"
            text="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
          mauris sit amet" 
            title="High Quality" />
          <WhyUsCard 
            icon="fas fa-pencil-alt "
            text="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
          mauris sit amet"  
            title="Fashionable Design" />
          <WhyUsCard 
            icon="fas fa-cogs"
            text="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
          mauris sit amet"  
            title="Latest Technology" />
        </div>
      </div>
    )
}

export default WhyUs
