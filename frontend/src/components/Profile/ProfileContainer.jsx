import React from "react";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import Profile from "./Profile";
import {Navigate} from "react-router";


class ProfileContainer extends React.Component {
    render() {
        return this.props.isAuthenticated ? <Profile logout={this.props.logout} />
            : <Navigate to={'/login'} />
    }
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, {logout})(ProfileContainer)