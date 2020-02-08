import React, {Component} from 'react'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

        //se utilizo para saber si se re-renderiza
        //ver Modal.js funcion ShouldComponentUpdate
        //no es necesario class based, puede ser functional
    componentWillUpdate(){
        console.log('[OrderSummary] WillUpdate')
    }

     render(){

        const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey =>{
    return <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}</li>
    } )
        return(
            <Auxiliary>
                <h3>Your Order</h3>
                <p>The following ingredients are:</p>
                <ul>
                {ingredientSummary}
                </ul>
                <p>Tenes que garpar: {this.props.platita.toFixed(2)} </p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.continuarPurchase}>Continue</Button>
                </Auxiliary>
        )
    }
    
    
    
}

export default OrderSummary