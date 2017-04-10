import React, { Component } from 'react';
import { addToCart } from '/../../actions/cart'

class ProductDetails extends Component {
constructor(props){
    super(props)
    this.state = { 
        productid: 5
    }
}
submitAdd = function(productid){
    addToCart(productid)
}
    render() {
        
        functi
        return (
            
            <div>
                ProductDetails working
                <button type="" onclick={this.submitAdd}></button>
            </div>
        );
    }
}

export default ProductDetails;