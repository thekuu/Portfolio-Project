import React from "react";
import './Hero.css'
import profile_img from '../../assets/hero.jfif'
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
            <p>Specializing in front-end and back-end development with expertise in HTML, CSS, JavaScript, React, Node.js, Python, and database management. I turn ideas into dynamic, efficient web solutions.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className= 'anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className="hero-resume" onClick={handleClick}>My resume</div>
            </div>
        </div>
    )
}

export default Hero