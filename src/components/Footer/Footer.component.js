import React, { Component } from 'react';
import './footer.styles.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer_container">
                    <div className="footer_contact">
                        <div className="title_contact">LIÊN HỆ</div>
                        <ul className="link_contact">
                            <li className="link_contact_fa">
                                <i className="fa fa-facebook"></i>
                            </li>
                            <li className="link_contact_ins">
                                <i className="fa fa-instagram"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_system">
                        <div className="title_system">HỆ THỐNG IN HERE STORE</div>
                        <ul className="system_list">
                            <li className="system_list_item">102 Chùa Bộc </li>
                            <li className="system_list_item">268 Cầu Giấy</li>
                            <li className="system_list_item">208c Nguyễn Trãi</li>
                            <li className="system_list_item">Hotline : 093 605 45 85</li>
                        </ul>
                    </div>
                    <div className="footer_help">
                        <div className="title_help">HƯỚNG DẪN</div>
                        <ul className="help_list">
                            <li className="help_list_item">Trang chủ</li>
                            <li className="help_list_item">Xu hướng</li>
                            <li className="help_list_item">Tin Tức</li>
                            <li className="help_list_item">Sản Phẩm</li>
                            <li className="help_list_item">Khuyến Mại</li>
                        </ul>
                    </div>
                    <div className="footer_company">
                        <div className="title_company">FOLLOW FAN PAGE FACEBOOK</div>
                        <ul className="company_list">
                            <li className="company_list_item">Giới thiệu</li>
                            <li className="company_list_item">Tuyển dụng</li>
                            <li className="company_list_item">
                                <div className="company_list_item_confirm"></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_copyright">
                    <div className="footer_copyright_title">
                        Thiết kế website bởi <a href="https://github.com/ChuongTran22662">Chưởng</a>
                    </div>
                </div>
            </div>
        );
    }
}
