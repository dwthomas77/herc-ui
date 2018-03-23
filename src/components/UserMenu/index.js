import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import AssignmentIcon from 'material-ui-icons/Assignment';
import AssignmentIndIcon from 'material-ui-icons/AssignmentInd';
import PermIdentity from 'material-ui-icons/PermIdentity';
import Settings from 'material-ui-icons/Settings';
import PersonCard from 'components/PersonCard';

const menuItems = [
    {
        icon: AssignmentIcon,
        label: 'All Projects',
    },
    {
        icon: AssignmentIndIcon,
        label: 'My Projects',
    },
    {
        icon: PermIdentity,
        label: 'My Profile',
    },
    {
        icon: Settings,
        label: 'Settings',
    },

];

class UserMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 }
    }

    generateMenuItem = ({ icon: Icon, label }, index) => {
        const { activeIndex } = this.state;
        const isActive = activeIndex === index;
        const color = isActive  ? 'primary' : 'secondary';
        
        const primaryTextComponent = !isActive ? label
            : <Typography type="body2" style={{fontSize: '18px'}} color={color}>{label}</Typography>;
        
        const listItemTextComponent = <ListItemText
            disableTypography={isActive}
            primary={primaryTextComponent}
        />;
        
        return (
            <ListItem button>
                <ListItemIcon color={color}>
                    <Icon />
                </ListItemIcon>
                {listItemTextComponent}
            </ListItem>
        );
    };
    
    render() {
        const styles = {
            container: {
                flex: 1,
                backgroundColor: '#F6F6F6',
            }
        };

        return (
            <div style={styles.container}>
                <PersonCard />
                <div>
                    <List component="nav">
                        {menuItems.map(this.generateMenuItem)}
                    </List>
                </div>
            </div>
        );
    }

};

export default UserMenu;