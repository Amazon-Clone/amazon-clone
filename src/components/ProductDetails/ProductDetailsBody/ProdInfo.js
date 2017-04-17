import React, { Component } from 'react';
import { getOneProduct } from '../../../actions/products';
import { connect } from 'react-redux';

class ProdInfo extends Component {
    constructor(props){
        super(props);
        
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.product)
    }

    changeOption(number){
        this.setState(Object.assign({}, this.state, {defaultOption: this.state.product[number]}))
    }
    
    
    componentDidMount(){
        console.log("testing", this.props.urlParams)
        getOneProduct(this.props.urlParams.id).payload
        .then(product => {
            this.setState({
            product: product.data,
            defaultOption: product.data[0]})
        })

    }
//     handleClick() {
//     this.setState({option: this.state.option = 1});
//   }

    render() {
        console.log("props",this.props)
        // const product = this.state.product[0];
        

        function create(){
            var i = 0;

            return function(product){
                return(
                    <div key={i} className='sizeBoxChild' onClick={this.changeOption.bind(this, i++)}>
                        <h2>{product.optionname}</h2>
                        <h2 className='boxPrice'>{product.optionprice}</h2>
                    </div>
                )
            }
        }
        
        var buttons = [];


        buttons = this.state? this.state.product.map(create().bind(this)) : [];
        
        return (
            
                <div className='prodInfoMain'>
                    {/*fill in with dummy data*/}
                    <a className="blueATag">{this.state ? this.state.defaultOption.productbrand: null}</a>
                    <h1 className='prodTitle'>{this.state ? this.state.defaultOption.productname: null}</h1>
                    {/*<h1 className='prodTitle'>LG Electronics 65UH9500 65-Inch 4K Ultra HD Smart LED TV (2016 Model)</h1>*/}
                    <div className='reviews'>
                        <div className="starMain">
                            <div className='stars'></div>
                            <div className='starArrow'></div>
                        </div>
                        <a  className='blueATag marg'> 268 customer reviews</a>
                        <a  className='blueATag'> 277 answered questions</a>
                    </div>
                    <h2 className='otherSellers'>Price: <a className='priceRed'> {this.state ? this.state.defaultOption.optionprice: null}</a></h2>
                    <div className='flexOnly pad'>
                        <h2 className='sizeGrey'>Size: </h2>
                        <h2 className='sizeBlack'>{this.state ? this.state.defaultOption.optionname: null}</h2>
                    </div>
                    <div className='sizeBoxParent'>
                        {buttons}
                    </div>
                    <div className='flexOnly pad'>
                        <h2 className='sizeGrey'>Style: </h2>
                        <h2 className='sizeBlack'>TV</h2>
                    </div>
                    <hr/> 
                    <ul className='bullets pad'>
                        <li className='listBullet'>Smart Functionality: Yes - web OS 3.0</li>
                        <li className='listBullet'>Dimensions (W x H x D): TV without stand: {this.state ? this.state.defaultOption.optiondimensions: null}, TV with stand: 57.1" x 34.7" x 8.9"</li>
                        <li className='listBullet'>Inputs: 4 HMDI, 3 USB, 1 RF, 1 Component, 1 Composite, 1 Optical, 1 RS232C, 1 Ethernet</li>
                        <li className='listBullet'>HDR Enhanced Display</li>
                        <a href='' className='blueATag'>See more product details</a>
                    </ul>

                
                    <a className='blueATag'>Used & new (39) from $399.00 + $41.49 shipping </a>
                        
                    <div className='flexOnly lineSpace'>
                        <div className='messageIcon'></div>

                    <a className='blueATag'> Report incorrect product information.</a>
                    </div>
                    <h2 className='pack'>This item’s packaging will indicate what is inside and cannot be hidden.</h2>

                </div>
        );
    }
}

function mapStateToProps(state){
    return {
        products: state.store.all,
        product: state.store.post
    }
}

export default connect(mapStateToProps, { getOneProduct }) (ProdInfo);