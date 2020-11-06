import React from 'react'
import TitleContainer from '../TitleContainer/TitleContainer'
import FeatureCard from './FeatureCard/FeatureCard'

function Features() {
    return (
        <div className="Features" id="features">
           <TitleContainer category="FEATURES" title="Outstanding Features"/>
           <div className="Feature-cards">
               <div>
                <FeatureCard />
                <FeatureCard />
               </div>
               <div>
                 <FeatureCard />
                 <FeatureCard />
               </div>          
           </div>
        </div>
    )
}

export default Features
