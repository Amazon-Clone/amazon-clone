import React, {Component} from 'react';


class SubCategoryFilterOptions extends Component{
    render(){


        var subCategoryFilterOptions = [];

        for(var key in this.props.subcategoryfilteroptions){
            subCategoryFilterOptions.push(
            <div key={key}>
                <p className="subCategoryName">{key} <span>({this.props.subcategoryfilteroptions[key]})</span></p>
            </div>
            );
        }

        return(<div>{subCategoryFilterOptions}</div>);
    }
}

export default SubCategoryFilterOptions;