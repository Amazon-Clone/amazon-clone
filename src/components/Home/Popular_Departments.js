import React, { Component } from 'react';
import './Popular_Departments.css'
import Card from './Card'

class PopularDepartments extends Component {
  render() {
    return (
      <div className='home-pop-dep'>
        <h1>Popular departments</h1>
        <div className='chunks'>
        <Card title='Kindle' image='kindle.jpg'/>
        <Card title='Amazon' image='amazon.jpg'/>
        <Card title='Music' image='music.jpg'/>
        <Card title='Grocery' image='grocery.jpg'/>
        </div>
      </div>
    )
  }
}

export default PopularDepartments;