import React,{useState} from 'react'; 
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import './LoginPage.css'

const LoginPage = () => {
//if the person clicks the sign-up button on the login form, show the sign up component. 
const [showLogin,setshowLogin] = useState(true)

const showLoginHandler = () => {
    setshowLogin(true)
}

const showSignupHandler = () => {
    setshowLogin(false)
}

if (showLogin===false) {
    return (
    <div className="loginpageform">
        <h1> TrackMySightWords </h1>
        <SignupForm onSwitch={showLoginHandler}/>
    </div> 
    )
}
else {
    return <><h1> TrackMySightWords </h1><LoginForm onSwitch={showSignupHandler}/></> 
}

}

export default LoginPage