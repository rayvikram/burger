import React from 'react'

import BuilderControl from './BuildControl/BuildControl'

import classes from './BuildControls.module.css'

const content = [
    {'label':'Bacon', 'type':'bacon'},
    {'label':'Meat', 'type':'meat'},
    {'label':'Salad', 'type':'salad'},
    {'label':'Cheese', 'type':'cheese'},
]

const buildControls = () => (
    <div className={classes.BuildControls} >
        {content.map((item)=>(
            <BuilderControl key={item.label} label={item.label} />
        ))}
    </div>
)


export default buildControls