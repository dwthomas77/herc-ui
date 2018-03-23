import React from 'react';
import Drawer from 'material-ui/Drawer';

class DrawerMenu extends React.Component {

    static defaultProps = {
        menu: null,
        target: 'left',
    };
    
    state = {
        left: true,
    };
    
    toggleDrawer = (target, open) => () => {
        this.setState({
            [target]: open,
        });
    };
    
    render() {
        const { target } = this.props;
        
        return <div>
            <Drawer
                open={this.state[target]}
                onClose={this.toggleDrawer(target, false)}
            >
                {this.props.menu}
            </Drawer>
        </div>;
    }
}

export default DrawerMenu;
