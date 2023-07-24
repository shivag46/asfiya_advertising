import React from 'react'
import './home.css'

function Home() {
  return (
    <div className='aa__home section__padding'>
        <div className='aa__home-top'>
            <div className='aa__home-top-logo'>
            <h1> Asfiya<br/>Advertising</h1>
            </div>
            <div className="aa__home-top-nav">
                <p><a href="#home">Home</a></p>
                <p><a href="#abtus">About Us</a></p>
                <p><a href="#clients">Our Clients</a></p>
                <p><a href="#testimonials">Testimonials</a></p>
                <p><a href="#contact">Contact Us</a></p>    
            </div>
        </div>
        <div className='aa__home-content'>
            <h1>Unlock the power of creativity.<br/>Elevate your brand with <br/>our exceptional ad solutions.</h1>
        </div>
    </div>
  )
}

export default Home
