import React from 'react';

import Ingredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.css';


const burger = (props) => {

    let ingredients = Object.keys(props.ingredients)
    .map((ingredientName) => {
        return [...Array(props.ingredients[ingredientName])]
            .map((_,index)=><Ingredient type={ingredientName} key={ingredientName + index} />)
        })
            .reduce((val, redu)=>{
                return val.concat(redu)
            },[])    

    if (ingredients.length === 0) {
        ingredients = <p>Please start adding something</p>
    } 

    return(
        <div className={classes.Burger}>
            <Ingredient type='bread-top' />
            {ingredients}
            <Ingredient type='bread-bottom' />
        </div>
        )
}

export default burger;