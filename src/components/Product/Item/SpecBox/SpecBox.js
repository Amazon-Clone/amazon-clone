import React, {Component} from 'react';

class SpecBox extends Component{
    render(){

        var specs = [];

        for(var key in this.props.productspectext){

            specs.push((<li key={key}>{key} <b>{this.props.productspectext[key]}</b></li>));
        }

        return(<div className = "specBox">
                 <ul>
                     {specs}
                 </ul>
                </div>);
    }
}


export default SpecBox;


