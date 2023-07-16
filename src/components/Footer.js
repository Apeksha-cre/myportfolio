import './FooterStyle.css';
import {FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:" cornsilk",marginRight:"2rem"}}/>
                    <div>
                    <p>2442 Nutwood Ave Apt I-11,
                        Fullerton,California</p>
                    
                    </div>
                </div>
            
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:" cornsilk",marginRight:"2rem"}}/>
                    (949)988-4502</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:"cornsilk",marginRight:"2rem"}}/>
                    apekshaashah54@gmail.com</h4>
                </div>
            </div>
            <div className='right'> 
                <h4>About me </h4>
                <p>My name is Apeksha Shah.Pursuing master's in computer science at california State university Fullerton.I will be graduating in December 2023</p> 
                <div className='social'>
                    <a href='https://www.linkedin.com/feed/'>
                    <FaLinkedin className='sociallink' size={30} style={{color:"#3b5998",marginRight:"2rem"}}/>
                    </a>

                    <a href='https://github.com/Apeksha-cre/Apeksha-cre'>
                    <FaGithub className='sociallink' size={30} style={{color:"#17B169",marginRight:"2rem"}}/>
                    </a>
                    <a href='https://www.instagram.com/apeksha.shah_/'>
                    <FaInstagram className='sociallink' size={30} style={{color:"#fa7e1e ",marginRight:"2rem"}}/>
                    </a>

                </div>
            </div> 
        </div>
    </div>
  )
}

export default Footer;