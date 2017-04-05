import React, { Component } from 'react';
import './DepartmentMenu.css'
class DepartmentMenu extends Component {

    render() {
        return (
            <div>
                <div className='dmenu'></div> 
                <ul className='menu1'>
                    <h1>Amazon Video</h1>
                    <h1>Amazon Music</h1>
                    <h1>Appstore for Android</h1>
                    <h1>Prime Photos and Prints</h1>
                    <h1>Kindle E-readers & Books</h1>
                    <h1>Fire Tablets</h1>
                    <h1>Fire TV</h1>
                    <h1 className='dmenuBorder'>Echo & Alexa</h1>
                    <h1>Books & Audible</h1>
                    <h1>Movies, Music & Games</h1>
                    <h1>Electronics & Computers</h1>
                    <h1>Home, Garden & Tools</h1>
                    <h1>Beauty, Health & Food</h1>
                    <h1>Toys, Kids & Baby</h1>
                    <h1>Clothing, Shoes & Jewelry</h1>
                    <h1>Handmade</h1>
                    <h1>Sports & Outdoors</h1>
                    <h1>Automotive & Industrial</h1>
                    <h1 className='dmenuBorder'>Home Services</h1>
                    <h1>Credit & Payment Products</h1>
                    <h1>Credit & Payment Products</h1>
                    
                    
                </ul>
             </div>
        );
    }
}

export default DepartmentMenu;