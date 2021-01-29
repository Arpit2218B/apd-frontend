import React, { useState } from 'react';
import '../../styles/components/Login.scss';
import landingPageIllustration from '../../images/landing_page_1.svg';
import { loginSvc, registerSvc } from '../../services/authService';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { USER } from '../../dataStore/actionConstants';
import { CircularProgress } from '@material-ui/core';
import { auth, provider } from '../../utils/firebase';

const functionalConstants = {
    login: 'Login',
    signup: 'Sign up'
}

const Login = () => {

    const [ functionality, setFunctionality ] = useState(functionalConstants.signup);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ userName, setUserName ] = useState('');
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const checkWrongCreds = (isGoogleLogin) => {
        if(!isGoogleLogin && email.length == 0)
            return 'Email cannot be empty';
        if(!isGoogleLogin && password.length == 0)
            return 'Password cannot be empty';
        if(!isGoogleLogin && functionality == functionalConstants.signup && userName.length == 0)
            return 'Username cannot be empty'
    }

    const sendRequest = (uname, mail, pwd) => {
        if(functionality == functionalConstants.login)
            return loginSvc(mail, pwd)
        else
            return registerSvc(mail, uname, pwd);
    }

    const googleAuth = () => {
        auth.signInWithPopup(provider)
        .then(res => {
            authHandler(true, res.additionalUserInfo.profile.name, res.additionalUserInfo.profile.email);
        })
        .catch(err => {
            setError(err);
        });
    }

    const authHandler = (isGoogleLogin=false, uName=userName, mail=email, pwd=password) => {
        setLoading(true);
        const checkError = checkWrongCreds(isGoogleLogin);
        if(checkError) {
            setError(checkError);
            setLoading(false);
            return;
        }
        sendRequest(uName, mail, pwd)
        .then(res => {
            if(res.errorCode) {
                setError(res.message);
                setLoading(false);
                return;
            }
            localStorage.setItem('jwt', JSON.stringify(res));
            dispatch({
                type: USER.SET_USER,
                payload: res
            });
            history.push('/app/dashboard');
        })
        .catch(err => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    return (
        <div className="flex h-screen">
            <div className="flex-1 flex justify-center item-center bg-blue-500">
                <img src={landingPageIllustration} className="w-2/3" alt="APD" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
                <h1 className="text-8xl m-4">APD</h1>
                <div className="flex justify-start mx-auto text-2xl items-center">
                    <span className={functionality == functionalConstants.login ? "login__tabs text-blue-600" : "login__tabs"} onClick={() => setFunctionality(functionalConstants.login)}>Login</span>
                    <span>|</span>
                    <span className={functionality == functionalConstants.signup ? "login__tabs text-blue-600" : "login__tabs"} onClick={() => setFunctionality(functionalConstants.signup)}>Signup</span>
                </div>
                <div className="flex flex-col">
                    {error.length > 0 ? <span className="text-red-500 mx-auto my-2">{error}</span> : null}
                    {
                    functionality == functionalConstants.signup 
                        ? 
                        <input className="login__formElems" placeholder="Enter username" value={userName} onChange={e => setUserName(e.target.value)} />
                        : 
                        null 
                    }
                    <input className="login__formElems" placeholder="Enter email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input className="login__formElems" type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="login__formElems login__formButton" onClick={() => authHandler()} disabled={loading} >{loading ? <span><CircularProgress size={20} /> Loading</span> : functionality}</button>
                </div>
                <span className="my-2">or</span>
                <div className="login__google border border-blue-600 box-border my-4 rounded-lg flex items-center py-2 px-5 cursor-pointer" onClick={googleAuth}>
                <img className="h-5 mr-3" src="https://img.favpng.com/7/1/24/google-logo-google-search-icon-png-favpng-DLXaPGArrFH6yJjYE8USnMuvX_t.jpg"></img>
                    <span>Continue with Google</span>
                </div>
            </div>
        </div>
    )
}

export default Login;