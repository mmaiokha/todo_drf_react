import React from 'react'
import Login from './Login'
import {connect} from 'react-redux'
import {login, passwordChange, usernameChange} from '../../../redux/actions/auth'
import {Navigate} from 'react-router'

class LoginContainer extends React.Component {
    render() {
        return (
            this.props.isAuthenticated ? <Navigate to={'/todo/current'} /> : <Login password={this.props.password} username={this.props.username}
                   passwordChange={this.props.passwordChange} usernameChange={this.props.usernameChange}
                   login={this.props.login} isAuthenticated={this.props.user}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        password: state.auth.password,
        username: state.auth.username,
        isAuthenticated: state.auth.user
    }
}

export default connect(mapStateToProps, {usernameChange, passwordChange, login})(LoginContainer)