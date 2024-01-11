import React, { Component } from 'react'

const withFormValidation = (OriginalComponent) => {
    class FormValidation extends Component {
        constructor(props) {
            super(props)

            this.state = {
                usernameErrorMsg: '',
                passwordErrorMsg: '',
                isValid: false
            }
        }

        formValidate = ({ username, password }) => {
            if (!username || !/^[a-zA-Z][a-zA-Z0-9]{5,}$/.test(username))
                this.setState({
                    usernameErrorMsg: 'Minimum 6 character. \n Should start with alphabet',
                    isValid: false
                })
            else
                this.setState({
                    usernameErrorMsg: '',
                    isValid: true
                }
                )
            if (!password || password.length < 6)
                this.setState({
                    passwordErrorMsg: 'Minimum 6 character.',
                    isValid : false
                })
            else
                this.setState({
                    passwordErrorMsg: '',
                    isValid: true
                }
                )

        }


        render() {
            return (
                <OriginalComponent
                    formValidate={this.formValidate}
                    usernameErrorMsg={this.state.usernameErrorMsg}
                    passwordErrorMsg={this.state.passwordErrorMsg}
                    isValid={this.state.isValid}
                    {...this.props} />
            )
        }
    }
    return FormValidation
}

export default withFormValidation