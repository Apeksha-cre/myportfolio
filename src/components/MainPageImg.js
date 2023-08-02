import "./MainPageImgStyle.css";
import backimg from "../assets/b.jpg"
import resume from "../assets/Resume.pdf"
import React from 'react'
import {FaDownload}from "react-icons/fa";

const MainPageImg = () => {
  return (
    <div className="mainpage">
        <div className="backimg">
           <img className="back-img" src={backimg} alt="backimg"/> 
           </div> 
        
        <div className="content">
          <p>This is Apeksha Shah</p>
          <h1>Developer</h1>
          <div>
          <a href = {resume} download="Apeksha_CV" className="btn">Download Resume 
          <FaDownload className="downloadimg"/>
          </a>
          </div>
        </div>
       
    </div>
  );
};

export default MainPageImg