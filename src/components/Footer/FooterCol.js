import React, { Component } from 'react';
import './FooterCol.css'

class FooterCol extends Component {
    render() {
        var linkList = [];

        for (let i = 0; i < this.props.linkList.length; i++) {
            linkList.push(
                <a href='#' key={i}>{this.props.linkList[i]}</a>
            )
        }
        return (
            <div>
                <div className='footer-nav-link-col'>
                    <div className='footer-link-title'>         {this.props.title}
                    </div>
                    {linkList}
                </div>                
            </div>
        );
    }
}

export default FooterCol;