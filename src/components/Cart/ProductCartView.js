import React, { Component } from 'react';
import './ProductCartView.css'

class ProductCartView extends Component {
    render() {
        return (
            <div className='product-cart-view-body'>
                <div className='pikcha-holer'><div className='pikcha' ></div></div>
                <div className='product-yo-mama'>
                    <h3>Samsung Electronics UN65MU8000 65-Inch 4K Ultra HD Smart LED TV (2017 Model) <span>by Samsung</span></h3>
                    <h4>In Stock</h4>
                    <h6>Eligible for FREE Shipping</h6>
                    <div className='disflex'><input type="checkbox"/><h6>This is a gift <span>Learn more</span></h6></div>
                    <div className='disflex moblu'><h6>Delete</h6>|<h6>Save for later</h6></div>
                </div>
                <div>
                    <h3 className='money-pr'>$2,197.99</h3>
                </div>
                <div>
                    <input className='binput-typ' type="number" value='1'/>
                </div>
            </div>
        );
    }
}

export default ProductCartView;