import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.FETCH_CART_ITEEMS:
            state.cartItems = action.payload
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default cartReducer;