import React, { Component } from 'react';
import { Link } from 'react-router';
import './SubCategories.css';
import SubCategoryFilters from './SubCategoryFilters/SubCategoryFilters.js'

class SubCategories extends Component{

    render(){

        var subcategories = [];

        for(var key in this.props.subcategories){
            subcategories.push(
            <div key={key}>
                <p className="subCategoryName">{key}</p>
            </div>
            );
        }
        

        return(
        <div>
            {subcategories}
        </div>);
    }
}

export default SubCategories;