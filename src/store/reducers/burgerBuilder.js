import * as actionTypes from '../actions/actionTypes';
import {updatedObject} from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.6,
    bacon: 1,
    meat: 2.5
};

const setIngredients  = (state, action) => {
    return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: 4,
        error: false,
        building: false,
    }
}
const fetchIngrdients = (state, action) => {
    return {
        ...state,
        error: true
    }
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            //this is compact version with usage of updatedObject function declared in different file:
            const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
            const updatedIngredients = updatedObject(state.ingredients, updatedIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building: true,
            }
            return updatedObject(state, updatedState);
        case actionTypes.REMOVE_INGREDIENT:
            return {
                //this can be written in the very similar way as ADD_INGREDIENTS with updatedObject:
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                building: true,

            };
        // and another diferent way of writing reducer, functions that do some work are declared on the top, before reducer function    
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action); 
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngrdients(state, action);   
        default: return state;
    }
};

export default reducer;