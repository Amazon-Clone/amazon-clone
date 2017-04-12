import React, { Component } from 'react';
import FooterItem from './FooterItem'
import './FooterFeature.css'

class FooterFeature extends Component {
    render() {
        return (
            <div className='footer-feature-container'>
                <div className='footer-feature-center'> 
                    <div className='footer-item-col'>
                        <FooterItem title='Amazon Drive' description='Unlimited Cloud Storage From Amazon'/>
                        <FooterItem title='AmazonGlobal' description='Ship Orders Internationally'/>
                        <FooterItem title='Audible' description='Download Audio Books'/>
                        <FooterItem title='Fabric' description='Sewing, Quilting & Knitting'/>
                        <FooterItem title='Shopbop' description='Designer Fashion Brands'/>
                    </div>
                    <div className='footer-item-col'>
                        <FooterItem title='6pm' description='Score deals on fashion brands'/>
                        <FooterItem title='Home Services' description='Handpicked Pros Happiness Guarantee'/>
                        <FooterItem title='Book Despository' description='Books with Free Delivery Worldwide'/>
                        <FooterItem title='Goodreads' description='Book reviews & recommendations'/>
                        <FooterItem title='TenMarks.com' description='Math Activities for Kids & Schools'/>
                    </div>
                    <div className='footer-item-col'>
                        <FooterItem title='AbeBooks' description='Books, art & collectibles'/>
                        <FooterItem title='Amazon Inspire' description='Free Digital Educational Resources'/>
                        <FooterItem title='Box Office Mojo' description='Find Movie Box Office Data'/>
                        <FooterItem title='IMDb' description='Movies, TV & Celebrities'/>
                        <FooterItem title='Warehouse Deals' description='Open-Box Discounts'/>
                    </div>
                    <div className='footer-item-col'>
                        <FooterItem title='ACX' description='Audiobook Publishing Made Easy'/>
                        <FooterItem title='Amazon Rapids' description='Fun stories for kids on the go'/>
                        <FooterItem title='ComiXology' description='Thousands of Digital Comic'/>
                        <FooterItem title='IMDb Pro' description='Get Info Entertainment Professionals Needs'/>
                        <FooterItem title='Whispercast' description='Discover & Distribute Digital Content'/>
                    </div>
                    <div className='footer-item-col'>
                        <FooterItem title='Alexa' description='Actionable Analytics for the Web'/>
                        <FooterItem title='Amazon Restraunts' description='Food delivery from local Restaurants'/>
                        <FooterItem title='CreateSpace' description='Indie Print Publishing Made Easy'/>
                        <FooterItem title='Junglee.com' description='Shop Online in India'/>
                        <FooterItem title='Withoutabox' description='Submit to Film Festivals'/>
                    </div>
                    <div className='footer-item-col'>
                        <FooterItem title='Amazon Business' description='Everything For Your Business'/>
                        <FooterItem title='Amazon Video Direct' description='Video Distribution Made Easy'/>
                        <FooterItem title='DPReview' description='Digital Photography'/>
                        <FooterItem title='Kindle Direct Publishing' description='Indie Digital Publishing Made Easy'/>
                        <FooterItem title='Woot!' description='Deals and Shenanigans'/>
                    </div>
                    <div className='footer-item-col'>
                        <FooterItem title='Amazon Fresh' description='Groceries & More Right To Your Door'/>
                        <FooterItem title='Amazon Web Services' description='Scalable Cloud Computing Services'/>
                        <FooterItem title='East Dane' description='Designer Mens Fashion'/>
                        <FooterItem title='Prime Now' description='FREE 2-Hour Delivery on Everyday Items'/>
                        <FooterItem title='Zappo' description='Shoes & Clothing'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterFeature;