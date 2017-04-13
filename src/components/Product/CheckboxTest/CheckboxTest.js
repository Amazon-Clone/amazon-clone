import React, {Component} from 'react';

class CheckboxTest extends Component{

    constructor(props){
        super(props);

        this.state = ({value: ''});
    }

    handleChange(event){
        console.log(event.value);
    }

    render(){

        return(
            <div>
                <input type="checkbox" onChange={this.handleChange} value={this.state.value}/>
            </div>
        );
    }
}

export default CheckboxTest;