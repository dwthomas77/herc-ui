import React from 'react';
import './styles.css';
import hercLogoGrn from 'static/herc_logo_green.png';

const LoadingScreen = () => {
    return (<div className="loading-screen"><img src={hercLogoGrn} /></div>);
};

export default LoadingScreen;