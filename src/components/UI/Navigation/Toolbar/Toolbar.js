import React from 'react';

import Logo from '../../Logo/Logo'
import classes from './Toolbar.module.css';

const toolbar = props => (
    <header className={classes.Toolbar}>
        <p>Menu</p>
        <Logo />
        <p>...</p>
    </header>
)

export default toolbar;