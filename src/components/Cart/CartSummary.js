import React, { Component } from 'react';
import './Cart.css'
import './CartSummary.css'

class CartSummary extends Component {
    render() {
        return (
            <div className='cart-upper-right-top borders'>
                <div className='sum-upper'>
                    <p className='greentxt'>Your order qualifies for FREE Shipping</p>
                    <p>Choose this option at checkout. <span>See details</span></p>
                </div>
                <div className='sum-mid'>
                    <h1 className='mid-sec-subtot'>Subtotal (4 items): <span>$8,956.77</span></h1>
                    <div className='displ-fl'><input type="checkbox"/><p>This order contains a gift</p></div>
                    <button className='sub-mid-butt'>Proceed to checkout</button>
                    <p>1-Click ordering is not available for at least one item in your order.</p>
                </div>
                <div className='sum-bot'>
                    <p>Estimate your shipping and tax</p>
                </div>
            </div>
        );
    }
}

export default CartSummary;