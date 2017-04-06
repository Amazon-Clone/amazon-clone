import React, { Component } from 'react';
import { Link } from 'react-router';
import './Item.css';

class Item extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Item">
                <div className="itemPhotoContainer">
                    <img className="itemPhoto" src={this.props.productimage} alt=""/>
                </div>
                <div className="itemFlexContainer">
                    <div className = "itemTitleContainer">
                        <Link className="itemTitle">{this.props.productname}</Link>
                        <p className = "vendorText">By Whatever</p>
                    </div>
                    <div className="rightBoxContainer">
                        <div className = "firstBox">
                            <p className = "priceBox">$<sub>{Math.floor(this.props.productprice)}</sub> <sup>{Math.floor((this.props.productprice % 1) * 100)}</sup> </p>
                            <p className = "getByText">Get it by <span className="greenText"><b>Tommorrow, April 5</b></span></p>
                            <p className = "shipText">FREE Shipping on eligible orders</p>
                        </div>
                        
                        <div className="secondBox">
                            <p>More buying choices</p>
                            <p>5 stars</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;