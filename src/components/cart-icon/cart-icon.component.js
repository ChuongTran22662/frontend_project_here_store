import React, { Component } from 'react';
import './cart-icon.styles.css';
import { Link } from 'react-router-dom';

class CartIcon extends Component {
    render() {
        return (
            <Link className="logo_cart" to="/cart-checkout">
                <div className="cart_item">
                    <i className="fa fa-shopping-cart zxc"></i>
                </div>
                <div className="cart_title">
                    <span className="cart_count">2</span>
                </div>
            </Link>
        )
    }
}

export default CartIcon
