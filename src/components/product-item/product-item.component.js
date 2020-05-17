import React, { Component } from 'react';
import './product-item.styles.css';
import { withRouter } from 'react-router-dom';
import {addToCart} from '../../redux/cartcheckout/cartcheckout.actions'
import { connect } from 'react-redux'

class ProductItem extends Component {
    render() {

        const { item, history, addItem } = this.props;

        return (
            <div className="product_item">
                <div className="product_item_cover">
                    <div className="product_item_img" style={{ backgroundImage: `url(${item.imageurl})` }} onClick={() => history.push(`/cart-detail/${item.id}`)}></div>
                    <button className="button_add_to_cart" onClick={() => addItem(item)}>
                        Add To Cart
                    </button>
                </div>
                <div className="product_item_title">
                    <div className="product_item_title_name">{item.name}</div>
                    <div className="product_item_title_price">{item.price} 000 VNĐ</div>
                </div>
            </div>
        );
    }
}

const mapDispatchToprops = dispatch => {
    return {
        addItem: item => dispatch(addToCart(item))
    }
}

export default withRouter(connect(null, mapDispatchToprops)(ProductItem));
