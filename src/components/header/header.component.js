import React from 'react';
import './header.styles.css';
import CartIcon from '../cart-icon/cart-icon.component';
import { Link } from 'react-router-dom';
import Search from '../search/search.component';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toggleSearch: false
        }
    }

    onClick = () => {
        this.setState({
            toggleSearch: !this.state.toggleSearch
        })
    }

    render() {

        return (
            <div className="header">
                <div className="header_container">
                    <Link className="logo_store" to="/"></Link>
                    <div className="header_link">
                        <ul className="menu_container">
                            <Link className="link" to="/">TRANG CHỦ</Link>
                            <Link className="link" to="/shop">SHOP</Link>
                        </ul>
                        <div className="header_right">
                            <div className="login_signin">
                                <Link className="login" to="/login">Đăng nhập</Link>
                                <Link className="signin" to="signin">Đăng ký</Link>
                            </div>
                            <div className="search_cart">
                                <div className="logo_search" onClick={() => this.onClick()}>
                                    <i className="fa fa-search"></i>
                                </div>
                                {
                                    this.state.toggleSearch ? <Search /> : ''
                                }
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