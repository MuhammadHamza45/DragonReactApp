import { Col, Container, Row, Spinner } from 'react-bootstrap'
import PricingPlan from './PricingPlan'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const PricingIndexV2 = () => {
    const [verified, setVerified] = useState(false);
    const query = new URL(window.location.href).searchParams;
    const [Id] = useState(query.get('Id'));
    const [Token] = useState(query.get('Token'));
    useEffect(() => {
        console.log("Start")
        // axios.get('https://localhost:7067/Identity/Account/Manage/VerifyEmail', {
        //     params: {
        //         Id, Token
        //     }
            axios.get('https://main.d1gccxbqrxclxx.amplifyapp.com/Identity/Account/Manage/VerifyEmail', {
                params: {
                    Id, Token
                }
        }).then(resp => {
            console.log(resp.data)
            if(resp.data.status === 'Success')
                Swal.fire('Success', 'Your email address has been verified successfully.', 'success')
                .then(() => setVerified(true));
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
                <PayPalScriptProvider options={{ "client-id": "AQIoSrmO_dZw44E-KVdIDSzyEWWATFdxzFMQZ4qm6rD7gJ1IUj2UVRAxQ8d30racsggunGOIHtAs4m2Y", intent: 'subscription', vault: true}}>
                    <Row>
                        <Col lg={6} xl={3} md={6}>
                            <PricingPlan planId='FREE' detail={['10 free items added to your app by us for free per month - Click below to get your first 10 FREE!', 'Integrate the audio and images yourself in your DragonCamp app', 'Upload 3 images free/month for every hour played', '1 Child', '1 Adult', 'Trivia Game', 'Access To All DragonCamp Application Features']} planFee={0} theme="purple" id={Id}/>
                        </Col>
                        <Col lg={6} xl={3} md={6}>
                            <PricingPlan planId='P-77984090H6166934PMPSKJ5I' detail={['All Free Features', '2 Profiles', 'Add your own subjects, 1 free/month and 1 earned every 5 hours played', 'Send 10 audio/images/month and we integrate in your DragonCamp app (Total for all profiles) *Earn 1 new item every hour played']} planFee={5.99} theme="green" id={Id}/>
                        </Col>
                        <Col lg={6} xl={3} md={6}>
                            <PricingPlan planId='P-72L35606YR7696807MPSKKLI' detail={['All $5.99 Features', 'Send us 30 audio/images/month and we will integrate them in your DragonCamp App', '3 Profiles', 'Reports for correct/incorrect answers in trivia']} planFee={14.99} theme="purple" id={Id}/>
                        </Col>
                        <Col lg={6} xl={3} md={6}>
                            <PricingPlan planId='P-3AY29244AY302642PMPSKKRQ' detail={['All $14.99 Features', '4 Profiles', 'Send us 60 total Audio/image items for us to integrate in your DragonCamp', 'Reports for all kids account activity, trivia and item interactions.']} planFee={29.99} theme="green" id={Id}/>
                        </Col>
                    </Row>
                </PayPalScriptProvider>
            </Container> : <Col md={{span: 1, offset: 6}}><Spinner  animation="grow" variant="primary" style={{width: '4rem', height: '4rem'}}/></Col>}
        </section>
    )
}

export default PricingIndexV2