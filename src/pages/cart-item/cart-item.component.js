import React, { Component } from 'react';
import './cart-item.styles.css';
import ProductItem from '../../components/product-item/product-item.component';
import CollectionCartItem from '../../components/collection-cart-item/collection-cart-item.component';
import { selectCartCollections } from '../../redux/cart/cart.selector';
import { actFetchCartItemsRequest } from '../../redux/cart/cart.actions';

import { connect } from "react-redux";

class CartItem extends Component {

  componentWillMount() {
    this.props.actFetchCartItems();
  }

  render() {

    const { cartCollections } = this.props;

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
              {
                cartCollections ? (
                  cartCollections.map((item, index) => {
                    return <ProductItem key={index} item={item} />
                  })
                ) : ''
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToprops = (state, own) => {
  return {
    cartCollections: selectCartCollections(own.match.params.collectionId)(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actFetchCartItems: () => {
      return dispatch(actFetchCartItemsRequest());
    }
  }
}

export default connect(mapStateToprops, mapDispatchToProps)(CartItem);
