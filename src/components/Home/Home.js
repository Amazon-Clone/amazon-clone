import React, { Component } from 'react';
import './Home.css'

import Carousel from './Carousel';
import HomeSignIn from './Home_sign_in';
import PopularDepartments from './Popular_Departments';
import TheDressShop from './The_dress_shop.js'
import LastSection from './Last_Section'
import HomeAfterSignIn from './HomeAfterSignIn'
import { connect } from 'react-redux';
import { getUser } from '../../actions/get_user';

class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            b: { display: 'none' },
        }
    }

    componentDidMount() {
        this.props.getUser();
    }

    render() {

        let show = null;

        if(this.props.user.userfirstname){
            show = (<HomeAfterSignIn/>)
        }

        return (
            <div className='home-main-everything'>

                <Carousel />
                
                    {show}

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

function mapStateToProps(state) {
    return {
        user: state.user.all
    }
}

export default connect(mapStateToProps, { getUser })(Home);
