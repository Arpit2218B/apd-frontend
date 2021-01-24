import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { USER } from '../../dataStore/actionConstants';
import '../../styles/components/Login.scss';

const Login = () => {

    const [ template, setTemplate ] = useState('Register');
    const [ error, setError ] = useState('');

    const history = useHistory();

    const dispatch = useDispatch();

    const loginHandler = () => {
        const jwt = {
            'userName': 'Arpit',
            'email': 'test@google.com'
        }

        localStorage.setItem('jwt', JSON.stringify(jwt));
        dispatch({
            type: USER.SET_USER,
            payload: jwt
        })

        history.push('/app/dashboard');
    }

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
                    {error ? <span className="login__error">Error: {error}</span> : null }
                </div>
                <span className="login__separator">or</span>
                <div className="login__google" onClick={loginHandler}>
                    <span>{template} with Google</span>
                    <img src="https://img.favpng.com/7/1/24/google-logo-google-search-icon-png-favpng-DLXaPGArrFH6yJjYE8USnMuvX_t.jpg"></img>
                </div>
            </div>
        </div>
    )
}

export default Login;