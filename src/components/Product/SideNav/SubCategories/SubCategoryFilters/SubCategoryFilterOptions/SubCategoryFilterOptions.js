import React, {Component} from 'react';


class SubCategoryFilterOptions extends Component{
    render(){


        var subCategoryFilterOptions = [];

        for(var key in this.props.subcategoryfilteroptions){
            subCategoryFilterOptions.push(
                <p className="subCategoryFilterOptionName" key={key}>{key} <span>({this.props.subcategoryfilteroptions[key]})</span></p>
            );
        }

        return(<span>{subCategoryFilterOptions}</span>);
    }
}

export default SubCategoryFilterOptions;