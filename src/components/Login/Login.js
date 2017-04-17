import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { login } from '../../actions/login'


class Login extends Component {

    submit(values) {
        console.log(values)
        // const user = this.props.user[0] || {}
        login(values).payload.then( function(response) {
            console.log(response)

                if( response.data === 'auth successful') {
                    alert('login successful') 
                return  window.location.href = '#'
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