import React from "react";
import './Hero.css'
import profile_img from '../../assets/Img.jpg'
import resumeUrl from '../../assets/Resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
    
    const handleClick = () => {
        window.open(resumeUrl, '_blank', 'noopener,noreferrer');
    };
    return (
        <div id="home" className="hero">
            <img src={profile_img} alt="Hero"/>
            <h1><span>I'm Zekaryas Geremew,</span> full-stack developer based in Ethiopia.</h1>
            <p>I'm full-stack developer based in Ethiopia. my expertise spans both front-end and back-end development, including proficiency in HTML, CSS, JavaScript, React, Node.js, Python, and database management.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className= 'anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className="hero-resume" onClick={handleClick}>My resume</div>
            </div>
        </div>
    )
}

export default Hero