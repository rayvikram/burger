import React, {Component, Fragment} from 'react';

import Toolbar from '../UI/Navigation/Toolbar/Toolbar'
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer'
import classes from './Layout.module.css'

class Layout extends Component {
    state = {
        sideDrawerOpen: true,
    }

    handleSideDrawer = () => {
        this.setState((prevState)=>{
            return({sideDrawerOpen: !prevState.sideDrawerOpen})
        })
    }


    render () {
        return(
            <Fragment>
            <Toolbar drawerTogglerClicked={this.handleSideDrawer}/>
            <div>
                <SideDrawer backdropClicked={this.handleSideDrawer} showBackdrop={this.state.sideDrawerOpen}/>
                   main, extra
            </div>
            <main className={classes.content}>
                {this.props.children}
            </main>
        </Fragment>
        )
    }
} 

export default Layout
