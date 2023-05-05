import React from "react";
import {Header} from '../Main/Header/Header';
import './Login.css'

function Login() {

    return (
        <>
            <Header isHome={false}/>
            <div className="login-container">
                <div className="login-title">Login</div>
                <div className="input-container">
                    <div className="title">Email</div>
                    <input placeholder="youremail@gmail.com"/>
                </div>
                <div className="input-container">
                    <div className="title">Password</div>
                    <input placeholder="*********"/>
                </div>
                <div className="submit-button">Submit</div>
            </div>
        </>
    )
}

export default Login;