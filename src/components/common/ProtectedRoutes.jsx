import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {

    const user = useSelector(state => state.userReducer);

    // For dev purpose
    user.user = {
        name: 'Test User'
    }

    const isAuthenticated = user.user != null;
    return (
        <Route {...rest} render={() => {
          return isAuthenticated === true
            ? children
            : <Redirect to='/login' />
        }} />
    )
}

export default ProtectedRoute;