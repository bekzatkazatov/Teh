import axios from "axios";
import {ADD_PRODUCT, GET_PRODUCT} from "../Types";


export const getProduct = () => {
    return (dispatch) => {
        axios('https://64357ec2537112453fd7f9f7.mockapi.io/users')
            .then(({data}) => {
                dispatch({type: GET_PRODUCT, payload: data})
            })
    }
}
export const AddProduct = (product) => {
    return (dispatch) => {
        dispatch({type: ADD_PRODUCT, payload: product})
    }
}