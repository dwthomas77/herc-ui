import { connect } from 'react-redux';
import { LOGIN_ERROR_KEY } from 'constants.js';
import { loginUser } from 'actions';
import Login from 'components/Login';

const mapStateToProps = (state) => {

    const errors = [];

    if (state.errors[LOGIN_ERROR_KEY]) {
        errors.push(state.errors[LOGIN_ERROR_KEY]);
    }

    return {
        errors,
        user: state.user,
    }
};

const mapDispatchToProps = ({   
    loginUser,
});

const LoginController = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);

export default LoginController;