import React from 'react';
import './header.styles.css';
import CartIcon from '../CartIcon/CartIcon.component';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header_container">
                    <div className="logo_store"></div>
                    <div className="header_link">
                        <ul className="menu_container">
                            <li className="link">TRANG CHỦ</li>
                            <li className="link">QUẦN ÁO</li>
                            <li className="link">PHỤ KIỆN</li>
                        </ul>
                        <div className="header_right">
                            <div className="login_signin">
                                <div className="login">Đăng nhập</div>
                                <div className="signin">Đăng ký</div>
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