import React, { Component } from 'react';
import './cart-checkout.styles.css';
import CartCheckoutItem from '../../components/cart-checkout-item/cart-checkout-item.component';

export default class CartCheckout extends Component {
    render() {
        return (
            <div className="cart-checkout_page">
                <div className="bgr_cart-checkout"></div>
                <div className="cart-checkout_page_container_main">
                    <div className="cart-checkout_page_title">GIỎ HÀNG</div>
                    <div className="cart-checkout_page_collection">
                        <div className="cart-checkout_page_item_title">
                            <div className="cart-checkout_page_item_title_img">Hình ảnh</div>
                            <div className="cart-checkout_page_item_title_name">Tên sản phẩm </div>
                            <div className="cart-checkout_page_item_title_price">Đơn giá</div>
                            <div className="cart-checkout_page_item_title_count">Số lượng</div>
                            <div className="cart-checkout_page_item_title_money">Thành tiền</div>
                            <div className="cart-checkout_page_item_title_delete">Xóa</div>
                        </div>
                        <div className="cart-checkout_page_item_item">
                            <CartCheckoutItem />
                            <CartCheckoutItem />
                            <CartCheckoutItem />
                        </div>
                        <div className="cart-checkout_page_caculator">
                            <div className="title_cart-checkout_price">
                                <div className="sum_title">Tổng tiền :</div>
                                <div className="sum_price">995,000 VND</div>
                            </div>
                            <div className="button_cart-checkout">
                                <button className="next_put_cart-checkout">Tiếp tục mua hàng</button>
                                <button className="put_cart-checkout">Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
