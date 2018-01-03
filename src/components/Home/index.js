import React from 'react';
import Navigation from 'controllers/Navigation';
import './styles.css';

const Home = ({user}) => {

    const greetingText = user.uid ? `Welcome ${user.email}` : 'User Not Logged In';
    
    return (<div className='page'>
        <Navigation />
        <div className="home">{greetingText}</div>
    </div>);
};

export default Home;