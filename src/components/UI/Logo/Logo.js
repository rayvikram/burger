import React from 'react';

import classes from './Logo.module.css';
import LogoImage from '../../../assets/images/burger-logo.png';

const Logo = () => (
    <div className={classes.Logo}>
        <img src={LogoImage} alt="Logo" />
    </div>
)

export default Logo