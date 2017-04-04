import React, { Component } from 'react';
import './Popular_Departments.css'
import Card from './Card'

class PopularDepartments extends Component {
  render() {
    return (
      <div className='home-pop-dep'>
        <h1>Popular departments</h1>
        <div className='chunks'>
        <Card title='Kindle' image='./kindle.png'/>
        <Card title='Amazon' image='./amazon.png'/>
        <Card title='Music' image='./music.png'/>
        <Card title='Grocery' image='./grocery.png'/>
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