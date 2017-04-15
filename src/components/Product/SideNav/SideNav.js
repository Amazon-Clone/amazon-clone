import React, { Component } from 'react';
import { Link } from 'react-router';
import './SideNav.css';
import SubCategories from './SubCategories/SubCategories.js';
import SubCategoryFilters from './SubCategories/SubCategoryFilters/SubCategoryFilters.js'


class SideNav extends Component {

    render() {
        var i = 0;

        var categories = this.props.categories.map(category => {
            return(
                <div key = {i++}>
                    <p className="categoryName">{category.categoryname}</p>
                    <SubCategories subcategories={category.subcategories}></SubCategories>
                </div>
            );
        });

        var subcategoryfilters = [];
        
        this.props.categories.forEach(category => {

            for(var key in category.subcategories){
                subcategoryfilters.push(
                    <div key = {i++}>
                        <SubCategoryFilters handleCheckbox={this.props.handleCheckbox} subcategoryfilters = {category.subcategories[key]}></SubCategoryFilters>
                    </div>
                );
            }
        });


        return (
            <div className="sideNav">
                <div className="categoryContainer">
                    <h3 className="categoryTitle">Show results for: </h3>
                    <div className="categoryNameContainer">
                        {categories}
                    </div>
                </div>
                <div className ="sideNavBot">
                    <h3 className="categoryTitle">Refine By</h3>
                    <div className="commonFilter">
                        <input onChange={this.props.handleCheckboxSetState} value="productprime" type="checkbox"/>
                        <img className="primeLogo" src="https://s3-us-west-1.amazonaws.com/amazon-clone/logos/amazonprimelogo.jpg"/>
                    </div>
                    <div className="commonFilter">
                        <input onChange={this.props.handleCheckboxSetState} value="productfreeshipping" type="checkbox"/>
                        <p>Free Shipping by Amazon</p>
                    </div>
                    <div className = "subCategoryFiltersContainer">
                        {subcategoryfilters}
                    </div>
                    <div className="priceFilter">
                        <h3>Price</h3>
                        <button className="priceOption" value={0} onClick = {this.props.handleSetState}>Under $25</button>
                        <button className="priceOption" value={1} onClick = {this.props.handleSetState}>$25 to $50</button>
                        <button className="priceOption" value={2} onClick = {this.props.handleSetState}>$50 to $100</button>
                        <button className="priceOption" value={3} onClick = {this.props.handleSetState}>$100 to $200</button>
                        <button className="priceOption" value={4} onClick = {this.props.handleSetState}>$200 and above</button>
                        $<input className="priceBox" type="text"></input> to $<input className="priceBox" type="text"></input>
                    </div>
                </div>

                
            </div>
        );
    }
}



export default SideNav;
