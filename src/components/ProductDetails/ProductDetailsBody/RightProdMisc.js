import React, {Component} from 'react';
import {getOneProduct} from '../../../actions/products';
import {connect} from 'react-redux';
import {addToCart} from '../../../actions/cart'

class RightProdMisc extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleSubmit(product) {
        console.log('my', product)
        addToCart(product)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.product)
    }

    componentWillMount() {
        // console.log("testing", this.props.urlParams)
        getOneProduct(this.props.urlParams.id)
            .payload
            .then(product => {
                this.setState(Object.assign({}, this.state, {product: product.data}))
            })
    }

    render() {
            console.log("tester", this.state.product ? this.state.product[0]: null)
        
        const option = 0;
        return (
            <div className='prodMiscMain'>
                
                <div className='socialMedia'>
                    <h2>Share</h2>
                    <div className='socEmail'></div>
                    <div className='socFac'></div>
                    <div className='socTwit'></div>
                    <div className='socPin'></div>
                </div>

                <div className='addCartBox check'>
                    <div className='flexOnly check'>
                        <h2>Qty:</h2>
                        <div className='qDropdown'>1</div>
                    </div>
                    <div className='flexOnly check'>
                        <input id="checkBox" type="checkbox"></input>
                        <h2>Yes, I want FREE Two-Day Shipping with
                            <a className='blueATag'> Amazon Prime</a>
                        </h2>
                    </div>
                    <div className='flexOnly check'>
                        <input id="checkBox" type="checkbox"></input>
                        <h2>Include
                            <a className='blueATag'> 3-Year Protection for $10.80</a>
                        </h2>
                    </div>
                    <div className='flexOnly check'>
                        <input id="checkBox" type="checkbox"></input>
                        <h2>Include
                            <a className='blueATag'> 2-Year Protection for $5.70</a>
                        </h2>
                    </div>
                    {/*<form onSubmit={this.onSubmit}>*/}
                        <button
                            className='addCartBtn check'
                            onClick={this.state.product? this.handleSubmit.bind(this, Object.assign({quantity: 1, discount: 0}, this.state.product[0])) : console.log('not ready')}
                            type="submit">
                            <div className='cartIcon'></div>
                            <h2 className='cartText'>Add to Cart</h2>
                        </button>
                    {/*</form>*/}
                    <hr/>
                    <a className='blueATag check'>Turn on 1-Click ordering for this browser</a>
                    <hr/>
                    <h2>Ship to:</h2>
                    <h2>PROVO, UT 84601</h2>
                    <hr/>
                    <div className='addToList'>Add to List</div>
                </div>
                <div className='flexOnly'>
                    <h2 className='sell'>Have one to sell?</h2>
                    <div className='sellOnAmazon'>
                        Sell on Amazon</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {products: state.store.all, product: state.store.post}
}
export default connect(mapStateToProps, {getOneProduct})(RightProdMisc)
// export default RightProdMisc;