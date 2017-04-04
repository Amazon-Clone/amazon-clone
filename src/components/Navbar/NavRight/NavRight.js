import React, { Component } from 'react';
import './NavRight.css'

class NavRight extends Component {
    render() {
        return (
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
                    <h2>Hello. Sign in</h2>
                    <h1>Account & Lists</h1>
                </div>
                    <div className='navArrow'></div>
             </div>
              
             <div className='words'>
                <h1>Orders</h1>
                
              </div>
            <div className='words'>
                <h1>Try Prime</h1>
                <div className='navArrow'></div>
             </div>
             <div className="words">
             <h1>Cart</h1>
              </div>   
             
          </div>
        );
    }
}

export default NavRight;