import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { login } from '../../actions/login'


class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        useremail: '',
        userpassword: ''
      };
      this.onFormSubmit = this.onSubmit.bind(this);
    }
    onEmailChange(event) {
      this.setState({ useremail: event.target.value });
    }    
    onPasswordChange(event) {
      this.setState({ userpassword: event.target.value });
    }
    onSubmit(event) {
        console.log(event)
        console.log(this.props)
    //   event.preventDefault();
      this.props.login(this.state)
        .then((res) => {
            console.log(res)
        if(res.action.payload.data === 'Username or Password is wrong') alert(res.action.payload.data);
        else this.context.router.push('/');
      }) 
    }

    render() {
        return (
            <LoginForm onSubmit={this.onFormSubmit} onEmailChange={this.onEmailChange.bind(this)} onPasswordChange={this.onPasswordChange.bind(this)}/>
        )
    }
}

export default connect(null, { login }) (Login)