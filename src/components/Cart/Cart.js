import React, { Component } from 'react';
import './Cart.css'
import ProductCartView from './ProductCartView'
import CartSecOne from './CartSecOne'
import AlsoBought from './AlsoBought'
import CartSummary from './CartSummary'
import RecProducts from './RecProducts'
import AlsoBoughtCarousel from './AlsoBoughtCarousel'
import AlsoBoughtCarousel2 from './AlsoBoughtCarousel2'
import { getCart } from '../../actions/getCart'
import { connect } from 'react-redux'

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }

        this.props.getCart()
    }

    componentWillUpdate(){
        if(this.props.cart && Array.isArray(this.props.cart)){
            var stateObj = {cart: this.props.cart};
            
            console.log('we are update');

            this.setState({}, stateObj);
        }
    }

    render() {

        var cartItems = this.state.cart? this.state.cart.map(function(cartItem) {
            return (<ProductCartView cartObject={cartItem}/>)
        }):[];
        
        console.log(this.props.cart)
        return (
            <div className='cart-body'>
                <div className='cart-upper'>
                    <div className='cart-upper-left'>

                        <CartSecOne />

                        <div className='headers'>
                            <p className='cart-title'>Shopping Cart</p>
                            <p className='price-tit'>Price</p>
                            <p className='quant-tit'>Quantity</p>
                        </div>

                        <div className='cart-upper-left-middle'>

                            { cartItems }

                        </div>
                        <div className='totally-total'><p>Subtotal: 1 (items): <span>$5</span></p></div>  

                        <p className='little-more-info'>The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. <span>Learn more</span>
                        <br></br>Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</p>

                        <AlsoBoughtCarousel />

                    </div>
                    <div className='cart-upper-right'>

                        <CartSummary />

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
    }
);



export default connect(mapStateToProps, mapDispatchToProps)(Cart);
