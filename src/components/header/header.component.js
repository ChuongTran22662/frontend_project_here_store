import React from 'react';
import './header.styles.css';
import CartIcon from '../cart-icon/cart-icon.component';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header_container">
                    <Link className="logo_store" to="/"></Link>
                    <div className="header_link">
                        <ul className="menu_container">
                            <Link className="link" to="/">TRANG CHỦ</Link>
                            <Link className="link" to="/">QUẦN ÁO</Link>
                            <Link className="link" to="/">PHỤ KIỆN</Link>
                        </ul>
                        <div className="header_right">
                            <div className="login_signin">
                                <Link className="login" to="/login">Đăng nhập</Link>
                                <Link className="signin" to="signin">Đăng ký</Link>
                            </div>
                            <div className="search_cart">
                                <div className="logo_search">
                                    <i className="fa fa-search"></i>
                                </div>
                                <CartIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;