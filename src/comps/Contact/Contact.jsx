import React from 'react'
import Newsletter from './Newsletter/Newsletter'
import TitleContainer from "../TitleContainer/TitleContainer"
import ContactCard from  "./ContactCard/ContactCard"

function Contact() {
    return (
        <div className="Contact" id="contact">
            <Newsletter />
            <div className="contact-us">
                <TitleContainer category="CONTACT US" title="Lets Get In Touch"/>
                <div className="form-container">
                     <form data-aos="fade-right">
                    <div className="input-container name-subject">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Subject"/>
                    </div>
                    <div className="input-container email-phone">
                        <input type="email" placeholder="Email"/>
                        <input type="text" placeholder="Phone"/>
                    </div>
                    <textarea placeholder="Your Message..."/>
                    <button>SEND MESSAGE</button>
                    </form>
                    <div className="contact-cards">
                        <ContactCard icon="fas fa-location-arrow" title="Our Head Office" text="420, Grasseli Street." delay="100"/>
                        <ContactCard icon="fas fa-phone" title="Call Us On" text="0611-420-18" delay="250"/>
                        <ContactCard icon="fas fa-envelope" title="Email Us At" text="info@example.com" delay="400"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
