import React, { Component } from 'react';
import './Promo.styles.css';

export default class Promo extends Component {
    render() {
        return (
            <div className="promo">
                <div className="promo_container">
                    <div className="promo_item">
                        <div className="promo_icon">
                            <i className="fa fa-phone"></i>
                        </div>
                        <div className="promo_info">
                            <div className="promo_info_title">HOTLINE</div>
                            <div className="promo_info_number">032 891 5381</div>
                        </div>
                    </div>
                    <div className="promo_item">
                        <div className="promo_icon">
                            <i className="fa fa-truck"></i>
                        </div>
                        <div className="promo_info">
                            <div className="promo_info_title">CHÍNH SÁCH GIAO HÀNG</div>
                            <div className="promo_info_number">Ship COD Đồng giá 35K</div>
                        </div>
                    </div>
                    <div className="promo_item">
                        <div className="promo_icon">
                            <i className="fa fa-tags"></i>
                        </div>
                        <div className="promo_info">
                            <div className="promo_info_title">GIỜ MỞ CỬA</div>
                            <div className="promo_info_number">9h - 22h | T2 - CN</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
