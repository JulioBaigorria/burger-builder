import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        console.log(igKey)
        console.log()
        return [...Array(props.ingredients[igKey])].map((_, i)=>
    {   
        
        console.log(i)
        return <BurgerIngredient key={igKey + i} type={igKey}/>
        
        })
    })
    
    return (
        <div className={classes.Burger} >
            <BurgerIngredient type='bread-top' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='meat' />
            <BurgerIngredient type='bread-bottom'/>
        </div>



    )
}

export default burger