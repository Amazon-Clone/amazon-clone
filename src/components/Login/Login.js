import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { login } from '../../actions/login'
import { getUser} from '../../actions/get_user'
import { connect } from 'react-redux'


class Login extends Component {
    componentWillMount() {
        this.props.getUser()
    }
    // submit = (values) => {
    //     console.log(values);
    //     register(value)
    // }
    submit(values) {
        console.log(values)
        login(values) 
        if (values === this.props.user) {
            window.location.href = '#/'
        } else 
        return alert('Wrong Username or Password')

    }
    render() {
        return (
            <LoginForm onSubmit={this.submit}/>
        )
    }
}
function mapStateToProps(state) {
    user: state.user.all
}

export default connect(mapStateToProps, { getUser })(Login)