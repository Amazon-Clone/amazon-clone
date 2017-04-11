import React, { Component } from 'react';
import { addToCart } from '../../actions/cart'

class ProductDetails extends Component {
constructor(props){
    super(props)
    this.state = { 
        productid: 5
    }
}
submitAdd(){
    addToCart(this.state.productid)
}
    render() {
        
        
        return (
            
            <div>
                ProductDetails working
                <button type="" onclick={this.submitAdd}></button>
            </div>
        );
    }
}

export default ProductDetails;