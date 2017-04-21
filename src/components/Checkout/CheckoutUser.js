import React, { Component } from 'react';
import './CheckoutUser.css'

class CheckoutUser extends Component {

    render() {

        

        return (
            <div className='checkout-user-container'>
                <div className='checkout-user-col-a'>
                    <ul className='checkout-user-address'>
                        <h1>Shipping Address<a href='#'>Change</a></h1>
                        <li>Sang Chun Ahn</li>
                        <li>500N 500E</li>
                        <li>PROVO, UT 84606-1427</li>
                        <li>United States</li>
                        <li>Phone: 8017035425 </li>
                    </ul>
                </div>
                <div className='checkout-user-col-b'>
                    <ul className='checkout-user-payment'>
                        <h1>Payment Method<a href='#'>Change</a></h1>
                        <li><img src="/images/checkout-images/visa.gif" alt=""/><p>ending in 0059</p></li>
                    </ul>
                    <ul className='checkout-user-billing'>
                        <h1>Billing Address<a href='#'>Change</a></h1>
                        <li><p>Same as shipping address</p></li>
                    </ul>
                </div>
                <div className='checkout-user-col-c'>
                    <ul className='checkout-user-coupon'>
                        <h1>Gift cards & promotional codes</h1>
                        <li><input placeholder=' Enter Code' type="text"/><button>Apply</button></li>
                    </ul>

                </div>
            </div>
        );
    }
}

export default CheckoutUser;