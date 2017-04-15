import React, { Component } from 'react';
import { getOneProduct } from '../../../actions/products';
import { connect } from 'react-redux';

class MainPhoto extends Component {
       constructor(props){
        super(props);
        
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.product)
    }
    
    componentDidMount(){
        console.log("testing", this.props.urlParams)
        getOneProduct(this.props.urlParams.id).payload
        .then(product => {
            this.setState({product: product.data})
        })
    }

    render() {
        const option = 0;

        return (
            <div>
                {/*<h1 className='prodTitle'>{this.state ? this.state.product[option].productname: null}</h1>*/}
                
                <img src={this.state ? this.state.product[option].optionimageurl[3]: null} className='mainPhoto'></img>
           </div>
            
        );
    }
}

export default MainPhoto;