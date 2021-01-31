import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { RootState } from '../../store';

interface PublicRouteProps extends RouteProps {
    component: any;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, ...rest }) => {
    const { authenticated } = useSelector((state: RootState) => state.auth);
    return (
        <Route {...rest} render={props => !authenticated ? <Component {...props} /> : <Redirect to='/' />} />
    );
}

export default PublicRoute;