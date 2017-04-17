import React, { Component } from 'react';
import AlsoBought from './AlsoBought'
import './AlsoBought.css'

class AlsoBoughtCarousel2 extends Component {
    render() {
        const arrowleft = '<';
        const arrowright = '>'

        return (
            <div className='also-bought-car'>
                <div className='carousel-title'><h1 className='halfway'>Customers Who Bought Items in Your Recent History Also Bought</h1><h6 className='little-righty'>Page 1 of 4</h6></div>
                <p>Inspired by your browsing history</p>
                <div className='also-bought-car-main'>
                    <div className='button-arrow'><p className='arrowwrapper'>{arrowleft}</p></div>
                    <div className='carousel-area'>
                        <AlsoBought />
                        <AlsoBought />
                        <AlsoBought />
                        <AlsoBought />
                        <AlsoBought />
                        <AlsoBought />
                        <AlsoBought />
                    </div>
                    <div className='button-arrow'><p className='arrowwrapper'>{arrowright}</p></div>
                </div>
            </div>
        );
    }
}
export default AlsoBoughtCarousel2;