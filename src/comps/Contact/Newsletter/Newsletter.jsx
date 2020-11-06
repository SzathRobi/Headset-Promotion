import React from 'react'
import TitleContainer from "../../TitleContainer/TitleContainer"
import map from "./map.png"


function Newsletter() {
    return (
        <div className="Newsletter">
           <img src={map} alt=""/>
            <div className="newsletter-content">
            <TitleContainer category="NEWSLETTER" title="Subscribe To Get Updates"/>         
            <form>
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Email Address Here"/>
                <button>SUBSCRIBE NOW</button>
            </form>
        </div> 
    </div>
    )
}

export default Newsletter
