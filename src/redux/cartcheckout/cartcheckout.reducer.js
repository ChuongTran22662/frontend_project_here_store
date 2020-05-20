import CartCheckoutActionTypes from './cartcheckout.types';

var data = JSON.parse(localStorage.getItem('checkouts'))

const INITIAL_STATE = {
    cartCheckouts: data ? data : []
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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const cartCheckoutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartCheckoutActionTypes.ADD_TO_CART:
            var checkouts = addItemToCart(state.cartCheckouts, action.payload);
            localStorage.setItem('checkouts',JSON.stringify(checkouts))
            return {
                ...state,
                cartCheckouts: checkouts
            }
        case CartCheckoutActionTypes.CLEAR_ITEM_FROM_CART:
            var checkouts = state.cartCheckouts.filter(
                cartCheckout => cartCheckout.id !== action.payload.id
            )
            localStorage.setItem('checkouts',JSON.stringify(checkouts))
            return {
                ...state,
                cartCheckouts: checkouts
            }
        case CartCheckoutActionTypes.REMOVE_ITEM:
            var checkouts = removeItemFromCart(state.cartCheckouts, action.payload)
            localStorage.setItem('checkouts',JSON.stringify(checkouts))
            return {
                ...state,
                cartCheckouts: checkouts
            }
        default:
            return state;
    }
}

export default cartCheckoutReducer;