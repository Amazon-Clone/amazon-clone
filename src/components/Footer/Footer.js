import React, { Component } from 'react';
import FooterNav from './FooterNav/FooterNav'
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
            </footer>
        );
    }
}

export default Footer;