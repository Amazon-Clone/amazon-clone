import React, { Component } from 'react';
import './PlaceOrder.css'

class PlaceOrder extends Component {
    render() {
        return (
            <div className='place-order-container'>
                <div className='place-order-inner-box'>
                    <button>Place your order</button>
                    <div className='order-condition'>By placing your order, you agree to Amazon's <a href='#'>privacy notice</a> and <a href='#'>conditions of use.</a></div>
                    <h1>Order Summary</h1>
                    <div className='order-price'>
                        <p >Items:</p>
                        <p >$2,249.00</p>
                    </div>
                    <div className='order-price shipping-handling' >
                        <p >Shipping & handling:</p>
                        <p >$17.43</p>
                    </div>
                    <div className='order-price'>
                        <p >Total before tax:</p>
                        <p >$2,266.43</p>
                    </div>
                    <div className='order-price shipping-handling'>
                        <p >Estimated tax to be collected:</p>
                        <p >$154.06</p>
                    </div>
                    <div className='order-price-total'>
                        <h2 >Order Total:</h2>
                        <h2>$2,420.49</h2>
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