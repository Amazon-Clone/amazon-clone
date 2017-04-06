import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import './Register.css'

class RegisterForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (

                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text"/>
                    </div>
                    <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text"/>
                    </div>
                    <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email"/>
                    </div>
                    <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" component="input" type="password"/>
                    </div>
                    <div>
                    <label htmlFor="confirm-password">Re-Enter Password</label>
                    <Field name="confirm-password" component="input" type="password"/>
                    </div>
                    <button type="submit">Submit</button>
                </form>                
        );

            
    }
}

RegisterForm = reduxForm({
  form: 'usersignup' 
})(RegisterForm);

export default RegisterForm;