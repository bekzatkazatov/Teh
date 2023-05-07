import {ADD_PRODUCT, GET_PRODUCT} from "../Types";


const initialState = {
    product: [],
    cards: []
}


export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT :
            return {...state, product: action.payload}
        case ADD_PRODUCT :
            return {...state, cards: [...state.cards, action.payload]}
        default:
            return state
    }
}