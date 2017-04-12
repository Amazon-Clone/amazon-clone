import React, { Component } from 'react';
import { Link } from 'react-router';
import './SubCategoryFilters.css';
import SubCategoryFilterOptions from './SubCategoryFilterOptions/SubCategoryFilterOptions.js';

class SubCategoryFilters extends Component{

    render(){

        var subCategoryFilters = [];

        for(var key in this.props.subcategoryfilters){
            subCategoryFilters.push(
            <div className="subCategoryFilter" key={key}>
                <p className="subCategoryFilterName">{key}</p>
                <div className="subCategoryFilterFlexBox"><input id="checkBox" type="checkbox"/><SubCategoryFilterOptions className = "subCategoryFilterOptions"subcategoryfilteroptions={this.props.subcategoryfilters[key]}></SubCategoryFilterOptions></div>
            </div>
            );
        }

        return(
            <div>{subCategoryFilters}</div>
        );
    }
}

export default SubCategoryFilters;
