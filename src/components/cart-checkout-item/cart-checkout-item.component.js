import React, { Component } from 'react';
import './cart-checkout-item.styles.css';

export default class CartCheckoutItem extends Component {
    render() {
        return (
            <div className="cart-checkout_page_item_item_cart-checkout">
                <div className="cart-checkout_page_item_item_cart-checkout_img"></div>
                <div className="cart-checkout_page_item_item_cart-checkout_name">Balo da 20BL16 - Tím</div>
                <div className="cart-checkout_page_item_item_cart-checkout_price">199,000 VNĐ</div>
                <div className="cart-checkout_page_item_item_cart-checkout_count">
                    <div className="input_count_cart-checkout">
                        <div className="input_count_cart-checkout_value">2</div>
                    </div>
                </div>
                <div className="cart-checkout_page_item_item_cart-checkout_money">398,000 VNĐ</div>
                <div className="cart-checkout_page_item_item_cart-checkout_delete">Xóa</div>
            </div>
        );
    }
}
