import React from "react";
import './Footer.css'

import github from '../../assets/github.png'
import insta from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <div className="Footer-container">
        <div className="footer-blur-left blur"></div>
        <div className="footer-blur-right blur"></div>
            <hr />
            <div className="footer">
                <div className="social-links">
                    <img src={github} alt="" />
                    <img src={insta} alt="" />
                    <img src={linkedin} alt="" />
                </div>
                <div className="logo-f">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Footer