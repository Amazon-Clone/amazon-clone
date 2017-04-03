import React, { Component } from 'react';
import { Link } from 'react-router'
import './Navbar.css'


class Navbar extends Component {
    render() {
        return (
            <div>
                
                <section className='ad'>
                    
                </section>
                <Link to='/'>Home</Link>
                <Link to='/product'>Product</Link>
            </div>
        );
    }
}

export default Navbar;