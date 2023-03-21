import { Col, Container, Row, Spinner } from 'react-bootstrap'
import PricingPlan from './PricingPlan'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { API_ENDPOINT } from '../../../default';

const PricingIndexV2 = () => {
    const [verified, setVerified] = useState(false);
    const query = new URL(window.location.href).searchParams;
    const [Id] = useState(query.get('Id'));
    const [Token] = useState(query.get('Token'));
    useEffect(() => {
        axios.get(`${API_ENDPOINT}/Identity/Account/Manage/VerifyEmail`, {
            params: {
                Id, Token
        }
        }).then(resp => {
            if(resp.data.status === 'Success'){
                Swal.fire('Success', 'Your email address has been verified successfully.', 'success')
                .then(() => setVerified(true));
            }
            else if(resp.data.status === 'EmailAlreadyConfirmed')
                Swal.fire('Email Verified', 'Your email has already been verified. Please choose a subscription plan.', 'info')
                .then(() => setVerified(true));
            else if(resp.data.status === 'SubscriptionAlreadyPresent')
                Swal.fire('Verified and Subscribed', 'You account has already been verified and subscribed.', 'info')
                .then(() => window.location.href = '/');
        })
        .catch(err => {
           Swal.fire('Email Verification Failed!', 'Your email cannot be verified right now. Try again later.', 'error')
           .then(() => window.location.href = '/');
        })
    }, [])
    return (
        <section className='pricingbg'>
            {verified ? <Container>
                <h1 className='pricingheader'>Subscription</h1>
                <h3 className='pricingdescription'>Choose the account you want to try free for 30 days</h3>
                <Row>
                    {/* <Col lg={6} xl={3} md={6}>
                        <PricingPlan planId='FREE' detail={['10 free items added to your app by us for free per month - Click below to get your first 10 FREE!', 'Integrate the audio and images yourself in your DragonCamp app', 'Upload 3 images free/month for every hour played', '1 Child', '1 Adult', 'Trivia Game', 'Access To All DragonCamp Application Features']} planFee={0} theme="purple" id={Id}/>
                    </Col> */}
                    <Col lg={4} xl={4} md={12} sm={12}>
                        <PricingPlan planId='price_1MiuVAH38W4sdy7ofd9jj1JE' detail={['All Free Features', '2 Profiles', 'Add your own subjects, 1 free/month and 1 earned every 5 hours played', 'Send 10 audio/images/month and we integrate in your DragonCamp app (Total for all profiles) *Earn 1 new item every hour played']} planFee={5.99} theme="green" id={Id}/>
                    </Col>
                    <Col lg={4} xl={4} md={12} sm={12}>
                        <PricingPlan planId='price_1MiuaYH38W4sdy7oaRGrTJZo' detail={['All $5.99 Features', 'Send us 30 audio/images/month and we will integrate them in your DragonCamp App', '3 Profiles', 'Reports for correct/incorrect answers in trivia']} planFee={14.99} theme="purple" id={Id}/>
                    </Col>
                    <Col lg={4} xl={4} md={12} sm={12}>
                        <PricingPlan planId='price_1Miub5H38W4sdy7o17IWnQlH' detail={['All $14.99 Features', '4 Profiles', 'Send us 60 total Audio/image items for us to integrate in your DragonCamp', 'Reports for all kids account activity, trivia and item interactions.']} planFee={29.99} theme="green" id={Id}/>
                    </Col>
                </Row>
            </Container> : <Col md={{span: 1, offset: 6}}><Spinner  animation="grow" variant="primary" style={{width: '4rem', height: '4rem'}}/></Col>}
        </section>
    )
}

export default PricingIndexV2