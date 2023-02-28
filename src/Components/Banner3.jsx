import React from 'react'
import '../assets/banner3.css'
import textbg from '../assets/images/banner3/Inspiration-bg.png'

const Banner3 = () => {
  return (
    <div className='Inspiration-banner'>
        <div className='Inspiration-block'>
            <div className='Inspiration-inner'>
                <div className='Inspiration-img'>
                    <img src={textbg}/>
                    <div className='Inspiration-inner-content'>
                    The inspiration - One day our resident mother Kisha Nicole Stapp and our Uncle of the Year candidate, Gemini Kelly Andrews, noticed Avery was turning into a screen addict already at 2 years old! He would be fixated in a zombie-like state, and then get angry whenever anyone tried to turn it off. So Mom Kisha, Dad Adam, and Uncle of the year Gemini, set out to find a way to use this desire to stare at screens for good. And DragonCamp was born…
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner3
