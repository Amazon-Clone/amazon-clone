import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import { register } from '../../actions/signup'


class Register extends Component {
    // submit = (values) => {
    //     console.log(values);
    //     register(value)
    // }
    submit(values) {
        console.log(values)
        register(values)
    }
    render() {
        return (
            <RegisterForm onSubmit={this.submit}/>
        )
    }
}

export default Register