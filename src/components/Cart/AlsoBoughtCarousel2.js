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
                        <AlsoBought title="Universal TV Mounting Hardware Pack Fits All TVs Includes M4, M5, M6, and M8 TV Screws and Spacer Assortment for Mounting Virtually All TV's up to 80&quot; - ECHOGEAR" image='https://images-na.ssl-images-amazon.com/images/I/81HAOzoZ6DL._SL500_SR135,135_.jpg' numberOf='55' price='$14.99'/>
                        <AlsoBought title='Logitech Harmony Companion All in One Remote Control for Smart Home and Entertainment Devices, works with Alexa' image='https://images-na.ssl-images-amazon.com/images/I/81OeA1mBRIL._SL500_SR135,135_.jpg' numberOf='353' price='$129.99'/>
                        <AlsoBought title="Echo Dot (2nd Generation) - Black" image='https://images-na.ssl-images-amazon.com/images/I/61ikAJnULvL._SL500_SR135,135_.jpg' numberOf='55' price='$49.99'/>
                        <AlsoBought title='Acrylic Speaker Guard For Amazon Echo UE Boom speaker (Clear Blue)' image='https://images-na.ssl-images-amazon.com/images/I/81yohX41nsL._SL500_SR135,135_.jpg' numberOf='353' price='$18.50'/>
                        <AlsoBought title="Amazon Echo Dot Case (fits Echo Dot 2nd Generation only) - Indigo Fabric" image='https://images-na.ssl-images-amazon.com/images/I/61AYEP662FL._SL500_SR135,135_.jpg' numberOf='55' price='$14.99'/>
                        <div className='disappear2'>
                            <AlsoBought title='Alexa Voice Remote for Amazon Echo and Echo Dot' image='https://images-na.ssl-images-amazon.com/images/I/61w8bahQ6nL._SL500_SR135,135_.jpg' numberOf='353' price='$39.99'/>
                        </div>
                        <div className='disappear'>
                            <AlsoBought title="Loctek TV Wall Mount Bracket 42-70&quot; Full Motion Interactive swivel tilt Articulating LCD LED VESA 600x400" image='https://images-na.ssl-images-amazon.com/images/I/61Xh0-d8RVL._SL500_SR135,135_.jpg' numberOf='55' price='$72.99'/>
                        </div>
                    </div>
                    <div className='button-arrow'><p className='arrowwrapper'>{arrowright}</p></div>
                </div>
            </div>
        );
    }
}
export default AlsoBoughtCarousel2;
