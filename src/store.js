import {createStore} from 'redux';

const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
};

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_AUTHORFIRSTNAME = 'UPDATE_AUTHORFIRSTNAME'
export const UPDATE_AUTHORLASTNAME = 'UPDATE_AUTHORLASTNAME'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const ADD_INSTRUCTIONS = 'ADD_INSTRUCTIONS'
export const ADD_RECIPE = 'ADD_RECIPE'

function reducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: payload
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                category: payload
            }
        case UPDATE_AUTHORFIRSTNAME:
            return {
                ...state,
                authorFirst: payload
            }
        case UPDATE_AUTHORLASTNAME:
            return {
                ...state,
                authorLast: payload
            }
        case ADD_INGREDIENT:
            const newIngredients = [...state.ingredients, payload];
            return { 
                ...state, 
                ingredients: newIngredients 
            }
        case ADD_INSTRUCTIONS:
            const newInstructions = [...state.instructions, payload];
            return {
                ...state, 
                instructions: newInstructions };
        case ADD_RECIPE:
            const {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
              } = state;
              const recipe = {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
              };
              const newRecipes = [...state.recipes, recipe];
              return { ...state, recipes: newRecipes };
        default: return state;
    }
}

export default createStore(reducer);