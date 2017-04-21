import React, { Component } from 'react';
import './CheckoutUser.css'

class CheckoutUser extends Component {

    render() {

        var last4 = this.props.formObj.cardnumber? this.props.formObj.cardnumber.slice(12) : 'XXXX';


        return (
            <div className='checkout-user-container'>
                <div className='checkout-user-col-a'>
                    <ul className='checkout-user-address'>
                        <h1>Shipping Address<a onClick={this.props.openAddress}>Change</a></h1>
                        <li>Recipient: {this.props.formObj.recipient}</li>
                        <li>Address 1: {this.props.formObj.address1}</li>
                        <li>Address 2: {this.props.formObj.address2}</li>
                        <li>Postal Code: {this.props.zipcode}</li>
                        <li>State: {this.props.formObj.state}</li>
                        <li>Country: {this.props.formObj.country}</li>
                        <li>Phone: {this.props.formObj.phone}</li>
                    </ul>
                </div>
                <div className='checkout-user-col-b'>
                    <ul className='checkout-user-payment'>
                        <h1>Payment Method<a onClick={this.props.openCard}>Change</a></h1>
                        <li><img src="/images/checkout-images/visa.gif" alt=""/><p>ending in {last4}</p></li>
                    </ul>
                    <ul className='checkout-user-billing'>
                        <h1>Billing Address<a onClick={this.props.openCard}>Change</a></h1>
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