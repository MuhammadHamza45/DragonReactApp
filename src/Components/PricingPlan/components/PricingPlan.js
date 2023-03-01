import PropTypes from 'prop-types';
import { Button, Image } from 'react-bootstrap'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import AudioImage from '../../../assets/img/audio.png'
import '../_pricingplan.scss'
import '../pricingplan.css'
import axios from 'axios';
import Swal from 'sweetalert2';



const PricingPlan = (props) => {
    
    const { detail, planFee, theme, planId, id } = props;
   
    const _createSubscription = (data, actions) => {
        return actions.subscription.create({
            plan_id: planId
        })
    }
    const _onApprove = (data, action) => {
        Swal.fire('Thank You!', 'You have successfully been subscribed to your selected plan.', 'success');

        //axios.post('http://dragoncamplatestapi-env-dev.eba-utemrjim.us-west-1.elasticbeanstalk.com//api/Subscription/saveUserSubscription', { ...data, userId: id })

        // axios.post('https://localhost:7067/api/Subscription/saveUserSubscription', { ...data, userId: id })
        // .then(console.log)
        // .catch(alert)
        axios.post('http://dragoncamplatestapi-env-dev.eba-utemrjim.us-west-1.elasticbeanstalk.com/api/Subscription/saveUserSubscription', { ...data, userId: id })
        .then(console.log)
        .catch(alert)
    } 
    const _onError = (actions, data) => {
        Swal.fire('Subscription Failed!', 'You are not subscribed yet to a subscription plan. Please select a plan and try again.', 'error');
    }
    const _onCancel = (actions, data) => {
        Swal.fire('Canceled', 'Subscription unexpectedly closed. Please try again to keep enjoying Dragon Camp.', 'error');
    }
    return (
        <div className='pricingplan'>
            <div className='pricingplan__head'>
                <Image src={AudioImage} alt='pricingplan' className='fluid' />
            </div>
            <div className={`pricingplan__body ${theme}-bg`}>
                <ul className='benifits'>
                    {detail.map((value, index) => <li key={index}>{value}</li>)}
                </ul>
                <h3>${planFee}</h3>
            </div>
            <div className='pricingplan__btn'>
                
                {/* <PayPalScriptProvider options={{ "client-id": "AcNswpTZpAkULNv6N91IaNLjYkjqhcD6cmK7eEvzltizyzKiYl3GHSxXgNW9uN53-1zadGGh0gUcMOf7", intent: 'subscription', vault: true}}> */}
                    {planId !== 'FREE' ? <PayPalButtons fundingSource="card" style={{shape: 'pill', color: 'black', layout: 'vertical', label: 'subscribe' }}
                        createSubscription={_createSubscription}
                        onApprove={_onApprove}
                        onError={_onError}
                        onCancel={_onCancel}
                    /> : <Button >Subscribe</Button>}
            </div>
        </div>
    )
}
PricingPlan.propTypes = {
    detail: PropTypes.arrayOf(PropTypes.string).isRequired,
    planFee: PropTypes.number.isRequired,
    theme: PropTypes.oneOf(['purple', 'green', 'red']),
    planId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
export default PricingPlan