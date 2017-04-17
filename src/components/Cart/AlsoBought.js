import React, { Component } from 'react';
import './Cart.css'
import './AlsoBought.css'
import './RecProdItem.css'

class AlsoBought extends Component {
    render() {

        const recproduct = 'Samsung Electronics UN65MU8000 65-Inch 4K Ultra HD Smart LED TV (2017 Model)';

        var rec = recproduct.slice(0,20) + '...'

        return (
            
            <div className='also-bought-body'>
                <div className='prod-pic-rec-lg'></div>
                <div className='prod-rec-mini-desc'>
                    <h5 className='desc-rec-prod-name'>{recproduct}</h5>
                    <div className='rating-stars'>
                        <input type="radio" name="rating" value="0" checked /><span></span>
                        <input type="radio" name="rating" value="1" checked/><span></span>
                        <input type="radio" name="rating" value="2" checked /><span></span>
                        <input type="radio" name="rating" value="3" /><span></span>
                        <input type="radio" name="rating" value="4" /><span></span>
                        <input type="radio" name="rating" value="5" /><span></span>
                        <h5 className='blue-number'>543</h5>
                    </div>
                    <div className='display-fl'>
                        <h5 className='price-red-let'>$212.14</h5>
                        <div className='prime-logo-container'>
                            <div className='prime-logo'></div>
                        </div>
                    </div>
                    <button className='add-to-cart-mini'>Add to Cart</button>
                </div> 
                   
            </div>
        );
    }
}

export default AlsoBought;