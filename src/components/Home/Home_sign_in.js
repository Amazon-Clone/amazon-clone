import React, { Component } from 'react';
import './Home_sign_in.css'

class HomeSignIn extends Component {
  render() {
    return (
      <div className='home-welcome-sign-in'>
          <h1>Welcome</h1>
          <p>Sign in for the best experience</p>
          <button>Sign in securely</button>
          <div className='home-segments-base-link'><p>New to Amazon?</p><a href='#'>Start Here</a></div>
      </div>
    );
  }
}

export default HomeSignIn;