import React, { Component } from 'react';
import './cart-item.styles.css';
import ProductItem from '../../components/product-item/product-item.component';
import CollectionCartItem from '../../components/collection-cart-item/collection-cart-item.component';

export default class CartItem extends Component {
  render() {
    return (
      <div className="cartitem_page">
        <div className="bgr_cart"></div>
        <div className="cartitem_container">
          <div className="cartitem_collection">
            <div className="cartitem_collection_main_title">
              <h2 className="cartitem_collection_main_title_text">DANH MỤC</h2>
            </div>
            <CollectionCartItem />
          </div>
          <div className="cartitem_content">
            <div className="cartitem_content_title">
              <div className="cartitem_content_title_name">ÁO</div>
              <div className="cartitem_content_title_number">(373 sản phẩm)</div>
            </div>
            <div className="cartitem_content_content">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
