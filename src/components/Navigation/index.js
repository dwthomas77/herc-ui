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
    white: { color: 'white' },
    toolbar: {
        justifyContent: 'space-between',
    }
};

const Navigation = (props) => {
    const { classes, user } = props;
    const loginText = user.uid ? 'LOGOUT' : 'LOGIN';
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton aria-label="Menu" className={classes.white}>
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" className={classes.white}>
                        All Projects
                    </Typography>
                    <Button className={classes.white}>{loginText}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(Navigation);