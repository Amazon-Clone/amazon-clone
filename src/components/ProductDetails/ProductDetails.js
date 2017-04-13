import React, { Component } from 'react';
import { addToCart } from '../../actions/cart'
import ProdDetailsNav from './ProdDetailsNav/ProdDetailsNav.js'
import LeftPhotos from './ProductDetailsBody/LeftPhotos.js'
import MainPhoto from './ProductDetailsBody/MainPhoto.js'
import ProdInfo from './ProductDetailsBody/ProdInfo.js'
import RightProdMisc from './ProductDetailsBody/RightProdMisc.js'
import './productDetails.css'

class ProductDetails extends Component {


    render() {
        
        
        return (
            
            <div className='fonts'>
                <ProdDetailsNav/>
                <div className='ProdDetailsBody'>
                    <LeftPhotos/>
                    <MainPhoto/>
                    <ProdInfo/>
                    <RightProdMisc/>

                </div>
               
            </div>
        );
    }
}

export default ProductDetails;