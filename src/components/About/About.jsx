import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about.jpg'
export default function About() {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={theme_pattern} alt="About_me img" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="profile_img" className='about-img'/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I’m a full-stack developer who enjoys designing user friendly interfaces and solving complex back-end challenges.</p>
                <p>I focus on creating both visually appealing and technically sound web applications.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width: "70%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}}/></div>
                <div className="about-skill"><p>Express JS</p><hr style={{width: "50%"}}/></div>
            </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>  
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>  
        </div>
        <hr />
      </div>
    </div>
  )
}
