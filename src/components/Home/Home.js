import React, { Component } from 'react';
import './Home.css'

import Carousel from './Carousel';
import HomeSignIn from './Home_sign_in';
import PopularDepartments from './Popular_Departments';
import TheDressShop from './The_dress_shop.js'
import LastSection from './Last_Section'

class Home extends Component {
    render() {
        return (
            <div>

                <Carousel />

                <div className='home-segments'>
                    <HomeSignIn />
                    <PopularDepartments />
                    <TheDressShop />
                    <LastSection />
                </div>
                
                    {/*<div className='home-popular-departements'>
                        <div><h2>Popular departements</h2></div>
                        <div> 
                            <div className='home-popular-departement-item'>
                                <div className='home-popular-departement-photo'></div>
                                <h5 className='home-popular-departement-name'></h5>
                            </div>
                            <a href='#'className='home-segments-base-link'>Shop all departements</a>
                        </div>
                    </div>
                    <Card image="kindle.jpg" title="Kindle"/>
                    <Card image="dude.jpg" title="Kindle"/>
                    <Card image="female.jpg" title="Kindle"/>
                    <Card image="wine.jpg" title="Wine"/>
                    <div className='home-the-dress-shop'></div>
                    <div className='home-smaller-right-segments'>
                        <div className='home-wherehouse-deals'></div>
                        <div className='home-deal-of-the-day' ></div>
                    </div>*/}
                </div>
        );
    }
}

export default Home;
