import React from 'react';

import {
    Route
} from "react-router-dom";
import CartItemDetail from '../cart-item-detail/cart-item-detail.component';

const CartDetail = ({ match }) => {

    return (
        <div>
            <Route exact path={`${match.path}/:cartDetailId`} component={CartItemDetail} />
        </div>
    )
}

export default CartDetail;