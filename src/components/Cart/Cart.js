import React, { Component } from 'react';
import './Cart.css'
import ProductCartView from './ProductCartView'
import CartSecOne from './CartSecOne'
import AlsoBought from './AlsoBought'
import CartSummary from './CartSummary'
import RecProducts from './RecProducts'
import AlsoBoughtCarousel from './AlsoBoughtCarousel'
import AlsoBoughtCarousel2 from './AlsoBoughtCarousel2'

class Cart extends Component {
    render() {
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

                            <ProductCartView />

                        </div>
                        <div className='totally-total'><p>Subtotal: (4 items): <span>$8,956.77</span></p></div>  

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

export default Cart;