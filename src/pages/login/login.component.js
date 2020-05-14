import React, { Component } from 'react';
import './login.styles.css';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className="login_page">
                <div className="login_page_container_main">
                    <div className="login_form_page">
                        <h2 className="title_login_page">Đăng Nhập</h2>
                        <form className="login_form">
                            <div><input type="text" className="input_email" placeholder="Email"></input></div>
                            <div><input type="password" className="input_password" placeholder="Password"></input></div>
                            <button className="button_form">Đăng Nhập</button>
                        </form>
                        <Link to="/forgetpass" className="forget_password">
                            <i className="fa fa-question-circle"></i>
                            Quên mật khẩu</Link>
                        <div className="link_login">
                            <div className="link_login_fa">
                                <i className="fa fa-facebook"></i>
                                Facebook</div>
                            <div className="link_login_gg">
                                <i className="fa fa-google"></i>
                                Google</div>
                        </div>
                    </div>
                    <div className="login_not_account">
                        <div className="login_not_account_title">Bạn chưa có tài khoản</div>
                        <div className="login_not_account_content">Đăng ký tài khoản ngay để có thể mua hàng nhanh chóng và dễ dàng hơn ! Ngoài ra còn có rất nhiều chính sách và ưu đãi cho các thành viên</div>
                        <Link to="/signin"><button className="login_not_account_button">Đăng Ký</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}
