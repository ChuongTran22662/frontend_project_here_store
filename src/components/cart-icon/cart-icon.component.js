import React, { Component } from 'react';
import './cart-icon.styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CartIcon extends Component {
    render() {

        const { cartCheckouts } = this.props;

        return (
            <Link className="logo_cart" to="/cart-checkout">
                <div className="cart_item">
                    <i className="fa fa-shopping-cart zxc"></i>
                </div>
                <div className="cart_title">
                    <span className="cart_count">{cartCheckouts.length}</span>
                </div>
            </Link>
        )
    }
}

const mapStateToProps = state => {

    return {
        cartCheckouts: state.cartcheckout.cartCheckouts
    }
}

export default connect(mapStateToProps, null)(CartIcon)
