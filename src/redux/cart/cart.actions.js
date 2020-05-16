import CartActionTypes from './cart.types';
import callApi from '../utils/apiCaller';

export const actFetchCartItemsRequest = () => {
    return (dispatch) => {
        return callApi('http://localhost:4000/getcartitems', 'GET', null).then(res => {
            dispatch(actFetchCartItems(res.data))
        })
    }
}

export const actFetchCartItems = items => {
    return {
        type: CartActionTypes.FETCH_CART_ITEEMS,
        payload: items
    }
};

export const actFetchItemsRequest = () => {
    return (dispatch) => {
        return callApi('http://localhost:4000/getitems', 'GET', null).then(res => {
            dispatch(actFetchCartItems(res.data))
        })
    }
}

export const actFetchItems = items => {
    return {
        type: CartActionTypes.FETCH_ITEMS,
        payload: items
    }
};