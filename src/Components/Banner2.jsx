import React from 'react'
import '../assets/banner2.css'
import image1 from '../assets/images/banner2/image1.png'
import image2 from '../assets/images/banner2/image2.png'
import icon1 from '../assets/images/banner2/icon1.png'
import icon2 from '../assets/images/banner2/icon2.png'

const Banner2 = () => {
    return (
        <div className='Benefits-banner'>
            <div className='Benefits-banner-inner'>
                <div className='col-lg-6 col-md-5'>
                    <img src={image2} />
                    {/* <img src={image1} style={{height:400}} /> */}
                    <div className="iframe-wrapper">
                        <iframe
                            // className='fluid'
                            alt="Educate"
                            width="100%"
                            height="400"
                            src={`https://www.youtube.com/embed/WzY0wfJfv2M`}
                            frameBorder="5"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Educate"
                        />
                    </div>
                </div>
                <div className='Benefits-banner-content col-lg-6 col-md-7'>
                    <div className='Benefits-title'>
                        BENEFITS OF OUR <br /> LEARNING APPLICATION
                    </div>
                    <div className='Benefits-content'>
                        <div className='content-image img1'>
                            <img src={icon1} />
                        </div>
                        <div className='Benefits-desc'>IDENTIFY WORDS THAT YOUR CHILD STRUGGLES SAYING AND CUSTOMIZE THE APP TO HELP THEM PRACTICE IN A FUN PLAYFUL ENVIRONMENT. MY NEPHEW AVERY GRANT DEMONSTRATES..</div>
                    </div>
                    <div className='Benefits-content'>
                        <div className='content-image img2'>
                            <img src={icon2} />
                        </div>
                        <div className='Benefits-desc'>GET PRICELESS DATA ON THE LETTERS, WORDS, AND NUMBERS YOUR CHILD LIKES TO INTERACT WITH MOST, OR AVOIDS.</div>
                    </div>
                    <div className='Benefits-details'>
                        START ASSOCIATING LEARNING AS FUN RIGHT WHEN THEY ARE STARTING TO FORM THE HABITS THAT WILL SHAPE THEIR YOUTH
                    </div>
                    <div className='Benefits-btn'>
                        <a href='https://apps.apple.com/us/app/DragonCamp/id1622253862' target="_blank">PLAY FREE</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner2
