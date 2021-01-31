import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { RootState } from '../../store';

interface PrivateRouteProps extends RouteProps {
    component: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
    const { authenticated } = useSelector((state: RootState) => state.auth);
    return (
        <Route {...rest} render={props => authenticated ? <Component {...props} /> : <Redirect to="/login" />} />
    );
}

export default PrivateRoute;