import React, {Fragment} from 'react';

import Toolbar from '../UI/Navigation/Toolbar/Toolbar'

import classes from './Layout.module.css'

const layout = props => (
    <Fragment>
        <Toolbar />
        <div>
                Side, main, extra
        </div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Fragment>
)

export default layout
