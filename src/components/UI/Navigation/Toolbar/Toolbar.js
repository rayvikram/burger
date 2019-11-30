import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler'

import classes from './Toolbar.module.css';

const toolbar = props => (
    <header className={classes.Toolbar}>
        <DrawerToggler clicked={props.drawerTogglerClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <div className={classes.DesktopOnly}>
            <NavigationItems />
        </div>
    </header>
)

export default toolbar;