import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { USER } from '../../dataStore/actionConstants';
import '../../styles/components/Login.scss';
import { auth, provider } from '../../utils/firebase';
import landingPageIllustration from '../../images/landing_page_1.svg';

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
        <div className="flex h-screen">
            <div className="flex-1 flex justify-center items-center">
                <img src={landingPageIllustration} className="w-2/3" alt="Landing page illustration" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
                <h1 className="text-5xl">APD</h1>
                <div className="login__form flex flex-col justify-start w-1/2">
                    <div>
                        <span className={template == 'Login' ? "login__tabs login__tabSelected" : "login__tabs cursor-pointer"} onClick={() => setTemplate('Login')}>Login</span>
                        <span> | </span>
                        <span className={template != 'Login' ? "login__tabs login__tabSelected" : "login__tabs"} onClick={() => setTemplate('Register')}>Register</span>
                    </div>
                    <input placeholder="Enter username" className="border border-blue-600 mx-7 outline-none p-2"></input>
                    <input type="password" placeholder="Enter password" className="border border-blue-600 mx-7 outline-none p-2"></input>
                    <button className="p-3 mx-7 bg-blue-600 text-white">{template}</button>
                    {error ? <span className="login__error text-red-500 text-center">Error: {error}</span> : null }
                </div>
                <span className="login__separator">or</span>
                <div className="login__google border border-blue-600 box-border rounded-lg flex items-center py-1 px-5 cursor-pointer" onClick={loginHandler}>
                <img className="h-5 mr-3" src="https://img.favpng.com/7/1/24/google-logo-google-search-icon-png-favpng-DLXaPGArrFH6yJjYE8USnMuvX_t.jpg"></img>
                    <span>Continue with Google</span>
                </div>
            </div>
        </div>
    )
}

export default Login;