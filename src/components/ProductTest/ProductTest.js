import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStoreProducts } from '../../actions/products';

class ProductTest extends Component {
    componentWillMount() {
        this.props.getStoreProducts();
        console.log(this.props)
        
    }
    render() {
        console.log(this.props.store)
        return (
            <div>
                <h1> Product testing</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      store: state.store.all
    }
}

export default connect(mapStateToProps, {getStoreProducts})(ProductTest);