import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg from '../components/HeroImg';
import ProjectCards from '../components/ProjectCards';

export const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading='PROJECTS' text='some of my projects'/>
      <ProjectCards/>
      <Footer/>
    </div>
  )
}

export default Project