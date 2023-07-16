import React from 'react'
import "./AboutContentStyle.css";
import { Link } from "react-router-dom";
import img1 from '../assets/profile_Photo.jpg';


const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1>
            <p>I am a full-stack developer.Pursuing masters in computer science at California state University, Fullerton.</p>
            <Link to="/contact" >
                <button className='btn'>Contact</button>
            </Link>
        </div>
        
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                   <img src={img1}className='img' alt='true'></img> 
                </div>
                <div className='img-stack bottom'>
                   <img src={img1}className='img' alt='true'></img> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent