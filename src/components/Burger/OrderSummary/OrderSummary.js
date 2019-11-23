import React, {Fragment} from 'react';

import Button from '../../UI/Button/Button'

const orderSummary = props => {
    const ingredients = Object.keys(props.ingredients).map((igKey)=>(
        <li key={igKey}> <span style={{'textTransform': 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
    ))

    return (
        <Fragment>
            <h1>Your Order</h1>
            <p>Your burger is ready</p>
            <p><strong>Total Price: {props.totalPrice}</strong></p>
            {ingredients}
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.cancelClicked}>CANCEL</Button>
            <Button btnType='Success' clicked={props.orderClicked}>ORDER</Button>
        </Fragment>
    )
}

export default orderSummary;