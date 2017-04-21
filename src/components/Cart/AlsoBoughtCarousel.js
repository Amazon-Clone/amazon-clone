import React, { Component } from 'react';
import HistoryRecProdItem from './HistoryRecProdItem'
import './AlsoBought.css'

class AlsoBoughtCarousel extends Component {
    render() {

        const arrowleft = '<';
        const arrowright = '>'

        return (
            <div className='also-bought-car'>
                <div className='carousel-titlea'><h1 className='halfway'>Customers Who Bought Items in Your Recent History Also Bought</h1><h6 className='little-righty'>Page 1 of 6</h6></div>
                <div className='also-bought-car-main'>
                    <div className='button-arrow'><p className='arrowwrapper'>{arrowleft}</p></div>
                    <div className='carousel-area'>
                        <HistoryRecProdItem image='https://images-na.ssl-images-amazon.com/images/I/51FFTKXFpRL._SS100_.jpg' title='Samsung Electronics UN65MU8000 65-Inch 4K Ultra HD Smart LED TV (2017 Model)' price='$223.34' numberOf='300'/>
                        <HistoryRecProdItem image='https://images-na.ssl-images-amazon.com/images/I/81Ej71pPS0L._SL500_SR110,135_.jpg' title='Portable Battery Base for Echo (Use Echo Anywhere)' price='$49.99' numberOf='262'/>
                        <HistoryRecProdItem image='https://images-na.ssl-images-amazon.com/images/I/81-6gmEbbWL._SL500_SR135,135_.jpg' title='Lightning Power – Black color Lycra Zipper Carrying Case Bag for Amazon Echo Speaker & Charger' price='14.88' numberOf='1,429'/>
                        <div className='disappear2'>
                            <HistoryRecProdItem image='https://images-na.ssl-images-amazon.com/images/I/61c8%2Bje5kiL._SL500_SR135,135_.jpg' title='ECHOGEAR Tilting Low Profile TV Wall Mount Bracket for 32-70 inch TVs - Up to 15 Degrees of Tilt for LED, LCD, OLED and Plasma Flat Screen TVs with VESA patterns up to 600 x 400 - EGLT1-BK' price='$35.00' numberOf='223'/>
                        </div>
                        <div className='disappear'>
                            <HistoryRecProdItem image='https://images-na.ssl-images-amazon.com/images/I/81nQqsbFnML._SL500_SR135,135_.jpg' title='HDMI Cable 15 FT - Braided Cord - 4K HDMI 2.0 Ready - High Speed - Gold Plated Connectors - Ethernet / Audio Return Channel - Video 4K UHD 2160p, HD 1080p, 3D - Xbox PlayStation PS3 PS4 PC Apple TV' price='$14.99' numberOf='1,112'/>
                        </div>
                    </div>
                    <div className='button-arrow'><p className='arrowwrapper'>{arrowright}</p></div>
                </div>
            </div>
        );
    }
}

export default AlsoBoughtCarousel;
