import React, { Component } from 'react';
import FooterFeature from './FooterFeature'
import './FooterBottom.css'

class FooterBottom extends Component {
    render() {
        return (
            <div className='footer-bottom-container'>
                <FooterFeature/>
            </div>
        );
    }
}

export default FooterBottom;