import React from 'react'
import { Col, Container, Image, Row, Modal } from 'react-bootstrap'
import Educate from '../../../assets/img/educate.png'
import Entertain from '../../../assets/img/entertain.png'
// import DragonBtn from '../../../assets/img/dragon-btn.png'
import appstore from '../../../assets/img/appstore.png'
import googleplay from '../../../assets/img/gstore.png'
import LearnBtn from '../../../assets/img/learn-btn.png'
import FunGirl from '../../../assets/img/age.png'
import PricingIndexV2 from '../../PricingPlan/components/PricingPlanV2'

const AimScreen = () => {
    const [show, setShow] = React.useState(false);

    return (
        <>
        <section className='aimScreens'>
            <Container>
                <Row className="g-0">
                    <Col lg={4} className="order-1 order-lg-0">
                        <div className='aimBox'>
                            <h2>EDUCATE</h2>
                            {/* <Image src={Educate} className='fluid' alt="Educate" /> */}
                            <iframe
                                className='fluid'
                                alt="Educate"
                                // width="450"
                                // height="250"
                                src={`https://www.youtube.com/embed/MlccZeGqXuM`}
                                frameBorder="5"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Educate"
                            />
                            <p className='educateText'>
                                Access To Our Learning Application, DragonCamp, To Teach Children The Basics Like Numbers, And The Alphabet,
                                Will ALWAYS Be Free.
                            </p>
                            <a href='https://apps.apple.com/us/app/DragonCamp/id1622253862' target="_blank"> <Image src={appstore} className='fluid' alt='btn' /> </a>
                        </div>
                    </Col>
                    <Col lg={4} className="order-0 order-lg-1">
                        <div className='funAim'>
                            <Image src={FunGirl} alt="Fun Girl" className='fluid' />
                        </div>
                    </Col>
                    <Col lg={4} className="order-2 order-lg-2">
                        <div className='aimBox'>
                            <h2>ENTERTAIN</h2>
                            {/* <Image src={Entertain} className='fluid' alt="Educate" /> */}
                            <iframe
                                className='fluid'
                                alt="Educate"
                                // width="450"
                                // height="250"
                                src={`https://www.youtube.com/embed/EESsy4G4LrY`}
                                frameBorder="5"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Educate"
                            />
                            <p>
                                Have Your Child, Parent, Grandparent, Aunt, or Uncle Record The Numbers, Letters, Or Body Parts, So Your Child Is Gaining Self Awareness Hearing Their Voice And/Or Interacting With Family.
                            </p>
                            {/* <a onClick={() => { setShow(true) }}> <Image src={LearnBtn} className='fluid' alt='btn' /> </a> */}
                            <a href='https://play.google.com/store/apps/details?id=com.dragoncamp.game' target="_blank"> <Image src={googleplay} className='fluid' alt='btn' /> </a>
                        </div>
                    </Col>
                </Row>
                <Row className="g-0 fun-for-all-ages">
                    <Col lg={4} className="order-0 order-lg-1">
                        <div className='funAim'>
                            <h3>A FAMILY COMPANY FOR FAMILIES</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <h6 className='scroll-text' style={{fontSize:'12pt',textAlign:'center', color:"white",marginBottom: '0px',paddingBottom: '15px' }}>Scroll Down On The Chalkboard</h6>
        </>
    )
}

export default AimScreen
