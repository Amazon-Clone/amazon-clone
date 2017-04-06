import React, { Component } from 'react';
import { Link } from 'react-router';
import './SideNav.css';


class SideNav extends Component {
    render() {
        return (
            <div className="sideNav">
                <div className="categoryContainer">
                    <h3 className="categoryTitle">Show results for: </h3>
                    <div className="categoryNameContainer">
                        <p className="categoryName">Category A</p>
                        <p className="categoryName">Category B</p>
                        <p className="categoryName">Category C</p>
                        <p className="categoryName">Category D</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideNav;