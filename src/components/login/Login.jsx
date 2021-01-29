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
    login: 'LOGIN',
    signup: 'SIGNUP'
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
            <div className="flex-1 flex justify-center item-center">
                <img src={landingPageIllustration} className="w-2/3" alt="APD" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
                <h1>APD</h1>
                <div>
                    <span onClick={() => setFunctionality(functionalConstants.login)}>Login</span>
                    <span>|</span>
                    <span onClick={() => setFunctionality(functionalConstants.signup)}>Signup</span>
                </div>
                <div className="flex flex-col">
                    {error.length > 0 ? <span>{error}</span> : null}
                    {
                    functionality == functionalConstants.signup 
                        ? 
                        <input placeholder="Enter username" value={userName} onChange={e => setUserName(e.target.value)} />
                        : 
                        null 
                    }
                    <input placeholder="Enter email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={() => authHandler()} disabled={loading} >{loading ? <span><CircularProgress /> Loading...</span> : functionality}</button>
                </div>
                <span>or</span>
                <div className="login__google border border-blue-600 box-border rounded-lg flex items-center py-1 px-5 cursor-pointer" onClick={googleAuth}>
                <img className="h-5 mr-3" src="https://img.favpng.com/7/1/24/google-logo-google-search-icon-png-favpng-DLXaPGArrFH6yJjYE8USnMuvX_t.jpg"></img>
                    <span>Continue with Google</span>
                </div>
            </div>
        </div>

        // <div className="flex h-screen">
        //     <div className="flex-1 flex justify-center items-center">
        //         <img src={landingPageIllustration} className="w-2/3" alt="Landing page illustration" />
        //     </div>
        //     <div className="flex-1 flex flex-col justify-center items-center">
        //         <h1 className="text-5xl">APD</h1>
        //         <div className="login__form flex flex-col justify-start w-1/2">
        //             <div>
        //                 <span className={template == 'Login' ? "login__tabs login__tabSelected" : "login__tabs cursor-pointer"} onClick={() => setTemplate('Login')}>Login</span>
        //                 <span> | </span>
        //                 <span className={template != 'Login' ? "login__tabs login__tabSelected" : "login__tabs"} onClick={() => setTemplate('Register')}>Register</span>
        //             </div>
        //             <input placeholder="Enter username" className="border border-blue-600 mx-7 outline-none p-2"></input>
        //             <input type="password" placeholder="Enter password" className="border border-blue-600 mx-7 outline-none p-2"></input>
        //             <button className="p-3 mx-7 bg-blue-600 text-white">{template}</button>
        //             {error ? <span className="login__error text-red-500 text-center">Error: {error}</span> : null }
        //         </div>
        //         <span className="login__separator">or</span>
        //         <div className="login__google border border-blue-600 box-border rounded-lg flex items-center py-1 px-5 cursor-pointer" onClick={loginHandler}>
        //         <img className="h-5 mr-3" src="https://img.favpng.com/7/1/24/google-logo-google-search-icon-png-favpng-DLXaPGArrFH6yJjYE8USnMuvX_t.jpg"></img>
        //             <span>Continue with Google</span>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Login;