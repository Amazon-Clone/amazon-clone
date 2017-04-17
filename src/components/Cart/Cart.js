import React, {Component} from 'react';
import {Link} from 'react-router';
import {getCart} from '../../actions/getCart.js';
import {connect} from 'react-redux';
import NgIf from './NgIf';

import SubTotal from './SubTotal/SubTotal'

class Cart extends Component{
    constructor(props){
        super(props);
        this.props.getCart();
    }

    render(){

        var cart = [{quantity:1, optionprice: 100}, {quantity: 2, optionprice: 200}, {quantity: 1, optionprice: 100}]

        console.log(this.props.cartItems);

        return(<SubTotal></SubTotal>);
    }

}


function mapStateToProps(state){
    return{
        cartItems: state.cart.all
    }
}

const mapDispatchToProps = dispatch => (
    {
        getCart: () => {dispatch(getCart())}
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);