import CartCheckoutActionTypes from './cartcheckout.types';

export const addToCart = item => {
    return {
        type: CartCheckoutActionTypes.ADD_TO_CART,
        payload: item
    }
};

export const clearItemFromCart = item => {
    return {
        type: CartCheckoutActionTypes.CLEAR_ITEM_FROM_CART,
        payload: item
    }
};

export const removeItem = item => {
    return {
        type: CartCheckoutActionTypes.REMOVE_ITEM,
        payload: item
    }
}