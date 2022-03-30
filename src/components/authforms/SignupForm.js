import React from 'react'; 

import './SignupForm.css'; 


const SignupForm = (props) => {
    
    const showLoginPage = () => {
        props.onSwitch()
    }


    return (
    <div className="signup-login-form">
        <h2>Sign-Up</h2>
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
                <label>Confirm Password</label>
                <input type="text" name="password1" placeholder="Confirm Password"/>
            </div>
            <div className="field">
                <div className="ui checkbox">
                <input type="checkbox" tabIndex="0" className="hidden"/>
                <label>Keep me signed in</label>
                </div>
            </div>
            <button className="ui button" type="submit">Sign-Up</button>
            <button className="ui button" type="button" onClick={showLoginPage}>Login</button>
        </form>
    </div>
    )}

export default SignupForm