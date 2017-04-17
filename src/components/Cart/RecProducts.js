import React, { Component } from 'react';
import './RecProducts.css'
import './Cart.css'
import RecProdItem from './RecProdItem'

class RecProducts extends Component {
    render() {

        const productdesc = 'ECHOGEAR Full Motion Articulating TV Wall Mount Bracket for most 37-70 inch LED, LCD, OLED and Plasma Flat Screen TVs w/ VESA patterns up to 600 x 400 - 16" Extension - EGLF1-BK'

        return (
            <div className='cart-upper-right-bottom borders'>
                <h3 className='also-bought-with-h3'>Frequently Bought With { productdesc }</h3>
                <RecProdItem image='https://images-na.ssl-images-amazon.com/images/I/71cjjMUidTL._SL500_SR100,100_.jpg' title='ECHOGEAR Sound Bar Mount for Most Sound Bars up to 15 lbs - Features Simple Install and is Compatible With Most TVs and Mounts - EGSB1' numberOf='81' price='$24.99'/>
                <RecProdItem image='https://images-na.ssl-images-amazon.com/images/I/61sjnigiKFL._SL500_SR100,100_.jpg' title='ECHOGEAR Full Motion Articulating TV Wall Mount Bracket for most 26-50in TVs - Features 20&quot; of Extension 15º of Tilt &amp; 180º of Swivel for LED, LCD, OLED and Plasma Flat Screen TVs - EGMF1-BK' numberOf='2.769' price='$39.99'/>
                <RecProdItem image='https://images-na.ssl-images-amazon.com/images/I/51bnQ0FC01L._SL500_SR100,100_.jpg' title='VideoSecu ML531BE TV Wall Mount for most 22&quot;-55&quot; LED LCD Plasma Flat Screen Monitor up to 88 lb VESA 400x400 with Full Motion Swivel Articulating 20 in Extension Arm, HDMI Cable &amp; Bubble Level WP5' numberOf='18,449' price='$24.99'/>
            </div>
        );
    }
}

export default RecProducts;
