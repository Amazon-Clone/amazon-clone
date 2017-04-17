import React, { Component } from 'react';
import './RecProdItem.css'
import './AlsoBought.css'

class RecProdItem extends Component {
    render() {

        const recproduct = this.props.title;
        const price = '$212.44';
        const numberOfRatings = 433;

        var rec = recproduct.slice(0,18) + '...';

        return (
            <div className='repeated-prod-rec-body'>
                <img className='prod-pic-rec' src={ this.props.image } alt=""/>
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

export default RecProdItem;