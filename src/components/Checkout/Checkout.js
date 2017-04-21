import React, { Component } from 'react';
import CheckoutUser from './CheckoutUser'
import PlaceOrder from './PlaceOrder'
import CheckoutProd from './CheckoutProd'
import './Checkout.css'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import AddressForm from './AddressForm.js'
import CreditCardForm from './CreditCardForm.js'
import { payCart } from '../../actions/cart'

class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {formObj: {}};

        this.changeShippingCost = this.changeShippingCost.bind(this);

        this.openAddress = this.openAddress.bind(this);
        this.afterOpenAddress = this.afterOpenAddress.bind(this);
        this.closeAddress = this.closeAddress.bind(this);


        this.openCard = this.openCard.bind(this);
        this.afterOpenCard = this.afterOpenCard.bind(this);
        this.closeCard = this.closeCard.bind(this);
        this.handleChangeForm = this.handleChangeForm.bind(this);

        this.payCart = this.props.payCart.bind(this, this.state.formObj);

    }

    componentDidMount() {
        if (!this.state.cart && this.props.cart && this.props.cart.length !== 0) {

            var newCart = this.props.cart;

            newCart.forEach(function (element) {
                element.shippingCost = 0;
            });

            this.setState(Object.assign({}, this.state, { cart: newCart }));
        }
    }

    handleChangeForm(key, event){

        var tempObj = this.state.formObj;
        tempObj[key] = event.target.value;

        this.setState(Object.assign({}, this.state, {formObj: tempObj}));
    }

    openAddress() {
        this.setState(Object.assign({}, this.state, { addressOpen: true }));
    }

    afterOpenAddress() {
        // references are now sync'd and can be accessed.
        this.refs.subtitle.style.color = '#f00';
    }

    closeAddress() {
        this.setState(Object.assign({}, this.state, { addressOpen: false }));
    }

    openCard() {
        this.setState(Object.assign({}, this.state, { cardOpen: true }));
    }

    afterOpenCard() {
        // references are now sync'd and can be accessed.
        this.refs.subtitle.style.color = '#f00';
    }

    closeCard() {
        this.setState(Object.assign({}, this.state, { cardOpen: false }));
    }



    changeShippingCost(optionid, event) {
        var newCart = this.state.cart;

        newCart.forEach(function (element) {
            if (element['optionid'] === optionid) {
                element.shippingCost = Number(event.target.value);
            }
        });

        console.log(event.target.value, optionid);

        this.setState(Object.assign({}, this.state, { cart: newCart }));
    }

    render() {

        console.log(this.state.formObj);



        var subTotal = this.state.cart ? this.state.cart.reduce(function (acum, cartItem) { return acum + cartItem.quantity * cartItem.optionprice }, 0) : 0;

        var orderItems = this.state.cart ? this.state.cart.map(function (orderItem) {
            return (<CheckoutProd key={orderItem.optionid} changeShippingCost={this.changeShippingCost.bind(this, orderItem.optionid)} orderItem={orderItem} />)
        }.bind(this)) : [];

        var shippingTotal = this.state.cart ? this.state.cart.reduce(function (acum, cartItem) { return acum + cartItem.shippingCost }, 0) : 0;

        return (
            <div className='checkout-main-container'>
                <div className='checkout-center-box'>
                    <img src="/images/checkout-images/confirm-banner.gif" alt="" />
                    <h1 className='checkout-review-order'>Review your order</h1>
                    <div className='checkout-main-content'>
                        <div className='checkout-leftside'>
                            <CheckoutUser formObj = {this.state.formObj} openAddress = {this.openAddress} openCard={this.openCard}/>
                            <AddressForm handleChangeForm = {this.handleChangeForm} addressOpen={this.state.addressOpen} openAddress={this.openAddress} afterOpenAddress={this.afterOpenAddress} closeAddress={this.closeAddress}></AddressForm>
                            <CreditCardForm handleChangeForm = {this.handleChangeForm} cardOpen={this.state.cardOpen} openCard={this.openCard} afterOpenCard={this.afterOpenCard} closeCard={this.closeCard}></CreditCardForm>
                            {orderItems}
                        </div>
                        <div className='checkout-rightside'>
                            <PlaceOrder payCart = {this.payCart}  subTotal={subTotal} shippingTotal={shippingTotal} />
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

function mapStateToProps(state) {
    return {
        cart: state.cart.all,
        pay: state.cart.pay
    }
}

const mapDispatchToProps = dispatch => (
    {
        getCart: () => { dispatch(getCart()) },
        payCart: () => { dispatch(payCart()) }
    }
);



export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

