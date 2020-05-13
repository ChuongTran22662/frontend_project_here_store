import React, { Component } from 'react';
import './Cart.styles.css';

export default class Cart extends Component {
    render() {
        return (
            <div className="cart_page">
                <div className="bgr_cart"></div>
                <div className="cart_page_container_main">
                    <div className="cart_page_title">GIỎ HÀNG</div>
                    <div className="cart_page_collection">
                        <div className="cart_page_item_title">
                            <div className="cart_page_item_title_img">Hình ảnh</div>
                            <div className="cart_page_item_title_name">Tên sản phẩm </div>
                            <div className="cart_page_item_title_price">Đơn giá</div>
                            <div className="cart_page_item_title_count">Số lượng</div>
                            <div className="cart_page_item_title_money">Thành tiền</div>
                            <div className="cart_page_item_title_delete">Xóa</div>
                        </div>
                        <div className="cart_page_item_item">
                            <div className="cart_page_item_item_cart">
                                <div className="cart_page_item_item_cart_img"></div>
                                <div className="cart_page_item_item_cart_name">Balo da 20BL16 - Tím</div>
                                <div className="cart_page_item_item_cart_price">199,000 VNĐ</div>
                                <div className="cart_page_item_item_cart_count">
                                    <div className="input_count_cart">
                                        <div className="input_count_cart_value">2</div>
                                    </div>
                                </div>
                                <div className="cart_page_item_item_cart_money">398,000 VNĐ</div>
                                <div className="cart_page_item_item_cart_delete">Xóa</div>
                            </div>
                            <div className="cart_page_item_item_cart">
                                <div className="cart_page_item_item_cart_img"></div>
                                <div className="cart_page_item_item_cart_name">Balo da 20BL16 - Tím</div>
                                <div className="cart_page_item_item_cart_price">199,000 VNĐ</div>
                                <div className="cart_page_item_item_cart_count">
                                    <div className="input_count_cart">
                                        <div className="input_count_cart_value">2</div>
                                    </div>
                                </div>
                                <div className="cart_page_item_item_cart_money">398,000 VNĐ</div>
                                <div className="cart_page_item_item_cart_delete">Xóa</div>
                            </div>
                        </div>
                        <div className="cart_page_caculator">
                            <div className="title_cart_price">
                                <div className="sum_title">Tổng tiền :</div>
                                <div className="sum_price">995,000 VND</div>
                            </div>
                            <div className="button_cart">
                                <button className="next_put_cart">Tiếp tục mua hàng</button>
                                <button className="put_cart">Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
