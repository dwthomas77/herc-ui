import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const propTypes = {
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    fullWidth: PropTypes.bool,
    helperText: PropTypes.node,
    helperTextClassName: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    type: PropTypes.string,
};

const defaultProps = {
    autoComplete: '',
    autoFocus: false,
    defaultValue: '',
    disabled: false,
    error: false,
    fullWidth: false,
    helperText: null,
    helperTextClassName: '',
    label: '',
    onBlur: null,
    onChange: null,
    type: 'text',
};

class Input extends Component {

    state = { value: this.props.value };
    
    handleChange = event => {
        this.setState({ value: event.target.value })
    };
    
    render() {
        
        const inputProps = {
            ...this.props,
            onChange: this.handleChange,
        };
        
        return (
            <TextField {...this.props} />
        );
    }

};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;