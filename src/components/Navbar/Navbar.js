import React, { Component } from 'react';
import { Link } from 'react-router'


class Navbar extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/product'>Product</Link>
            </div>
        );
    }
}

export default Navbar;