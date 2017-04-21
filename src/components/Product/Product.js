import React, { Component } from 'react';
import { Link } from 'react-router';
import { getStoreProducts } from '../../actions/products';
import { getStoreCategories } from '../../actions/getStoreCategories.js';
import './Product.css';
import Item from './Item/Item';
import SideNav from './SideNav/SideNav.js';
import { connect } from 'react-redux';
import RecProducts from '../Cart/RecProducts'

var _ = require('lodash');

class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            limitOptionObjs: [
                { lowerLimit: 0, upperLimit: 25 },
                { lowerLimit: 25, upperLimit: 50 },
                { lowerLimit: 50, upperLimit: 100 },
                { lowerLimit: 100, upperLimit: 200 },
                { lowerLimit: 200, upperLimit: 9999 }
            ],
            subcategoryfilteroptions: {},
            currentlimit: {lowerLimit: 0, upperLimit:9999},
        };

        this.props.getStoreProducts();
        this.props.getStoreCategories();

        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleCheckboxSetState = this.handleCheckboxSetState.bind(this);
        this.handleSetState = this.handleSetState.bind(this);
    }

    handleSetState(event) {

        var stateObj = {currentlimit: this.state.limitOptionObjs[Number(event.target.value)]};
        this.setState(Object.assign({}, this.state, stateObj));

        console.log(this.state.currentlimit);
    }

    handleCheckboxSetState(event) {

        var key = event.target.value;
        var tempObj = {};

        if (!this.state[key]) {
            tempObj[key] = true;
        } else {
            tempObj[key] = false;
        }

        this.setState(Object.assign({}, this.state, tempObj));

        console.log(this.state);
    }


    handleCheckbox(event) {
        var key = event.target.value;

        var tempObj = { subcategoryfilteroptions: {} };

        if (!this.state.subcategoryfilteroptions[key]) {
            tempObj.subcategoryfilteroptions[key] = true;
        } else {
            tempObj.subcategoryfilteroptions[key] = false;
        }

        tempObj.subcategoryfilteroptions = Object.assign(this.state.subcategoryfilteroptions, tempObj.subcategoryfilteroptions);
        this.setState(Object.assign({}, this.state, tempObj));

        console.log(this.state);
    }

    subCategoryFilterOptionsFromCategoryObjArr(categoryArr) {
        var subCategoryFilterOptions = {};

        categoryArr.forEach(function (category) {

            for (var iKey in category.subcategories) {
                for (var jKey in category.subcategories[iKey]) {
                    for (var kKey in category.subcategories[iKey][jKey])
                        subCategoryFilterOptions[kKey] = false;
                }
            }
        });

        return subCategoryFilterOptions;
    }

    componentDidUpdate() {
        if (!this.props.categories && Array.isArray(this.props.categories) && this.props.categories.length > 0) {
            this.setState({ subcategoryfilteroptions: this.subCategoryFilterOptionsFromCategoryObjArr(this.props.categories) });
        }
    }

    render() {

        var i = 0;

        var products = this.props.products;

        var subCategoryFilterByOptions = Object.keys(_.pickBy(this.state.subcategoryfilteroptions, function (value, key) {
            return value;
        }));

        products = products.filter(function (product) {

            for (var i = 0; i < subCategoryFilterByOptions.length; i++) {
                if (!_.includes(product.subcategoryfilteroptions, subCategoryFilterByOptions[i])) {
                    return false;
                }
            }

            if(this.state.productprime && !product.productprime)
                return false;
            else if(this.state.productfreeshipping && !product.productfreeshipping)
                return false;
            else if(this.state.currentlimit.lowerLimit > product.productprice || this.state.currentlimit.upperLimit < product.productprice)
                return false;

            return true;
        }.bind(this));


        var products = products.map(product => {
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
                <div className='modified-wrap'>
                    <div className="mainBody">
                        <SideNav className="sideNav" handleSetState={this.handleSetState} handleCheckboxSetState={this.handleCheckboxSetState} handleCheckbox={this.handleCheckbox} categories={this.props.categories}></SideNav>
                        <div className="itemContainer">
                            {products}
                            {products}
                            {products}

                        </div>
                    </div>
                    <div className='put-some-pad'>
                    <RecProducts/>
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