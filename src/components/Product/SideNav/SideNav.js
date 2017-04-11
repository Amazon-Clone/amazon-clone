import React, { Component } from 'react';
import { Link } from 'react-router';
import './SideNav.css';
import SubCategories from './SubCategories/SubCategories.js';


class SideNav extends Component {


    render() {
        console.log(this.props.categories)

        var i = 0;

        var categories = this.props.categories.map(category => {
            return(
                <div key = {i++}>
                    <p className="categoryName">{category.categoryname}</p>
                    <SubCategories subcategories={category.subcategories}></SubCategories>
                </div>
            );
        });

        return (
            <div className="sideNav">
                <div className="categoryContainer">
                    <h3 className="categoryTitle">Show results for: </h3>
                    <div className="categoryNameContainer">
                        {categories}
                    </div>
                </div>
            </div>
        );
    }
}



export default SideNav;
