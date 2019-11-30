import React, {Fragment} from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../BackDrop/BackDrop'

import classes from './SideDrawer.module.css'

const sideDrawer = (props) => {
    let sideDrawerClasses = [classes.SideDrawer,classes.Close]
    if (props.showBackdrop) {
        sideDrawerClasses = [classes.SideDrawer,classes.Open]
    }

    return (
        <Fragment>
            <Backdrop show={props.showBackdrop} clicked={props.backdropClicked}/>
            <div className={sideDrawerClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    )
}

export default sideDrawer;