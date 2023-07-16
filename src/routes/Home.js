import React from 'react'
import Navbar from '../components/Navbar'
import MainPageImg from '../components/MainPageImg'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
            <Navbar/>              {/*linking the nevigation bar*/}
            <MainPageImg/>  
            <Footer/>                                          
    </div>
  )
}

export default Home