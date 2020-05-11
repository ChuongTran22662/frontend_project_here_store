import React, { Component } from 'react';
import './SignIn.styles.css';

export default class SignIn extends Component {
    render() {
        return (
            <div className="signin_page">
                <div className="signin_page_container">
                    <div className="signin_page_container_main">
                        <div className="signin_page_title">ĐĂNG KÝ TÀI KHOẢN</div>
                        <form className="signin_page_form">
                            <div><input className="signin_input_item" placeholder="Họ và tên"></input></div>
                            <div><input className="signin_input_item" placeholder="Email"></input></div>
                            <div><input className="signin_input_item" placeholder="Mật khẩu"></input></div>
                            <div><input className="signin_input_item" placeholder="Điện thoại"></input></div>
                            <button className="signin_form_button">Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
