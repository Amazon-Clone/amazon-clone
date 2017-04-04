import React, { Component } from 'react';
import './Card.css'


class Card extends Component {
  render() {
    return (
      <div>
        <div className='home-pop-dep-pic-container'>
          <img src="{this.props.image}"/>
        </div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Card;