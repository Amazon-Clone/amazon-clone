import React, { Component } from 'react';
import './CheckoutProd.css'

class CheckoutProd extends Component {

    constructor(props) {
        super(props);
    }

    render() {

//dont ever touch this cause we will never fig it out again

        var d = new Date();
        d.setDate(d.getDate() + 7);
        var weekday = new Array(7);
        weekday[0] =  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        var n = weekday[d.getDay()];
        var datee = new Date(), locale = "en-us", month = d.toLocaleString(locale, { month: "long" });
        var guaranteeDeliv = (n + ', ' + month + ' ' + d.getDate())
        var dgo = new Date();
        dgo.setDate(dgo.getDate() + 1);
        var np = weekday[dgo.getDay()];
        var dateeee = new Date(), locale = "en-us", month1 = dgo.toLocaleString(locale, { month: "long" });
        var choochoo= (np + ', ' + month1 + ' ' + dgo.getDate())
        var bongo = new Date();
        bongo.setDate(bongo.getDate() + 2);
        var drf = weekday[dgo.getDay()];
        var bachu = new Date(), locale = "en-us", month2 = bongo.toLocaleString(locale, { month: "long" });
        var griffa= (drf + ', ' + month2 + ' ' + bongo.getDate())
        var wawa = new Date();
        wawa.setDate(wawa.getDate() + 15);
        var coco = weekday[wawa.getDay()];
        var bachu = new Date(), locale = "en-us", month3 = wawa.toLocaleString(locale, { month: "long" });
        var sillo= (coco + ', ' + month3 + ' ' + wawa.getDate())

        console.log(this.props);

        return (
            <div className='checkout-product-container'>
                <div className='checkout-delivery-box'>
                    <h1>Guaranteed delivery: {guaranteeDeliv}</h1>
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

                    <form action="">
                        <div className='checkout-product-right'>
                            <h1>Choose a delivery option:</h1>
                            <div className='checkout-radio-button'>
                                <input onChange={this.props.changeShippingCost} type="radio" name='shipping' value={0} />
                                <div className='checkout-radio-align'>
                                    <h2>{sillo}</h2>
                                    <p>FREE Shipping</p>
                                </div>

                            </div>
                            <div className='checkout-radio-button'>
                                <input onChange={this.props.changeShippingCost} type="radio" name='shipping' value={12.22} />
                                <div className='checkout-radio-align'>
                                    <h2>{guaranteeDeliv}</h2>
                                    <p>$12.22 - Standard Shipping</p>
                                </div>

                            </div>
                            <div className='checkout-radio-button'>
                                <input onChange={this.props.changeShippingCost} type="radio" name='shipping' value={17.43} />
                                <div className='checkout-radio-align'>
                                    <h2>{griffa}</h2>
                                    <p>$17.43 - Two-Day Shipping</p>
                                </div>

                            </div>
                            <div className='checkout-radio-button'>
                                <input onChange={this.props.changeShippingCost} type="radio" name='shipping' value={30.93} />
                                <div className='checkout-radio-align'>
                                    <h2>{choochoo}</h2>
                                    <p>$30.93 - One-Day Shipping</p>
                                </div>

                            </div>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default CheckoutProd;