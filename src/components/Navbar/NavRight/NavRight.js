import React, { Component } from 'react';
import './NavRight.css'

class NavRight extends Component {
    render() {
        return (
          <div className="navRight">
             <div>language</div>
             <div>
                 <h2>Hello. Sign in</h2>
                 <h1>Account & Lists</h1>
             </div>
             <div>Orders</div>
             <div>Try Prime</div>
             <div>Cart
                 
             </div>
          </div>
        );
    }
}

export default NavRight;