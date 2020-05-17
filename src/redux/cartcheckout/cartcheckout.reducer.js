import CartCheckoutActionTypes from './cartcheckout.types';

const INITIAL_STATE = {
    cartCheckouts: []
};


export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => {
            return cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        })
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

const cartCheckoutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartCheckoutActionTypes.ADD_TO_CART:
            console.log(1)
            return {
                ...state,
                cartCheckouts: addItemToCart(state.cartCheckouts, action.payload)
            }
        default:
            return state;
    }
}

export default cartCheckoutReducer;