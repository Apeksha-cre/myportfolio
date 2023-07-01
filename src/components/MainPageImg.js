import "./MainPageImg.css";
import backimg from "../assets/back-img.jpg"
import React from 'react'
import { Link } from "react-router-dom";

const MainPageImg = () => {
  return (
    <div className="mainpage">
        <div className="backimg">
           <img className="back-img" src={backimg} alt="backimg"/> 
        </div>
        <div className="content">
          <p>Hello!! This is Apeksha Shah</p>
          <h1>Developer</h1>
        </div>
        <div>
          <Link to="/project" classname="btn" >PROJETS</Link>
        </div>
    </div>
  )
}

export default MainPageImg