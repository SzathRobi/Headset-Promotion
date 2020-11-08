import React, { useEffect } from 'react'
import TitleContainer from '../TitleContainer/TitleContainer'
import FeatureCard from './FeatureCard/FeatureCard'

import AOS from "aos";
import "aos/dist/aos.css";

function Features() {

useEffect(() => {
    AOS.init({
        offset: 400,
        duration: 2500,
    })
    AOS.refresh()
}, [])

    return (
        <div className="Features" id="features">
           <TitleContainer category="FEATURES" title="Outstanding Features"/>
           <div className="Feature-cards">
               <div>
                <FeatureCard title="Virtual Surround" icon="fas fa-microphone" delay="0" />
                <FeatureCard title="Sound Control" icon="fas fa-volume-up" delay="200"/>
               </div>
               <div>
                 <FeatureCard title="Noise Cancelling" icon="fas fa-music"delay="400"/>
                 <FeatureCard title="Wireless Freedom" icon="fas fa-wifi" delay="600"/>
               </div>          
           </div>
        </div>
    )
}

export default Features
