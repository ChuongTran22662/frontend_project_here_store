import React, { Component } from 'react';
import './CartIcon.styles.css';

class CartIcon extends Component {
    render() {
        return (
            <div className="logo_cart">
                <div className="cart_item">
                    <i className="fa fa-shopping-cart"></i>
                </div>
                <div className="cart_title">
                    <span className="cart_count">2</span>
                </div>
            </div>
        )
    }
}

export default CartIcon
