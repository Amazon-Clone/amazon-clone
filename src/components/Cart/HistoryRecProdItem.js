import React, { Component } from 'react';
import './Cart.css'
import './AlsoBought.css'
import './RecProdItem.css'

class HistoryRecProdItem extends Component {
    render() {

        const recproduct = this.props.title;
        const numberOfRatings = 345;
        const img = 'https://images-na.ssl-images-amazon.com/images/I/51FFTKXFpRL._SS100_.jpg';
        const price = '$223.34'
        var rec = recproduct.slice(0,20) + '...'

        return (
            
            <div className='also-bought-body'>
                <img src={ this.props.image } className='prod-pic-rec-lg' alt=""/>
                <div className='prod-rec-mini-desc'>
                    <h5 className='desc-rec-prod-name'>{ rec }</h5>
                    <div className='rating-stars'>
                        <div className='starsstars'></div>
                        <h5 className='blue-number'>{ this.props.numberOf }</h5>
                    </div>
                    <div className='display-fl'>
                        <h5 className='price-red-let'>{ this.props.price }</h5>
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

export default HistoryRecProdItem;