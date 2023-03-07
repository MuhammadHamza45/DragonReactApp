import PropTypes from 'prop-types';
import { Button, Image } from 'react-bootstrap'
import { loadStripe } from '@stripe/stripe-js';
import AudioImage from '../../../assets/img/audio.png'
import '../_pricingplan.scss'
import '../pricingplan.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import { API_ENDPOINT } from '../../../default';



const PricingPlan = (props) => {
    
    const { detail, planFee, theme, planId } = props;
    const queryParams = new URLSearchParams(window.location.search);
   
    const _handleStripe = async () => {
        const stripe = await loadStripe('pk_test_51Mg3KLH38W4sdy7oIg82x2kxfoTDLZqOADwyotc1BDv1fO9WytCyUEno4mOYF81MO5TQnqUXawIW7jhysRa2s02R00VHiTVtRa');
        
        axios.get(`${API_ENDPOINT}/api/Subscription/createPaymentSession`, {
            params: {planId: planId, customerId: queryParams.get('Id')}
        })
        .then(async resp => {
            console.log(resp);
            if(resp.data.success) {
                const result = await stripe.redirectToCheckout({sessionId: resp.data.session.id});
                console.log(result);
            }
            else
                Swal.fire('Error', resp.data.message, 'error').then(() => window.location.href = '/')
        })
        .catch(console.error);
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
                <Button onClick={() => _handleStripe()}>Subscribe</Button>
            </div>
        </div>
    )
}
PricingPlan.propTypes = {
    detail: PropTypes.arrayOf(PropTypes.string).isRequired,
    planFee: PropTypes.number.isRequired,
    theme: PropTypes.oneOf(['purple', 'green', 'red']),
    planId: PropTypes.string.isRequired
}
export default PricingPlan