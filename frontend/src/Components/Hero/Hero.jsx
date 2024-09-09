import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow_icon.svg'
import hero_image from '../Assets/hero_image.png'

function Hero() {
  return (
    <div className='hero'>
       <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div className="hand-hand-icon">
          <p>New</p>
          <img src={hand_icon} alt="" />
        </div>
        <p>Collections</p>
        <p>For Everyone</p>
       <div className="hero-latest-btn">
        <p>Latest Collection</p>
        <img src={arrow_icon} alt="" />
       </div>
       </div>
       <div className="hero-right">
        <img src={hero_image} alt="" />
       </div>
    </div>
  )
}

export default Hero