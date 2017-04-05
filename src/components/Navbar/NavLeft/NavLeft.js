import React, { Component } from 'react';
import './NavLeft.css'
import DepartmentMenu from './DepartmentMenu.js'

class NavLeft extends Component {
    render() {
        return (
            <div>
              <div className='navLeft'>
                <div className='navLeft-Dep'>
                   <button className="depBtn">
                        <h1>Departments</h1>
                        <div className='navArrow'></div>
                    </button>
                </div>
                <div className='left-text'>
                    <h1>Your Amazon.com</h1>
                    <h1>Todays Deals</h1>
                    <h1>Gift Cards & Registry</h1>
                    <h1>Sell</h1>
                    <h1>Help</h1>
                </div>
                </div>
                <div className='depMenu'><DepartmentMenu/></div>
             

            </div>
        );
    }
}

export default NavLeft;