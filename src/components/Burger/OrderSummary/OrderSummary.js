import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary'

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
            <button>Cancel</button>
            <button>Continue</button>
            </Auxiliary>
    )
}

export default orderSummary