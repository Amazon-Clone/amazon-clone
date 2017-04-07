/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/get_user'
 
class ProductTest extends Component {
    componentWillMount() {
        this.props.getUser();
        console.log(this.props)
        
    }
    render() {
        console.log(this.props.user)
        return (
            <div>
                <h1> Product testing</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.users
    }
}

export default connect(mapStateToProps, {getUser})(ProductTest);*/