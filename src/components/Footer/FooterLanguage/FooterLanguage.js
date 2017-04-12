import React, { Component } from 'react';
import './FooterLanguage.css'

class FooterLanguage extends Component {
    render() {
        return (
            <div className='footer-language-container'>
                <div className='footer-language-box'>
                    <div className='footer-center-box'>
                        <div className='footer-language-logo'></div>
                        <div className='footer-right-center'>
                            <a href='#' className='footer-language-selector'>
                                <div className='footer-globe'></div>
                                <p>English</p>
                                <span className='footer-language-arrow'></span>
                            </a>
                            <a href='#' className='footer-country-selector'>
                                <div className='footer-country-flag'></div>
                                <p>United States</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterLanguage;