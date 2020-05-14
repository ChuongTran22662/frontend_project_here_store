import React, { Component } from 'react';
import './highlights.styles.css';

export default class HighLights extends Component {
    render() {
        return (
            <div className="highlight_container">
                <div className="highlisht_title">
                    <h2 className="title">
                        <span>TIN NỔI BẬT</span>
                    </h2>
                </div>
                <div className="banner_hot">
                    <div className="item_banner"></div>
                    <div className="item_banner"></div>
                    <div className="item_banner"></div>
                    <div className="item_banner"></div>
                </div>
            </div>
        );
    }
}
