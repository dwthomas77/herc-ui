import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import './styles.css';

class Appointment extends Component {

    state = {
        checked: false,
    };

    constructor(props) {
        super(props);
        const {
            start_date: start,
        } = props;
        this.dateDisplay = start ? start : 'Any time';
    }
    
    handleChange = () => {
        this.setState({ checked: !this.state.checked });
    };
    
    render() {
        const {
            uid,
            start_date,
            end_date,
            hours_per_person: hours,
            number_of_volunteers: numPeople,
            volunteers: [],
        } = this.props;
        
        const {
            checked
        } = this.state;

        return (
            <div className="appointment">
                <Checkbox
                    checked={checked}
                    onChange={this.handleChange}
                    value={uid}
                />
                <div className="appointment_date_col">{this.dateDisplay}</div>
                <div className="appointment_hours_col">{`${hours} hour` + (hours > 1 ? 's' : '')}</div>
                <div className="appointment_people_col">{`${numPeople} volunteer${numPeople > 1 ? 's' : ''} needed`}</div>
            </div>
        );
    }
}

export default Appointment;
