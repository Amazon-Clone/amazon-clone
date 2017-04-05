import React, { Component } from 'react';
import './Popular_Departments.css'
import Card from './Card'

class PopularDepartments extends Component {
  render() {
    return (
      <div className='home-pop-dep'>
        <h1>Popular departments</h1>
        <div className='chunks'>
        <Card title='Kindle' image='/images/homeimages/kindle.png'/>
        <Card title='Amazon' image='/images/homeimages/amazon.png'/>
        <Card title='Music' image='/images/homeimages/music.png'/>
        <Card title='Grocery' image='/images/homeimages/grocery.png'/>
        </div>
        <div className='home-pop-dep-base-link'>
          <hr></hr>
          <a href='#'>Shop all departements</a>
        </div>
      </div>
    )
  }
}

export default PopularDepartments;