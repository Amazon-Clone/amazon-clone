import React, { Component } from 'react';
import { Link } from 'react-router';
import './Product.css';

class Product extends Component {
    render() {
        return (
            <div className='productContainer'>
                <div className='smallNav'>
                    <Link to='#' className='categoryParent'>Home Audio &amp; Theater</Link>
                    <Link to='#' className='categoryGroup'>Premium Audio</Link>
                    <Link to='#' className='categoryGroup'>Headphones</Link>
                    <Link to='#' className='categoryGroup'>Home Theatre Systems</Link>
                    <Link to='#' className='categoryGroup'>Speakers</Link>
                    <Link to='#' className='categoryGroup'>Wireless Audio</Link>
                    <Link to='#' className='categoryGroup'>Stereo Systems Components</Link>
                    <Link to='#' className='categoryGroup'>Accesories</Link>
                    <Link to='#' className='categoryGroup'>Deals</Link>
                </div>
                <div className="statusBar">
                    <p>Displaying <b>status</b> information</p>
                </div>
                <div className="mainBody">

                </div>
            </div >
        );
    }
}

export default Product;