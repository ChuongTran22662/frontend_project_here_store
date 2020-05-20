import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './product-category.styles.css';

import { connect } from 'react-redux';

import ProductItem from '../product-item/product-item.component';
import { actFetchCartItemsRequest } from '../../redux/cart/cart.actions';

class ProductCategory extends Component {

  componentWillMount() {
    this.props.actFetchCartItems();
  }

  render() {

    const { cartItems, history } = this.props;

    return (
      <div>
        {
          cartItems.map((cartitem, index) => {

            return (
              <div className="product_container" key={index}>
                <div className="product_title">
                  <div className="product_name" onClick={() => history.push(`/cart/${cartitem.routename}`)}>{cartitem.title}</div>
                </div>
                <div className="productCategory">
                  <div className="productCategory_bor">
                    {
                      cartitem.items.map((i, index) => {
                        if (index < 4) {
                          return (
                            <ProductItem item={i} key={index} />
                          )
                        }
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actFetchCartItems: () => {
      return dispatch(actFetchCartItemsRequest());
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductCategory));