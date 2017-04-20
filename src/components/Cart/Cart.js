import React, { Component } from 'react';
import './Cart.css'
import ProductCartView from './ProductCartView'
import CartSecOne from './CartSecOne'
import AlsoBought from './AlsoBought'
import CartSummary from './CartSummary'
import RecProducts from './RecProducts'
import AlsoBoughtCarousel from './AlsoBoughtCarousel'
import AlsoBoughtCarousel2 from './AlsoBoughtCarousel2'
import { getCart, checkoutCart } from '../../actions/cart'
import { connect } from 'react-redux'
import {browserHistory} from 'react-router'

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }

        this.props.getCart()
        this.deleteCartItem = this.deleteCartItem.bind(this);
        this.quantityChange = this.quantityChange.bind(this);
        this.checkoutCart = this.checkoutCart.bind(this);


        console.log(this.props);
    }

    componentDidUpdate(){
        if(!this.state.cart && this.props.cart && this.props.cart.length !== 0){
            this.setState(Object.assign({}, {cart: this.props.cart}));
        }
    }

    checkoutCart(){
        this.props.checkoutCart();
        browserHistory.push('/checkout');
    }

    quantityChange(optionid, event){
        console.log('event: ', event);
        console.log('typeof(event.target.value): ', event.target.value);

        console.log('optionid: ', optionid);

        var stateObj = {cart: this.state.cart};

        stateObj.cart[stateObj.cart.findIndex(function(cartItem){
            return cartItem.optionid === optionid;
        })].quantity = Number(event.target.value);

        this.setState(Object.assign({}, this.state, stateObj));
    }

    updateCartQuantity(){
    }

    deleteCartItem(optionid){
        var stateObj = {cart: this.state.cart};

        stateObj.cart.splice(stateObj.cart.findIndex(function(cartItem){
            return cartItem.optionid === optionid;
        }), 1);

        this.setState(Object.assign({}, stateObj));
    }

    render() {

        console.log(this.state.cart);

        var cartItems = this.state.cart? this.state.cart.map(function(cartItem) {
                    return (<ProductCartView key={cartItem.optionid} quantityChange={this.quantityChange} deleteCartItem = {this.deleteCartItem} cartItem={cartItem}/>)
                }.bind(this)):[];

        var itemNumber = this.state.cart? this.state.cart.reduce(function(acum, cartItem){return acum + cartItem.quantity}, 0) : 0;
        var subTotal = this.state.cart? this.state.cart.reduce(function(acum, cartItem){return acum + cartItem.quantity * cartItem.optionprice}, 0) : 0;
        
        return (
            <div className='cart-body'>
                <div className='cart-upper'>
                    <div className='cart-upper-left'>

                        <CartSecOne subTotal = {subTotal}/>

                        <div className='headers'>
                            <p className='cart-title'>Shopping Cart</p>
                            <p className='price-tit'>Price</p>
                            <p className='quant-tit'>Quantity</p>
                        </div>

                        <div className='cart-upper-left-middle'>

                            { cartItems }

                        </div>
                        <div className='totally-total'><p>Subtotal: {itemNumber} (items): <span>${subTotal}</span></p></div>  

                        <p className='little-more-info'>The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. <span>Learn more</span>
                        <br></br>Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</p>

                        <AlsoBoughtCarousel />

                    </div>
                    <div className='cart-upper-right'>

                        <CartSummary checkoutCart = {this.checkoutCart} subTotal = {subTotal} itemNumber = {itemNumber}/>

                        <RecProducts />
                        
                    </div>
                </div>

               <AlsoBoughtCarousel2 />

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.all
    }
}

const mapDispatchToProps = dispatch => (
    {
        getCart: () => { dispatch(getCart()) },
        checkoutCart: () => {dispatch(checkoutCart())}
    }
);



export default connect(mapStateToProps, mapDispatchToProps)(Cart);
