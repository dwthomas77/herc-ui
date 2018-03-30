import { connect } from 'react-redux';
import DrawerMenu from 'components/DrawerMenu';
import { TOGGLE_MENU } from 'constants.js';

const mapStateToProps = state => ({ menus: state.menus });

const mapDispatchToProps = ({
    userMenuClick: () => ({
        type: TOGGLE_MENU,
        key: 'userMenu',
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);
