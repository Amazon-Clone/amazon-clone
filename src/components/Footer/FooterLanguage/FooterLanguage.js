import React, { Component } from 'react';
import './FooterLanguage.css'

class FooterLanguage extends Component {
    render() {
        return (
            <div className='footer-language-container'>
                <div className='footer-language-box'>
                    <div className='footer-center-box'>
                        <div className='footer-amazon-logo'></div>
                        <a href='#' className='footer-language-selector'></a>
                        <a href='#' className='footer-country-selector'></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterLanguage;