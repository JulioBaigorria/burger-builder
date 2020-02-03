import React,{ Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component{
    state ={
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    addIngredientHandler = (type) => {
        
        const oldCount = this.state.ingredients[type]        
        const updatedCount = oldCount + 1        
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        
        const newPrice = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const updatedPrice = oldPrice + newPrice

        this.setState({totalPrice: updatedPrice,
                    ingredients: updatedIngredients})
        

    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount - 1
        const borrarIngrediente = {
            ...this.state.ingredients
        }
        borrarIngrediente[type] = updatedCount
        
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction

        this.setState({ingredients : borrarIngrediente,
                    totalPrice: newPrice
        })
    }
   
    mostrarOrderHandler = () => {
        this.setState({purchasable: !this.state.purchasable })
    }

    //mostrarOrderHandler y cerrarOrderHandler funcionan igual, pero al revés
    cerrarOrderHandler = () => {
        this.setState({ purchasable: false })
    }

    continuarOrderHandler = () => {
        alert('Continuaste!')
    }
    
    render(){
        
        const disablearInfo = {
            ...this.state.ingredients}

        for (let key in disablearInfo){
            disablearInfo[key] = disablearInfo[key] <= 0
            
        }
        let disablear = false
        if (this.state.ingredients.salad === 0 &&
            this.state.ingredients.cheese === 0 &&
            this.state.ingredients.meat === 0 &&
            this.state.ingredients.bacon === 0 
           ){
            
            disablear = true
        }

                
        return(
            <Auxiliary>
                <Modal show={this.state.purchasable} cerrarBackDrop={this.cerrarOrderHandler} >
                    <OrderSummary ingredients={this.state.ingredients}
                        purchaseCanceled={this.cerrarOrderHandler}
                        continuarPurchase={this.continuarOrderHandler}
                        platita={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabled={disablearInfo}
                    price ={this.state.totalPrice}
                    orderNow={disablear} mostrarOrder={this.mostrarOrderHandler}/>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder