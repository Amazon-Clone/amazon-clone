import React, { Component } from 'react';
import { Link } from 'react-router';
import { getStoreProducts } from '../../actions/products';
import { getStoreCategories } from '../../actions/getStoreCategories.js';
import './Product.css';
import Item from './Item/Item';
import SideNav from './SideNav/SideNav.js';
import { connect } from 'react-redux';
var _ = require('lodash');

class Product extends Component {

    constructor(props) {
        super(props);

        this.props.getStoreProducts();
        this.props.getStoreCategories();

        this.state = { filteroptions: ['Smart TV'] };
    }

    render() {

        var i = 0;

        console.log('my state', this.state);
        console.log('my props', this.props);


        var products = this.props.products;

        this.state.filteroptions.forEach(function (filteroption) {

            products = products.filter(function (element) {

                var options = _.values(element.subcategoryfilteroptions);

                if (_.includes(options, filteroption))
                    return true;
            })
        });

        products = products.map(product => {
            return (
                <Item key={i++} productid={product.productid} productbrand={product.productbrand} productname={product.productname} productprime={product.productprime} productfreeshipping={product.productfreeshipping} productspectext={product.productspectext} productcategory={product.productcategory} productsubcategory={product.productsubcategory} productfilteroptions={product.productfilteroptions} productimageurl={product.productimageurl} productprice={product.productprice} productlastprice={product.productlastprice}></Item>
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
                    <SideNav className="sideNav" categories={this.props.categories}></SideNav>
                    <div className="itemContainer">
                        {products}
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {

    return {
        products: state.store.all,
        categories: state.categories.all
    }
}

const mapDispatchToProps = dispatch => (
    {
        getStoreProducts: () => { dispatch(getStoreProducts()) },
        getStoreCategories: () => { dispatch(getStoreCategories()) }
    }
);


export default connect(mapStateToProps, { getStoreProducts, getStoreCategories })(Product);