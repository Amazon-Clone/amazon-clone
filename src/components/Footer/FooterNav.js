import React, { Component } from 'react';
import FooterCol from './FooterCol'
 
import './FooterNav.css'

class FooterNav extends Component {
  constructor(props) {
    super(props)

    this.state = {

      KnowUs: ['Careers', 'About Amazon', 'Investor Relations', 'Amazon Devices'],
      MakeMoney: ['Sell on Amazon', 'Sell Your Services on Amazon', 'Sell on Amazon Business', 'Sell Your Apps on Amazon', 'Become an Affiliate', 'Advertise Your Products', 'Self-Publish with Us', 'Become an Amazon Vendor', '> See all'],
      Payment: ['Amazon Rewards Visa Signature Cards', 'Amazon.com Store Card', 'Amazon.com Corporate Credit Line', 'Shop with Points', 'Credit Card Marketplace', 'Reload Your Balance', 'Amazon Currency Converter'],
      Help: ['Your Account', 'Your Orders', 'Shipping Rates & Policies', 'Amazon Prime', 'Returns & Replacements', 'Manage Your Content and Devices', 'Amazon Assistant', 'Help']

    }

  }   
    render() {
        return (
            <div className='footer-nav-container'>
                    <div className='footer-inner-container'>
                        <FooterCol
                            title='Get to Know Us'
                            linkList={this.state.KnowUs}
                        />
                        <FooterCol
                            title='Make Money with Us'
                            linkList={this.state.MakeMoney}
                        />
                        <FooterCol
                            title='Amazon Payment Products'
                            linkList={this.state.Payment}
                        />
                        <FooterCol
                            title='Let Us Help You'
                            linkList={this.state.Help}
                        />
                </div>
            </div>
        );
    }
}

export default FooterNav;