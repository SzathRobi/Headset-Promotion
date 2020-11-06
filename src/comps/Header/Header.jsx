import React, { useState } from 'react'

import logo from "./logo.png"

function Header() {

    const [menuOpened, setMenuOpened] = useState(false)
    const updateMenuOpened = () => setMenuOpened(!menuOpened)
    const menuHeight = {
        height: menuOpened ? "18rem" : "0"
    }

   
    return (
        <header>
            <img src={logo} className="logo" alt="pelum logo"/>
           
            <nav>
            <i className="fas fa-bars" onClick={updateMenuOpened}></i>
                <ul className="mobile-header" style={menuHeight}>
                    <a href="#home">Home</a>
                    <a href="#feautures">Features</a>
                    <a href="#about">About</a>
                    <a href="#product">Product</a>
                    <a href="#faq">Faq</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#contact">Contact</a>
                </ul>

                <ul className="desktop-header">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                    <a href="#product">Product</a>
                    <a href="#faq">Faq</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#contact">Contact</a>
                </ul>
               
            </nav>
        </header>
    )
}

export default Header
