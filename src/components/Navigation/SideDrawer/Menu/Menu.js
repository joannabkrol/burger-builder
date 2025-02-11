import React from 'react';
import classes from './Menu.module.css';

const menu = (props) => (
    <div className={classes.Hamburger} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default menu;