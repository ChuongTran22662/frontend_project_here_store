import React, { Component } from 'react';
import './cart-item-detail.styles.css';
import CollectionCartItem from '../../components/collection-cart-item/collection-cart-item.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartDetail } from '../../redux/cart/cart.selector';

import { actFetchCartItemsRequest } from '../../redux/cart/cart.actions';

class CartItemDetail extends Component {

  componentWillMount() {
    this.props.actFetchCartItems();
  }

  render() {

    const { cartItems } = this.props;

    return (
      <div className="cartitem_detail_page">
        <div className="bgr_cart"></div>
        <div className="cartitem_detail_container">
          <div className="cartitem_detail_collection">
            <div className="cartitem_collection_main_title">
              <h2 className="cartitem_collection_main_title_text">DANH MỤC</h2>
            </div>
            <CollectionCartItem />
          </div>
          <div className="cartitem_detail_content">
            <div className="cartitem_detail_content_left">
              <div className="cartitem_detail_content_left_img" style={{ backgroundImage: `url(${cartItems.imageurl})` }}></div>
              <div className="cartitem_detail_content_left_item">
                <div className="cartitem_detail_content_left_img_item" style={{ backgroundImage: `url(${cartItems.imageurl})` }}></div>
                <div className="cartitem_detail_content_left_img_item" style={{ backgroundImage: `url(${cartItems.imageurl})` }}></div>
                <div className="cartitem_detail_content_left_img_item" style={{ backgroundImage: `url(${cartItems.imageurl})` }}></div>
              </div>
            </div>
            <div className="cartitem_detail_content_right">
              <div className="cartitem_detail_content_right_title">{cartItems.name}</div>
              <div className="cartitem_detail_content_right_des">
                Thương hiệu
                <span>Khác</span>
                <span>|</span>
                Mã span
                <span>21465385</span>
              </div>
              <div className="cartitem_detail_content_right_price">
                Giá :
                <span>{cartItems.price} 000 VNĐ</span>
              </div>
              <div className="cartitem_detail_content_right_color">
                <div className="cartitem_detail_content_right_color_title">Chọn màu sắc :</div>
                <div className="cartitem_detail_content_right_color_select">
                  <div className="color1"></div>
                  <div className="color2"></div>
                  <div className="color3"></div>
                  <div className="color4"></div>
                </div>
              </div>
              <div className="cartitem_detail_content_right_product">
                <div className="cartitem_detail_content_right_product_add">
                  <div className="cartitem_detail_content_right_product_add_title">Số lượng</div>
                  <div className="zzzzzz">
                    <div className="cartitem_detail_content_right_product_add_count">
                      <div className='arrow'>
                        &#10094;
                            </div>
                      4
                      <div className='arrow'>
                        &#10095;
                            </div>
                    </div>
                    <button className="cartitem_detail_content_right_product_add_btn">THÊM VÀO GIỎ HÀNG</button>
                    <div className="cartitem_detail_content_right_product_add_like">
                      <i className="fa fa-heart-o"></i>
                    </div>
                  </div>
                </div>
                <ul className="cartitem_detail_content_right_product_detail">
                  <li className="cartitem_detail_content_right_product_detail_detail">Địa chỉ mua hàng</li>
                  <li className="cartitem_detail_content_right_product_detail_detail">
                    <i className="fa fa-map-marker" />
                  Kho Tổng (Hết hàng)</li>
                  <li className="cartitem_detail_content_right_product_detail_detail">
                    <i className="fa fa-map-marker" />
                  Kho Tổng (Hết hàng)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, own) => {
  return {
    cartItems: selectCartDetail(own.match.params.cartDetailId)(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actFetchCartItems: () => {
      return dispatch(actFetchCartItemsRequest());
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartItemDetail));