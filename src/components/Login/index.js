import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Input from 'components/Input';
import Button from 'material-ui/Button';
import LoadingScreen from 'components/LoadingScreen';
import './styles.css';
import hercLogo from 'static/herc_logo.png';

const canSubmit = ({ currentEmail, currentPassword }) => {
    return currentEmail && currentPassword;
};

const styles = theme => ({
    loginField: {
        marginBottom: '25px',
    },
    button: {
        color: 'white',
        flex: 1,
    },
});

class Login extends Component {

    constructor(props) {
        super(props);
        const { classes } = props;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        const emailInput = {
            autoComplete: 'email',
            className: classes.loginField,
            id: 'userEmail',
            name: 'email',
            type: 'email',
            defaultValue: '',
            onChange: this.handleInputChange,
            label: 'Email address',
        };
        const passwordInput = {
            autoComplete: 'password',
            className: classes.loginField,
            id: 'userPassword',
            name: 'password',
            type: 'password',
            defaultValue: '',
            onChange: this.handleInputChange,
            label: 'Password',
        };
        this.state = {
            canSubmit: false,
            currentEmail: '',
            currentPassword: '',
            emailInput,
            passwordInput,
        };
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        const inputName = `${name}Input`;
        const isEmail = inputName.indexOf('email') !== -1;
        let isValid = !!(value && value.length);

        // if (isValid && isEmail) {
        //     const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     isValid = emailValidation.test(value);
        // }

        const validMsg = isEmail ? 'Enter a valid email address' : 'This field is required';
        const updatedInput = {
            ...this.state[inputName],
            error: !isValid,
            helperText: !isValid ? validMsg : '',
        };
        
        const currentValueKey = isEmail ? 'currentEmail' : 'currentPassword';
        const { currentEmail, currentPassword } = this.state;
        const updatedValues = {
            ...{ currentEmail, currentPassword},
            [currentValueKey]: value,
        };
        
        this.setState({
            [currentValueKey]: value,
            [inputName]: updatedInput,
            canSubmit: canSubmit(updatedValues),
        });
    }

    handleSubmit(e) {
        const { currentEmail, currentPassword } = this.state;
        const { loginUser } = this.props;

        e.preventDefault();

        loginUser({
            email: currentEmail,
            password: currentPassword,
        });
    }

    render() {
        const { classes, errors, user } = this.props;
        const { canSubmit, emailInput, passwordInput,  } = this.state;

        const submitButton = {
            disabled: !canSubmit,
            onClick: this.handleSubmit,
        };

        if (user.uid) {
            
        }
        
        console.log('user suth init', user.authInitiated);
        
        if (!user.authInitiated) {
            return <div className="login__loading-screen"><LoadingScreen /></div>;
        }
        
        return (
            <div className="page login-page">
                <div className="login__form">
                    <div className="login__logo"><img src={hercLogo} /></div>
                    <form className="login__form-fields">
                        {!!errors.length && <div className="user-auth__error">{errors.toString()}</div>}
                        <Input {...emailInput} />
                        <Input {...passwordInput} />
                        <div className="login__submit">
                            <Button raised color="primary" className={classes.button} {...submitButton}>
                                SIGN IN
                            </Button>
                        </div>
                    </form>
                    <div className="login__help-text">Forgot Password</div>
                    <div className="login__help-text">Help</div>
                </div>
            </div>
        );
    }


}

export default withStyles(styles)(Login);