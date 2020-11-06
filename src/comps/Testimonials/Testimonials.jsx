import React from 'react'
import TitleContainer from "../TitleContainer/TitleContainer"

import AliceCarousel from "react-alice-carousel";
import TestimonialCard from './TestimonialCard/TestimonialCard';

import person1 from "./person-1.jpg"
import person2 from "./person-2.jpg"
import person3 from "./person-3.jpg"
import person4 from "./person-4.jpg"
import person5 from "./person-5.jpg"

function Testimonials() {
    return (
        <div className="Testimonials" id="testimonials">
            <TitleContainer category="TESTIMONIALS" title="Customers Reviews"/>
            <div className="testimonials-slider">
            <AliceCarousel infinite autoPlay autoPlayInterval="4000" >
                <TestimonialCard img={person1} name="John Doel" from="Los Angeles, California"/>
                <TestimonialCard img={person2} name="Jane Doel" from="Los Angeles, California"/>
                <TestimonialCard img={person3} name="Christian Hennberg" from="Los Angeles, California"/>
                <TestimonialCard img={person4} name="Tina Smith" from="Los Angeles, California"/>
                <TestimonialCard img={person5} name="Niki Gem" from="Los Angeles, California"/>
            </AliceCarousel>
            </div>
        </div>
    )
}

export default Testimonials
