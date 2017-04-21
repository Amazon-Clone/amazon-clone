import React, { Component } from 'react';
import './ProductCartView.css'

class ProductCartView extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className='product-cart-view-body'>
                <div className='pikcha-holer'><img src={this.props.cartItem.optionimageurl[1]}className='pikcha' ></img></div>
                <div className='product-yo-mama'>
                    <h3>{this.props.cartItem.productname + ' ' + this.props.cartItem.optionname} <span>by {this.props.cartItem.productbrand}</span></h3>
                    <h4>In Stock</h4>
                    <h6>{this.props.cartItem.productfreeshipping? 'Eligible for FREE Shipping' : ''}</h6>
                    <div className='disflex'><input type="checkbox"/><h6>This is a gift <span>Learn more</span></h6></div>
                    <div className='disflex moblu'><h6 onClick = {this.props.deleteCartItem.bind(this, this.props.cartItem.optionid)}>Delete</h6>|<h6>Save for later</h6></div>
                </div>
                <div>
                    <h3 className='money-pr'>${this.props.cartItem.optionprice}</h3>
                </div>
                <div>
                    <select name="" id="" value={this.props.cartItem.quantity} onChange={this.props.quantityChange.bind(this, this.props.cartItem.optionid)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default ProductCartView;