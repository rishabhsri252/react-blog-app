import React, { Component } from 'react';
import './styles/login.css'

import { Navigate } from 'react-router-dom';
import { TextField, Tooltip } from '@mui/material';
import withAuth from './withAuth';
import withFormValidation from './withFormValidation';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.props.formValidate(this.state);
        })
    }

    loginHandler = (e) => {
        e.preventDefault();
        this.props.authenticateUser(this.state); // authenticating user using withAuth.js
    }

    render() {
        return (
            <div className="login container">
                {this.props.isAuth && (
                    <Navigate to='/home' replace={true} />
                )}
                <div className="card">
                    <h1 className="card-title">Hello Again!</h1>
                    <small className="card-subtitle">Enter your credentials and get access</small>
                    <form className="card-form" onSubmit={this.loginHandler}>
                        <div className="card-input-container username form-group">
                            <TextField
                                label="Username"
                                type="text"
                                className="form-control"
                                name="username"
                                placeholder='e.g Rishabh123'
                                value={this.state.username}
                                onChange={this.changeHandler}
                                helperText={this.props.usernameErrorMsg}
                            />
                        </div>
                        <div className="card-input-container password">
                            <TextField
                                label="Password"
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="e.g react@123"
                                value={this.state.password}
                                onChange={this.changeHandler}
                                helperText={this.props.passwordErrorMsg}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary card-button"
                            disabled={!this.props.isValid}
                        >
                            Log In
                        </button>

                        <div className='errorMsg'>
                            <Tooltip title={this.props.errorMsg} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withAuth(withFormValidation(Login))