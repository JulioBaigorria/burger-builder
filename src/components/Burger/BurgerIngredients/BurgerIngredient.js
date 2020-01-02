import React from 'react'
import ingredients from './BurgerIngredient.css'

const burgerIngredient = (props) => {
    let ingredient = null

    switch(props.type){
        case ('bread-bottom'):
            ingredient = <div ClassName={ingredients.BreadBottom}></div>
            break
        case ('bread-top'):
            ingredient = (
                <div className={ingredients.BreadTop}>
                   <div className={ingredients.Seeds1}></div>
                   <div className={ingredients.Seeds2}></div>
                </div>
           ) 
           break
        case ('meat'):
            ingredient = <div className={ingredients.Meat}></div>
            break
        case ('cheese'):
            ingredient = <div className={ingredients.Cheese}></div>
            break
        case (salad):
            ingredient = <div className={ingredients.Salad}></div>
            break
        case ('bacon'):
            ingredient = <div className={ingredients.Bacon}></div>
            break
        default: ingredient = null
    }
    return ingredient
} 

export default burgerIngredient