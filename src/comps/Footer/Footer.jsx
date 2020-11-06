import React from 'react'
import footerLogo from "./footer-logo.png"
import footerBg from "./footer-bg.png"

function Footer() {
    return (
        <div className="Footer">
            <img className="footer-bg" src={footerBg} alt="footer-bg"/>
            <div className="footer-container">
                <div className="logo-container">
                    <img src={footerLogo} alt="footer-logo"/>
                    <h5>COPYRIGHT &copy; THEMESCARE 2020.</h5>
                </div>
                <div className="icons">
                    <div className="icon-container">
                        <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="icon-container">
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="icon-container">
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                    <div className="icon-container">
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
