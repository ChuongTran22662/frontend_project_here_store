import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import highlighttReducer from './highlight/highlight.reducer';
import cartCheckoutReducer from './cartcheckout/cartcheckout.reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    highlight: highlighttReducer,
    cartcheckout: cartCheckoutReducer
});

export default rootReducer;