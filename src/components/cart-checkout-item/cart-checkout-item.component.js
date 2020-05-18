import React, { Component } from 'react';
import { connect } from 'react-redux';
import './cart-checkout-item.styles.css';
import { removeItem, clearItemFromCart, addToCart } from '../../redux/cartcheckout/cartcheckout.actions';

class CartCheckoutItem extends Component {
    render() {

        const { cartItem, removeItem, clearItem, addItem } = this.props;

        return (
            <div className="cart-checkout_page_item_item_cart-checkout">
                <div className="cart-checkout_page_item_item_cart-checkout_img" style={{ backgroundImage: `url(${cartItem.imageurl})` }}></div>
                <div className="cart-checkout_page_item_item_cart-checkout_name">{cartItem.name}</div>
                <div className="cart-checkout_page_item_item_cart-checkout_price">{cartItem.price} 000 VNĐ</div>
                <div className="cart-checkout_page_item_item_cart-checkout_count">
                    <div className="input_count_cart-checkout">
                        <div className="input_count_cart-checkout_value">
                            <div className='arrow' onClick={() => removeItem(cartItem)}>
                                &#10094;
                            </div>
                            {cartItem.quantity}
                            <div className='arrow' onClick={() => addItem(cartItem)}>
                                &#10095;
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-checkout_page_item_item_cart-checkout_money">{cartItem.price * cartItem.quantity}000 VNĐ</div>
                <div className="cart-checkout_page_item_item_cart-checkout_delete" onClick={() => clearItem(cartItem)}>Xóa</div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: item => dispatch(removeItem(item)),
        clearItem: item => dispatch(clearItemFromCart(item)),
        addItem: item => dispatch(addToCart(item))
    }
}

export default connect(null, mapDispatchToProps)(CartCheckoutItem)
