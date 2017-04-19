import React, { Component } from 'react';
import { addToCart } from '../../actions/cart'
import ProdDetailsNav from './ProdDetailsNav/ProdDetailsNav.js'
import LeftPhotos from './ProductDetailsBody/LeftPhotos.js'
import MainPhoto from './ProductDetailsBody/MainPhoto.js'
import ProdInfo from './ProductDetailsBody/ProdInfo.js'
import RightProdMisc from './ProductDetailsBody/RightProdMisc.js'
import './productDetails.css'

class ProductDetails extends Component {

    constructor(props){
        super(props);

        this.getChildState.bind(this);
    }


    getChildState(stateObj){
        this.setState(Object.assign({}, this.state, stateObj));

        console.log('parentStateObj', stateObj);
    }


    render() {
        
        

        
        return (
            
            <div className='fonts'>
                <ProdDetailsNav/>
                <div className='ProdDetailsBody'>
                    <LeftPhotos urlParams={this.props.params}/>
                    <MainPhoto urlParams={this.props.params}/>
                    <ProdInfo getChildState={this.getChildState} urlParams={this.props.params}/>
                    <RightProdMisc urlParams={this.props.params}/>

                </div>
               
            </div>
        );
    }
}

export default ProductDetails;