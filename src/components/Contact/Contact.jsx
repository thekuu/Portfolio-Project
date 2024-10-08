import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "640ef580-755e-4f30-b6e5-0d236403486a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
    };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>zekaryasgeremew@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>+251-910587137</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Addis Ababa, Ethiopia</p>
                    </div>
                    <div className="social-links contact-detail">
                        <a
                            href="https://www.linkedin.com/in/zekaryasgeremew"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link linkedin"
                        >
                            <FaLinkedin size={32} color="#D8D8D8" /> 
                        </a>
                        <a
                            href="https://github.com/thekuu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link github"
                        >
                            <FaGithub size={32} color="#D8D8D8" /> 
                        </a>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name'  name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
