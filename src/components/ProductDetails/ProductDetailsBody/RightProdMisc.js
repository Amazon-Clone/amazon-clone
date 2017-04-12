import React, { Component } from 'react';

class RightProdMisc extends Component {

    render() {
        return (
            <div className='prodMiscMain'>
                <div className='socialMedia'>
                    <h2>Share</h2>
                    <div className='socEmail'></div>
                    <div className='socFac'></div>
                    <div className='socTwit'></div>
                    <div className='socPin'></div>
                </div>

                <div className='addCartBox'>   
                    <div className='flexOnly'>
                        <h2>Qty:</h2>
                        <div className='qDropdown'>1</div>
                    </div>
                     <div className='flexOnly'>
                        <input id="checkBox" type="checkbox"></input>
                        <h2>Yes, I want FREE Two-Day  Shipping with <a className='blueATag'>Amazon Prime</a></h2>
                    </div>
                      <div className='flexOnly'>
                        <input id="checkBox" type="checkbox"></input>
                        <h2>Include <a className='blueATag'>3-Year Protection for $10.80</a></h2>
                    </div>
                     <div className='flexOnly'>
                        <input id="checkBox" type="checkbox"></input>
                        <h2>Include <a className='blueATag'>2-Year Protection for $5.70</a></h2>
                    </div>
                    <div className='addCartBtn'>
                        <div className='cartIcon'></div>
                        <h2 className='cartText'>Add to Cart</h2>
                    </div>
                   <hr/>
                   <a>Turn on 1-Click ordering for this browser</a>
                  <hr/>
                   <h2>Ship to:</h2>
                   <h2>PROVO, UT 84601</h2>
                   <hr/>
                   <div className='addToList'>Add to List</div>
                </div>
                <div className='flexOnly'>
                    <h2>Have one to sell?</h2>
                    <div className='sellOnAmazon'> Sell on Amazon</div>
                </div>
            </div>
        );
    }
}

export default RightProdMisc;