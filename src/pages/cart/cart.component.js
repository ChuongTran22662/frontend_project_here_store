import React from 'react';

import CartItem from '../cart-item/cart-item.component';
import {
    Route
} from "react-router-dom";

const CartPage = ({ match }) => {
    return (
        <div>
            <Route exact path={`${match.path}/:collectionId`} component={CartItem} />
        </div>
    )
}

export default CartPage;