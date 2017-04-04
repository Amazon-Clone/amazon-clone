import React, { Component } from 'react';
import './NavLeft.css'

class NavLeft extends Component {
    render() {
        return (
              <div className='navLeft'>
                <div className='navLeft-Dep'>
                   <button className="depBtn">
                        <h1>Departments</h1>
                        <div className='navArrow'></div>
                    </button>
                </div>
                <h1>Your Amazon.com</h1>
                <h1>Todays Deals</h1>
                

            </div>
        );
    }
}

export default NavLeft;