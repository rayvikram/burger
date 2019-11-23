import React from 'react';

import classes from './Backdrop.module.css'

const BackDrop = (props) => (
    props.show?<div className={classes.BackDrop} onClick={props.clicked}></div>: null
)

export default BackDrop;