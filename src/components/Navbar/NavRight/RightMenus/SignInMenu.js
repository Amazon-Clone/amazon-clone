import React, { Component } from 'react';

class SignInMenu extends Component {

    render() {
        return (
            <div>
                <div className='overlay'></div>
                <div className='signInMen'>
                    <div>Sign In</div>
                    <h1>New Customer? <a>Start Here.</a></h1>

                    <div className='flexParent'>
                        <div className='yourLists'> 
                            <h2>Your Lists</h2>
                            <h1>Create a List</h1>
                            <h1>Find a List or Registry</h1>
                            <h1>Find a Gift</h1>
                            <h1>Save Items from the Web</h1>
                            <h1>Wedding Registry</h1>
                            <h1>Baby Registry</h1>
                            <h1>Kids' Birthdays</h1>
                            <h1>School Lists</h1>
                            <h1>Friends & Family Gifting</h1>
                            <h1>Pantry Lists</h1>
                            <h1>Your Hearts</h1>
                        </div>
                        <div className='yourAccount'>
                            <h2>Your Account</h2>
                            <h1>Your Account</h1>
                            <h1>Your Orders</h1>
                            <h1>Your Lists</h1>
                            <h1>Your Recommendations</h1>
                            <h1>Your Subscribe & Save Items</h1>
                            <h1>Your Memberships & Subscriptions</h1>
                            <h1>Your Service Requests</h1>
                            <h1>Your Prime Membership</h1>
                            <h1>Your Garage</h1>
                            <h1>Register for a Seller account</h1>
                            <h1>Register for a Business Account</h1>
                            <h1>Your Amazon Credit Card Accounts</h1>
                            <h1>Manage Your Content and Devices</h1>
                            <h1>Your Video Subscriptions</h1>
                            <h1>Your Music Subscriptions</h1>
                            <h1>Your Music Library</h1>
                            <h1>Your Amazon Drive</h1>
                            <h1>Your Prime Video</h1>
                            <h1>Your Kindle Unlimited</h1>
                            <h1>Your Watchlist</h1>
                            <h1>Your Video Library</h1>
                            <h1>Your Android Apps & Devices</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignInMenu;