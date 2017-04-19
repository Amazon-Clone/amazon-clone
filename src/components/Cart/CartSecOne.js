import React, { Component } from 'react';
import './Cart.css'

class CartSecOne extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const savings = 50;

        return (
            <div className='cart-upper-left-top borders'>
                <div className='cult-left'>
                    <div className='card-image'></div>
                    <div className='information'>
                        <h5><span>Jacob,</span> get a <span className='orange'>$50 Amazon.com Gift Card instantly </span> upon approval for the <span>Amazon Rewards Visa Card</span></h5>
                    </div>
                </div>
                <div className='cult-right'>
                    <div>
                        <div className='cult-up'>
                            <h6 className='widthth'>Current Total:</h6><h6>${ this.props.subTotal }</h6>
                        </div>
                        <div className='cult-upa'>
                            <h6 className='heavy widthth'>Savings:</h6><h6 className='border-bot heavy'>${ this.props.subTotal? '-50' : '0'}</h6>
                        </div>
                        <div className='cult-upa'>
                            <h6 className='red widthth'>Cost After Savings:</h6><h6 className='red'>$ {(this.props.subTotal? (this.props.subTotal - 50).toFixed(2) : 0)}</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartSecOne;