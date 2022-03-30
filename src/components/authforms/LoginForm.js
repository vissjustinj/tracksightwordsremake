import React from 'react'
import './SignupForm.css'

const LoginForm = (props) => {
    const showSignupPage = (event) => {
        props.onSwitch()
    }

    return (
    <div className="signup-login-form">
        <h2>Log In</h2>
        <form className="ui form">
            <div className="field">
                <label>Email</label>
                <input type="text" name="email" placeholder="Email"/>
            </div>
            <div className="field">
                <label>Password</label>
                <input type="text" name="password1" placeholder="Password"/>
            </div>
            <div className="field">
                <div className="ui checkbox">
                <input type="checkbox" tabIndex="0" className="hidden"/>
                <label>Keep me signed in</label>
                </div>
            </div>
            <button className="ui button" type="submit">Login</button>
            <button className="ui button" type="button" onClick={showSignupPage}>Sign-Up</button>
        </form>
    </div>
    )
}

export default LoginForm