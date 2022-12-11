import React from 'react'
import {useState} from 'react'
import {Navigate} from 'react-router'


const Login = (props) => {
    const [typeInput, toggleTypeInput] = useState(true)
    let toggleType = () => {
        toggleTypeInput(!typeInput)
    }

    let passwordValue = React.createRef();
    let usernameValue = React.createRef();

    const usernameOnChange = () => {
        props.usernameChange(usernameValue.current.value)
    }
    const passwordOnChange = () => {
        props.passwordChange(passwordValue.current.value)
    }

    const login = () => {
        props.login(usernameValue.current.value, passwordValue.current.value)
    }

    return (
        <div>
            {props.isAuthenticated ? <Navigate to={'/'}/> : <div>
                <input name="username"
                       value={props.username}
                       ref={usernameValue}
                       onChange={usernameOnChange}
                       placeholder="Username"
                       required
                />
                <input name="password"
                       type={typeInput ? 'password' : ''}
                       value={props.password}
                       ref={passwordValue}
                       onChange={passwordOnChange}
                       placeholder="Password"
                       required
                />
                <button onClick={login}>SignIn</button>
                <button onClick={toggleType}>ViewPass</button>
            </div>}
        </div>
    )
}

export default Login;
