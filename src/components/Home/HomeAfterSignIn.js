import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { getUser } from '../../actions/get_user';

class HomeAfterSignIn extends Component {
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

        const user = this.props.user || {}

        return (
            <div className='homeAfterSignIn'>
                    <div className='initials'>AC</div>
                    {/************* Fill in with real data below *****************/}
                    <div className='home-hi'>Hi, {user.userfirstname}</div>
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
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.all
    }
}

export default connect(mapStateToProps, { getUser })(HomeAfterSignIn);