import React, { Component } from 'react';
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        { this.props.children }
        <Footer/>
      </div>
    );
  }
}

export default App;
