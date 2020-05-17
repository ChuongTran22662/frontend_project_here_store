import CartCheckoutActionTypes from './cartcheckout.types';

export const addToCart = item => {
    return {
        type: CartCheckoutActionTypes.ADD_TO_CART,
        payload: item
    }
};