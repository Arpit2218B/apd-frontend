import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {

    const isAuthenticated = true;
    return (
        <Route {...rest} render={() => {
          return isAuthenticated === true
            ? children
            : <Redirect to='/login' />
        }} />
    )
}

export default ProtectedRoute;