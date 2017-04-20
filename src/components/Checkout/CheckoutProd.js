import React, { Component } from 'react';
import './CheckoutProd.css'

class CheckoutProd extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props);

        return (
            <div className='checkout-product-container'>
                <div className='checkout-delivery-box'>
                    <h1>Guaranteed delivery: April 21, 2017</h1>
                    <p>If you order in the next 5 hours and 30 minutes</p> <span>(<a href='#'>Details</a>)</span>
                </div>
                <div className='checkout-product-bottom'>
                    <div className='checkout-product-left'>
                        <img src={this.props.orderItem.optionimageurl[1]} alt="" />
                        <div className='checkout-product-content'>
                            <h2>{this.props.orderItem.productname + ' ' + this.props.orderItem.optionname}</h2>
                            <div className='checkout-cost'>${this.props.orderItem.optionprice}</div>
                            <p>Amazon Prime eligible<a href='#'>Join now</a></p>
                            <div className='checkout-stock'>Only 17 left in stock (more on the way).</div>
                            <h3>Quantity: {this.props.orderItem.quantity}<a href='#'>Change</a></h3>
                            <p className='checkout-sold-by'>Sold by: Amazon.com LLC</p>
                            <button><img src="/images/checkout-images/gift_btn.png" alt="" /><p>Add a gift receipt</p></button>
                            <div className='other-gift-option'> and see other gift options</div>
                        </div>
                    </div>

                        <div className='checkout-product-right'>
                            <h1>Choose a delivery option:</h1>
                            <div className='checkout-radio-button'>
                                <input type="radio" name="shipping"/>
                                <div className='checkout-radio-align'>
                                    <h2>April 25-29</h2>
                                    <p>FREE Shipping</p>
                                </div>

                            </div>
                            <div className='checkout-radio-button'>
                                <input type="radio" name="shipping" value="12.22"/>
                                <div className='checkout-radio-align'>
                                    <h2>Tuesday, April 25</h2>
                                    <p>$12.22 - Standard Shipping</p>
                                </div>

                            </div>
                            <div className='checkout-radio-button'>
                                <input type="radio" name="shipping" value="17.43"/>
                                <div className='checkout-radio-align'>
                                    <h2>Friday, April 21</h2>
                                    <p>$17.43 - Two-Day Shipping</p>
                                </div>

                            </div>
                            <div className='checkout-radio-button'>
                                <input type="radio" name="shipping" value="30.93"/>
                                <div className='checkout-radio-align'>
                                    <h2>Thursday April 20</h2>
                                    <p>$30.93 - One-Day Shipping</p>
                                </div>

                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default CheckoutProd;