import './newBannerTop.css';
//import '../slider.js';
import bannerimg from './assets/bannerimg.png';
import apple from './assets/appleicon.png';
import playstore from './assets/googleplay.png';
import slider1 from './assets/slider1.png';
import slider2 from './assets/slider2.png';
import slider3 from './assets/slider3.png';
import slider4 from './assets/slider4.png';
import slider5 from './assets/slider5.png';
import slider6 from './assets/slider6.png';
import slider7 from './assets/slider7.png';
//import jQuery from 'jquery';
//window.jQuery = jQuery;

function NewBannerHome() {
    return (
        <div className="banner-wrapper">
            <div className="container">
                <div className="ptb-100">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center">
                            <div className="left-heading-wrapper">
                                <h1>
                                    <span className="color1">CREATE</span> YOUR <span className="color2">OWN</span> <span className="color3">DRAGON</span>
                                </h1>

                                <p>Our free app, DragonCamp, makes learning fun by letting your child color, and customize
                                    their
                                    own dragon. Available for both IOS and Android.</p>

                                <div className="btns-wrapper">
                                    <div className="black-btn me-3 my-3">
                                        <a href="https://play.google.com/store/apps/details?id=com.dragoncamp.game" className=" d-flex align-items-center justify-content-between">
                                            <img src={playstore} alt="" />

                                            <div className="text ps-2">
                                                <span>GET IT ON</span>
                                                <p>Google Play</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="black-btn ms-3 my-3">
                                        <a href="https://apps.apple.com/us/app/DragonCamp/id1622253862" className="d-flex align-items-center justify-content-between">
                                            <img src={apple} alt="" />

                                            <div className="text ps-2">
                                                <span>Download on the</span>
                                                <p>App Store</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex">
                            <div className="right-img-wrapper flex-center">
                                <img src={bannerimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm Hidemobile">
                            <div className="img-wrapper">
                                <img src={slider7} alt="img" />
                            </div>
                        </div>
                        <div className="col-sm Hidemobile">
                            <div className="img-wrapper">
                                <img src={slider6} alt="img" />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="img-wrapper">
                                <img src={slider5} alt="img" />
                            </div>
                        </div>
                        
                      </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default NewBannerHome;
