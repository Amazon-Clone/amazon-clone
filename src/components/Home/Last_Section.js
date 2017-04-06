import React, { Component } from 'react';
import UpperRightAdd from './Upper_Right_Add'
import './Last_Section.css'

class LastSection extends Component {
  render() {
    return (
      <div className='last-section-body'>
        <div className='home-invisible-add'>
          {/*<UpperRightAdd />*/}
        </div>
        <div className='home-deal-of-the-day'>
          <div className='home-deal-halfer'>
            <h3 className='home-overflow'>Deal of the day</h3>
            <h1>$3.99</h1>
            <h6 className='push-me-down-home'>List:<span className='home-strikeout'>$47.99</span>(92% offf)</h6>
            <a href='#'className='baselink-deal-of-the-day'>Shop all deals</a>
          </div>
        </div>
          <div className='home-deal-halfer-again'></div>
      </div>
    );
  }
}

export default LastSection;
