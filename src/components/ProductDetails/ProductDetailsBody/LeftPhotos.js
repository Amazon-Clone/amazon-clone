import React, { Component } from 'react';
import { getOneProduct } from '../../../actions/products';
import { connect } from 'react-redux';
// import '../productDetails.css'

class LeftPhoto extends Component {
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
            <div className='leftPhotosMain'>
                <img src={this.state ? this.state.product[option].optionimageurl[0]: null} className='prodPhotos'></img>
                <img src={this.state ? this.state.product[option].optionimageurl[1]: null} className='prodPhotos'></img>
                <img src={this.state ? this.state.product[option].optionimageurl[2]: null} className='prodPhotos'></img>
                <img src={this.state ? this.state.product[option].optionimageurl[3]: null} className='prodPhotos'></img>
                <img src={this.state ? this.state.product[option].optionimageurl[4]: null} className='prodPhotos'></img>
                <img src={this.state ? this.state.product[option].optionimageurl[5]: null} className='prodPhotos'></img>
                <img src={this.state ? this.state.product[option].optionimageurl[6]: null} className='prodPhotos'></img>
            </div>
        );
    }
}

export default LeftPhoto;