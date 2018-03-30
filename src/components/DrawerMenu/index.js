import React from 'react';
import Drawer from 'material-ui/Drawer';

class DrawerMenu extends React.Component {

    static defaultProps = {
        menu: null,
        target: 'left',
    };
    
    constructor(props) {
        super(props);
        this.state = { left: props.menus.userMenu.open };
    }
    
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.menus.userMenu.open !== this.state.left) {
            this.state.left = nextProps.menus.userMenu.open;
        }
    };
    
    render() {
        const { menus, target, userMenuClick } = this.props;
        return <div>
            <Drawer
                open={this.state[target]}
                onClose={userMenuClick}
            >
                {this.props.menu}
            </Drawer>
        </div>;
    }
}

export default DrawerMenu;
