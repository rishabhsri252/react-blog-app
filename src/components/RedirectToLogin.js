import { Link } from 'react-router-dom'
import React, {Component} from 'react'

class RedirectToLogin extends Component {
    render() {
        return (
            <h2>Please <Link to={'/'}>Login</Link> to continue!</h2>
        )
    }
}

export default RedirectToLogin