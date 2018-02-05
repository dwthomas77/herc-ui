import React from 'react';
import PropTypes from 'prop-types';
import LoadingScreen from 'components/LoadingScreen';

import {
    Route,
    Redirect,
} from 'react-router-dom';

const propTypes = {
    component: PropTypes.element.isRequired,
    user: PropTypes.object.isRequired,
};

const AuthorizedRoute = ({ user, component: Component, ...rest }) => {
    const { authInitiated, uid } = user;
    return (
        <Route {...rest} render={props => (
            !authInitiated ? <LoadingScreen />
            : !!uid ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}/>
                )
        )}/>
    );
    
};

export default AuthorizedRoute;

export const LoginRoute = ({ user, component: Component, ...rest }) => {
    const { authInitiated, uid } = user;
    return (
        <Route {...rest} render={props => (
            !authInitiated ? <LoadingScreen />
                : uid ? (
                    <Redirect to={{
                        pathname: '/',
                        state: { from: props.location }
                    }}/>
                    ) : (
                        <Component {...props}/>
                    )
        )}/>
    );

};

