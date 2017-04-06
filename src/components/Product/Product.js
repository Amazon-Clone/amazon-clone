import React, { Component } from 'react';
import { Link } from 'react-router';
import './Product.css';
import Item from './Item/Item';
import SideNav from './SideNav/SideNav.js';

class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: ['Wallets', 'Home Theater'],
            products: [
                {
                    "productid": 1,
                    "categoryid": 1,
                    "productname": "Alpine Swiss Mens Wallet Leather Money Clip Thin Slim Front Pocket Wallet",
                    "productimage": "https://s3-us-west-1.amazonaws.com/amazon-clone/1_1_1.jpg",
                    "productprice": 11.99
                },

                {
                    "productid": 1,
                    "categoryid": 1,
                    "productname": "Alpine Swiss Mens Wallet Leather Money Clip Thin Slim Front Pocket Wallet",
                    "productimage": "https://s3-us-west-1.amazonaws.com/amazon-clone/1_1_1.jpg",
                    "productprice": 11.99
                },

                {
                    "productid": 1,
                    "categoryid": 1,
                    "productname": "Alpine Swiss Mens Wallet Leather Money Clip Thin Slim Front Pocket Wallet",
                    "productimage": "https://s3-us-west-1.amazonaws.com/amazon-clone/1_1_1.jpg",
                    "productprice": 11.99
                },

                {
                    "productid": 1,
                    "categoryid": 1,
                    "productname": "Alpine Swiss Mens Wallet Leather Money Clip Thin Slim Front Pocket Wallet",
                    "productimage": "https://s3-us-west-1.amazonaws.com/amazon-clone/1_1_1.jpg",
                    "productprice": 11.99
                },

            ]
        }
    }

    render() {

        var products = this.state.products.map(product => {
            return (
                <Item productid={product.productid} productname={product.productname} productimage={product.productimage} productprice={product.productprice}></Item>
            );
        });

        return (
            <div className='productContainer'>
                <div className='smallNav'>
                    <Link to='#' className='categoryParent'>Home Audio &amp; Theater</Link>
                </div>
                <div className="statusBar">
                    <p>Displaying <b>status</b> information</p>
                </div>
                <div className="mainBody">
                    <SideNav className="sideNav"></SideNav>
                    <div className="itemContainer">
                        {products}
                    </div>
                </div>
            </div >
        );
    }
}

export default Product;