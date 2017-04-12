import React, { Component } from 'react';
import FooterFeature from './FooterFeature'
import FooterCondition from './FooterCondition'
import './FooterBottom.css'

class FooterBottom extends Component {
    render() {
        return (
            <div className='footer-bottom-container'>
                <FooterFeature/>
                <FooterCondition/>
            </div>
        );
    }
}

export default FooterBottom;