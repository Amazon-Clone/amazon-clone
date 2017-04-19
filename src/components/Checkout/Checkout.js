import React, { Component } from 'react';
import CheckoutUser from './CheckoutUser'
import './Checkout.css'

class Checkout extends Component {
    render() {
        return (
            <div className='checkout-main-container'>
                <div className='checkout-center-box'>
                    <img src="/images/checkout-images/confirm-banner.gif" alt=""/>
                    <h1 className='checkout-review-order'>Review your order</h1>
                    <div className='checkout-main-content'>
                        <div className='checkout-leftside'>
                            <CheckoutUser />
                        </div>
                        <div className='checkout-rightside'>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;