import axios from 'axios'
import * as action from '../constants/productConstant';

const url = "http://localhost:8000"

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/products`);
        dispatch({ type: action.GET_PRODUCT_SUCCESS, payload: data });
        //console.log(response);
    } catch (error) {
        dispatch({ type: action.GET_PRODUCT_FAIL, payload: error.response });
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/product/${id}`);
        console.log(data);
        dispatch({ type: action.GET_PRODUCT_DETAIL_SUCCESS, payload: data });
        //console.log(response);
    } catch (error) {
        dispatch({ type: action.GET_PRODUCT_DETAIL_FAIL, payload: error.response });
    }
}