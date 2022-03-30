import React from 'react'
import './Header.css'

const Header = () => {


    return (
        <div className="headerdiv">
            <div className="ui secondary menu">
                <h2>Track My Sight Words</h2>
            <div className="right menu">
                <div className="item">
                <div className="text">
                    Logged in User: "Add Email Here"   
                </div>
                </div>
                <button id="logoutheaderbutton" className="ui button">
                    Logout
                </button>
            </div>
            </div>

        </div>
        
    )
}

export default Header