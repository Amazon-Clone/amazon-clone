import React, { Component } from 'react';
import { Link } from 'react-router'
import './Navbar.css'
import NavRight from './NavRight/NavRight'
import NavLeft from './NavLeft/NavLeft'



class Navbar extends Component {
    render() {
        return (
            <div className='headerAll'>
                
                <div className='ad'></div>
                <div className='headerBlue'>
                    <div className="navBelt">
                        <Link to='/'><span className='navLogo'></span></Link>
                        
                        <div className='nav-search'>
                        <div className='nav-all-dropdown'>All</div>
                        <input type="text" value="" name="field-keywords" autocomplete="off" placeholder="" className="nav-input" tabindex="19"></input>
                            <div className="nav-searchBtn">
                                <div className='searchIcon'></div>
                            </div>
                        </div>
                        <div>
                            <h1 className='nav-quote'>Catch college hoops fever</h1>
                        </div>
                        <NavRight/>
                    </div>
                    <NavLeft/>
                    
                </div>
                {/*<Link to='/'></Link>
                <Link to='/product'>Product</Link>*/}
                
            </div>
        );
    }
}

export default Navbar;