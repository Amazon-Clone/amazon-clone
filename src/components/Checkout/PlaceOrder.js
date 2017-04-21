import React, { Component } from 'react';
import './PlaceOrder.css'

class PlaceOrder extends Component {
    render() {
        return (
            <div className='place-order-container'>
                <div className='place-order-inner-box'>
                    <button onClick = {this.props.payCart}>Place your order</button>
                    <div className='order-condition'>By placing your order, you agree to Amazon's <a href='#'>privacy notice</a> and <a href='#'>conditions of use.</a></div>
                    <h1>Order Summary</h1>
                    <div className='order-price'>
                        <p >Items:</p>
                        <p >{this.props.subTotal.toFixed(2)}</p>
                    </div>
                    <div className='order-price shipping-handling' >
                        <p >Shipping & handling:</p>
                        <p >{this.props.shippingTotal.toFixed(2)}</p>
                    </div>
                    <div className='order-price'>
                        <p >Total before tax:</p>
                        <p >{(this.props.subTotal + this.props.shippingTotal).toFixed(2)}</p>
                    </div>
                    <div className='order-price shipping-handling'>
                        <p >Estimated tax to be collected:</p>
                        <p >{((this.props.subTotal + this.props.shippingTotal) * 0.08).toFixed(2)}</p>
                    </div>
                    <div className='order-price-total'>
                        <h2 >Order Total:</h2>
                        <h2>{((this.props.subTotal + this.props.shippingTotal) +  (this.props.subTotal + this.props.shippingTotal) * 0.08).toFixed(2)}</h2>
                    </div>
                </div>
                <div className='shipping-cost-calc'>
                    <a href='#'>How are shipping costs calculated?</a>
                </div>
            </div>
        );
    }
}

export default PlaceOrder;