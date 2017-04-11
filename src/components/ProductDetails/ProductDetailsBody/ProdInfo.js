import React, { Component } from 'react';


class ProdInfo extends Component {

    render() {
        return (
            <div>
                {/*fill in with dummy data*/}
                <a href="" className="blueATag">LG Electronics</a>
                <h1>LG Electronics OLED65B6P Flat 65-Inch 4K Ultra HD Smart OLED TV (2016 Model)</h1>
                <div className='reviews'>
                    <div className="starMain">
                        <div className='stars'></div>
                        <div className='starArrow'></div>
                    </div>
                    <a href="" className='blueATag   |'> 268 customer reviews</a>
                    <a href="" className='blueATag'> 277 answered questions</a>
                </div>
                <h2 className='otherSellers'>Available from <a className='blueATag'> these sellers.</a></h2>
                <h2 className='sizeParent'>Size: <h2 className='sizeChild'>65-inch</h2></h2>
            </div>
        );
    }
}

export default ProdInfo;