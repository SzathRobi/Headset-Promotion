import React from 'react'

function TestimonialCard({img, name, from}) {
    return (
        <div className="TestimonialCard">
            <div className="review">
            <i className="fas fa-quote-right"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis quos corporis. Ex, illum deserunt? Rerum, quasi</p>
            </div>
            <div className="person-info">
                <img src={img} alt=""/>
                <h3>{name}</h3>
                <p>{from}</p>
            </div>
        </div>
    )
}

export default TestimonialCard
