import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { USER } from '../../dataStore/actionConstants';
import '../../styles/components/Login.scss';
import { auth, provider } from '../../utils/firebase';

const Login = () => {

    const [ template, setTemplate ] = useState('Register');
    const [ error, setError ] = useState('');

    const history = useHistory();

    const dispatch = useDispatch();

    const fetchUser = (userObject) => {
        const newUser = {
            name: userObject.additionalUserInfo.profile.name,
            id: userObject.additionalUserInfo.profile.id
        }
        return newUser;
    }

    const loginHandler = () => {

        auth.signInWithPopup(provider)
        .then(res => {
            const userObj = fetchUser(res);
            // call /login api from backend
            localStorage.setItem('jwt', JSON.stringify(userObj));
            dispatch({
                type: USER.SET_USER,
                payload: userObj
            })

            history.push('/app/dashboard');
        })
        .catch(err => setError(err.message));
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