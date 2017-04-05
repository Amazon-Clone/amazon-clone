import React, { Component } from 'react';
import './Card.css'


class Card extends Component {
  render() {
    return (
      <div className='home-pop-dep-card'>
        <div className='home-pop-dep-pic-container'>
          <img className='home-pop-actual-image'src={this.props.image}/>
        </div>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default Card;