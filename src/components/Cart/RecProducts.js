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
                <RecProdItem />
                <RecProdItem />
                <RecProdItem />
            </div>
        );
    }
}

export default RecProducts;
