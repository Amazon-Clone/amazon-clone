import React, { Component } from 'react';
import CheckoutUser from './CheckoutUser'
import PlaceOrder from  './PlaceOrder'
import CheckoutProd from './CheckoutProd'
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
                            <CheckoutProd />
                        </div>
                        <div className='checkout-rightside'>
                            <PlaceOrder/>
                        </div>
                    </div>
                    <div className='checkout-footer-container'>
                        <p>Do you need help? Explore our <a href='#'>Help pages</a> or <a href='#'>contact us</a></p>
                        <p>For an item sold by Amazon.com: When you click the "Place your order" button, we'll send you an email message acknowledging receipt of your order. Your contract to purchase an item will not be complete until we send you an email notifying you that the item has been shipped.</p>
                        <p>Colorado, Oklahoma, South Dakota and Vermont Purchasers: <a href='#'>Important information regarding sales tax you may owe in your State</a></p>
                        <p>Within 30 days of delivery, you may return new, unopened merchandise in its original condition. Exceptions and restrictions apply. See Amazon.com's <a href='#' >Returns Policy</a></p>
                        <p>Go to the <a href='#'>Amazon.com homepage</a> without completing your order.</p>
                    </div>
                    <div className='checkout-condition-footer'><a href='#'>Conditions of Use </a> | <a href='#'>Privacy Notice</a> © 1996-2017, Amazon.com, Inc.</div>
                </div>
            </div>
        );
    }
}

export default Checkout;

