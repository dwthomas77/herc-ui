import { connect } from 'react-redux';
import { SET_MENU, TOGGLE_MENU } from 'constants.js';
import { logoutUser } from 'actions';
import Navigation from 'components/Navigation';

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = ({
    logoutUser,
    menuClick: () => ({
        type: TOGGLE_MENU,
        key: 'userMenu',
    }),
});

const NavigationController = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);

export default NavigationController;