import React, { Component } from 'react';
import { Link } from 'react-router';
import NgIf from './NgIf.js';
import SpecBox from './SpecBox/SpecBox.js'

import './Item.css';


class Item extends Component {

    constructor(props) {
        super(props);
    }

    render(){

        var d = new Date();
        d.setDate(d.getDate() + 1);
        var weekday = new Array(7);
        weekday[0] =  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        var n = weekday[d.getDay()];
        var datee = new Date(), locale = "en-us", month = d.toLocaleString(locale, { month: "long" });
        var guaranteeDeliv = (month + ' ' + d.getDate())


        return (
            <div className="Item">
                <div className="itemPhotoContainer">
                    <img className="itemPhoto" src={this.props.productimageurl} alt="" />
                </div>

                <div className="itemFlexContainer">
                    <div className="itemTitleContainer">
                        <Link to={"/product/" + this.props.productid} className="itemTitle">{this.props.productname}</Link>
                        <p className="vendorText">{this.props.productbrand}</p>
                    </div>
                    
                    <div className="rightBoxContainer">
                        <div className="firstBox">
                            <div className="firstRowBox">

                                <p className="priceBox">$<sub>{Math.floor(this.props.productprice)}</sub> <sup>{Math.floor((this.props.productprice % 1) * 100)}</sup> </p>

                                <NgIf show={this.props.productprime}><img id="primeLogo" src="https://s3-us-west-1.amazonaws.com/amazon-clone/logos/amazonprimelogo.jpg"></img></NgIf>
                                <p className="getByText">Get it by <span className="greenText"><b>Tommorrow, {guaranteeDeliv}</b></span></p>
                                <NgIf show={this.props.productfreeshipping}><p className="shipText">FREE Shipping on eligible orders</p></NgIf>
                            </div>

                            <div className="secondBox">
                                <p>More buying choices</p>
                                <p>5 stars</p>
                            </div>
                        </div>
                        <SpecBox className="specBox" productspectext={this.props.productspectext}></SpecBox>
                    </div>
                </div>
            </div>
                );
    }
}

export default Item;