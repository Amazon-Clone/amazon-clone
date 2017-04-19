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
            <div className='home-main-everything'>

                <Carousel />
                <div className='homeAfterSignIn'>
                    <div className='initials'>AC</div>
                    {/************* Fill in with real data below *****************/}
                    <div className='home-hi'>Hi, Nathan</div>
                    <div className='home-orders'> 
                        <div className='your-orders'>Your Orders</div>
                        <div className='recent-orders'>0 recent orders</div>
                    </div>
                    <div className='home-prime'> 
                        <div className='your-orders'>Included with Prime</div>
                        <div className='recent-orders'>Unlimited Family Memories</div>
                    </div>
                    <div className='home-prime'> 
                        <div className='your-orders'>Gift Card Balance</div>
                        <div className='recent-orders'>Reload $100, Get $5</div>
                    </div>
                     <div className='home-prime'> 
                        <div className='your-orders'>Customer Since</div>
                        <div className='recent-orders'>2011</div>
                    </div>
                </div>
                <div className='home-segments'>
                    <HomeSignIn />
                    <PopularDepartments />
                    <TheDressShop />
                    <LastSection />
                </div>
            </div>
        );
    }
}

export default Home;
