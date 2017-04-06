import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import './Register.css'

class RegisterForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (

                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="userfirstname">First Name</label>
                    <Field name="userfirstname" component="input" type="text"/>
                    </div>
                    <div>
                    <label htmlFor="userlastname">Last Name</label>
                    <Field name="userlastname" component="input" type="text"/>
                    </div>
                    <div>
                    <label htmlFor="useremail">Email</label>
                    <Field name="useremail" component="input" type="email"/>
                    </div>
                    <div>
                    <label htmlFor="userpassword">Password</label>
                    <Field name="userpassword" component="input" type="password"/>
                    </div>
                    {/*<div>
                    <label htmlFor="confirm-password">Re-Enter Password</label>
                    <Field name="confirm-password" component="input" type="password"/>
                    </div>*/}
                    <button type="submit">Submit</button>
                </form>                
        );

            
    }
}

RegisterForm = reduxForm({
  form: 'usersignup' 
})(RegisterForm);

export default RegisterForm;