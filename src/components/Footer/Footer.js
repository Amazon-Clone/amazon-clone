import React, { Component } from 'react';
import FooterNav from './FooterNav/FooterNav';
import FooterLanguage from './FooterLanguage/FooterLanguage';
import FooterBottom from './FooterBottom/FooterBottom'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer>
                <a href='#'>
                    <div className='footer-back-top'>
                        <p>Back to top</p>
                    </div>
                </a>
                <FooterNav/>
                <FooterLanguage/>
                <FooterBottom/>
            </footer>
        );
    }
}

export default Footer;