import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../../actions/get_user'
import './NavRight.css'
import LanguageMenu from './RightMenus/LanguageMenu'
import SignInMenu from './RightMenus/SignInMenu'
import TryPrimeMenu from './RightMenus/TryPrimeMenu'
import './RightMenus/LanguageMenu.css'
import './RightMenus/SignInMenu.css'
import './RightMenus/TryPrimeMenu.css'

class NavRight extends Component {
    componentWillMount() {
    this.props.getUser();
    console.log(this.props)
    
    }
    render() {
        // console.log(this.props.user)
        return (
        <div>
          <div className="navRight">
            <div className='words'>
                <div >
                    <h1 className='en'>EN</h1>
                    <div className='globe'></div>
                </div>
                <div className='navArrow'></div>
                    
             </div>
             <div className="globeBorder"></div>
             <div className='words'>
                <div className='account'>
                    {/*<h2>Hello. { this.props.user.userfirstname }</h2>*/}
                    <h1>Account & Lists</h1>
                </div>

            
                    <div className='navArrow'></div>
                    <div className='signInMenu'><SignInMenu/> </div>
             </div>
              
             <div className='words'>
                <h1>Orders</h1>
                
              </div>
            <div className='words'>
                <h1>Try Prime</h1>
                <div className='navArrow'></div>
                <div className='tryPrimeMenu'><TryPrimeMenu/> </div>
             </div>
             <div className="words">
             <h1>Cart</h1>
              </div>   
             
          </div>
          <div className='languageMenu'><LanguageMenu/> </div>
          
          {/*<div className='tryPrimeMenu'><TryPrimeMenu/> </div>*/}
        </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.user.users
    }
}

export default connect(mapStateToProps, { getUser })(NavRight);