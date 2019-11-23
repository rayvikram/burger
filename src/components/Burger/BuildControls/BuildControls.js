import React from 'react'

import BuilderControl from './BuildControl/BuildControl'

import classes from './BuildControls.module.css'

const content = [
    {'label':'Bacon', 'type':'bacon'},
    {'label':'Meat', 'type':'meat'},
    {'label':'Salad', 'type':'salad'},
    {'label':'Cheese', 'type':'cheese'},
]

const buildControls = (props) => (
    <div className={classes.BuildControls} >
        <p>Total price: <strong>{props.totalPrice}</strong></p>
        {content.map((item)=>(
            <BuilderControl
                key={item.label} 
                label={item.label}
                addItemHandler={() => props.addItemHandler(item.type)}
                removeItemHandler={() => props.removeItemHandler(item.type)}
                isDisabled={props.disabledInfo[item.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled = {!props.isPurchasable}
            onClick={props.purchase}
        >ORDER NOW</button>
    </div>
)


export default buildControls