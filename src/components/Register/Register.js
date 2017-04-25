import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import { register } from '../../actions/signup'
import { hashHistory } from 'react-router';

class Register extends Component {

    submit(values) {
        console.log(values)
        register(values).payload.then((response)=>{
            if(response.status === 200) {
                alert('Register Successful')
                hashHistory.push('/login');
            }
            else {
                alert('Username/Email Exists')
            }
            
        })
    }
    render() {
        return (
            <RegisterForm onSubmit={this.submit}/>
        )
    }
}

export default Register