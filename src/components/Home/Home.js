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
