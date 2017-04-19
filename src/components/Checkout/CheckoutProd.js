import React, { Component } from 'react';
import './CheckoutProd.css'

class CheckoutProd extends Component {
    render() {
        return (
            <div className='checkout-product-container'>
                <div className='checkout-delivery-box'>
                    <h1>Guaranteed delivery: April 21, 2017</h1>
                    <p>If you order in the next 5 hours and 30 minutes</p> <span>(<a href='#'>Details</a>)</span>
                </div>
                <div className='checkout-product-bottom'>
                    <div className='checkout-product-left'>
                        <img src="/images/checkout-images/mac.jpg" alt=""/>
                        <div className='checkout-product-content'></div>
                    </div>
                    <div className='checkout-product-right'></div>
                </div>
            </div>
        );
    }
}

export default CheckoutProd;