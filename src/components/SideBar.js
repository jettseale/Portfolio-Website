import React from 'react';

import '../App.css';

const SideBar = () => {
    return (
        <div className="SideBar">
            <a href="#about">Introduction</a>
            <a href="#services">About</a>
            <a href="#clients">Projects</a>
            <a href="#contact">Timeline</a>
        </div>
    )
}

export default SideBar;