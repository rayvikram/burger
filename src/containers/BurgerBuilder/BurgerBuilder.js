import React, { Component , Fragment } from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Loader/Loader'
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

import axios from '../../Axios'

const BURGERITEM_PRICE = {
    meat: 15,
    cheese: 20,
    salad: 10,
    bacon: 25
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0,
        },
        totalPrice: 30,
        isPurchasable: false,
        purchasing: false,
        loading: false,
    }

    updateIsPurchasable = (ingredients) => {
        let totalItem = Object.keys(ingredients).reduce((final, key)=>{
            return final + ingredients[key]
        },0)
        this.setState({
            isPurchasable: totalItem > 0
        });
    }

    handleAddItem = (item) => {
        const totalItem = this.state.ingredients[item] + 1;
        const newPrice = this.state.totalPrice + BURGERITEM_PRICE[item];
        const newIngredients = {
            ...this.state.ingredients,
            [item]: totalItem
        }
        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        });
        this.updateIsPurchasable(newIngredients);
    }

    handleRemoveItem = (item) => {
        const totalItem = this.state.ingredients[item] - 1;
        if (totalItem < 0) {
            return
        }
        const newPrice = this.state.totalPrice - BURGERITEM_PRICE[item];
        const newIngredients = {
            ...this.state.ingredients,
            [item]: totalItem
        }
        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        });
        this.updateIsPurchasable(newIngredients);
    }

    handlePurchasing = () => {
        this.setState({
            purchasing: true
        })
    }

    handleHideBackdrop = () => {
        this.setState({
            purchasing: false
        })
    }

    handlePurchaseSuccess = () => {
        this.setState({
            loading: true
        });
        let data = {
            quantity: 9,
            name: 'vikram',
            price: 90
        }
        axios.post('/orders.json',data)
            .then((response)=>{
                console.log(response);
                this.setState({
                    loading: false,
                    purchasing: false,
                })
            })
            .catch((err)=>{
                console.log(err);
                this.setState({
                    loading: false,
                    purchasing: false,
                });
            });
    }

    render () {       
        const totalPrice = this.state.totalPrice
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let item in disabledInfo) {
            disabledInfo[item] = disabledInfo[item] <= 0
        }

        let modelChildren = (
            <OrderSummary
                totalPrice={this.state.totalPrice}
                cancelClicked={this.handleHideBackdrop}
                orderClicked={this.handlePurchaseSuccess}
                ingredients={this.state.ingredients} />
        )

        if(this.state.loading) {
            modelChildren = (
                <Spinner />
            )
        }

        return (
        <Fragment>
            <Modal show={this.state.purchasing} hideBackdrop={this.handleHideBackdrop}>
                {modelChildren}
            </Modal>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
                addItemHandler={this.handleAddItem} 
                removeItemHandler={this.handleRemoveItem}
                disabledInfo={disabledInfo}
                totalPrice={totalPrice}
                isPurchasable={this.state.isPurchasable}
                purchase = {this.handlePurchasing} />
        </Fragment>
        )
    }
}

export default WithErrorHandler(BurgerBuilder, axios);