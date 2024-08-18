import React from "react";
import './Hero.css'
import profile_img from '../../assets/photo_11@08-12-2021_18-27-19.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={profile_img} alt="Hero"/>
            <h1><span>I'm Zekaryas Geremew,</span> full-stack developer based in Ethiopia.</h1>
            <p>I'm full-stack developer based in Ethiopia. my expertise spans both front-end and back-end development, including proficiency in HTML, CSS, JavaScript, React, Node.js, Python, and database management.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className= 'anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero