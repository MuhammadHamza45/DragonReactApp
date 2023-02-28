import './newHomeTop.css';
import playbtn from './assets/playbtn.png';
import starImgOne from './assets/starImgOne.png';
import starImgTwo from './assets/starImgTwo.png';
import bottomStar from './assets/bottomStar.png';
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'
import youtube from './assets/YouTube.png'
import facebook from './assets/Facebook.png'
import pinterest from './assets/pinterest.png'
import apple from './assets/appleicon.png';
import playstore from './assets/googleplay.png';

function NewTopHome() {
  return (
    <div className="App">
      {/*<div className="container">
        <h1 className="toph1">PLAY FREE TRIVIA AND WIN</h1>
        <div className="innerContainer">
          <div className="left">
            <div className="imgplaybtn">
                <div className="imgbox">
                <a href="https://twitter.com/myDragonCamp" className='smsocial'>
                  <img  src={twitter} alt="" />
                </a>
                <a href="">
                  <img className='playimg' src={playbtn} alt="" />
                </a>
                <a href="https://www.instagram.com/mydragoncamp/" className='smsocial'>
                  <img src={instagram} alt="" /> 
                </a>
                </div>
            <div className="social">
              <a href="https://twitter.com/myDragonCamp">
                <img src={twitter} alt="" />
               
              </a>
              <a href="https://www.instagram.com/mydragoncamp/">
              <img src={instagram} alt="" />
               
              </a>
              
            </div>
            </div>
            <div>
              <h5>Play our trivia game to win stars</h5>
              <p>
                Every 5 stars you win 1 free entry into our <br />
                daily/weekly contests where you can win <br /> prizes like food,
                gift cards and <br />
                DragonCamp merchandise! Win your <br /> own green DragonCamp
                onesie. Follow <br /> us on social to see if you've won!
              </p>
            </div>
          </div>
          <div className="right">
            <img src={baby} alt="" />
            <img src={baby3} alt="" />
            <img src={baby2} alt="" />
          </div>
        </div>
        <img src={bgmain} className="bg" alt="" />
      </div>*/}
        <div className="container">
            <div className="row">
                    <div className="col-sm-4">
                        <div className="col-12">
                            <div className="col-12">
                                <img src={starImgOne} alt="" className="rotate15"/>
                            </div>
                        </div>
                        <div className="col-12">
                            <h1 className="headingTitle">
                                <span className="play">PLAY</span> FREE TRIVIA AND WIN
                            </h1>
                        </div>
                        <div className="col-12">
                            <p className="headingContent">Every 5 stars you win 1 free entry into our daily/weekly contests where you can winprizes like food, gift cards and DragonCamp merchandise! Win your own green DragonCamp onesie. Followus on social to see if you've won!
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="btns-wrapper ">
                                    <div className="black-btn me-3 my-3">
                                        <a href="https://play.google.com/store/apps/details?id=com.dragoncamp.game" className=" d-flex align-items-center justify-content-between">
                                            <img src={playstore} alt="" />

                                            <div className="text ps-2 plystrBtnTxt">
                                                <span>GET IT ON</span>
                                                <p>Google Play</p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="black-btn ms-3 my-3">
                                        <a href="https://apps.apple.com/us/app/DragonCamp/id1622253862" className="d-flex align-items-center justify-content-between">
                                            <img src={apple} alt="" />

                                            <div className="text ps-2 plystrBtnTxt">
                                                <span>Download on the</span>
                                                <p>App Store</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            <a href="https://www.instagram.com/mydragoncamp/" className='socialImg firstChild'>
                              <img src={instagram} alt=""/>
                            </a>
                            <a href="https://www.facebook.com/mydragoncamp/" className='socialImg'>
                              <img src={facebook} alt=""/>
                            </a>
                            <a href="https://www.instagram.com/mydragoncamp/" className='socialImg'>
                              <img src={twitter} alt=""/>
                            </a>
                            <a href="https://www.youtube.com/@dragoncamp5923" className='socialImg'>
                              <img src={youtube} alt=""/>
                            </a>
                            <a href="https://pin.it/1FvYhdP" className='socialImg'>
                              <img src={pinterest} alt=""/>
                            </a>
                        </div>
                        <div className="col-12">

                        <h1 className="footerTitle">Play our trivia game to <
                            span className="winstart">win stars</span>
                        </h1>
                        </div>


                    </div>

                    <div className="col-sm-8">
                        <div className="">
                            <img src={starImgTwo} alt="" className="rotate15"/>
                        </div>
                        <img src={bottomStar} alt="" className="rotate15 bottomStar"/>
                    </div>
                
            </div>
        </div>
    </div>
  );
}

export default NewTopHome;
