import React, { Component } from 'react';
import './FooterItem.css'

class FooterItem extends Component {
    render() {
        return (
            <div>
                <div className='footer-item-content'>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default FooterItem;