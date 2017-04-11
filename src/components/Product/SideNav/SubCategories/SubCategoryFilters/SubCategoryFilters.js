import React, { Component } from 'react';
import { Link } from 'react-router';
import './SubCategoryFilters.css';
import SubCategoryFilterOptions from './SubCategoryFilterOptions/SubCategoryFilterOptions.js'

class SubCategoryFilters extends Component{

    render(){

        var subCategoryFilters = [];

        for(var key in this.props.subcategoryfilters){
            subCategoryFilters.push(
            <div key={key}>
                <p className="subCategoryName">{key}</p>
                <SubCategoryFilterOptions subcategoryfilteroptions={this.props.subcategoryfilters[key]}></SubCategoryFilterOptions>
            </div>
            );
        }

        return(
            <div>{subCategoryFilters}</div>
        );
    }
}

export default SubCategoryFilters;