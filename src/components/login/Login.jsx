import React, { useState } from 'react';
import '../../styles/components/Login.scss';

const Login = () => {

    const [ template, setTemplate ] = useState('Register');

    return (
        <div className="login">
            <div className="login__left"></div>
            <div className="login__right">
                <h1>APD</h1>
                <div className="login__form">
                    <div>
                        <span className={template == 'Login' ? "login__tabs login__tabSelected" : "login__tabs"} onClick={() => setTemplate('Login')}>Login</span>
                        <span> | </span>
                        <span className={template != 'Login' ? "login__tabs login__tabSelected" : "login__tabs"} onClick={() => setTemplate('Register')}>Register</span>
                    </div>
                    <input placeholder="Enter username"></input>
                    <input type="password" placeholder="Enter password"></input>
                    <button>{template}</button>
                </div>
                <span className="login__separator">or</span>
                <div className="login__google">
                    <span>{template} with Google</span>
                    <img src="https://img.favpng.com/7/1/24/google-logo-google-search-icon-png-favpng-DLXaPGArrFH6yJjYE8USnMuvX_t.jpg"></img>
                </div>
            </div>
        </div>
    )
}

export default Login;