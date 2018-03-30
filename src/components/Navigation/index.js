import React from 'react';
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    },
    loginButton: {
        color: 'white',
        fontSize: '12px',
    },
    white: { color: 'white' },
    navTitle: {
        color: 'white',
        fontWeight: 'normal',
    },
    toolbar: {
        justifyContent: 'space-between',
    }
};

const Navigation = (props) => {
    const { classes, logoutUser, user } = props;
    const authorized = !!user.uid;
    
    const loginButtonProps = {
        className: classes.loginButton,
        onClick: authorized ? logoutUser : () => null,
    };
    
    const loginAction = user.uid ? 'LOGOUT'
        : <Link to="/login" className={classes.link}>LOGIN</Link>;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton aria-label="Menu" className={classes.white} onClick={props.menuClick}>
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" className={classes.navTitle}>
                        All Projects
                    </Typography>
                    <Button {...loginButtonProps}>{loginAction}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(Navigation);