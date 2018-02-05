import React from 'react';
import Appointment from 'components/Appointment';
import './styles.css';

const Project = (props) => {
    
    console.log('props are', props);
    
    const {
        appointments,
        description,
        name
    } = props;
    
    return (
        <div className="project">
            <h3>{name}</h3>
            <div className="project__description">{description}</div>
            { appointments.map(appointment => <Appointment key={appointment.uid} {...appointment} />)}
        </div>
    );
    
};

export default Project;