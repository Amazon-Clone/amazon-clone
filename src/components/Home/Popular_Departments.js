import React, { Component } from 'react';
import './Popular_Departments.css'
import Card from './Card'

class PopularDepartments extends Component {
  render() {
    return (
      <div className='home-pop-dep'>
        <h1>Popular departments</h1>
        <Card name='Kindle' image='kindle.jpg'/>
        <Card name='Amazon' image='amazon.jpg'/>
        <Card name='Music' image='music.jpg'/>
        <Card name='Grocery' image='grocery.jpg'/>
      </div>
    );
  }
}

export default PopularDepartments;