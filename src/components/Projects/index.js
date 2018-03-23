import React, { Component } from 'react';
import UserMenu from 'components/UserMenu';
import DrawerMenu from 'components/DrawerMenu';
import Navigation from 'controllers/Navigation';
import Project from 'components/Project';
import './styles.css';

class Projects extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: true,
        };
        this.menu = <UserMenu />;
    }
    
    render() {
        const { projects, user } = this.props;
        const greetingText = user.uid ? `Welcome ${user.email}` : 'User Not Logged In';
        
        return (
            <div className="page">  
                <Navigation />
                { projects.map(project => <Project key={project.uid} {...project} />) }
                <DrawerMenu target="left" menu={this.menu} />
            </div>
        );
    };
}

export default Projects;
