import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { login } from '../../actions/login'
import { browserHistory } from 'react-router';


class Login extends Component {

    submit(values) {
        console.log(values)
        // const user = this.props.user[0] || {}
        login(values).payload.then( function(response) {
            console.log(response)
                if( response.data === 'auth successful') {
                    alert('Login Successful') 
                browserHistory.push('/');
            }   else {
                return alert('Incorrect Username or Password')
            }
        })

        console.log(values)

    }
    render() {
        return (
            <LoginForm onSubmit={this.submit}/>
        )
    }
}

export default Login