import React, {Component} from 'react';

class SubTotal extends Component{

    constructor(props){
        super(props);
        this.state = {quantity: 1}
    }

    render(){
        
        console.log(this.props);

        var quantity = this.state.quantity;
        
        return (
        <div>
            <b>Subtotal ({quantity} item):</b>
        </div>
        );
    }
}

export default SubTotal;