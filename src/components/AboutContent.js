import React from 'react'
import "./AboutContentStyle.css";
import { Link } from "react-router-dom";
import img1 from '../assets/profile_Photo.jpg';
import img2 from '../assets/i.jpg';


const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1>
            <p> Welcome to my portfolio! I'm Apeksha Shah, a dynamic and ambitious Master's student, 
                currently pursuing Computer Science at Cal State Fullerton. With a passion for innovation 
                and a strong technical acumen, I am a Full Stack Developer proficient in Java, Spring, 
                and API development. Beyond the world of programming, I embrace the art of photography, 
                excel in badminton, and conquer breathtaking hiking trails. I thrive on problem-solving 
                challenges, whether it's crafting elegant websites or unraveling complex algorithms.</p>
            <p>My journey as a tech enthusiast is fueled by the desire to leave a remarkable impact on the 
                digital landscape. As an avid learner, I actively seek opportunities to apply my skills 
                and collaborate with visionary teams to build cutting-edge solutions. My goal is 
                to contribute my creativity and expertise to make the world a more connected and user-friendly place. 
                Let's connect and embark on an inspiring journey together, leveraging technology to 
                shape a better future!</p>
            
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
                   <img src={img2}className='img' alt='true'></img> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent