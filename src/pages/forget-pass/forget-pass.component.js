import React, { Component } from 'react';
import './forget-pass.styles.css';

export default class ForgetPass extends Component {
    render() {
        return (
            <div className="forget_page">
                <div className="forget_page_container">
                    <div className="forget_page_container_main">
                        <div className="forget_page_title">LẤY LẠI TÀI KHOẢN</div>
                        <div className="label_forget"><label>* Nhập địa chỉ email</label></div>
                        <form className="forget_pass_form">
                            <div><input className="input_forget_pass"></input></div>
                            <button className="button_forget_pass">XÁC NHẬN</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
