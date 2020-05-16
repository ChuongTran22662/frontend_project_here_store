import React, { Component } from 'react';
import './product-item.styles.css';
import { Link } from 'react-router-dom';

export default class ProductItem extends Component {
    render() {

        const { item } = this.props;

        return (
            <div className="product_item">
                <Link to="/cartitem-detail"><div className="product_item_img"  style={{ backgroundImage: `url(${item.imageurl})` }}></div></Link>
                <div className="product_item_title">
                    <div className="product_item_title_name">{item.name}</div>
                    <div className="product_item_title_price">{item.price} 000 VNĐ</div>
                </div>
            </div>
        );
    }
}
