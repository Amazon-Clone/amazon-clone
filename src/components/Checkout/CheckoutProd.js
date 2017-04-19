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
                        <div className='checkout-product-content'>
                            <h2>Apple MacBook Pro MLW72LL/A 15.4-inch Laptop with Touch Bar (2.6GHz quad-core Intel Core i7, 256GB Retina Display), Silver</h2>
                            <div className='checkout-cost'>$2,249.00</div>
                            <p>Amazon Prime eligible<a href='#'>Join now</a></p>
                            <div className='checkout-stock'>Only 17 left in stock (more on the way).</div>
                            <h3>Quantity: 1<a href='#'>Change</a></h3>
                            <p className='checkout-sold-by'>Sold by: Amazon.com LLC</p>
                            <button><img src="/images/checkout-images/gift_btn.png" alt=""/><p>Add a gift receipt</p></button>
                            <div className='other-gift-option'> and see other gift options</div>
                        </div>
                    </div>
                    <div className='checkout-product-right'>
                        <h1>Choose a delivery option:</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckoutProd;