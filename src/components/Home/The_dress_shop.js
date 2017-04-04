import React, { Component } from 'react';
import './The_dress_shop.css'

class TheDressShop extends Component {
  render() {
    return (
      <div className='the-dress-shop-main-container'>
        <h3>The dress shop</h3>
        <div className='dress-shop-video'>
          <video preload="auto" autoPlay='true' src="https://images-na.ssl-images-amazon.com/images/G/01/gateway/yiyiz/A1n7tUBAEvS._CB531406799_.mp4" className='dress-shop-vid-cont' loop></video>
        </div>
        <div className='dress-shop-base-link'>
          <hr></hr>
          <a href='#'>Shop women's dresses</a>
        </div>
      </div>
    );
  }
}

export default TheDressShop;