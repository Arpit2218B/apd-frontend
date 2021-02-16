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
        <div className="login">
            <div className="login__left">
                <img src={landingPageIllustration} alt="APD" />
            </div>
            <div className="login__right">
                <h1>APD</h1>
                <div className="login__tabsContainer">
                    <span className={functionality == functionalConstants.login ? "login__tabs selected" : "login__tabs"} onClick={() => setFunctionality(functionalConstants.login)}>Login</span>
                    <span>|</span>
                    <span className={functionality == functionalConstants.signup ? "login__tabs selected" : "login__tabs"} onClick={() => setFunctionality(functionalConstants.signup)}>Signup</span>
                </div>
                <div className="login__form">
                    {error.length > 0 ? <span className="login__error">{error}</span> : null}
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
                <span>or</span>
                <div className="login__google" onClick={googleAuth}>
                <img src="https://img.favpng.com/7/1/24/google-logo-google-search-icon-png-favpng-DLXaPGArrFH6yJjYE8USnMuvX_t.jpg"></img>
                    <span>Continue with Google</span>
                </div>
            </div>
        </div>
    )
}

export default Login;