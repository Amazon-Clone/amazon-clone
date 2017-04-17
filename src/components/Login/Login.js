import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { login } from '../../actions/login'
import { getUser } from '../../actions/get_user' 
import {connect } from 'react-redux'


class Login extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.getUser().then((use)=>{
            this.setState({user: user.data})
        })
    }
    // submit = (values) => {
    //     console.log(values);
    //     register(value)
    // }
    submit(values) {
        login(values)
        if( values === user[0]) {
            return window.location.href = '#'
        }   else {
            return alert('Incorrect Username or Password')
        }
        console.log(values)

    }
    render() {
        return (
            <LoginForm onSubmit={this.submit}/>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user.all
    }
}
export default connect(mapStateToProps, { getUser }) (Login)