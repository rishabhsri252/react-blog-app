import React, { Component } from 'react'
import axios from 'axios'

const withAuth = (OriginalComponent) => {
    class Auth extends Component {
        constructor(props) {
            super(props)

            this.state = {
                isAuth: false
            }
        }

        authenticateUser = (credentials) => {
            axios.get('assets/users.json')
                .then(response => {
                    if (credentials.username === response.data.username && credentials.password === response.data.password) {
                        this.setState({
                            isAuth: true,
                        })
                        sessionStorage.setItem('username', credentials.username)
                    }
                    else {
                        alert('Wrong details')
                    }
                })
                .catch(error => console.log(error))
        }


        render() {
            return (
                <OriginalComponent
                    authenticateUser={this.authenticateUser}
                    isAuth={this.state.isAuth}
                    {...this.props} />
            )
        }
    }
    return Auth
}

export default withAuth