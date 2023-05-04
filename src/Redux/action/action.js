import axios from "axios";
import {ADD_PRODUCT, GET_PRODUCT} from "../Types";


export  const getProduct =()=>{
    return (dispatch)=>{
        axios('https://64357ec2537112453fd7f9f7.mockapi.io/users')
            .then(({data}) =>{
                dispatch({type: GET_PRODUCT,payload: data})
            })
    }
}
export const AddProduct =(value)=>{
    return (dispatch) =>{
        console.log(value)
        axios(`https://64357ec2537112453fd7f9f7.mockapi.io/users/${value.products}`)
            .then(({data}) =>{
                dispatch({type: ADD_PRODUCT, payload: data})

            })

    }
}