import React, { Component } from 'react';
import './product-item.styles.css';
import { Link } from 'react-router-dom';

export default class ProductItem extends Component {
    render() {
        return (
            <div className="product_item">
                <Link to="/cartitem-detail"><div className="product_item_img" ></div></Link>
                <div className="product_item_title">
                    <div className="product_item_title_name">Áo pull trơn 22A90</div>
                    <div className="product_item_title_price">199,000 VNĐ</div>
                </div>
            </div>
        );
    }
}
