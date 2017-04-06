import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { login } from '../../actions/login'


class Login extends Component {
    // submit = (values) => {
    //     console.log(values);
    //     register(value)
    // }
    submit(values) {
        console.log(values)
        login(values)
    }
    render() {
        return (
            <LoginForm onSubmit={this.submit}/>
        )
    }
}

export default Login