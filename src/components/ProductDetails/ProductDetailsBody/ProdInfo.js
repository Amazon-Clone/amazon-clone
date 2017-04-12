import React, { Component } from 'react';


class ProdInfo extends Component {

    render() {
        return (
            <div className='prodInfoMain'>
                {/*fill in with dummy data*/}
                <a className="blueATag">LG Electronics</a>
                <h1 className='prodTitle'>LG Electronics OLED65B6P Flat 65-Inch 4K Ultra HD Smart OLED TV (2016 Model)</h1>
                <div className='reviews'>
                    <div className="starMain">
                        <div className='stars'></div>
                        <div className='starArrow'></div>
                    </div>
                    <a href="" className='blueATag marg'> 268 customer reviews</a>
                    <a href="" className='blueATag'> 277 answered questions</a>
                </div>
                <h2 className='otherSellers'>Price <a className='priceRed'> $71.00</a></h2>
                <div className='flexOnly'>
                    <h2 className='sizeGrey'>Size: </h2>
                    <h2 className='sizeBlack'>65-inch</h2>
                </div>
                <div className='sizeBoxParent'>
                    <div className='sizeBoxChild'>
                        <h2>55-inch</h2>
                        <h2 className='boxPrice'>$1997.0</h2>
                    </div>
                    <div className='sizeBoxChild'>
                         <h2>65-inch</h2>
                        <h2 className='boxPrice'>$399.00</h2>
                    </div>
                </div>
                <div className='flexOnly'>
                    <h2 className='sizeGrey'>Style: </h2>
                    <h2 className='sizeBlack'>TV</h2>
                </div>
                <ul>
                    <li className='listBullet'>Smart Functionality: Yes - web OS 3.0</li>
                    <li className='listBullet'>Dimensions (W x H x D): TV without stand: 57.1" x 33.0" x 1.9", TV with stand: 57.1" x 34.7" x 8.9"</li>
                    <li className='listBullet'>Inputs: 4 HMDI, 3 USB, 1 RF, 1 Component, 1 Composite, 1 Optical, 1 RS232C, 1 Ethernet</li>
                    <li className='listBullet'>HDR Enhanced Display</li>
                </ul>
                <a href='' className='blueATag'>See more product details</a>

               
                 <a className='blueATag'>Used & new (39) from $399.00 + $41.49 shipping </a>
                    
                <div className='flexOnly'>
                    <div className='messageIcon'></div>

                   <a className='blueATag'> Report incorrect product information.</a>
                </div>
                <h2>This item’s packaging will indicate what is inside and cannot be hidden.</h2>

            </div>
        );
    }
}

export default ProdInfo;