import "./MainPageImgStyle.css";
import backimg from "../assets/b.jpg"
import React from 'react'
import { Link } from "react-router-dom";

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
          <Link to="/project" className="btn" >PROJETS</Link>
          </div>
        </div>
    </div>
  );
};

export default MainPageImg