import React, { Component } from 'react';

class RightProdMisc extends Component {

    render() {
        return (
            <div>
                <div className='socialMedia'>
                    <h2>Share</h2>
                    <div className='socEmail'></div>
                    <div className='socFac'></div>
                    <div className='socTwit'></div>
                    <div className='socPin'></div>
                </div>

                <div>   
                    <div className='flexOnly'>
                        <h2>Qty:</h2>
                        <div className='qDropdown'>1</div>
                    </div>
                     <div className='flexOnly'>
                        <input id="checkBox" type="checkbox"></input>
                        <h2>Yes, I want FREE Two-Day  Shipping with <a className='blueATag'>Amazon Prime</a></h2>
                    </div>

                </div>
            </div>
        );
    }
}

export default RightProdMisc;