import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import './Login.css';
import { Link } from 'react-router';

class LoginForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <div className='register-page'>
                     <a href='#'><div className='footer-amazon-logo'></div></a>
                    <form className='register-body'onSubmit={handleSubmit}>
                        <h1 className='register-title'>Sign in</h1>
                        <div className='title-input-fields'>
                        <label htmlFor="useremail">Email (phone for mobile accounts)</label>
                        <Field className='input-field-input'name="useremail" component="input" type="email"/>
                        </div>
                        <div className='title-input-fields'>
                            <label className='word-seperator' htmlFor="userpassword"><p>Password</p> <a href='#'>Forgot your password?</a></label>
                        <Field  className='input-field-input' name="userpassword" component="input" type="password"/>
                        </div>
                        <button className='button-register'type="submit">Sign in</button>
                    <div className='keep-me-signed-sec'>
                        <input className='input-checkbox-thing'type="checkbox"/>
                        <p>Keep me signed in. <a href='#'>Details</a></p>
                    </div>
                    <div className='reposition-absolute'>
                    <hr></hr>
                    <p className='covering-hr'>New to Amazon?</p>
                    </div>
                    <Link to='/register'><button className='button-register other-button-reg'>Create your Amazon account</button></Link>
                    </form>               
                </div>
                <div className='base-register'>
                <div className='base-register-links'>
                    <a href='#'>Conditions of Use</a>
                    <a href='#'>Privacy Notice</a>
                    <a href='#'>Help</a>
                </div>
                <div className='register-copywrite'>© 1996-2017, Amazon.com, Inc. or its affiliates</div>
            </div> 
            </div>
        );

            
    }
}

LoginForm = reduxForm({
  form: 'userlogin' 
})(LoginForm);

export default LoginForm;