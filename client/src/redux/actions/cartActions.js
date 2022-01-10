import axios from 'axios'
import * as actionCart from '../constants/cartConstant';

const url = "http://localhost:8000"

export const addToCart=(id)=> async (dispatch) => {
    try{
const {data}=await axios.get(`${url}/product/${id}`);
dispatch({ type: actionCart.ADD_TO_CART, payload: data });
    }catch(error){
        console.log("Error while calling add to cart api");
    }
}

export const removeFromCart=(id) => async (dispatch) =>{
dispatch({ type: actionCart.REMOVE_FROM_CART, payload: id });
}