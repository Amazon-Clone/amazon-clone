import React, { Component } from 'react';
import './Home_sign_in.css';
import { Link } from 'react-router';

class HomeSignIn extends Component {
  render() {
    return (
      <div className='home-welcome-sign-in'>
          <h1>Welcome</h1>
          <p>Sign in for the best experience</p>
          <button>Sign in securely</button>
            <div className='home-segments-base-link'>
              <hr></hr>
              <div className='text-holder-home-signin'><p>New to Amazon?</p><Link to='/register'>Start Here</Link></div>
            </div>
      </div>
    );
  }
}

export default HomeSignIn;