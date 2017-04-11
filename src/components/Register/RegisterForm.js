import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import './Register.css'
import { Link } from 'react-router';

class RegisterForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
            <div className='register-page'>  
                <a href='#'><div className='footer-amazon-logo'></div></a>
                <form className='register-body'onSubmit={handleSubmit}>
                    <h1 className='register-title'>Create account</h1>
                    <div className='title-input-fields'>
                    <label htmlFor="userfirstname">Your First Name</label>
                    <Field className='input-field-input'name="userfirstname" component="input" type="text"/>
                    </div>
                    <div className='title-input-fields'>
                    <label htmlFor="userlastname">Your Last Name</label>
                    <Field className='input-field-input' name="userlastname" component="input" type="text"/>
                    </div>
                    <div className='title-input-fields'>
                    <label htmlFor="useremail">Email</label>
                    <Field className='input-field-input' name="useremail" component="input" type="email"/>
                    </div>
                    <div className='title-input-fields'>
                    <label htmlFor="userpassword">Password</label>
                    <Field className='input-field-input' placeholder=' at least 6 characters' name="userpassword" component="input" type="password"/>
                    </div>
                    {/*<div>
                    <label htmlFor="confirm-password">Re-Enter Password</label>
                    <Field name="confirm-password" component="input" type="password"/>
                    </div>*/}
                    <button className='button-register'type="submit">Create your Amazon account</button>
                    <p>By creating an account, you agree to Amazon's <a href='#'>Conditions of Use </a>and <a href='#'>Privacy Notice</a></p>
                    <hr></hr>
                    <p>Already have an account? <Link to='/login'>Sign in</Link></p>
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

RegisterForm = reduxForm({
  form: 'usersignup' 
})(RegisterForm);

export default RegisterForm;