import React from 'react';
import Navigation from 'controllers/Navigation';
import Project from 'components/Project';
import './styles.css';

const Projects = ({projects, user}) => {

    console.log('projects are', projects);
    const greetingText = user.uid ? `Welcome ${user.email}` : 'User Not Logged In';
    
    return (<div className="page">
        <Navigation />
        { projects.map(project => <Project key={project.uid} {...project} />) }
    </div>);
};

export default Projects;