import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey =>{
    return <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
    } )

    console.log(props.ingredients)
    return(
        <Auxiliary>
            <h3>Your Order</h3>
            <p>The following ingredients are:</p>
            <ul>
            {ingredientSummary}
            </ul>
            <p>Tenes que garpar: {props.platita.toFixed(2)} </p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
            <Button btnType="Success" clicked={props.continuarPurchase}>Continue</Button>
            </Auxiliary>
    )
}

export default orderSummary