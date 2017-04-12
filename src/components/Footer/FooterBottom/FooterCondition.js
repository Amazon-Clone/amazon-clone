import React, { Component } from 'react';
import './FooterCondition.css'

class FooterCondition extends Component {
    render() {
        return (
            <div className='footer-condition-container'>
                <a href='#'>Conditions of Use</a>
                <a href='#'>Privacy Notice</a>
                <a href='#'>Internet-Based Ads</a>
                <p>© 1996-2017, Amazon.com, Inc. or its affiliates</p>
            </div>
        );
    }
}

export default FooterCondition;