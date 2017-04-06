import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import './Login.css'

class LoginForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <div>
                <label htmlFor="useremail">Email (phone for mobile accounts)</label>
                <Field name="useremail" component="input" type="email"/>
                </div>
                <div>
                <label htmlFor="userpassword"><p>Password</p> <a href='#'>Forgot your password?</a></label>
                <Field name="userpassword" component="input" type="password"/>
                </div>
                <button type="submit">Submit</button>
            </form>                
        );

            
    }
}

LoginForm = reduxForm({
  form: 'userlogin' 
})(LoginForm);

export default LoginForm;