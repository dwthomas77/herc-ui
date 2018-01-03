import React from 'react';
import PropTypes from 'prop-types';

import {
    Route,
    Redirect,
} from 'react-router-dom';

const propTypes = {
    component: PropTypes.element.isRequired,
    user: PropTypes.object.isRequired,
};

const AuthorizedRoute = ({ user, component: Component, ...rest }) => {
 
    console.log('user is', user);
    
    const { uid } = user;
    
    return (
        <Route {...rest} render={props => (
            !!uid ? (
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
