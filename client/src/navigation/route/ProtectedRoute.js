import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {NAVIGATION_ROUTES} from "../constant/NavigationRoutes";

export const ProtectedRoute = (props) => {
    const { layout: Layout, component: Component, ...rest } = props;
    const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

    return (
        <Route
            {...rest}
            render={({ props, location }) =>
                isLoggedIn ? (
                    <Redirect to={{ pathname: NAVIGATION_ROUTES.dashboard, state: { from: location } }} />
                ) : (
                    <Component component={Component} exact layout={Layout} {...props} />
                )
            }
        />
    );
};
