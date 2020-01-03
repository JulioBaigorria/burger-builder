import React,{ Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component{
    state ={
        ingredients: {
            salad: 1,
            bacon: 2,
            cheese: 3,
            meat: 3
        }
    }

    addIngredientHandler = (type) => {

    }

    removeIngredientHandler = (type) => {

    }

    
    render(){
        return(
            <Auxiliary>
                <Burger  ingredients={this.state.ingredients}/>
                <BuildControls />
            </Auxiliary>
        )
    }
}

export default BurgerBuilder