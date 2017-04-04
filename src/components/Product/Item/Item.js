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
                <div className="itemPhoto">
                    {/*<img src="" alt=""/>*/}
                </div>
                <div className="itemFlexContainer">
                    <div className = "itemTitleContainer">
                        <Link className="itemTitle">Some title</Link>
                        <p>By Whatever</p>
                    </div>
                    <div className="leftBoxContainer">
                        <p>123.456</p>
                        <p>Get it by asd123</p>
                        <p>Shipping info 123</p>
                        <p>More buying choices</p>
                        <p>5 stars</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Item;